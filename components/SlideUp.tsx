import { useEffect, useState } from "react";

interface TextProp {
    children: JSX.Element;
    delay?: number;
}

const SlideUp = ({ children, delay = 500 }: TextProp) => {
    // const [hasAnimated, setHasAnimated] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        // Start the animation sequence after a short delay
        const timer = setTimeout(() => {
            setIsAnimating(true); // Start the animation
        }, delay); // Adjust this for the desired delay before the text appears

        return () => clearTimeout(timer); // Cleanup timer on unmount
    }, []);

    return (
        <div
            className={`text-center transition-transform duration-1000 ${isAnimating ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
                }`}
        >
            {children}
        </div>
    );
};

export default SlideUp;
