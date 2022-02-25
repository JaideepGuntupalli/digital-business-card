import linkedinLogo from "../assets/linkedin.png";

export default function LinkedIn() {
    return (
        <a
            href="https://linkedin.com/in/gjdeep"
            className="bg-[#5093E2] text-white px-3 py-2 text-sm flex justify-center items-center rounded-lg"
        >
            <img src={linkedinLogo} alt="Linked in logo" className="pr-1" />
            LinkedIn
        </a>
    );
}
