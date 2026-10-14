import type { Metadata } from 'next'
import { Noto_Sans_Thai } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'

const notoSansThai = Noto_Sans_Thai({
  subsets: ['thai', 'latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-noto-sans-thai',
  adjustFontFallback: true,
})

export const metadata: Metadata = {
  title: 'Marcuz | ระบบเว็บไซต์ระดับพรีเมียมและระบบอัตโนมัติ AI',
  description: 'จากไอเดียสู่ระบบดิจิทัลที่พร้อมใช้งานจริง Marcuz สร้างเว็บไซต์เน้นยอดขาย เครื่องมือ AI และระบบอัตโนมัติสำหรับธุรกิจ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="th" className="scroll-smooth">
      <body className={`${notoSansThai.variable} ${notoSansThai.className} bg-[#05070D] text-white selection:bg-accent-violet selection:text-white`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
