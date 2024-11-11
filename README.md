##  Live Website Link
surge : https://gadget-shop-abdullah-107189.surge.sh/
netlify : https://gadget-shop-abdullah-107189.netlify.app/

### Requirement Document Link
github resource : https://github.com/ProgrammingHero1/B10-A8-gadget-heaven

### List of React Fundamental concepts used in the project
1. Components:
Small, reusable building blocks of UI.
Can be functional or class-based.
They render part of the UI and may contain other components.
2. JSX:
A syntax extension for JavaScript, looks like HTML.
Allows embedding HTML-like code inside JavaScript.
3. Routing with React Router:
Manages navigation between different components based on the URL.
Uses components like <Route> and <NavLink>.
4. Props:
Short for "properties", they are used to pass data from parent to child components.
Allow components to be dynamic and reusable.
5. State Management:
useState allows components to manage their own data.
Trigger re-renders when data changes.
6. Context API:
A way to share data between components without passing props manually.
Great for global states like themes, authentication, or cart data.
7. Hooks:
Special functions like useState and useEffect used in functional components to manage state and side effects.
8. Conditional Rendering:
Renders different components or UI based on certain conditions (e.g., if a user is logged in or not).
9. Navigation (NavLink):
A React Router component for navigation that automatically applies an active class to links.
10. Outlets:
A placeholder in parent routes for rendering nested child routes in React Router.
Let

## 5 features of your website/project
1. Product Categorization and Filtering
Users can browse products by categories (e.g., laptops, phones, accessories) for easy navigation.
Filtering options let users narrow down by price, brand, or specifications.
2. Dynamic Cart and Wishlist
Users can add items to their cart or wishlist, with real-time updates in the Navbar.
Item counts and total prices are dynamically calculated and displayed for quick reference.
3. Responsive Dashboard with Nested Navigation
The dashboard provides an organized view, with sections for cart, wishlist, and potentially user account settings.
Uses React Router with <Outlet /> to switch between dashboard sections smoothly.
4. Detailed Product Pages
Each product has a dedicated page with detailed descriptions, specifications, and reviews.
Enhances the user experience by providing all the information needed for purchasing decisions.
5. Context API for Global State Management
The site uses Context API to manage cart and wishlist data globally.
Ensures seamless access to shared data across components without prop-drilling, making the app faster and easier to maintain.
These features combine to make a user-friendly, interactive, and responsive e-commerce site focused on gadgets!