import '@/styles/styles.css'
import Topbar from '@/components/Topbar'
import Menubar from '@/components/Menubar'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'antd/dist/antd.js'
import { useEffect } from "react";
export default function App({ Component, pageProps }) {
  useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  
  return <>
            <Topbar />
            <Menubar />
            <Component {...pageProps} /> 
  </>
}
