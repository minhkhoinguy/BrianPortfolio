import "../styles/Portfolio.css";
import  Page1 from "./pages/page1"
import Page2 from "./pages/page2"
import  Page3 from "./pages/page3"
import Branding from "./pages/branding"

export default function Portfolio() {
  return (
    <div>
      <Page1/>
      <Page2/>
      <Page3/>
      <Branding/>
    </div>
  );
}
