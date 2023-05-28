import React from "react";

interface IconProps {
  name?: string;
  className?: string;
}

const Icon: React.FC<IconProps> = (props) => {
  if (props.name === "") {
    return null;
  }

  try {
    const Image = require(`./stock/${props.name}`).default;

    if (Image) {
      return <Image aria-label={props.name} className={`icon ${props.className}`} {...props} />;
    }
    return null;
  } catch (error) {
    console.error("Icon not found", error);
    return null;
  }
};

Icon.defaultProps = {
  className: "",
};

export default Icon;
