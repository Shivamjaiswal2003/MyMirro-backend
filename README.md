# MyMirro - Backend & Database

This is the backend for **MyMirro**, a fashion recommendation platform. It handles user interactions, product management, and personalized fashion recommendations.

## 🚀 Tech Stack
- **Backend:** Node.js (Express.js)
- **Database:** MongoDB (NoSQL)
- **Authentication:** JWT
- **Security & CORS Handling:** bcrypt, dotenv, cors

## 📂 Project Structure
```
/FASHION-BACKEND
│-- src/
│   ├── config/
│   │   ├── db.js
│   ├── controllers/
│   │   ├── interactionController.js
│   │   ├── productController.js
│   │   ├── recommendationController.js
│   │   ├── userController.js
│   ├── models/
│   │   ├── Interaction.js
│   │   ├── Product.js
│   │   ├── User.js
│   ├── routes/
│   │   ├── interactionRoutes.js
│   │   ├── productRoutes.js
│   │   ├── recommendationRoutes.js
│   │   ├── userRoutes.js
│   ├── index.js
│-- .gitignore
│-- README.md
│-- .env
│-- package.json
```

## 🔧 Setup & Installation

### 1️⃣ Install Dependencies  
```sh
npm install express mongoose dotenv jsonwebtoken cors bcrypt nodemon
```

### 2️⃣ Set Up Environment Variables  
Create a `.env` file:
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### 3️⃣ Start the Server  
```sh
npm start
```
Or if using **Nodemon**:
```sh
npm run dev
```

## 📌 API Endpoints  

### **Authentication**
| Method | Endpoint            | Description     |
|--------|---------------------|----------------|
| POST   | `/api/auth/register` | Register User  |
| POST   | `/api/auth/login`    | User Login     |

### **Products**
| Method | Endpoint         | Description           |
|--------|-----------------|-----------------------|
| GET    | `/api/products`  | Fetch all products   |

### **User Interactions**
| Method | Endpoint             | Description                      |
|--------|----------------------|----------------------------------|
| POST   | `/api/interactions`  | Add user-product interaction    |
| GET    | `/api/recommendations/:userId` | Get recommendations |

## 🏗️ Database Schema  

### **User Schema**
```js
{
  _id: ObjectId,
  name: String,
  email: String,
  password: String,
  createdAt: Date
}
```

### **Product Schema**
```js
{
  _id: ObjectId,
  name: String,
  category: String,
  imageUrl: String,
  price: Number
}
```

### **Interaction Schema**
```js
{
  _id: ObjectId,
  userId: ObjectId,
  productId: ObjectId,
  action: String,
  timestamp: Date
}
```

## 🔥 Recommendation Logic  
1. Retrieves user interactions (likes/views).
2. Matches preferences with product categories.
3. Suggests top products based on interactions.

## 📝 License  
This project is licensed under the [MIT License](./LICENSE).
