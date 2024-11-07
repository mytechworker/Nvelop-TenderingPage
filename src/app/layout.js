import './globals.css';

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="bg-[#F4F4F4] text-customBlack">
                {children}
            </body>
        </html>
    );
}
