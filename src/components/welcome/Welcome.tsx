import React from 'react';
import { ReactComponent as WelcomeText } from './WelcomeText.svg';
import './Welcome.css'; 

const Welcome = () => {
    const setTextAnimation = (delay: number, duration: number, strokeWidth: number, timingFunction: string, strokeColor: string, repeat: boolean) => {
        let paths = document.querySelectorAll<SVGPathElement>(".welcome-container path")
        let mode=repeat?'infinite':'forwards'
        for (let i = 0; i < paths.length; i++) {
            const path: any = paths[i];
            const length = path.getTotalLength();
            path.style["stroke-dashoffset"] = `${length}px`;
            path.style["stroke-dasharray"] = `${length}px`;
            path.style["stroke-width"] = `${strokeWidth}px`;
            path.style["stroke"] = `${strokeColor}`;
            path.style["animation"] = `${duration}s svg-text-anim ${mode} ${timingFunction}`;
            path.style["animation-delay"] = `${i * delay}s`;
        }
    }
    React.useEffect(() => {
        setTextAnimation(0.1,4,1,'linear','#ffffff',false);
    })
    return (
        <div id="welcome-container" className="welcome-container">
            <WelcomeText />
        </div>
    )
};

export default Welcome;