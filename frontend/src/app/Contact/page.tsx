// src/app/contact/page.tsx
import { Mail, Phone, Linkedin, Github } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function ContactPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg:background dark:background p-8">
      <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-gray-100">
        Get in Touch
      </h1>
      <div className="w-full max-w-md space-y-4">
        {/* Email */}
        <a
          href="mailto:molka.patrick@gmail.com"
          className="flex items-center space-x-4 p-4 rounded-xl bg-white dark:bg-gray-800 hover:shadow-lg transition"
          aria-label="Send email"
        >
          <div className="p-2 bg-indigo-100 dark:bg-indigo-900 rounded-full">
            <Mail className="text-indigo-600 dark:text-indigo-300" size={24} />
          </div>
          <span className="text-lg font-medium text-gray-900 dark:text-gray-100">
            molka.patrick@gmail.com
          </span>
        </a>

        {/* Phone */}
        <a
          href="tel:+14168711525"
          className="flex items-center space-x-4 p-4 rounded-xl bg-white dark:bg-gray-800 hover:shadow-lg transition"
          aria-label="Call phone number"
        >
          <div className="p-2 bg-indigo-100 dark:bg-indigo-900 rounded-full">
            <Phone className="text-indigo-600 dark:text-indigo-300" size={24} />
          </div>
          <span className="text-lg font-medium text-gray-900 dark:text-gray-100">
            +1 (416) 871-1525
          </span>
        </a>

        {/* LinkedIn */}
        <Link
          href="https://www.linkedin.com/in/patmolka"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-4 p-4 rounded-xl bg-white dark:bg-gray-800 hover:shadow-lg transition"
          aria-label="Visit LinkedIn profile"
        >
          <div className="p-2 bg-indigo-100 dark:bg-indigo-900 rounded-full">
            <Linkedin className="text-indigo-600 dark:text-indigo-300" size={24} />
          </div>
          <span className="text-lg font-medium text-gray-900 dark:text-gray-100">
            linkedin.com/in/patmolka
          </span>
        </Link>
        {/* GitHub */}
        <Link
          href="https://github.com/patrmo"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-4 p-4 rounded-xl bg-white dark:bg-gray-800 hover:shadow-lg transition"
          aria-label="Visit LinkedIn profile"
        >
          <div className="p-2 bg-indigo-100 dark:bg-indigo-900 rounded-full">
            <Github className="text-indigo-600 dark:text-indigo-300" size={24} />
          </div>
          <span className="text-lg font-medium text-gray-900 dark:text-gray-100">
            github.com/patrmo
          </span>
        </Link>
      </div>
    </main>
)
}
