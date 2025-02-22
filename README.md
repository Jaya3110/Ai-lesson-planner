# Ai-lesson-planner

This project is a React.js application built with Next.js that leverages the Google Gemini API to generate lesson plans. It utilizes ShadCN for UI components and allows users to input lesson details, generate content using AI, edit the content, and download the lesson plan as a PDF.

## Features

* **Dummy Login:* A simple login page with dummy credentials for demonstration purposes.
* **Lesson Plan Form:** A structured form for inputting lesson details such as topic, grade level, objectives, and materials.
* **AI-Powered Content Generation:** Integration with the Google Gemini API to dynamically generate lesson plan content based on user input.
* **Editable Lesson Plan:** Users can edit the AI-generated content before downloading.
* **PDF Download:** The ability to download the lesson plan as a PDF document.
* **Modern UI:** Utilizes ShadCN and Tailwind CSS for a clean and responsive user interface.
* **Frontend-Only:** No backend or database is required; all data is handled on the client-side.
* **Bonus Features:** (If implemented)
    * Dark Mode Toggle
    * Local Storage for persisting lesson plans
    * Drag-and-Drop Editor

## Technologies Used

* **React.js:** JavaScript library for building user interfaces.
* **Next.js:** React framework for building server-rendered applications.
* **ShadCN:** Re-usable UI components built using Radix UI and Tailwind CSS.
* **Tailwind CSS:** Utility-first CSS framework.
* **Google Gemini API:** AI model for generating lesson content.
* **react-to-print/jsPDF:** (Specify which one you used) Library for generating PDF documents.
* **React State/Context API:** (Specify which one you used) For managing application state.
* **TypeScript:** Used for static typing.

## Project Structure
Ai-lesson-planner/
├── .next/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   ├── components/
│   │   ├── ui/
│   │   ├── LessonPlanForm.tsx
│   │   └── LoginForm.tsx
│   ├── hooks/
│   │   └── use-toast.ts
│   └── lib/
│       ├── gemini.ts
│       └── utils.ts
├── .env
├── .eslintrc.json
├── .gitignore
├── components.json
├── next.config.js
├── package-lock.json
├── package.json
├── postcss.config.js
├── tailwind.config.ts
└── tsconfig.json

## Setup Instructions

1.  **Clone the repository:**

    ```bash
    git clone [https://github.com/Jaya3110/Ai-lesson-planner.git](https://github.com/Jaya3110/Ai-lesson-planner.git)
    cd Ai-lesson-planner
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Set up Google Gemini API:**

    * Obtain an API key from the Google Gemini API.
    * Create a `.env.local` file in the root directory of the project.
    * Add your API key to the `.env.local` file:

        ```
        VITE_GEMINI_API_KEY=your_api_key_here
        ```

    * **Important:** Ensure your `.env.local` file is added to your `.gitignore` file.

4.  **Run the application:**

    ```bash
    npm run dev
    ```

5.  **Access the application:**

    * Open your browser and navigate to the URL displayed in the terminal (usually `http://localhost:3000`).

## API Integration Details

* The Google Gemini API is used to generate lesson plan content based on user input.
* The API is called when the "Generate Lesson Plan" button is clicked.
* The user input is sent as a prompt to the Gemini API, requesting a structured lesson plan.
* Error handling is implemented to catch and display any potential API errors.

## Dummy Login Credentials

* **Email:** `jayakrishna`
* **Password:** `selected`
* 
## Deployment

* The application is deployed on [https://ai-lesson-planner-five.vercel.app/](https://ai-lesson-planner-five.vercel.app/).

## Future Improvements

* Implement user authentication with a backend.
* Add more advanced editing features for the lesson plan.
* Enhance the PDF generation to include more customization options.
* Expand the range of lesson plan templates and subjects.
* Add the ability to save lesson plans to a database.

## Author

* [jaya3110](https://github.com/jaya3110)

## License

* MIT-LICENSE


