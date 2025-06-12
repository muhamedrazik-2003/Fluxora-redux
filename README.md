# Fluxora 🛒

Fluxora is a simple e-commerce web application built as a project to learn and practice Redux. It demonstrates how to perform CRUD operations, manage global state using Redux Toolkit, and build an interactive UI using React.

## 🔧 Tech Stack

- **React**
- **Redux Toolkit**
- **React Router DOM**
- **Tailwind CSS**
- **JummyJSON API** (for dummy product data and CRUD simulation)

---

## ✨ Features

- 🔹 **Landing Page**  
  Displays a list of all products with an option to add them to the wishlist or cart.

- 🔹 **Product Detail Page**  
  Displays detailed information about a selected product using dynamic routing (`/product/:id`).

- 🔹 **Cart Page**  
  Shows all the items added to the cart along with their quantity.

---

## 💡 Functional Highlights

- ✅ **Wishlist Functionality**  
  - You can add products to your wishlist from the landing page.  
  - A product can only be added to the wishlist once — duplicates are prevented.

- ✅ **Cart Functionality**  
  - Products can be added to the cart from the landing page.  
  - If a product is added again, its quantity increases instead of duplicating the item.

- ✅ **CRUD Operations**  
  - Product data is fetched from the JummyJSON API.
  - Supports simulated create, read, update, and delete operations using Redux actions.

---
