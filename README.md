# React Form & Google Sheet

This project is a React application that demonstrates a form built using Formik and Yup for validation. The form collects user data such as full name, phone number, email, job title, and city. The data is then submitted to a Google Sheets document via the Sheet Best API, allowing for easy data management and storage.

## Table of Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Dependencies](#dependencies)
- [Configuration](#configuration)

## Introduction

This React application provides a simple and effective form that validates user inputs using Formik and Yup. The form data is submitted to a Google Sheets document using the Sheet Best API, making it a practical solution for collecting and storing user data. The form includes fields for full name, phone number, email, job title, and city, with validation rules to ensure proper input.

## Installation

To set up this project locally, follow these steps:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/formik-form-submission.git
    cd formik-form-submission
    ```

2. **Install dependencies**:
    Make sure you have Node.js installed. Then, run the following command to install all necessary dependencies:
    ```bash
    npm install
    ```

3. **Create a `.env` file**:
    Create a `.env` file in the root directory of the project and add your Sheet Best API endpoint:
    ```
    SHEET_API_KEY=your_sheet_best_api_key
    ```

4. **Start the development server**:
    Run the following command to start the development server:
    ```bash
    npm start
    ```

    The application will be available at `http://localhost:3000`.

## Usage

1. **Fill out the form**:
    - Enter your full name, phone number, email, job title, and city.
    - Click the "Submit" button to send the data to the Google Sheets document via the Sheet Best API.
    - If the submission is successful, the form will reset. Otherwise, errors will be displayed under the respective fields.

2. **Form Validation**:
    - The form uses Yup for validation to ensure all fields are correctly filled out before submission.

3. **Loading Indicator**:
    - A spinner is displayed while the form is being submitted to provide visual feedback to the user.

## Features

- **Formik for Form Management**: Manages the form state and handles submissions.
- **Yup for Validation**: Validates user input, ensuring that only correct data is submitted.
- **Axios for HTTP Requests**: Submits form data to a Google Sheets document via the Sheet Best API.
- **Responsive Design**: The form is designed to be responsive and works well on both desktop and mobile devices.

## Dependencies

This project uses the following dependencies:

- **React**: A JavaScript library for building user interfaces.
- **Formik**: A library for managing form state in React.
- **Yup**: A JavaScript schema builder for value parsing and validation.
- **Axios**: A promise-based HTTP client for making requests.
- **React Bootstrap**: Provides Bootstrap components as React components.
- **Sheet Best API**: A service that allows you to easily send data to Google Sheets via a RESTful API.

## Configuration

To configure the application, ensure you have a valid Sheet Best API key. This key should be stored in a `.env` file as described in the [Installation](#installation) section.
