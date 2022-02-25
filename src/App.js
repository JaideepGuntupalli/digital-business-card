import Info from "./components/Info";
import About from "./components/About";
import Interests from "./components/Interests";
import Footer from "./components/Footer";

export default function App() {
    return (
        <div className="w-80 my-8 bg-[#1A1B21] rounded-lg">
            <Info />
            <About />
            <Interests />
            <Footer />
        </div>
    );
}
