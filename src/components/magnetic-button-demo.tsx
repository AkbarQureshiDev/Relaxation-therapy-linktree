import { MagneticButton } from "./ui/magnetic-button";

export default function MagneticButtonDemo() {
  const handleClick = () => {
    window.open("https://wa.me/966546420141", "_blank");
  };
  return (
    <div className="magnetic-demo-container">
      <MagneticButton>
        <button
          onClick={handleClick}
          className="magnetic-btn"
        >
          Chat on Whatsapp
        </button>
      </MagneticButton>
    </div>
  );
}
