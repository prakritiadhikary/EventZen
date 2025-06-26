# EventZen

EventZen is a modern, full-stack web application for event management and networking. It allows users to discover, register for, and manage events, as well as connect with other attendees.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

*   [Node.js](https://nodejs.org/) (v20.19.0 or later)
*   [npm](https://www.npmjs.com/)

### Installation

1.  Clone the repository:

    ```bash
    git clone https://github.com/prakritiadhikary/EventZen.git
    ```

2.  Navigate to the project directory:

    ```bash
    cd EventZen
    ```

3.  Install the dependencies:

    ```bash
    npm install
    ```

## Available Scripts

In the project directory, you can run:

*   `npm run dev`: Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
*   `npm run build`: Builds the app for production to the `.next` folder.
*   `npm run start`: Starts a Next.js production server.
*   `npm run lint`: Runs the linter to check for code quality and style issues.

## Technologies Used

*   **Framework:** [Next.js](https://nextjs.org/)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **UI Components:** [Radix UI](https://www.radix-ui.com/)
*   **Form Management:** [React Hook Form](https://react-hook-form.com/)
*   **Schema Validation:** [Zod](https://zod.dev/)
*   **Linting:** [ESLint](https://eslint.org/)

## Project Structure

```
/
├── .next/ # Build directory
├── node_modules/ # Dependencies
├── public/ # Static assets
├── src/
│   ├── app/ # Application routes
│   ├── components/ # Reusable components
│   ├── hooks/ # Custom React hooks
│   ├── lib/ # Utility functions
│   └── types/ # TypeScript types
├── .gitignore
├── next.config.ts
├── package.json
├── README.md
└── tsconfig.json
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request with your changes.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.