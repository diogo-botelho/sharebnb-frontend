import { useState, useEffect } from "react";

function Loading({ text = "Loading", speed = 300 }) {
  const [content, setContent] = useState(text);

  useEffect(() => {
    const id = window.setInterval(() => {
      setContent((content) => {
        return content === `${text}...` ? text : `${content}.`;
      });
    }, speed);

    return window.clearInterval(id);
  }, [text, speed]);

  return (
    <p
      style={{
        fontSize: "35px",
        position: "absolute",
        left: "0",
        right: "0",
        marginTop: "20px",
        textAlign: "center",
      }}
    >
      {content}
    </p>
  );
}

export default Loading;
