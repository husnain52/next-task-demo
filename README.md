# NexTask - Project Management Demo

A comprehensive Next.js project management application demo featuring JWT authentication, API integration, and email templates. Built with React, Material-UI, and modern web technologies.

## 🚀 Features

- **JWT Authentication** - Secure user authentication and authorization
- **API Integration** - RESTful API support for data management
- **Email Templates** - Built-in email notification system
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Dark/Light Themes** - Toggle between elegant themes
- **Interactive Charts** - Data visualization with ApexCharts
- **Export Functionality** - PDF and CSV export capabilities
- **Task Management** - Complete project and task tracking
- **Team Collaboration** - User roles and permissions
- **Real-time Notifications** - Stay updated with project changes

## 🛠️ Tech Stack

- **Frontend**: React 18, Next.js
- **Styling**: Tailwind CSS, Material-UI
- **Charts**: ApexCharts
- **Icons**: Heroicons
- **Authentication**: JWT
- **Export**: react-csv, html2pdf
- **Fonts**: Poppins

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/next-task-demo.git
   cd next-task-demo
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment Setup**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your credentials
   ```

4. **Start development server**
   ```bash
   npm start
   # or
   yarn start
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔧 Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── header.js       # Navigation header
│   └── footer.js       # Footer component
├── containers/         # Page containers
│   ├── Homepage/       # Landing page
│   └── Documentation/  # Documentation page
├── styles/            # Global styles
│   └── globals.css    # Tailwind CSS imports
└── index.js          # App entry point
```

## 🔐 Authentication

The application includes JWT-based authentication with:
- User registration and login
- Protected routes
- Token management
- Session handling

## 📧 Email Templates

Built-in email notification system supports:
- Welcome emails
- Password reset
- Project notifications
- Task assignments
- Status updates

## 🎨 Customization

### Theme Configuration
Modify `tailwind.config.js` to customize:
- Colors
- Typography
- Spacing
- Breakpoints

### Component Styling
Update styles in `src/styles/globals.css` or component-specific CSS modules.

## 📱 Responsive Design

The application is fully responsive with:
- Mobile-first approach
- Tablet optimization
- Desktop layouts
- Touch-friendly interfaces

## 📊 Charts & Analytics

Integrated ApexCharts for:
- Project progress tracking
- Team performance metrics
- Resource utilization
- Timeline visualizations

## 📤 Export Features

- **PDF Export**: Generate professional reports
- **CSV Export**: Download data for analysis
- **Custom formats**: Extensible export system

## 🌐 Live Demo

- **Landing Page**: [https://next-task-seven-hazel.vercel.app](https://next-task-seven-hazel.vercel.app)
- **Dashboard**: [https://next-task-seven-hazel.vercel.app/login](https://next-task-seven-hazel.vercel.app/login)

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm run build
vercel --prod
```

### Netlify
```bash
npm run build
# Deploy the build folder
```

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 🔧 Environment Variables

Create a `.env.local` file:
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/database
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
SENDER_EMAIL=noreply@yourapp.com
```

### 📋 Environment Setup Guide

#### MongoDB Setup
1. **Create MongoDB Atlas Account**: Visit [MongoDB Atlas](https://www.mongodb.com/atlas)
2. **Create Cluster**: Set up a free cluster
3. **Get Connection String**: 
   - Click "Connect" → "Connect your application"
   - Copy the connection string
   - Replace `<password>` with your database password
   - Set as `MONGODB_URI`
4. **Database Name**: Choose any name for `DATABASE_NAME`

#### Cloudinary Setup (Image Storage)
1. **Create Account**: Visit [Cloudinary](https://cloudinary.com/)
2. **Get Credentials**: From dashboard copy:
   - Cloud Name → `CLOUDINARY_CLOUD_NAME`
   - API Key → `CLOUDINARY_API_KEY`
   - API Secret → `CLOUDINARY_API_SECRET`

#### JWT Secret
- **Generate Secret**: Use any random string (32+ characters)
- **Example**: `openssl rand -base64 32` or online generator

#### SMTP Email Setup
1. **Gmail Setup**:
   - Enable 2-factor authentication
   - Generate App Password: Google Account → Security → App passwords
   - Use App Password as `SMTP_PASS`
2. **Other Providers**: Update `SMTP_HOST` and `SMTP_PORT` accordingly

#### Base URL
- **Development**: `http://localhost:3000`
- **Production**: Your deployed domain

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support and questions:
- Create an issue on GitHub
- Contact: your-email@example.com
- Documentation: [View Docs](./src/containers/Documentation/index.jsx)

## 🙏 Acknowledgments

- [Create React App](https://create-react-app.dev/)
- [Material-UI](https://mui.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [ApexCharts](https://apexcharts.com/)
- [Heroicons](https://heroicons.com/)
