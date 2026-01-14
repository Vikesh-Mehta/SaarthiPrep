# 🎯 SaarthiPrep - AI-Powered Interview Preparation Platform

SaarthiPrep is a comprehensive interview preparation platform that helps job seekers ace their interviews through AI-powered mock interviews, progress tracking, and personalized feedback.

## ✨ Features

- **Dashboard**: Track your interview preparation progress with interactive visualizations
- **Mock Interviews**: Schedule and conduct AI-powered mock interviews
- **Practice Mode**: Access question banks, quizzes, and peer practice sessions
- **Resume Analysis**: Upload and get AI-powered resume scoring and role suggestions
- **Progress Tracking**: Monitor your readiness score and skill improvements
- **Interview History**: Review past interviews with detailed analytics

## 🛠️ Tech Stack

### Frontend
- **React** (v19.1.0) - UI framework
- **React Router** - Navigation
- **Recharts** - Data visualization
- **Axios** - API requests
- **React Icons** - Icon library
- **date-fns** - Date formatting

### Backend
- **Node.js & Express** (v5.1.0) - Server framework
- **MongoDB & Mongoose** - Database
- **JWT** - Authentication
- **bcryptjs** - Password hashing
- **CORS** - Cross-origin resource sharing

## 📋 Prerequisites

- Node.js (v14 or higher)
- MongoDB Atlas account (for production) or local MongoDB (for development)
- npm or yarn package manager

## 🚀 Installation & Setup

### 1. Clone the Repository
```bash
git clone <your-repo-url>
cd SaarthiPrep
```

### 2. Backend Setup

```bash
cd server
npm install
```

Create a `.env` file in the `server` directory:
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/saarthiprep
# For production, use MongoDB Atlas connection string:
# MONGO_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/saarthiprep?retryWrites=true&w=majority
JWT_SECRET=your_jwt_secret_key_here
NODE_ENV=development
```

### 3. Frontend Setup

```bash
cd ../client
npm install
```

### 4. Running the Application

**Development Mode:**

Terminal 1 (Backend):
```bash
cd server
npm run dev
# or npm start
```

Terminal 2 (Frontend):
```bash
cd client
npm start
```

The application will be available at:
- Frontend: `http://localhost:3000`
- Backend API: `http://localhost:5000`

## 🌐 Deployment Guide

### MongoDB Atlas Setup

1. **Create MongoDB Atlas Account**
   - Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
   - Create a free cluster

2. **Get Connection String**
   - Click "Connect" on your cluster
   - Choose "Connect your application"
   - Copy the connection string
   - Replace `<password>` with your database user password

3. **Update .env**
   ```env
   MONGO_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/saarthiprep?retryWrites=true&w=majority
   ```

4. **Whitelist IP Address**
   - In Atlas, go to Network Access
   - Add IP Address: `0.0.0.0/0` (allow from anywhere) for deployment

### Deployment Options

#### Option 1: Render.com (Recommended)
- **Backend**: Deploy as Web Service
- **Frontend**: Deploy as Static Site

#### Option 2: Vercel (Frontend) + Render/Railway (Backend)
- Deploy React app on Vercel
- Deploy Node.js API on Render or Railway

#### Option 3: Heroku
- Deploy both frontend and backend together

### Environment Variables for Production

Make sure to set these in your hosting platform:
```
MONGO_URI=<your-mongodb-atlas-uri>
JWT_SECRET=<your-secure-jwt-secret>
NODE_ENV=production
PORT=5000
```

## 📁 Project Structure

```
SaarthiPrep/
├── client/                 # React frontend
│   ├── public/            # Static files
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   │   ├── dashboard/
│   │   │   ├── interview/
│   │   │   ├── landing/
│   │   │   ├── layout/
│   │   │   ├── practice/
│   │   │   ├── progress/
│   │   │   ├── resume/
│   │   │   └── routing/
│   │   ├── context/       # React Context (Auth)
│   │   ├── pages/         # Page components
│   │   ├── App.js         # Main app component
│   │   └── index.js       # Entry point
│   └── package.json
│
└── server/                # Node.js backend
    ├── config/            # Configuration files
    │   └── db.js         # MongoDB connection
    ├── controllers/       # Request handlers
    │   └── authController.js
    ├── middleware/        # Custom middleware
    │   └── authMiddleware.js
    ├── models/            # Mongoose models
    │   └── User.js
    ├── routes/            # API routes
    │   └── auth.js
    ├── index.js          # Server entry point
    └── package.json
```

## 🔑 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login
- `GET /api/auth/user` - Get current user (Protected)

## 🧪 Testing

```bash
# Frontend tests
cd client
npm test

# Backend tests (if configured)
cd server
npm test
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 👨‍💻 Author

Vikesh Mehta

## 🙏 Acknowledgments

- Create React App for the frontend boilerplate
- MongoDB Atlas for database hosting
- All open-source libraries used in this project

## 📧 Support

For support, email vikeshmehta49@gmail.com or create an issue in the repository.

---

Made with ❤️ for helping candidates ace their interviews
