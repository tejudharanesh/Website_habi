import React, { useEffect, useState } from "react";

const featuresData = [
  {
    title: "Design",
    description:
      "We design homes for practical, modern living. We focus on creating fully functional spaces with plenty of storage and energy-efficient features, all thoughtfully planned to make life more comfortable and convenient.",
    icon: "🔧", // Placeholder for icon
  },
  {
    title: "Comfort",
    description:
      "Focused on comfort and functionality, each space is crafted to enhance ease of living and promote relaxation.",
    icon: "🛋️",
  },
  // Add more features as needed
];

const FeatureSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % featuresData.length);
    }, 1500); // Change feature every 1.5 seconds

    return () => clearInterval(interval); // Clean up on component unmount
  }, []);

  return (
    <div id="features-container">
      <h1>Why Habi</h1>
      {featuresData.map((feature, index) => (
        <div
          key={index}
          className={`feature ${index === currentIndex ? "show" : ""}`}
        >
          <div className="icon">{feature.icon}</div>
          <h2>{feature.title}</h2>
          <p>{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FeatureSection;
