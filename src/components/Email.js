import mail from "../assets/Mail.png";

export default function Email() {
    return (
        <a
            href="https://linkedin.com/gjdeep"
            className="bg-white text-black px-3 py-2 text-sm rounded-lg w-5/12 flex justify-center"
        >
            <img src={mail} alt="Linked in logo" className="pr-1" />
            Email
        </a>
    );
}
