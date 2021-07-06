import React, { useState } from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";
import ModalVideo from "react-modal-video";

function HeroSection({ children, type, onClick, buttonStyle, buttonSize }) {
  const [isOpen, setOpen] = useState(false);

  const STYLES = ["btn--primary", "btn--outline"];

  const SIZE = ["btn--medium", "btn--large"];

  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZE.includes(buttonSize) ? buttonSize : SIZE[0];

  return (
    <div className="hero-container">
      <video src="/videos/video-2.mp4" autoPlay loop muted />
      <h1>CODING ADVENTURE</h1>
      <p>What are you awaiting?</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn-outline"
          buttonSize="btn--large"
        >
          Get started
        </Button>
        <ModalVideo
          channel="youtube"
          autoplay
          isOpen={isOpen}
          videoId="D7Z1ke-6NLQ"
          onClose={() => setOpen(false)}
        />

        <button
          className={`btn ${checkButtonStyle} ${checkButtonSize}`}
          onClick={onClick}
          type={type}
          onClick={() => setOpen(true)}
          className="oneButton"
          buttonStyle="btn-primary"
          buttonSize="btn--large"
        >
          Watch trailer <i className="far fa-play-circle" />
        </button>
      </div>
    </div>
  );
}

export default HeroSection;
