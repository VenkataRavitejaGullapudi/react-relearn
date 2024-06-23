# React Re-learning

## Parcel: Streamlining Your Development Workflow**

- **Installation:**
    ```bash
    npm install -g parcel
    ```
    (Note: The `-g` flag installs Parcel globally, allowing you to run it from any directory using the `parcel` command.)

- **Dev Builds and Local Server:** Enjoy a seamless development experience with Parcel's automatic build generation and local server hosting.
- **Hot Module Replacement (HMR):** Witness the power of HMR as your application updates instantly without a full page reload, enabling rapid development iterations.
- **File Watching and Caching:** Benefit from Parcel's efficient file watching algorithm (written in C++) to streamline development. Additionally, the caching system enhances performance by serving previously computed assets.
- **Optimization Suite:** Parcel offers a suite of optimization features to prepare your app for production deployment:
    - **Image Optimization:** Reduces image file sizes for faster loading times.
    - **Minification:** Shrinks code size by removing unnecessary white space and comments.
    - **Bundling:** Combines multiple files into a single package for improved loading efficiency.
    - **Compression:** Further reduces bundle size through compression techniques.
    - **Code Splitting:** Optimizes code loading by splitting your application into smaller chunks, prioritizing the initial content required for a faster first-paint.
    - **Tree Shaking:** Intelligently eliminates unused code, resulting in a smaller bundle size.
- **HTTPS and Security:** Parcel facilitates secure development and deployment by supporting HTTPS with SSL.
- **Enhanced Diagnostics:** Receive detailed and helpful error messages when issues arise, guiding you towards swift resolution.
- **Differential Bundling:** Benefit from improved caching with differential bundling. The same file will always have a consistent name, leading to more effective caching and faster loading times. When a file changes, only that file's name will be updated, minimizing the amount of code the browser needs to download again.
- **Automatic Polyfilling:** Parcel identifies your target browsers and automatically integrates necessary polyfills, ensuring compatibility across environments. This reduces the amount of code downloaded by users, leading to faster app loading times.
- **Production Build Readiness:** Parcel simplifies production build creation with code minification and asset optimization out of the box. No additional plugins or complex configurations are required.

## Redux Toolkit

  - **Installation:** Set up Redux Toolkit and react-redux for effective state management:
    ```bash
    npm install @reduxjs/toolkit react-redux
    ```
 - Store Creation: Define a central store to hold your application's state.
 - Connecting the Store: Integrate the store with your React components to access and update state seamlessly.
 - Slices for State Organization: Create well-structured slices to manage specific parts of your application's state.
 - Dispatching Actions: Initiate state transitions by dispatching actions that describe the changes you want to make.
 - Selectors: Extract specific data from the store efficiently using selectors.

## Developer Testing
- Developers mostly do below 2 types
  - Unit Testing - ✅
  - Integration Testing - ✅
- **Unit and Integration Testing:** Employ unit testing to verify individual component logic and integration testing to confirm component interactions.

**Setting Up Testing in Your React App**

- **Installation:** Install the following libraries to bring testing capabilities to your project:
    ```bash
    npm install react-testing-library jest @babel/core @babel/preset-env @babel/preset-react @testing-library/jest-dom jsdom
    ```
- **Babel Configuration:** Configure Parcel's Babel transpilation to accommodate testing requirements. You might need to disable default Babel transpilation or configure it appropriately for testing libraries (refer to Parcel documentation for specifics).
- **Jest Configuration:** Define a Jest configuration file (usually named `jest.config.js`) to tailor the testing environment.
- **jsdom Setup:** Introduce `jsdom` as an in-memory DOM implementation for testing, allowing your tests to run in a simulated browser environment.
- **Rendering JSX:** Install necessary Babel presets (e.g., `@babel/preset-react`) to enable proper JSX rendering during testing.
- **Jest DOM Matchers:** Include the `@testing-library/jest-dom` library to provide additional matchers for testing React components with the testing-library approach.

## Food Ordering App

This section provides a skeletal structure for a food ordering application's user interface, outlining key components:

- **Header:**
    - Logo representing your food ordering service.
    - Navigation items for browsing restaurants, placing orders, and accessing user accounts.
- **Body:**
    - Search bar for filtering restaurants based on user preferences.
    - Restaurant container displaying available restaurants in a list or grid format.
        - Restaurant card for each restaurant, showcasing:
            - Image of the restaurant or cuisine type.
            - Name of the restaurant.
            - Rating, cuisine type, delivery time, etc.
- **Footer**
  - links
  - address
  - copyright
  - contact

