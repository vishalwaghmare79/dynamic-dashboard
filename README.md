## Getting Started

Follow these instructions to get a copy of the project running on your local machine.

### Prerequisites

- [Node.js](https://nodejs.org/) (version 14.x or later)
- [npm](https://www.npmjs.com/) (usually installed with Node.js)

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/vishalwaghmare79/dynamic-dashboard.git
   ```

2. **Navigate to the Project Directory**

   ```bash
   cd dynamic-dashboard
   ```

3. **Install Dependencies**

   ```bash
   npm install
   ```

### Running the Application

1. **Start the Development Server**

   ```bash
   npm run dev
   ```

   The application will be accessible at [http://localhost:5173/](http://localhost:5173/).

### Application Usage

- **Add/Remove Widgets**: Click the "Add/Remove Widgets" button to open the modal. You can select widgets using checkboxes and confirm your changes.
- **Category Selection**: Choose a category from the dropdown to filter widgets.

## Code Structure

- **`src/components/`**: Contains React components such as `AddWidgetModal.jsx`, which handles adding and removing widgets.
- **`src/redux/`**: Contains Redux actions and reducers.
- **`src/App.jsx`**: Main application component.
