# Frontend Learning Journal 📘

This repository is dedicated to my daily learning journey in frontend development. I'll be documenting what I learn each day to track my progress and reinforce my understanding.

---

## 📅 Daily Learning Log

### **Day 1: Introduction to TypeScript**

**What is TypeScript?**

- Open-source programming language from Microsoft
- Typed superset of JavaScript
- Compiles down to plain JavaScript

**Why use TypeScript?**

- Strong relation to JavaScript
- Optional static typing and type inference
- IDE support for better development experience
- Rapid growth and adoption in the industry

**Key Topics Covered:**

- What & Why of TypeScript
- Environment Setup
- Variable Declarations
- Variable Types
- Functions
- Interface
- Class
- Access Modifiers

---

### **Day 2: React Basics**

Today, I started learning **ReactJS**, covering its core concepts and folder structure.

#### **Topics Covered:**

1. **Folder Structure** - Understanding how files are organized in a React project.
2. **Components** - The building blocks of a React application.
3. **Functional Components** - Writing stateless components using functions.
4. **Class Components** - Understanding stateful class-based components.
5. **JSX (JavaScript XML)** - Writing UI elements using JSX.
6. **Props (Properties)** - Passing data between components.
7. **State** - Managing component state.

### **Day 3: React State Management (setState)**
Today, I focused on **state management in React**, specifically the `setState` method in class components.

#### **Key Learnings:**
- Always use `setState` and never modify the state directly.
- If code needs to run **after** the state update, place it inside the callback function (second argument of `setState`).
- When updating state **based on the previous state value**, pass a **function** instead of a regular object.

📌 **Example:**
```jsx
this.setState((prevState) => ({
  count: prevState.count + 1
}));

📌 **Resources:** Codevolution ReactJS Tutorials

## 📌 How to Use This Repo

I'll be updating this repository daily with new learnings. Each day's progress will be added in a structured format.

### **Day Template**

````md
### **Day X: [Topic Name]**

**What I Learned:**

- [Key Points]
- [Concepts Covered]

**Code Snippets / Examples:**

```typescript
// Example Code (if applicable)
```
````
