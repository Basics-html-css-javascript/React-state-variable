# React State Examples – Simple, Medium, and Hard

This project demonstrates **three levels of React state management** using the `useState` hook, along with **Tailwind CSS** for styling.

We go from a **simple counter** → **medium form example** → **hard nested array update example**.

---

## 📖 Understanding State in React

In React, **state** is a built-in object that stores dynamic data for a component.  
When state changes, React automatically re-renders the component to reflect the updated values.

We use the `useState` hook to:
- Store values
- Update values
- Trigger re-renders

**Syntax:**
```javascript
const [stateVariable, setStateVariable] = useState(initialValue);
