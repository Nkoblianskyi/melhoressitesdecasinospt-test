"use client"

import Image from "next/image"
import Link from "next/link"

export function Header() {
  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-center">
          <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary">
              <Image src="/favicon.ico" alt="Logo" width={32} height={32} />
            </div>
            <span className="text-xl font-bold text-foreground">MelhoresSitesDeCasinosPT</span>
          </Link>
        </div>
      </div>
    </header>
  )
}
