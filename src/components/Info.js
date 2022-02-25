import headshot from "../assets/Jaideep-headshot.png";
import Email from "./Email";
import LinkedIn from "./LinkedIn";

export default function Info() {
    return (
        <div className="flex flex-col items-center font-sans">
            <img src={headshot} className="w-80" alt="Jaideep's Headshot" />
            <h1 className="text-white text-2xl pt-6 font-bold">
                Jaideep Guntupalli
            </h1>
            <h2 className="text-[#F3BF99] text-sm">Frontend Developer</h2>
            <a
                href="https://jaideepguntupalli.com"
                className="text-white text-[0.75rem] py-2 font-extralight"
            >
                jaideepguntupalli.com
            </a>
            <div className="flex justify-between w-3/4 py-2">
                <Email />
                <LinkedIn />
            </div>
        </div>
    );
}
