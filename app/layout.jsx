import Nav from "@components/Nav";
import "@styles/globals.css";
import Provider from "@components/Provider";
import Head from "next/head";

export const metadata = {
  title: "Promtopia",
  description: "Discover & Share AI prompts",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>
          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
