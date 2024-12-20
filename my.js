// {
//   "name": "InsightEd",
//   "version": "0.1.0",
//   "private": true,
//   "scripts": {
//     "dev": "next dev",
//     "build": "npx prisma generate && next build",
//     "start": "next start",
//     "lint": "next lint"
//   },
//   "dependencies": {
//     "@clerk/nextjs": "^5.3.1",
//     "@fal-ai/serverless-client": "^0.14.2",
//     "@hookform/resolvers": "^3.2.0",
//     "@langchain/community": "^0.2.28",
//     "@next-auth/prisma-adapter": "^1.0.7",
//     "@next/bundle-analyzer": "^14.2.5",
//     "@phosphor-icons/react": "^2.1.7",
//     "@prisma/client": "^5.17.0",
//     "@radix-ui/react-accordion": "^1.2.0",
//     "@radix-ui/react-alert-dialog": "^1.1.1",
//     "@radix-ui/react-avatar": "^1.0.3",
//     "@radix-ui/react-dialog": "^1.1.1",
//     "@radix-ui/react-dropdown-menu": "^2.0.5",
//     "@radix-ui/react-icons": "^1.3.0",
//     "@radix-ui/react-label": "^2.0.2",
//     "@radix-ui/react-navigation-menu": "^1.2.0",
//     "@radix-ui/react-popover": "^1.1.1",
//     "@radix-ui/react-progress": "^1.0.3",
//     "@radix-ui/react-radio-group": "^1.1.3",
//     "@radix-ui/react-scroll-area": "^1.1.0",
//     "@radix-ui/react-separator": "^1.0.3",
//     "@radix-ui/react-slot": "^1.0.2",
//     "@radix-ui/react-tabs": "^1.1.0",
//     "@radix-ui/react-toast": "^1.1.4",
//     "@radix-ui/react-tooltip": "^1.1.2",
//     "@spotify/web-api-ts-sdk": "^1.2.0",
//     "@tanstack/react-query": "^4.36.1",
//     "@types/react-dom": "18.2.7",
//     "@upstash/ratelimit": "^2.0.1",
//     "@upstash/redis": "^1.34.0",
//     "@upstash/semantic-cache": "^1.0.4",
//     "@upstash/vector": "^1.1.5",
//     "@vercel/analytics": "^1.3.1",
//     "ai": "^3.3.9",
//     "ai-react": "^0.0.0",
//     "assert": "^2.1.0",
//     "autoprefixer": "10.4.15",
//     "axios": "^1.4.0",
//     "browserify-zlib": "^0.2.0",
//     "buffer": "^6.0.3",
//     "class-variance-authority": "^0.7.0",
//     "clsx": "^2.0.0",
//     "convex": "^1.14.1",
//     "critters": "^0.0.24",
//     "crypto-browserify": "^3.12.0",
//     "date-fns": "^3.6.0",
//     "embla-carousel-autoplay": "^8.1.8",
//     "embla-carousel-react": "^8.1.8",
//     "eslint": "8.47.0",
//     "eslint-config-next": "13.4.19",
//     "framer-motion": "^10.16.0",
//     "geist": "^1.3.1",
//     "https": "^1.0.0",
//     "https-browserify": "^1.0.0",
//     "keyword-extractor": "^0.0.28",
//     "langchain": "^0.2.16",
//     "leaflet": "^1.9.4",
//     "link-preview-js": "^3.0.5",
//     "lucide-react": "^0.268.0",
//     "next": "^14.2.5",
//     "next-auth": "^4.24.7",
//     "next-nprogress-bar": "^2.3.13",
//     "next-themes": "^0.2.1",
//     "openai": "^4.53.0",
//     "os-browserify": "^0.3.0",
//     "path-browserify": "^1.0.1",
//     "portkey-ai": "^1.3.2",
//     "postcss": "^8.4.40",
//     "process": "^0.11.10",
//     "punycode": "^2.3.1",
//     "querystring": "^0.2.1",
//     "querystring-es3": "^0.2.1",
//     "react": "^18.3.1",
//     "react-copy-to-clipboard": "^5.1.0",
//     "react-d3-cloud": "^0.6.0",
//     "react-dom": "^18.3.1",
//     "react-hook-form": "^7.45.4",
//     "react-icons": "^5.2.1",
//     "react-intersection-observer": "^9.13.0",
//     "react-leaflet": "^4.2.1",
//     "react-markdown": "^9.0.1",
//     "react-textarea-autosize": "^8.5.3",
//     "react-toggle-dark-mode": "^1.1.1",
//     "react-tooltip": "^5.28.0",
//     "shadcn-ui": "^0.2.3",
//     "stream-browserify": "^3.0.0",
//     "stream-http": "^3.2.0",
//     "string-similarity": "^4.0.4",
//     "stripe": "^13.2.0",
//     "svix": "^1.29.0",
//     "tailwind-merge": "^1.14.0",
//     "tailwindcss": "3.3.3",
//     "tailwindcss-animate": "^1.0.6",
//     "url": "^0.11.4",
//     "vm-browserify": "^1.1.2",
//     "xlsx": "^0.18.5",
//     "youtube-transcript": "^1.0.6",
//     "zod": "^3.22.2"
//   },
//   "devDependencies": {
//     "@types/next-auth": "^3.13.0",
//     "@types/node": "^22.1.0",
//     "@types/react": "^18.3.3",
//     "@types/string-similarity": "^4.0.2",
//     "@types/webpack": "^5.28.5",
//     "prisma": "^5.17.0",
//     "typescript": "^5.5.4"
//   }
// }


//layout.tsx of LLM Search Engine

// import type { Metadata } from 'next';
// import { GeistMono } from 'geist/font/mono';
// import { GeistSans } from 'geist/font/sans';
// import { Analytics } from '@vercel/analytics/react';
// import { Toaster } from '@/components/ui/toaster';
// import './globals.css';

// import { AI } from './action';
// import { Header } from '@/components/header';
// import { Providers } from '@/components/providersa';

// const meta = {
//   title: 'answers, how they should be displayed.',
//   description:
//     'anwser engine built by developers digest',
// };
// export const metadata: Metadata = {
//   ...meta,
//   title: {
//     default: 'answer website',
//     template: `%s - answer website`,
//   },
//   icons: {
//     icon: '/favicon.ico',
//     shortcut: '/favicon-16x16.png',
//     apple: '/apple-touch-icon.png',
//   },
//   twitter: {
//     ...meta,
//     card: 'summary_large_image',
//     site: '@vercel',
//   },
//   openGraph: {
//     ...meta,
//     locale: 'en-US',
//     type: 'website',
//   },
// };

// export const viewport = {
//   themeColor: [
//     { media: '(prefers-color-scheme: light)', color: 'white' },
//     { media: '(prefers-color-scheme: dark)', color: 'black' },
//   ],
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
//       <body
//         className={`font-sans antialiased ${GeistSans.variable} ${GeistMono.variable}`}
//       >
//         <Toaster />
//         <AI>
//           <Providers
//             attribute="class"
//             defaultTheme="system"
//             enableSystem
//             disableTransitionOnChange
//           >
//             <div className="flex flex-col min-h-screen">
//               <Header />
//               <main className="flex flex-col flex-1 bg-muted/50 dark:bg-background px-4">
//                 {children}
//               </main>
//             </div>
//           </Providers>
//         </AI>
//         <Analytics />
//       </body>
//     </html>
//   );
// }

// export const runtime = 'edge';



// Import required modules
require('dotenv').config();
import fetch from 'node-fetch';

// Define a function to test the OpenAI API key
async function testOpenAIKey() {
    try {
        // Make a request to the OpenAI API to list available models
        const response = await fetch('https://api.openai.com/v1/models', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
                'Content-Type': 'application/json',
            },
        });

        // Check if the response is OK
        if (!response.ok) {
            throw new Error(`Failed to fetch models. Status: ${response.status}`);
        }

        // Parse and log the response data
        const data = await response.json();
        console.log('Models:', data);

    } catch (error) {
        // Log any errors that occur
        console.error('Error testing OpenAI API key:', error.message);
    }
}

// Run the test function
testOpenAIKey();
