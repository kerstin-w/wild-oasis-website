# The Wild Oasis

Welcome to the Wild Oasis Hotel, a luxurious retreat nestled in the heart of nature.

This project has been created for learing purposes only.

**Live Project:** [wild-oasis-website-vert.vercel.app](wild-oasis-website-vert.vercel.app)

## Table of Contents

- [Business Requirements](#business-requirements)
- [Technologies](#technologies)
- [Installation](#installation)

## Business Requirements

### About

- Guests should be able to learn all about the Wild Oasis Hotel

### Cabins

- Guests should be able to get information about each cabin and see booked dates
- Guests should be able to filter cabins by their maximum guest capacity

### Reservations

- Guests should be able to reserve a cabin for a certain date range
- Reservations are not paid online. Payments will be made at the property upon arrival. Therefore, new reservations should be set to "unconfirmed" (booked but not yet checked in)
- Guests should be able to view all their past and future reservations
- Guests should be able to update or delete a reservation

### Authentication

- Guests need to sign up and log in before they can reserve a cabin and perform any operation
- On sign up, each guest should get a profile in the DB

### Profile

- Guests should be able to set and update basic data about their profile to make check-in at the hotel faster

## Technologies

### Framework

**[Next.js](https://nextjs.org/)**

### UI State Management

**[Context API](https://reactjs.org/docs/context.html)**

### DB / API

**[Supabase](https://supabase.com/)**

### Styling

**[TailwindCSS](https://tailwindcss.com/)**

## Installation

This section will guide you through the installation process of the project.
To install and run this Next.js project, follow these steps:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/your-username/wild-oasis-website.git
   ```

2. Navigate to the project directory:

   ```bash
   cd wild-oasis-website
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Create a `.env.local` file in the root directory of the project and add the following environment variables:

   ```plaintext
   NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
   ```

   Replace `your-supabase-url` and `your-supabase-anon-key` with your actual Supabase URL and anonymous key.

5. Start the development server:

   ```bash
   npm run dev
   ```

6. Open your browser and visit [http://localhost:3000](http://localhost:3000) to view the project.

That's it! You have successfully installed and started the Wild Oasis Next.js project on your local machine.
