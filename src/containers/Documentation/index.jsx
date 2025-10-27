import React, { useEffect, useState } from "react";
import Header from "../../components/header";

const Documentation = () => {
  const [activeSection, setActiveSection] = useState('introduction');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['introduction', 'technologies', 'getting-started', 'environment', 'email-templates', 'customization', 'whats-included', 'features', 'changelog', 'live-preview', 'support'];
      const scrollPosition = window.scrollY + 100;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const updateActiveLinks = () => {
      document.querySelectorAll('.nav-link').forEach(link => {
        const href = link.getAttribute('href')?.substring(1);
        if (href === activeSection) {
          link.classList.add('bg-blue-100', 'text-blue-700', 'border-blue-500');
          link.classList.remove('border-transparent');
        } else {
          link.classList.remove('bg-blue-100', 'text-blue-700', 'border-blue-500');
          link.classList.add('border-transparent');
        }
      });
    };
    updateActiveLinks();
  }, [activeSection]);
  return (
    <div className="text-gray-800 font-poppins">
      {/* Navbar */}
      <Header />

      {/* Main Content */}
      <main className="my-8 px-4 flex gap-8">
        {/* Sidebar */}
        <aside className="w-72 fixed top-20 left-4 h-[calc(100vh-5rem)] overflow-y-auto hidden lg:block z-40">
          <nav className="bg-gradient-to-b from-white to-gray-50 border border-gray-200 rounded-xl shadow-xl p-6">
            <div className="mb-6">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Documentation</h3>
              <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            </div>
            <ul className="space-y-1">
              <li><a href="#introduction" className="nav-link block px-4 py-3 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-all duration-200 font-medium border-l-4 border-transparent hover:border-blue-500">📖 Introduction</a></li>
              <li><a href="#technologies" className="nav-link block px-4 py-3 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-all duration-200 font-medium border-l-4 border-transparent hover:border-blue-500">⚡ Technologies</a></li>
              <li><a href="#getting-started" className="nav-link block px-4 py-3 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-all duration-200 font-medium border-l-4 border-transparent hover:border-blue-500">🚀 Getting Started</a></li>
              <li><a href="#environment" className="nav-link block px-4 py-3 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-all duration-200 font-medium border-l-4 border-transparent hover:border-blue-500">⚙️ Environment</a></li>
              <li><a href="#email-templates" className="nav-link block px-4 py-3 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-all duration-200 font-medium border-l-4 border-transparent hover:border-blue-500">📧 Email Templates</a></li>
              <li><a href="#customization" className="nav-link block px-4 py-3 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-all duration-200 font-medium border-l-4 border-transparent hover:border-blue-500">🎨 Customization</a></li>
              <li><a href="#whats-included" className="nav-link block px-4 py-3 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-all duration-200 font-medium border-l-4 border-transparent hover:border-blue-500">📦 What's Included</a></li>
              <li><a href="#features" className="nav-link block px-4 py-3 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-all duration-200 font-medium border-l-4 border-transparent hover:border-blue-500">✨ Features</a></li>
              <li><a href="#changelog" className="nav-link block px-4 py-3 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-all duration-200 font-medium border-l-4 border-transparent hover:border-blue-500">📝 Changelog</a></li>
              <li><a href="#live-preview" className="nav-link block px-4 py-3 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-all duration-200 font-medium border-l-4 border-transparent hover:border-blue-500">👀 Live Preview</a></li>
              <li><a href="#support" className="nav-link block px-4 py-3 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-all duration-200 font-medium border-l-4 border-transparent hover:border-blue-500">🆘 Support</a></li>
            </ul>
          </nav>
        </aside>

        {/* Content */}
        <div className="flex-1 max-w-4xl ml-80">
        {/* Introduction */}
        <section id="introduction" className="pt-16 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          <p className="mb-4">
            NexTask is a comprehensive project management demo application
            featuring JWT authentication, API integration, and email templates.
            Built with modern React technologies, it provides a complete
            foundation for building scalable project management solutions.
          </p>
          <p>
            Whether you're creating an in-house tool for your team or a SaaS
            project for your clients, NexTask includes all the essential
            features: secure user authentication, real-time API connectivity,
            automated email notifications, and a beautiful responsive interface.
            Get started quickly with our pre-built components and comprehensive
            documentation.
          </p>
        </section>

        {/* Technologies Used */}
        <section id="technologies" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>React.js</strong>: A JavaScript library for building user
              interfaces.
            </li>
            <li>
              <strong>Next.js</strong>: A React-based framework for server-side
              rendering and static site generation.
            </li>
            <li>
              <strong>Material UI</strong>: A popular UI library for building
              modern and responsive designs.
            </li>
            <li>
              <strong>Tailwind CSS</strong>: A utility-first CSS framework for
              rapid UI development.
            </li>
            <li>
              <strong>JWT Authentication</strong>: Secure token-based
              authentication system for user management.
            </li>
            <li>
              <strong>RESTful APIs</strong>: Backend integration for data
              management and real-time updates.
            </li>
            <li>
              <strong>Email Templates</strong>: Built-in email notification
              system for user communications.
            </li>
            <li>
              <strong>ApexCharts</strong>: A modern charting library for
              creating interactive visualizations.
            </li>
            <li>
              <strong>react-csv</strong>: A lightweight library for exporting
              CSV files.
            </li>
            <li>
              <strong>html2pdf</strong>: A library to convert HTML content into
              PDF documents.
            </li>
          </ul>
        </section>

        {/* Getting Started */}
        <section id="getting-started" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
          <ol className="list-decimal pl-5 space-y-2">
            <li>
              <strong>Install Dependencies</strong>:
              <pre className="bg-gray-100 p-2 rounded mt-1 text-sm">
                npm install # or yarn install
              </pre>
            </li>
            <li>
              <strong>Environment Setup</strong>:
              <pre className="bg-gray-100 p-2 rounded mt-1 text-sm">
                cp .env.example .env.local # Edit .env.local with your
                credentials
              </pre>
            </li>
            <li>
              <strong>Start Development Server</strong>:
              <pre className="bg-gray-100 p-2 rounded mt-1 text-sm">
                npm start # or yarn start
              </pre>
            </li>
            <li>
              <strong>Build for Production</strong>:
              <pre className="bg-gray-100 p-2 rounded mt-1 text-sm">
                npm run build # or yarn build
              </pre>
            </li>
          </ol>
        </section>

        {/* Environment Setup */}
        <section id="environment" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Environment Setup</h2>
          <p className="mb-4">Required environment variables:</p>
          <pre className="bg-gray-100 p-3 rounded text-sm mb-4">
            {`MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/database
DATABASE_NAME=nextask_db
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
JWT_SECRET=your_super_secret_jwt_key
NEXT_PUBLIC_BASE_URL=http://localhost:3000
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password
SENDER_EMAIL=noreply@yourapp.com`}
          </pre>

          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">MongoDB Atlas</h3>
              <ol className="list-decimal pl-5 text-sm space-y-1">
                <li>
                  Create account at{" "}
                  <a
                    href="https://www.mongodb.com/atlas"
                    className="text-blue-500"
                  >
                    MongoDB Atlas
                  </a>
                </li>
                <li>Create free cluster and get connection string</li>
                <li>Replace password in connection string</li>
              </ol>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Cloudinary</h3>
              <ol className="list-decimal pl-5 text-sm space-y-1">
                <li>
                  Sign up at{" "}
                  <a href="https://cloudinary.com" className="text-blue-500">
                    Cloudinary
                  </a>
                </li>
                <li>Copy Cloud Name, API Key, and API Secret from dashboard</li>
              </ol>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Gmail SMTP</h3>
              <ol className="list-decimal pl-5 text-sm space-y-1">
                <li>Enable 2-factor authentication on Gmail</li>
                <li>Generate App Password in Google Account settings</li>
                <li>Use App Password as SMTP_PASS</li>
              </ol>
            </div>
          </div>
        </section>

        {/* Email Templates */}
        <section id="email-templates" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Email Templates</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Welcome Emails</strong>: User registration confirmation
            </li>
            <li>
              <strong>Password Reset</strong>: Secure recovery process
            </li>
            <li>
              <strong>Project Notifications</strong>: Status updates and
              milestones
            </li>
            <li>
              <strong>Task Assignments</strong>: Automatic notifications
            </li>
            <li>
              <strong>Custom Templates</strong>: Create in{" "}
              <code className="bg-gray-200 px-1 py-0.5 rounded">
                src/templates/email/
              </code>
            </li>
          </ul>
        </section>

        {/* Customization */}
        <section id="customization" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Customization</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Theme</strong>: Edit{" "}
              <code className="bg-gray-200 px-1 py-0.5 rounded">theme.ts</code>
            </li>
            <li>
              <strong>Styles</strong>: Update{" "}
              <code className="bg-gray-200 px-1 py-0.5 rounded">
                src/styles/globals.css
              </code>
            </li>
            <li>
              <strong>Components</strong>: Modify in{" "}
              <code className="bg-gray-200 px-1 py-0.5 rounded">
                src/components/
              </code>
            </li>
            <li>
              <strong>Charts</strong>: Use{" "}
              <a
                href="https://apexcharts.com/docs/react-charts/"
                className="text-blue-500 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                ApexCharts docs
              </a>
            </li>
          </ul>
        </section>

        {/* What's Included */}
        <section id="whats-included" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">What's Included</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Full React Source Code</strong> - Complete application
            </li>
            <li>
              <strong>JWT Authentication</strong> - Ready-to-use auth system
            </li>
            <li>
              <strong>API Integration</strong> - Service layer for backend
            </li>
            <li>
              <strong>Email Templates</strong> - Notification system
            </li>
            <li>
              <strong>UI Components</strong> - Material-UI
            </li>
            <li>
              <strong>Interactive Charts</strong> - ApexCharts integration
            </li>
            <li>
              <strong>Export Features</strong> - PDF and CSV functionality
            </li>
            <li>
              <strong>Documentation</strong> - Setup and customization guides
            </li>
          </ul>
        </section>

        {/* Features */}
        <section id="features" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Features</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>JWT Authentication</strong> - Secure user management
            </li>
            <li>
              <strong>API Integration</strong> - Backend connectivity
            </li>
            <li>
              <strong>Email Templates</strong> - Automated notifications
            </li>
            <li>
              <strong>Responsive Design</strong> - Mobile-first approach
            </li>
            <li>
              <strong>Interactive Charts</strong> - Data visualization
            </li>
            <li>
              <strong>Dark/Light Themes</strong> - Theme switching
            </li>
            <li>
              <strong>Export Functions</strong> - PDF and CSV downloads
            </li>
            <li>
              <strong>Real-time Updates</strong> - Live notifications
            </li>
            <li>
              <strong>Role Management</strong> - User permissions
            </li>
            <li>
              <strong>Modern UI</strong> - Clean and professional design
            </li>
          </ul>
        </section>

        {/* Changelog */}
        <section id="changelog" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Changelog</h2>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">v2.0.0 - Latest</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Added JWT authentication system</li>
              <li>Integrated RESTful API support</li>
              <li>Built-in email template system</li>
              <li>Enhanced security features</li>
              <li>Improved responsive design</li>
            </ul>
          </div>
        </section>

        {/* Live Preview */}
        <section id="live-preview" className="mb-8 text-center">
          <h2 className="text-2xl font-semibold mb-4">Live Preview</h2>
          <p>
            Experience NexTask{" "}
            <a
              href="https://next-task-seven-hazel.vercel.app"
              className="text-blue-500 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
            .
          </p>
        </section>

        {/* Support */}
        <section id="support" className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Need Help?</h2>
          <p>
            If you have questions about JWT authentication, API integration, or
            email templates, feel free to contact us.
          </p>
        </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4 text-center">
        <p>&copy; 2024 NexTask. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Documentation;
