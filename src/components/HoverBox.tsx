import React, { useRef, useEffect } from 'react';

interface HoverBoxProps {
    children: React.ReactNode;
    className?: string;
}

const HoverBox: React.FC<HoverBoxProps> = ({ children, className }) => {
    const boxRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            const box = boxRef.current;
            if (!box) return;

            const rect = box.getBoundingClientRect();
            const mouseX = event.clientX - rect.left;
            const mouseY = event.clientY - rect.top;

            const offsetX = (mouseX - rect.width / 2) * 0.02;
            const offsetY = (mouseY - rect.height / 2) * 0.02;

            box.style.transform = `scale(1.005) translate(${offsetX}px, ${offsetY}px)`;
        };

        const handleMouseLeave = () => {
            const box = boxRef.current;
            if (box) {
                box.style.transform = 'scale(1.0)';
            }
        };

        const box = boxRef.current;
        if (box) {
            box.addEventListener('mousemove', handleMouseMove);
            box.addEventListener('mouseleave', handleMouseLeave);
        }

        return () => {
            if (box) {
                box.removeEventListener('mousemove', handleMouseMove);
                box.removeEventListener('mouseleave', handleMouseLeave);
            }
        };
    }, []);

    return (
        <div
            className={`transition-transform duration-75 ease-linear ${className}`}
            ref={boxRef}
        >
            {children}
        </div>
    );
};

export default HoverBox;
