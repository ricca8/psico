# Psychologist Website

A professional, modern, and nature-inspired website for a psychologist. This project includes a client-facing site and a secure admin dashboard for content management.

## ✨ Features

- **Responsive Design**: Clean and minimal interface, optimized for all devices.
- **Booking System**: Interactive UI for scheduling and canceling appointments.
- **Dynamic Blog**: Share insights and news through an integrated blog.
- **Admin Dashboard**: Secure login area to manage website content and blog posts.
- **FAQ & Testimonials**: Dedicated sections for common questions and client feedback.
- **Contact Integration**: Easy-to-use contact form for inquiries.

## 🛠️ Tech Stack

- **Frontend**: [React](https://reactjs.org/) + [Vite](https://vitejs.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Styling**: Vanilla CSS
- **Deployment**: [Nginx](https://www.nginx.com/) + [Docker](https://www.docker.com/)

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+)
- [Docker](https://www.docker.com/) (optional, for containerized deployment)

### Local Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/psicologa-website.git
   cd psicologa-website
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

### Docker Deployment

1. **Build the Docker image**:
   ```bash
   docker build . -t psicologa-website
   ```

2. **Run the container**:
   ```bash
   docker run -p 8080:80 psicologa-website
   ```
   The application will be available at `http://localhost:8080`.

## 📁 Project Structure

```text
src/
├── components/
│   ├── admin/      # Secure dashboard and editor
│   ├── common/     # Reusable UI components (Header, Footer)
│   └── pages/      # Main page components (Home, Blog, Booking)
├── App.jsx         # Main application routing
└── main.jsx        # Entry point
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details (or add your own).
