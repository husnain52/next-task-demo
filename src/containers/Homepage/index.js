import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import {
  AdjustmentsIcon,
  ClipboardCheckIcon,
  ChartBarIcon,
  UsersIcon,
  DocumentReportIcon,
  DeviceMobileIcon,
  MoonIcon,
  TemplateIcon,
  CalendarIcon,
  BellIcon,
  ArrowsExpandIcon,
  UserCircleIcon,
  DocumentDownloadIcon,
} from "@heroicons/react/outline";

const pages = [
  { id: 1, src: "dashboard.png", alt: "dashboard", title: "Dashboard" },
  { id: 2, src: "tasks.png", alt: "tasks", title: "Tasks" },
  { id: 3, src: "projects.png", alt: "projects", title: "Projects" },
  {
    id: 4,
    src: "project-details.png",
    alt: "project-details",
    title: "Project Details",
  },
  { id: 5, src: "invoices.png", alt: "invoices", title: "Invoices" },
  { id: 6, src: "contracts.png", alt: "contracts", title: "Contracts" },
  { id: 7, src: "resources.png", alt: "resources", title: "Resources" },
  { id: 8, src: "reports.png", alt: "reports", title: "Reports" },
  {
    id: 9,
    src: "notifications.png",
    alt: "notifications",
    title: "Notifications",
  },
  { id: 10, src: "clients.png", alt: "clients", title: "Clients" },
  { id: 11, src: "roles.png", alt: "roles", title: "Roles" },
  { id: 13, src: "settings.png", alt: "settings", title: "Settings" },
];

const technologies = [
  { title: "React.js", src: "react.png" },
  { title: "Next.js", src: "next.png" },
  { title: "TypeScript", src: "ts.png" },
  { title: "Material UI", src: "mui.png" },
  { title: "Styled Components", src: "sc.png" },
  { title: "ApexCharts", src: "apex.png" },
  { title: "react-csv", src: "csv.png" },
  { title: "html2pdf", src: "pdf.png" },
];

const cards = [
  {
    id: 1,
    icon: <AdjustmentsIcon className="h-8 w-8 text-blue-600" />,
    title: "Customizable Components",
    description:
      "Easily adapt the UI kit to fit your project management needs.",
  },
  {
    id: 2,
    icon: <ClipboardCheckIcon className="h-8 w-8 text-blue-600" />,
    title: "Task Management",
    description:
      "Create, assign, and track tasks seamlessly within your projects.",
  },
  {
    id: 3,
    icon: <ChartBarIcon className="h-8 w-8 text-blue-600" />,
    title: "Gantt Charts",
    description:
      "Visualize project timelines and dependencies with interactive Gantt charts.",
  },
  {
    id: 4,
    icon: <UsersIcon className="h-8 w-8 text-blue-600" />,
    title: "Team Collaboration",
    description:
      "Foster teamwork with tools for real-time collaboration and updates.",
  },
  {
    id: 5,
    icon: <DocumentReportIcon className="h-8 w-8 text-blue-600" />,
    title: "Advanced Reporting",
    description:
      "Generate detailed reports to monitor progress and improve decision-making.",
  },
  {
    id: 6,
    icon: <DeviceMobileIcon className="h-8 w-8 text-blue-600" />,
    title: "Responsive Design",
    description: "Ensure your project management UI looks great on any device.",
  },
  {
    id: 7,
    icon: <MoonIcon className="h-8 w-8 text-blue-600" />,
    title: "Dark & Light Themes",
    description:
      "Switch between elegant dark and light themes to suit your style.",
  },
  {
    id: 8,
    icon: <TemplateIcon className="h-8 w-8 text-blue-600" />,
    title: "Pre-Built Layouts",
    description:
      "Quickly get started with pre-designed layouts for dashboards and pages.",
  },
  {
    id: 9,
    icon: <CalendarIcon className="h-8 w-8 text-blue-600" />,
    title: "Calendar Integration",
    description:
      "Keep track of important dates with built-in calendar components.",
  },
  {
    id: 10,
    icon: <BellIcon className="h-8 w-8 text-blue-600" />,
    title: "Notifications System",
    description:
      "Stay updated with a robust notifications feature for alerts and reminders.",
  },
  {
    id: 11,
    icon: <ArrowsExpandIcon className="h-8 w-8 text-blue-600" />,
    title: "Drag-and-Drop Features",
    description:
      "Reorganize tasks, boards, or widgets with easy drag-and-drop interactions.",
  },
  {
    id: 12,
    icon: <UserCircleIcon className="h-8 w-8 text-blue-600" />,
    title: "User Profiles",
    description:
      "Manage team members with customizable user profile components.",
  },
  {
    id: 13,
    icon: <DocumentDownloadIcon className="h-8 w-8 text-blue-600" />,
    title: "PDF Export",
    description:
      "Easily export project data and reports as professional PDF documents.",
  },
  {
    id: 14,
    icon: <DocumentDownloadIcon className="h-8 w-8 text-blue-600" />,
    title: "CSV Export",
    description:
      "Download your project data in CSV format for external analysis or sharing.",
  },
];

const HomeLandingPage = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Navbar */}
      <Header />
      {/* Hero Section */}
      <section className="h-screen bg-white overflow-hidden">
        <div className="container mx-auto grid sm:grid-cols-1 xs:grid-cols-1 md:grid-cols-2  gap-4 h-full">
          <div className="flex flex-col justify-center h-full pl-6">
            <h1 className="text-4xl md:text-6xl font-black mb-6">
              Project Management UI Kit Based on{" "}
              <span className="text-blue-900">Material-UI</span>
            </h1>
            <p className="text-sm md:text-sm mb-8">
              NexTask is a comprehensive and multipurpose UI Kit designed
              specifically for Project Management applications. It includes a
              wide range of reusable elements, components, layouts, forms,
              dashboards, and web app modules to streamline your development
              process. Whether you're building task boards, analytics
              dashboards, or collaborative tools, NexTask provides everything
              you need to create a modern and efficient Project Management
              application.
            </p>
            <div>
              <a href="#demo">
                <button className="bg-blue-900 hover:bg-blue-800 p-2 px-5 text-white text-md rounded-xl font-bold">
                  View Demos
                </button>
              </a>
              <a href="#features">
                <button className="bg-gray-700 hover:bg-gray-600 p-2 px-5 text-white text-md rounded-xl font-bold ml-3">
                  Key Features
                </button>
              </a>
            </div>
            <div className="my-4 flex gap-2">
              <div className="p-2 rounded-full">
                <img src="react.png" alt="react" className="h-12 rounded-lg" />
              </div>
              <div className="p-2 rounded-full">
                <img src="next.png" alt="next" className="h-12 rounded-lg" />
              </div>
              <div className="p-2 rounded-full">
                <img src="ts.png" alt="ts" className="h-12 rounded-lg" />
              </div>
              <div className="p-2 rounded-full">
                <img src="mui.png" alt="react" className="h-12 rounded-lg" />
              </div>
            </div>
          </div>
          <div className="h-full bg-blue-900 clip-right-tilt hidden md:block">
            <div className="text-center">
              <img src="dashboard.png" alt="dashboard" />
              <img src="dashboard-dark.png" alt="dashboard" />
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="p-6 py-24">
        <h2 className="text-3xl font-bold mb-24 text-center">Explore Demos</h2>
        <div className="grid md:grid-cols-2 gap-8 text-center">
          <div>
            <div className="bg-white shadow-2xl p-6 rounded-xl">
              <div className="flex flex-col md:flex-row w-full">
                <img
                  src="landing.png"
                  alt="landing"
                  className="w-1/2 rounded-xl border mx-auto mb-6"
                />
                <div className="ml-6">
                  <h2 className="text-2xl font-bold mb-2">Landing Page</h2>
                  <p className="text-sm">
                    Discover the beautifully designed landing page for the
                    application.
                  </p>
                  <a
                    href="https://next-task-seven-hazel.vercel.app"
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 font-semibold hover:underline mt-10"
                  >
                    <button className="bg-gray-900 hover:bg-gray-800 p-2 px-5 text-white text-md rounded-xl font-bold mt-6">
                      View Demo
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-white shadow-2xl p-6 rounded-xl">
              <div className="flex flex-col md:flex-row w-full">
                <img
                  src="dashboard.png"
                  alt="dashboard"
                  className="w-1/2 rounded-xl border mx-auto mb-6"
                />
                <div className="ml-6">
                  <h2 className="text-2xl font-bold mb-2">Dashboard</h2>
                  <p className="text-sm">
                    Experience the stunningly designed dashboard of the
                    application.
                  </p>
                  <a
                    href="https://next-task-seven-hazel.vercel.app/login"
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 font-semibold hover:underline mt-10"
                  >
                    <button className="bg-gray-900 hover:bg-gray-800 p-2 px-5 text-white text-md rounded-xl font-bold mt-6">
                      View Demo
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="p-6 pb-24">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-24 text-center">Key Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {cards.map((card) => (
              <div
                key={card.id}
                className="bg-white p-6 rounded-lg border shadow-lg"
              >
                <div className="mb-4 bg-gray-100 p-2 w-max rounded-lg border">
                  {card.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-800">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-sm mt-2">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pages Section */}
      <section id="pages" className="p-6 py-24">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10 text-black">Pages</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {pages.map((item) => (
              <div key={item.id}>
                <div className="bg-white border p-1 rounded-lg hover:shadow-2xl">
                  <img src={item.src} alt={item.alt} />
                </div>
                <div className="mt-2">{item.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section id="technologies" className="p-6 py-24">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">Technologies</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {technologies.map((item) => (
              <div
                key={item.title}
                className="bg-white border hover:shadow-xl p-6 rounded-lg"
              >
                <div className="flex justify-center">
                  <img src={item.src} alt={item.title} className="h-32" />
                </div>
                <h3 className="text-xl font-semibold my-2">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomeLandingPage;
