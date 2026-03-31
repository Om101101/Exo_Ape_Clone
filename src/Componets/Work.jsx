import React, { useState, useRef } from "react";

const elms = [
  {
    title: "Pixel Flakes",
    description: "Architectural Marketing Campaign",
    index: "01",
    videoSrc:
      "https://download-video-ak.vimeocdn.com/v3-1/playback/4692069d-08ba-4820-846c-31007f25c1ee/3109df1e?__token__=st=1774951564~exp=1774955164~acl=%2Fv3-1%2Fplayback%2F4692069d-08ba-4820-846c-31007f25c1ee%2F3109df1e%2A~hmac=4eeff6164d8f1a6be17cc91fc74e71a9ce2e49bae43ed23992683884b5e8806a&r=dXMtd2VzdDE%3D",
    imageSrc:
      "https://a.storyblok.com/f/133769/2400x2990/729680ed7f/ottografie-2025-hero.jpg/m/1300x1620/filters:quality(90)",
    ml: "8%",
    width: "38%",
    ratio: "3/4",
  },
  {
    title: "Lumière Studio",
    description: "Brand Identity & Motion",
    index: "02",
    videoSrc:
      "https://download-video-ak.vimeocdn.com/v3-1/playback/4692069d-08ba-4820-846c-31007f25c1ee/3109df1e?__token__=st=1774951564~exp=1774955164~acl=%2Fv3-1%2Fplayback%2F4692069d-08ba-4820-846c-31007f25c1ee%2F3109df1e%2A~hmac=4eeff6164d8f1a6be17cc91fc74e71a9ce2e49bae43ed23992683884b5e8806a&r=dXMtd2VzdDE%3D",
    imageSrc:
      "https://a.storyblok.com/f/133769/2400x2990/729680ed7f/ottografie-2025-hero.jpg/m/1300x1620/filters:quality(90)",
    ml: "54%",
    width: "30%",
    ratio: "3/4",
  },
  {
    title: "Monolith Co.",
    description: "Digital Experience Design",
    index: "03",
    videoSrc:
      "https://download-video-ak.vimeocdn.com/v3-1/playback/4692069d-08ba-4820-846c-31007f25c1ee/3109df1e?__token__=st=1774951564~exp=1774955164~acl=%2Fv3-1%2Fplayback%2F4692069d-08ba-4820-846c-31007f25c1ee%2F3109df1e%2A~hmac=4eeff6164d8f1a6be17cc91fc74e71a9ce2e49bae43ed23992683884b5e8806a&r=dXMtd2VzdDE%3D",
    imageSrc:
      "https://a.storyblok.com/f/133769/2400x2990/729680ed7f/ottografie-2025-hero.jpg/m/1300x1620/filters:quality(90)",
    ml: "28%",
    width: "34%",
    ratio: "4/5",
  },
  {
    title: "Void Works",
    description: "Interactive Installation",
    index: "04",
    videoSrc:
      "https://download-video-ak.vimeocdn.com/v3-1/playback/4692069d-08ba-4820-846c-31007f25c1ee/3109df1e?__token__=st=1774951564~exp=1774955164~acl=%2Fv3-1%2Fplayback%2F4692069d-08ba-4820-846c-31007f25c1ee%2F3109df1e%2A~hmac=4eeff6164d8f1a6be17cc91fc74e71a9ce2e49bae43ed23992683884b5e8806a&r=dXMtd2VzdDE%3D",
    imageSrc:
      "https://a.storyblok.com/f/133769/2400x2990/729680ed7f/ottografie-2025-hero.jpg/m/1300x1620/filters:quality(90)",
    ml: "62%",
    width: "22%",
    ratio: "3/4",
  },
];

function WorkCard({ item }) {
  const [hovered, setHovered] = useState(false);
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    setHovered(true);
    videoRef.current?.play();
  };

  const handleMouseLeave = () => {
    setHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        marginLeft: item.ml,
        width: item.width,
        marginBottom: "6vw",
      }}
    >
      {/* Media */}
      <div
        style={{
          width: "100%",
          aspectRatio: item.ratio,
          overflow: "hidden",
          position: "relative",
        }}
      >
        <img
          src={item.imageSrc}
          alt={item.title}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: hovered ? 0 : 1,
            transition: "opacity 0.5s ease",
          }}
        />
        <video
          ref={videoRef}
          src={item.videoSrc}
          muted
          loop
          playsInline
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: hovered ? 1 : 0,
            transition: "opacity 0.5s ease",
          }}
        />
      </div>

      {/* Caption */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginTop: "0.75rem",
        }}
      >
        <div>
          <p
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 600,
              fontSize: "clamp(0.9rem, 1.2vw, 1.1rem)",
              color: "#111",
              margin: 0,
              letterSpacing: "0.01em",
            }}
          >
            {item.title}
          </p>
          <p
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "clamp(0.6rem, 0.7vw, 0.72rem)",
              color: "#111",
              opacity: 0.4,
              margin: "0.2rem 0 0",
            }}
          >
            {item.description}
          </p>
        </div>
        <span
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: "0.62rem",
            opacity: 0.3,
            color: "#111",
            paddingTop: "0.1rem",
            flexShrink: 0,
          }}
        >
          {item.index}
        </span>
      </div>
    </div>
  );
}

function Work() {
  return (
    <div style={{ width: "100%", background: "#fff", paddingBottom: "8vw" }}>
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          padding: "6vw 8% 0",
        }}
      >
        <h1
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(5rem, 14vw, 13rem)",
            lineHeight: 0.9,
            letterSpacing: "-0.02em",
            color: "#111",
            margin: 0,
          }}
        >
          Work
        </h1>

        <div style={{ paddingTop: "1.5rem", maxWidth: "260px", flexShrink: 0 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
              marginBottom: "0.8rem",
            }}
          >
            <svg
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ width: "10px", flexShrink: 0 }}
            >
              <path
                d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"
                fill="#111"
              />
            </svg>
            <span
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.65rem",
                letterSpacing: "0.08em",
                color: "#111",
                textTransform: "uppercase",
              }}
            >
              Featured Projects
            </span>
          </div>
          <p
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "clamp(0.7rem, 0.85vw, 0.85rem)",
              lineHeight: 1.6,
              color: "#111",
              opacity: 0.6,
              margin: 0,
            }}
          >
            Highlights of cases that we passionately built with forward-thinking
            clients and friends over the years.
          </p>
        </div>
      </div>

      {/* Cards — natural vertical flow, only horizontal stagger */}
      <div style={{ marginTop: "5vw" }}>
        {elms.map((item, i) => (
          <WorkCard key={i} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Work;
