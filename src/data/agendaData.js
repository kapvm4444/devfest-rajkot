// Simplified Agenda Data - Clean structure with only title, description, and time
export const agendaData = [
  {
    id: 1,
    time: "8:45 AM - 9:30 AM",
    title: "Registration and Breakfast",
    description:
      "Get your entry ticket, canteen pass and enjoy a wonderful breakfast to start your DevFest journey.",
  },
  {
    id: 2,
    time: "9:30 AM - 9:45 AM",
    title: "Opening Keynote",
    description:
      "Welcome to DevFest 2025! Catch up on what's coming and let the DevFest experience begin.",
  },
  {
    id: 3,
    time: "9:45 AM - 10:20 AM",
    title: "Why Deno is the Way Forward for JavaScript Runtimes",
    description:
      "Explore the future of JavaScript runtimes and discover why Deno is revolutionizing backend development with modern features and security.",
  },
  {
    id: 4,
    time: "10:20 AM - 10:55 AM",
    title: "Harnessing the Power of TensorFlow on GKE Autopilot",
    description:
      "Learn how to deploy, scale, and manage TensorFlow models efficiently using Google Kubernetes Engine Autopilot for production workloads.",
  },
  {
    id: 5,
    time: "10:55 AM - 11:15 AM",
    title: "Coffee Break & Networking",
    description:
      "Take a refreshing break, grab some coffee, and connect with fellow developers and tech enthusiasts.",
  },
  {
    id: 6,
    time: "11:15 AM - 11:50 AM",
    title: "GitHub Actions: Automate Everything in Your Development Workflow",
    description:
      "Master the art of CI/CD with GitHub Actions. Learn to automate testing, deployment, and development workflows seamlessly.",
  },
  {
    id: 7,
    time: "12:00 PM - 1:30 PM",
    title: "Lunch Break",
    description:
      "Enjoy a delicious lunch break while networking with speakers, sponsors, and fellow attendees.",
  },
  {
    id: 8,
    time: "1:30 PM - 2:05 PM",
    title: "Mastering Flutter and Firebase with Multiple Flavors",
    description:
      "Advanced Flutter development techniques with Firebase integration, exploring app flavors and environment configurations.",
  },
  {
    id: 9,
    time: "2:05 PM - 2:50 PM",
    title:
      "Fueling Growth to MVP: A CEO's Guide to Strategic Software Development",
    description:
      "Strategic insights on building successful software products from concept to market, shared by industry leaders.",
  },
  {
    id: 10,
    time: "2:50 PM - 3:10 PM",
    title: "Introduction to Beckn Protocol",
    description:
      "A comprehensive overview of the Beckn Protocol and its applications in building interoperable digital commerce networks.",
  },
  {
    id: 11,
    time: "3:10 PM - 3:20 PM",
    title: "Afternoon Break",
    description:
      "Quick refreshment break to recharge for the final sessions of the day.",
  },
  {
    id: 12,
    time: "3:20 PM - 4:00 PM",
    title: "Closing Keynote & Announcements",
    description:
      "Reflect on the day's learnings, upcoming opportunities, and closing remarks from the GDG Rajkot team.",
  },
  {
    id: 13,
    time: "4:00 PM - 4:30 PM",
    title: "Speaker Meet & Greet",
    description:
      "Connect directly with our speakers, ask questions, and continue the conversations started during the talks.",
  },
];

// Color configuration for different event types
export const timelineColorConfig = {
  blue: {
    bg: "bg-blue-500",
    border: "border-blue-500",
    text: "text-blue-600",
    lightBg: "bg-blue-50",
    ring: "ring-blue-200",
  },
  green: {
    bg: "bg-green-500",
    border: "border-green-500",
    text: "text-green-600",
    lightBg: "bg-green-50",
    ring: "ring-green-200",
  },
  red: {
    bg: "bg-red-500",
    border: "border-red-500",
    text: "text-red-600",
    lightBg: "bg-red-50",
    ring: "ring-red-200",
  },
  yellow: {
    bg: "bg-yellow-500",
    border: "border-yellow-500",
    text: "text-yellow-600",
    lightBg: "bg-yellow-50",
    ring: "ring-yellow-200",
  },
};

// Event type configurations
export const eventTypeConfig = {
  event: { icon: "🎫", label: "Event" },
  keynote: { icon: "🎯", label: "Keynote" },
  talk: { icon: "💬", label: "Talk" },
  break: { icon: "☕", label: "Break" },
  networking: { icon: "🤝", label: "Networking" },
};
