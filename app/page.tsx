import Header from "./components/client/Header";
import Main from "./components/server/Main";
import Footer from "./components/server/Footer";
import Promo from "./components/server/Promo";
import Input from "./components/client/Input";
import { headers } from 'next/headers'
import { isMobile } from './utils/isMobile';

export default function Home() {

  const userAgent = headers().get("user-agent") || "";
  const mobileCheck = isMobile(userAgent);

  return (
    <>
      <Header isMobile={mobileCheck} />
      <Main InputComponent={<Input isMobile={mobileCheck}/>}/>
      <Promo />
      <Footer />
    </>
  );
}
