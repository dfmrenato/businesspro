import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export default function MainLayout({ children }) {
    return (
        <>
            <main className={montserrat.className}>
                {children}
            </main>
        </>
    )
}