# Linovate

This is a web application built with Next.js that allows users to view a product catalog. It integrates with a PostgreSQL database to display products and their reviews.

## Features

- Display a catalog of products with their names, descriptions, and prices.
- View product details and reviews.
- Add and leave reviews for products.
- Supports server-side rendering using Next.js.

## Technologies Used

- **Next.js** for server-side rendering and building the React application.
- **Axios** for making API requests.
- **Tailwind CSS** for styling the components.
- **Node.js** for backend API (if applicable).
- **PostgreSQL** for storing product and review data.

## Getting Started

Follow these instructions to set up the project locally:

### Prerequisites

You need to have **Node.js** and **npm** (or **yarn**) installed.

- Install [Node.js](https://nodejs.org/) (which includes npm).

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/GiladBe/Linovate.git
   cd Linovate

2. Install the dependencies:
  npm install

3. set up environment variables
 Create a .env file in the root directory of the project wth the following keys : 
 
  DATABASE_URL=postgresql://postgres.dhfncwynzmfjwziklirl:%40L%25d3tWG-zKp%26hv@aws-0-eu-central-1.pooler.supabase.com:5432/postgres

 NODE_ENV= development

 PASSWORD = @L%d3tWG-zKp&hv

 NEXT_PUBLIC_BASE_URL=https://linovate-giladbes-projects.vercel.app
  
4. Run the development server: 
 npm run dev

