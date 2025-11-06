import React, { useState, useRef } from "react";
import { FiUpload, FiImage, FiDownload } from "react-icons/fi";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Badge1 from "../assets/badge-blue.png";
import Badge2 from "../assets/badge-green.png";
import Badge3 from "../assets/badge-red.png";
import Badge4 from "../assets/badge-yellow.png";

const TEMPLATES = [
  {
    id: "template1",
    name: "Tech Vibes",
    preview: Badge1,
    template: Badge1,
    bgColor: "bg-gradient-to-br from-[#4285f4] to-[#3367d6]",
  },
  {
    id: "template2",
    name: "Gearing Up",
    preview: Badge2,
    template: Badge2,
    bgColor: "bg-gradient-to-br from-[#34a853] to-[#2d8f3f]",
  },
  {
    id: "template3",
    name: "Connect",
    preview: Badge3,
    template: Badge3,
    bgColor: "bg-gradient-to-br from-[#ea4335] to-[#d33b2c]",
  },
  {
    id: "template4",
    name: "Developer",
    preview: Badge4,
    template: Badge4,
    bgColor: "bg-gradient-to-br from-[#fbbc04] to-[#f29900]",
  },
];

// Loading Skeleton Components
const SkeletonLoader = () => (
  <div className="animate-pulse">
    <div className="bg-gray-300 rounded-lg h-64 w-64 mx-auto mb-8"></div>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="bg-gray-300 rounded-xl h-20 w-full"></div>
      ))}
    </div>
    <div className="bg-gray-300 rounded-lg h-32 w-full mb-8"></div>
    <div className="bg-gray-300 rounded-lg h-12 w-full"></div>
  </div>
);

const LoadingSpinner = () => (
  <div className="flex items-center justify-center">
    <AiOutlineLoading3Quarters className="h-6 w-6 animate-spin text-gray-600" />
  </div>
);

const BadgeCreator = () => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [selectedTemplate, setSelectedTemplate] = useState(TEMPLATES[0]);
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const badgeRef = useRef(null);
  const fileInputRef = useRef(null);

  // Simulate loading time
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    handleFile(file);
  };

  const handleFile = async (file) => {
    if (file && file.type.startsWith("image/")) {
      setIsUploading(true);
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target.result);
        setIsUploading(false);
      };
      reader.onerror = () => {
        setIsUploading(false);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    handleFile(file);
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  const handleDownload = async () => {
    if (!badgeRef.current) return;

    setIsDownloading(true);

    try {
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");

      canvas.width = 1080;
      canvas.height = 1080;

      // Draw uploaded image if exists - fill entire canvas with no padding
      if (uploadedImage) {
        const userImage = new Image();
        userImage.crossOrigin = "anonymous";
        await new Promise((resolve, reject) => {
          userImage.onload = resolve;
          userImage.onerror = reject;
          userImage.src = uploadedImage;
        });

        // Fill entire canvas with the image (no padding)
        const scale = Math.max(
          canvas.width / userImage.width,
          canvas.height / userImage.height,
        );

        const scaledWidth = userImage.width * scale;
        const scaledHeight = userImage.height * scale;

        // Center the scaled image
        const x = (canvas.width - scaledWidth) / 2;
        const y = (canvas.height - scaledHeight) / 2;

        // For cropping: calculate source rectangle to maintain aspect ratio
        const sourceX = Math.max(0, (scaledWidth - canvas.width) / (2 * scale));
        const sourceY = Math.max(
          0,
          (scaledHeight - canvas.height) / (2 * scale),
        );
        const sourceWidth = Math.min(userImage.width, canvas.width / scale);
        const sourceHeight = Math.min(userImage.height, canvas.height / scale);

        // Draw the cropped and scaled image to fill entire canvas
        context.drawImage(
          userImage,
          sourceX,
          sourceY,
          sourceWidth,
          sourceHeight,
          0,
          0,
          canvas.width,
          canvas.height,
        );
      } else {
        // Draw white background if no image
        context.fillStyle = "white";
        context.fillRect(0, 0, canvas.width, canvas.height);
      }

      // Draw selected template overlay - maintain aspect ratio, no stretching
      const template = new Image();
      template.crossOrigin = "anonymous";
      await new Promise((resolve, reject) => {
        template.onload = resolve;
        template.onerror = reject;
        template.src = selectedTemplate.template;
      });

      // Calculate scale to fit template within canvas while maintaining aspect ratio
      const templateScale = Math.min(
        canvas.width / template.width,
        canvas.height / template.height,
      );

      const templateWidth = template.width * templateScale;
      const templateHeight = template.height * templateScale;

      // Center the template overlay
      const templateX = (canvas.width - templateWidth) / 2;
      const templateY = (canvas.height - templateHeight) / 2;

      context.drawImage(
        template,
        templateX,
        templateY,
        templateWidth,
        templateHeight,
      );

      // Download the final canvas
      canvas.toBlob((blob) => {
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = `devfest-badge-${selectedTemplate.id}.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
      }, "image/png");
    } catch (error) {
      console.error("Error generating badge:", error);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#1e1e1e] py-8 md:py-12">
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 font-google-sans">
            Badge Creator
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-google-sans">
            Create your personalized DevFest 2025 badge
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-[#f0f0f0] rounded-2xl p-6 md:p-8 shadow-lg border border-gray-200">
            {isLoading ? (
              <SkeletonLoader />
            ) : (
              <>
                {/* Main Badge Preview */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 text-center font-google-sans">
                    Preview
                  </h3>
                  <div
                    ref={badgeRef}
                    className="w-64 h-64 mx-auto relative rounded-lg overflow-hidden bg-gray-50 shadow-inner"
                  >
                    {isUploading ? (
                      <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                        <div className="text-center">
                          <LoadingSpinner />
                          <p className="text-sm font-google-sans text-gray-600 mt-2">
                            Uploading...
                          </p>
                        </div>
                      </div>
                    ) : uploadedImage ? (
                      <div className="absolute inset-2">
                        <img
                          src={uploadedImage}
                          alt="Uploaded"
                          className="w-full h-full object-cover rounded-md"
                          crossOrigin="anonymous"
                        />
                      </div>
                    ) : (
                      <div className="absolute inset-0 bg-gray-100 flex items-center justify-center text-gray-400">
                        <div className="text-center">
                          <FiImage className="mx-auto mb-2" size={48} />
                          <p className="text-sm font-google-sans">
                            Upload an image to preview
                          </p>
                        </div>
                      </div>
                    )}

                    <div className="absolute inset-0 pointer-events-none p-4">
                      <img
                        src={selectedTemplate.template}
                        alt="Badge Template"
                        className="w-full h-full object-contain"
                        crossOrigin="anonymous"
                      />
                    </div>
                  </div>
                </div>

                {/* Template Selection */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 text-center font-google-sans">
                    Choose Template
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {TEMPLATES.map((template) => (
                      <button
                        key={template.id}
                        onClick={() => setSelectedTemplate(template)}
                        className={`relative rounded-xl overflow-hidden transition-all duration-300 ${
                          selectedTemplate.id === template.id
                            ? "ring-4 ring-[#4285f4] ring-offset-2 scale-105"
                            : "hover:ring-2 hover:ring-gray-300 hover:ring-offset-2 hover:scale-102"
                        }`}
                      >
                        <div
                          className={`aspect-square ${template.bgColor} p-4 flex items-center justify-center`}
                        >
                          <img
                            src={template.preview}
                            alt={template.name}
                            className="w-full h-full object-contain"
                            crossOrigin="anonymous"
                          />
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 text-white p-2">
                          <p className="text-xs font-medium text-center font-google-sans">
                            {template.name}
                          </p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Upload Section */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 text-center font-google-sans">
                    Upload Your Photo
                  </h3>
                  <div
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    onClick={triggerFileInput}
                    className={`w-full border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-all ${
                      isDragging
                        ? "border-[#4285f4] bg-blue-50"
                        : "border-gray-400 hover:border-[#4285f4] hover:bg-gray-50"
                    }`}
                  >
                    {isUploading ? (
                      <LoadingSpinner />
                    ) : (
                      <FiUpload className="mx-auto h-12 w-12 text-gray-500 mb-4" />
                    )}
                    <p className="text-lg font-medium text-gray-700 mb-2 font-google-sans">
                      {isUploading
                        ? "Uploading..."
                        : "Click to upload or drag and drop"}
                    </p>
                    <p className="text-sm text-gray-500 font-google-sans">
                      PNG, JPG, GIF up to 10MB
                    </p>

                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                      disabled={isUploading}
                    />
                  </div>
                </div>

                {/* Download Button */}
                <button
                  onClick={handleDownload}
                  disabled={!uploadedImage || isDownloading}
                  className="w-full bg-black hover:bg-gray-800 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-bold py-4 px-6 rounded-lg transition-all font-google-sans text-lg flex items-center justify-center gap-2"
                >
                  {isDownloading ? (
                    <>
                      <LoadingSpinner />
                      Generating Badge...
                    </>
                  ) : (
                    <>
                      <FiDownload size={20} />
                      Download Your Badge
                    </>
                  )}
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BadgeCreator;
