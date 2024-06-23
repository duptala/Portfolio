import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface HoverBoxProps {
    children: React.ReactNode;
    className?: string;
    isClickable?: boolean;
    link?: string;
}

const HoverBox: React.FC<HoverBoxProps> = ({
    children,
    className,
    isClickable = false,
    link,
}) => {
    const boxRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const box = boxRef.current;
        if (!box) return;

        const handleMouseMove = (event: MouseEvent) => {
            const rect = box.getBoundingClientRect();
            const mouseX = event.clientX - rect.left;
            const mouseY = event.clientY - rect.top;

            const offsetX = (mouseX - rect.width / 2) * 0.03;
            const offsetY = (mouseY - rect.height / 2) * 0.03;

            box.style.transform = `scale(1.02) translate(${offsetX}px, ${offsetY}px)`;
        };

        const handleMouseLeave = () => {
            box.style.transform = 'scale(1.0)';
        };

        // adding event listeners
        box.addEventListener('mousemove', handleMouseMove);
        box.addEventListener('mouseleave', handleMouseLeave);

        // removing event listeners
        return () => {
            box.removeEventListener('mousemove', handleMouseMove);
            box.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <>
            {isClickable && link ? (
                <div ref={boxRef} className={`transition-transform duration-150 ease-linear ${className}`}>
                    <Link to={link} className="hover-box-link" style={{ pointerEvents: 'auto' }}>
                        {children}
                    </Link>
                </div>
            ) : (
                <div ref={boxRef} className={`transition-transform duration-150 ease-linear ${className}`}>
                    {children}
                </div>
            )}
        </>
    );
};
export default HoverBox;