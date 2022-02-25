import facebook from "../assets/Facebook Icon.png";
import github from "../assets/GitHub Icon.png";
import insta from "../assets/Instagram Icon.png";
import twitter from "../assets/Twitter Icon.png";

export default function Footer() {
    return (
        <div className="bg-[#161619] flex justify-center gap-8 py-4 rounded-b-xl">
            <img src={twitter} alt="" />
            <img src={facebook} alt="" />
            <img src={insta} alt="" />
            <img src={github} alt="" />
        </div>
    );
}
