import "@styles/globals.css";

import Nav from "@components/Nav";
import Provider from "@components/Provider";
import Image from "next/image";

export const metadata = {
  title: "CardzMe",
  description: "Partagez & Exprimez Vos Idées",
};

const RootLayout = ({ children }) => (
  <html lang='en'>
    <body>
      <Provider>
        <div className='main'>
          <div className='gradient' />
          {/* <div  >
            <Image          src='/assets/images/logo2.svg'
          alt='logo'
          width={300}
          height={300}
          className='object-contain'/>  
          </div> */}
        </div>

        <main className='app'>
          <Nav />
          {children}
        </main>
      </Provider>
    </body>
  </html>
);

export default RootLayout;
