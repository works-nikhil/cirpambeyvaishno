import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
      <div className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Bottom area */}
          <div className="flex justify-center">
            {/* Copyrights note */}
            <p className="text-gray-200 text-sm mr-4">
              &copy; M/s Ambey Vaishno Steels Pvt. Ltd. B-71, Kagal MIDC, in the Karveer sub-district of Kolhapur, Maharashtra.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
