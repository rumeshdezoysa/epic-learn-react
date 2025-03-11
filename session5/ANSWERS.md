 1 Setup Development Environment
       
	   done

     2 Project Structure Exploration
        
        Identify and describe the purpose of the following files:
            package.json
				This file manages your project's dependencies, scripts, and metadata.
				It lists all installed packages, their versions, and project configurations.
				Example usage: Running npm install installs the listed dependencies.
				
            package-lock.json
			This file ensures consistent dependency versions across different environments.
			It records the exact versions of installed packages and their sub-dependencies.
			Helps in avoiding version mismatches when sharing the project.

     3 JSX Implementation (Optional)
        created and integrated
		ex: app/test/Test.jsx
		
		export default function Test() {
			return <h1>This is a test page  - RZ</h1>;
			}
  

    4  Node.js and npm Usage
        Explain the role of Node.js in your project.
			Node.js acts as the backend runtime environment
			Package Management,Development Server, Backend API Handling, Build and Compilation
			
        List and describe at least three npm commands you used during the setup and development process.
			npm i - Installs all dependencies listed in package.json
			npm start - Runs the development server 
			npm run dev - Runs the development Project
		

     5 Dependencies Management
        Identify the dependencies and devDependencies in your package.json.
		
        Explain the difference between dependencies and devDependencies.
		 
			dependencies
			These are packages required for your application to run in production.
			Example: React, 
			
			devDependencies
			These are only needed for development and not for production
		
        Research and provide a brief history of React.js and Next.js, including key contributors and milestones.
		
		React.js

		Created by: Jordan Walke (Facebook)
		Initial Release: May 2013
		Purpose: A JavaScript library for building dynamic and efficient user interfaces.
		Key Milestones:
			2013: Open-sourced by Facebook.
			2015: React 0.14 introduced component splitting (React.Component).
			2016: React Fiber (React 16) introduced a new reconciliation algorithm.
			2017: React 16 added fragments, portals, and improved error handling.
			2020: React 17 improved event delegation and introduced a no-reload upgrade process.
			2022: React 18 introduced concurrent rendering and automatic batching.

		Next.js

		Created by: Vercel (formerly ZEIT)
		Initial Release: October 2016
		Purpose: A React framework for building full-stack web applications with server-side rendering (SSR) and static site generation (SSG).
		Key Milestones:
			2016: Next.js 1.0 released with SSR and simple page-based routing.
			2019: Next.js 9 introduced API routes and automatic static optimization.
			2020: Next.js 10 added next/image, internationalized routing, and better performance.
			2022: Next.js 12 introduced middleware, Rust-based compiler, and edge functions.
			2023: Next.js 13 introduced the App Router and React Server Components.
			2024: Next.js 14 improved performance, streaming support, and Turbopack enhancements.

		Key Contributors

		React.js: Facebook (Meta), Jordan Walke, and the React core team.
		Next.js: Vercel, Guillermo Rauch, and the Next.js team.
	
			
        Install a third-party library that will be useful. (Ex: ky, clsx, framer-motion)
		
			npm i ky 

    6 Running the Project
        
		done
		
		worked well
		
		

extra details

****************************


Setup Development Environment
************************************

i use the windows Environment


go to download exe file downloaded and insatlled
https://nodejs.org/en

C:\Users\rumesh>node -v
v22.14.0

C:\Users\rumesh>npm -v
11.2.0

C:\Users\rumesh>



To create a project, run:

go to 
https://nextjs.org/docs/app/getting-started/installation


npx create-next-app@latest

successfullt installed

C:\REACT\class>npx create-next-app@latest
Need to install the following packages:
create-next-app@15.2.1
Ok to proceed? (y) y

√ What is your project named? ... xflix-dashboard
√ Would you like to use TypeScript? ... No / Yes
√ Would you like to use ESLint? ... No / Yes
√ Would you like to use Tailwind CSS? ... No / Yes
√ Would you like your code inside a `src/` directory? ... No / Yes
√ Would you like to use App Router? (recommended) ... No / Yes
√ Would you like to use Turbopack for `next dev`? ... No / Yes
√ Would you like to customize the import alias (`@/*` by default)? ... No / Yes
Creating a new Next.js app in C:\REACT\class\xflix-dashboard.

Using npm.

Initializing project with template: app-tw


Installing dependencies:
- react
- react-dom
- next

Installing devDependencies:
- @tailwindcss/postcss
- tailwindcss
- eslint
- eslint-config-next
- @eslint/eslintrc


added 307 packages, and audited 308 packages in 1m

129 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
Success! Created xflix-dashboard at C:\REACT\class\xflix-dashboard


C:\REACT\class>

cnahged to project directory
********************************************

C:\REACT\class>cd xflix-dashboard

open project with vs code.
***************************************

C:\REACT\class\xflix-dashboard>code .


to run projrct development environment on vs code terminal

C:\REACT\class\xflix-dashboard>npm run dev




