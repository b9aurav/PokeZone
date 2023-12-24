# PokeZone

This is a Next.js project that uses PokeAPI to fetch and display data about Pokemon.
[Live Link](https://poke-zone-bay.vercel.app/)

## Architecture

This project is built with Next.js and TypeScript. It uses Redux for state management and Tailwind CSS for styling. The main components of the project are:

- `app`: This directory contains the root components of the application.
- `components`: This directory contains reusable components that are used across different pages.
- `store`: This directory contains the Redux store and slices.

The application fetches data from the PokeAPI and displays it in a user-friendly format. The data fetching is done using Redux thunks.

## Getting Started

To get a local copy up and running, follow these steps:

1. Clone the project.
```
git clone https://github.com/b9aurav/PokeZone.git
cd pokezone
```

2. Install package dependencies
```
npm install
```

3. Run project locally
```
npm run dev
```

Open http://localhost:3000 with your browser to see the result.
