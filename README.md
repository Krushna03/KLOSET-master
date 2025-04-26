
# KLOSET - E-commerce Web Application

**KLOSET** is a fully functional E-commerce web application built with the **MERN stack** (MongoDB, Express.js, React.js, Node.js). It provides a smooth online shopping experience with features like product browsing, cart management, user authentication, and order history.

## Live Demo

[Visit KLOSET Live](https://frontend-kloset.vercel.app/)

---

## Project Structure

```bash
KLOSET-master/
├── client/      # Frontend React application
├── server/      # Backend Express application
├── README.md
```

---

## Features

-  User Registration & Login
-  Browse products
-  Add products to cart
-  View cart and checkout
-  Order management
-  Secure authentication (JWT)
-  Responsive UI using TailwindCSS

---

## Tech Stack

**Frontend:**
- React.js
- Redux
- TailwindCSS
- Axios
- React Router

**Backend:**
- Node.js
- Express.js
- MongoDB
- JWT Authentication
- Multer (for file uploads)
- Cloudinary (for image hosting)

---

## Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/Krushna03/KLOSET-master.git
cd KLOSET-master
```

### 2. Install client dependencies

```bash
cd client
npm install
```

### 3. Install server dependencies

```bash
cd ../server
npm install
```

### 4. Configure Environment Variables

Create a `.env` file inside the `server/` directory with the following keys:

```bash
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

---

### 5. Run the development servers

#### Start Backend Server

```bash
cd server
npm run dev
```

#### Start Frontend Server

```bash
cd client
npm start
```

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

## 🙋‍♂️ Author

- **Krushna Sakhare**  
  [LinkedIn](https://www.linkedin.com/in/krushna-sakhare) | [GitHub](https://github.com/Krushna03)

---
