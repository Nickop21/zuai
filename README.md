This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

#### First, Install node package manager:

```bash
npm i

```

#### Then, run the development server:

```bash
npm run dev 
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

### Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

Navigate to http://localhost:3000 to view your application in action. The page auto-updates as you edit the app/page.js file.

🌐 Website URL Links
For more information and to explore the live application, visit the following links:

Live Application: https://zuai-v1.vercel.app/

GitHub Repository: https://github.com/Nickop21/zuai - Explore the source code and provide feedback.


# 🛠️ Features
### This app includes the following features:

<span style="color:#ff8b72 ;">**Drag and Drop of Files:**</span> Easily drag and drop files into the input area.

<span style="color: #ff8b72 ;">**Real-time Data Sync:**</span> Seamlessly sync data with the UI in real-time.

<span style="color: #ff8b72;">**Common State Management:**</span> Manage state with Zustand and store data in local storage for persistent access.

<span style="color: #ff8b72;">**Effortless Data Storage and Retrieval:**</span> Simple methods to store and retrieve your data.

<span style="color: #ff8b72;">**Delete Functionality:**</span> Remove specific data items with ease.

<span style="color: #ff8b72;">**Cool Animations and Popups:**</span> Enjoy smooth animations and informative popups for warnings and other notifications.

<span style="color: #ff8b72;">**Data Filtering:**</span> Apply filters to sort and view data effectively.

<span style="color: #ff8b72;">**Responsive and Pixel-Perfect Design:**</span> Experience a design that looks great on all screen sizes.

<span style="color: #ff8b72;">**Reusable Components:**</span> Utilize components designed for reuse across your app.

<span style="color: #ff8b72;">**PDF Handling:**</span> Resize, zoom in, and zoom out PDFs for better document interaction.
# 🚧 Challenges and Problems Faced

Throughout the development of this project, I encountered several challenges and hurdles that were both demanding and educational. Here are some of the key issues I faced:

- **File Handling Issues:** Getting the drag and drop functionality to work smoothly across different browsers and file types was trickier than expected. Handling edge cases and ensuring compatibility required a lot of testing and tweaking.

- **Real-time Data Sync:** Keeping data in sync with the UI in real-time was a complex task. It was particularly challenging to maintain performance and consistency when dealing with large datasets and frequent updates. I had to delve into optimizations to ensure a seamless user experience.

- **State Management Complexity:** Integrating Zustand for state management with local storage brought its own set of challenges. Ensuring that the state was persisted correctly and avoiding any synchronization issues required a thoughtful approach and frequent debugging.

- **Performance Optimization:** Achieving smooth performance with animations and transitions, especially on lower-end devices, was a significant focus. It involved a lot of fine-tuning and optimization to ensure that the user experience remained fluid and responsive.

- **Responsive Design Challenges:** Crafting a pixel-perfect design that looked great across various screen sizes and devices was a meticulous process. It demanded extensive testing and careful adjustments to the CSS to achieve a consistent appearance everywhere.

- **PDF Handling Difficulties:** Implementing PDF features like resizing, zooming, and handling different formats posed some technical challenges. Ensuring cross-browser compatibility and smooth functionality required a deep dive into PDF handling libraries and custom solutions.

- **Error Handling and Validation:** Robust error handling and validation for user inputs and file uploads were crucial. Managing different scenarios and edge cases to enhance the user experience involved a lot of trial and error.

Despite these challenges, each problem presented an opportunity for learning and growth. They pushed me to explore new solutions and ultimately led to a more refined and effective project. Every obstacle overcame has been a step towards making this application better and more robust.


# 🧪 Test Cases

## **1. File Handling**

### **Test Case: Drag and Drop File Upload**
- **Description:** Verify that files can be dragged and dropped into the upload area.
- **Steps:**
  1. Simulate dragging a file over the upload area.
  2. Drop the file into the upload area.
  3. Verify that the file is correctly added to the upload list.
- **Expected Result:** The file should be added to the upload list, and a success message should be displayed.

### **Test Case: File Type Validation**
- **Description:** Ensure that only supported file types can be uploaded.
- **Steps:**
  1. Try to upload a file of an unsupported type.
  2. Verify that an error message is displayed.
- **Expected Result:** The system should display an error message indicating the file type is not supported.

## **2. Real-time Data Sync**

### **Test Case: Real-time Data Update**
- **Description:** Verify that the UI updates in real-time when data changes.
- **Steps:**
  1. Update a data entry in the application.
  2. Observe the UI to ensure the change is reflected immediately.
- **Expected Result:** The UI should update in real-time to reflect the data change.

## **3. State Management**

### **Test Case: Zustand State Persistence**
- **Description:** Ensure that state is correctly persisted in local storage using Zustand.
- **Steps:**
  1. Update some state in the application.
  2. Refresh the page or restart the application.
  3. Verify that the state persists across reloads.
- **Expected Result:** The state should persist and be restored correctly after a refresh or restart.

## **4. Performance Optimization**

### **Test Case: Animation Performance**
- **Description:** Check that animations run smoothly on different devices.
- **Steps:**
  1. Trigger animations on high-end and low-end devices.
  2. Observe the performance and responsiveness of the animations.
- **Expected Result:** Animations should run smoothly on high-end devices and perform acceptably on low-end devices.

## **5. Responsive Design**

### **Test Case: Responsive Layout**
- **Description:** Verify that the application layout is responsive and looks correct on various screen sizes.
- **Steps:**
  1. Resize the browser window to different screen sizes.
  2. Verify that the layout adjusts correctly for each size.
- **Expected Result:** The layout should be responsive and display correctly on all screen sizes.

## **6. PDF Handling**

### **Test Case: PDF Resizing**
- **Description:** Check that PDF resizing functionality works as expected.
- **Steps:**
  1. Open a PDF file in the application.
  2. Resize the PDF using the provided controls.
  3. Verify that the PDF resizes correctly.
- **Expected Result:** The PDF should resize accurately according to user input.

### **Test Case: PDF Zooming**
- **Description:** Verify that zooming in and out of a PDF works as expected.
- **Steps:**
  1. Open a PDF file.
  2. Use zoom in and zoom out controls.
  3. Verify that the PDF zooms in and out correctly.
- **Expected Result:** The PDF should zoom in and out accurately.

## **7. Error Handling and Validation**

### **Test Case: Input Validation**
- **Description:** Ensure that user inputs are validated correctly.
- **Steps:**
  1. Enter invalid data into a form or input field.
  2. Submit the form or trigger validation.
  3. Verify that appropriate error messages are displayed.
- **Expected Result:** Error messages should appear for invalid inputs, guiding the user to correct the errors.

### **Test Case: File Upload Validation**
- **Description:** Check that file uploads are validated correctly.
- **Steps:**
  1. Try to upload a file that exceeds the size limit or is of an invalid type.
  2. Verify that the system displays an error message.
- **Expected Result:** The system should reject invalid files and display a corresponding error message.


