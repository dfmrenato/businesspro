import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export default function MainLayout({ children, ...props }) {
    return (
        <>
            <main 
                className={
                    props.className ? 
                        [props.className, montserrat.className].join(' ') 
                    :
                        montserrat.className}
                {...props}
            >
                {children}
            </main>
        </>
    )
}