import "./globals.css";
import PrelineScript from "@/components/PrelineScript";

export const metadata = {
  title: "Hackathoon",
  description:
    "We are a team of developers who love to code. So why not code for a good cause? Join our hackathons and let's make it happen!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <PrelineScript />
        {children}
      </body>
    </html>
  );
}
