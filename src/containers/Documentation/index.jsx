import React from "react";
import Header from "../../components/header";

const Documentation = () => {
  return (
    <div className="text-gray-800 font-poppins">
      {/* Navbar */}
      <Header />

      {/* Main Content */}
      <main className=" my-8 px-4">
        {/* Introduction */}
        <section className="pt-16 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          <p>
            NexTask is the ideal choice for developers looking to build a
            project management application with a cutting-edge design and robust
            functionality. Whether you're creating an in-house tool for your
            team or a SaaS project for your clients, NexTask provides everything
            you need to get started quickly and efficiently.
          </p>
        </section>

        {/* Technologies Used */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Next.js</strong>: A React-based framework for server-side
              rendering and static site generation.
            </li>
            <li>
              <strong>React.js</strong>: A JavaScript library for building user
              interfaces.
            </li>
            <li>
              <strong>Material UI</strong>: A popular UI library for building
              modern and responsive designs.
            </li>
            <li>
              <strong>TypeScript</strong>: A strongly typed programming language
              that builds on JavaScript.
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
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
          <ol className="list-decimal pl-5 space-y-2">
            <li>
              <strong>Download the NexTask Package</strong>: Access your NexTask
              files from the provided link.
            </li>
            <li>
              <strong>Install Dependencies</strong>:
              <ul className="list-disc pl-5">
                <li>
                  Run{" "}
                  <code className="bg-gray-200 px-1 py-0.5 rounded">
                    npm install
                  </code>{" "}
                  or{" "}
                  <code className="bg-gray-200 px-1 py-0.5 rounded">
                    yarn install
                  </code>{" "}
                  to install all required dependencies.
                </li>
              </ul>
            </li>
            <li>
              <strong>Start the Development Server</strong>:
              <ul className="list-disc pl-5">
                <li>
                  Run{" "}
                  <code className="bg-gray-200 px-1 py-0.5 rounded">
                    npm run dev
                  </code>{" "}
                  or{" "}
                  <code className="bg-gray-200 px-1 py-0.5 rounded">
                    yarn dev
                  </code>{" "}
                  to start the application in development mode.
                </li>
              </ul>
            </li>
            <li>
              <strong>Build for Production</strong>:
              <ul className="list-disc pl-5">
                <li>
                  Run{" "}
                  <code className="bg-gray-200 px-1 py-0.5 rounded">
                    npm run build
                  </code>{" "}
                  or{" "}
                  <code className="bg-gray-200 px-1 py-0.5 rounded">
                    yarn build
                  </code>{" "}
                  to generate optimized production builds.
                </li>
              </ul>
            </li>
            <li>
              <strong>Deploy</strong>: Use platforms like Vercel, Netlify, or
              any Next.js-compatible hosting service to deploy your application.
            </li>
          </ol>
        </section>

        {/* Customization */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Customization</h2>
          <p>
            Tailor NexTask to meet your specific project requirements with ease.
            Here’s how you can customize the application:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Theme Customization</strong>: Modify the theme by editing
              the Tailwind CSS configuration file or integrating your custom CSS
              styles.
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Customize MUI components globally:{" "}
                  <code className="bg-gray-200 px-1 py-0.5 rounded">
                    src/theme/components
                  </code>
                </li>
                <li>
                  Customize initial theme:{" "}
                  <code className="bg-gray-200 px-1 py-0.5 rounded">
                    src/theme/index => initialTheme
                  </code>
                </li>
                <li>
                  Customize color palette:{" "}
                  <code className="bg-gray-200 px-1 py-0.5 rounded">
                    src/theme/palette
                  </code>
                </li>
              </ul>
            </li>
            <li>
              <strong>Adding a Logo</strong>: Update the logo in{" "}
              <code className="bg-gray-200 px-1 py-0.5 rounded">
                src/components/Logo
              </code>
              .
            </li>
            <li>
              <strong>API Integration</strong>: Connect NexTask to your backend
              APIs seamlessly.
            </li>
            <li>
              <strong>Chart Modifications</strong>: Customize charts using the{" "}
              <a
                href="https://apexcharts.com/docs/react-charts/"
                className="text-blue-500 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                ApexCharts documentation
              </a>
              .
            </li>
            <li>
              <strong>PDF/CSV Export</strong>: Update configurations for
              exporting in{" "}
              <a
                href="https://www.npmjs.com/package/react-csv"
                className="text-blue-500 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                react-csv
              </a>{" "}
              or{" "}
              <a
                href="https://www.npmjs.com/package/html2pdf.js/v/0.9.0"
                className="text-blue-500 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                html2pdf
              </a>
              .
            </li>
          </ul>
        </section>

        {/* What’s Included */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">What’s Included</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Full Next.js Source Code</strong>
            </li>
            <li>
              <strong>Detailed Documentation</strong>
            </li>
            <li>
              <strong>Free Updates</strong>
            </li>
            <li>
              <strong>Premium Customer Support</strong>
            </li>
          </ul>
        </section>

        {/* Changelog */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Changelog</h2>
          <p>
            Stay informed about all updates and improvements through our
            changelog.
          </p>
        </section>

        {/* Features */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Features</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Clean and modern design</li>
            <li>Feature-rich components</li>
            <li>Fully responsive</li>
            <li>Interactive charts</li>
            <li>Optimized performance</li>
          </ul>
        </section>

        {/* Live Preview */}
        <section className="mb-8 text-center">
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
        <section className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Need Help?</h2>
          <p>If you have questions, feel free to contact us.</p>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4 text-center">
        <p>&copy; 2024 NexTask. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Documentation;
