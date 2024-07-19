# Employee Management Application

## Overview

This is a simple employee management application built with Angular 17.3. It allows you to view, add, edit, and update employee information. The application uses NGRX for state management and Angular Material for UI components.

## Features

- View a list of employees in a table.
- Edit employee information in a dialog form.
- Display loading indicators and success messages using a global state.
- Form validation with Angular Reactive Forms.

## Getting Started

### Prerequisites

- Node.js (>=14.x)
- Angular CLI (>=17.3)

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/your-repo/employee-management.git
   cd employee-management
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

### Running the Application

1. Start the development server:

   ```sh
   ng serve
   ```

2. Open your browser and navigate to `http://localhost:4200`.

## Project Structure

```
src/
├── app/
│ ├── components/
│ │ ├── employee/
│ │ │ ├── employee.component.ts
│ │ │ ├── employee.component.html
│ │ │ └── employee.component.css
│ │ ├── edit-employee/
│ │ │ ├── edit-employee.component.ts
│ │ │ ├── edit-employee.component.html
│ │ │ └── edit-employee.component.css
│ │ └── confirm-button/
│ │ ├── confirm-button.component.ts
│ │ └── confirm-button.component.html
│ ├── models/
│ │ └── employee.model.ts
│ ├── services/
│ │ └── employee.service.ts
│ ├── store/
│ │ ├── actions/
│ │ │ ├── employee.actions.ts
│ │ │ └── globals.actions.ts
│ │ ├── effects/
│ │ │ ├── employee.effects.ts
│ │ │ └── globals.effects.ts
│ │ ├── reducers/
│ │ │ ├── employee.reducer.ts
│ │ │ └── globals.reducer.ts
│ │ ├── selectors/
│ │ │ ├── employee.selectors.ts
│ │ │ └── globals.selectors.ts
│ │ └── facades/
│ │ ├── employee.facade.ts
│ │ └── globals.facade.ts
│ └── app.module.ts
├── assets/
│ └── ...
├── environments/
│ └── ...
└── main.ts

```

## Usage

### Viewing Employees

Employees are displayed in a table format with their ID, first name, last name, age, city, street, and department.

### Editing Employees

To edit an employee, click the "Edit" button in the table row. This will open a dialog where you can update the employee's information. After making changes, click "Save" to update the employee or "Cancel" to discard changes.

### Loading Indicator

A global loading indicator is displayed when data is being fetched or updated. This is managed through the global state using NGRX.

### Success Messages

After successfully updating an employee, a snackbar message is displayed to confirm the update.

## Development

### Adding a New Feature

1. Create a new component, service, or store component as needed.
2. Update the state management (actions, reducers, effects, selectors, facades) to handle new state changes.
3. Ensure the UI components are updated to reflect new data or functionality.
4. Write unit tests for new components and state management logic.

## Contributing

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes.
4. Push your branch and open a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for more information.
