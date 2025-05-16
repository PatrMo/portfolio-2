// src/app/work-in-progress/page.tsx
'use client';

import React from 'react';
import { Hammer, HardHat } from 'lucide-react';
import { motion } from 'framer-motion';

export default function WorkInProgressPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-background px-4 text-center">
      <div className="flex items-center space-x-6 mb-6">
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
        >
          <Hammer className="scale-x-[-1] w-10 h-10 text-gray-600 dark:text-gray-300" />
        </motion.div>

        <HardHat className="w-16 h-16 text-yellow-500" />

        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
        >
          <Hammer className="w-10 h-10 text-gray-600 dark:text-gray-300" />
        </motion.div>
      </div>

      <h1 className="text-4xl font-bold text-foreground mb-4">
        Work in Progress
      </h1>
      <p className="text-lg text-muted-foreground max-w-md">
        This page is currently under construction.
        <br />
        Check back soon!
      </p>
    </main>
  );
}
