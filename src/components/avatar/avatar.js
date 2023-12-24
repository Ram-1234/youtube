import React from "react";

function Avtar({url, className, alt, title}) {
  const styles = {
    image: {
      background: "linear-gradient(90deg, red, blue, yellow, orange, purple, green, pink)",
      width: "40px",
      height: "40px",
      // border: "1px solid #fff",
      // padding: "4px",
      borderRadius: "50%",
      objectFit:"cover",
      boxSizing:"border-box"
    }
  };
  return (
    <img
      className={className}
      style={styles.image}
      src={url}
      alt={alt}
      title={title}
    />
  );
}

export default Avtar;
