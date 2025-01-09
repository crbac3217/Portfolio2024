import React, { useState, useEffect, useRef } from 'react';
import '../css/WelcomeSection.css';
import Paddle from './Paddle';
import Ball from './Ball';
import Brick from './Brick';

const generateBricks = () => {
    const isNarrowScreen = window.innerWidth <= 768; // Detect narrow screens (mobile or tablet)

    const bricks = [];
    const startX = isNarrowScreen ? 12 : 7.05; // Starting x position in vw
    const startY = isNarrowScreen ? 4 : 3; // Starting y position in vh

    // Dynamic brick dimensions and gap
    const brickWidth = isNarrowScreen ? 2 : 2.5; // Half width on narrow screens
    const brickHeight = isNarrowScreen ? 1 : 4; // Half height on narrow screens
    const gap = isNarrowScreen ? 0.3 : 0.15; // Double the gap on narrow screens

    const letters = [
        { name: 'B', pattern: [
            [1, 1, 1, 1, 0, 0],
            [1, 0, 0, 1, 0, 0],
            [1, 0, 0, 1, 0, 0],
            [1, 1, 1, 1, 1, 0],
            [1, 0, 0, 0, 1, 0],
            [1, 0, 0, 0, 1, 0],
            [1, 1, 1, 1, 1, 0]
        ]},
        { name: 'E', pattern: [
            [1, 1, 1, 1, 1, 0],
            [1, 0, 0, 0, 0, 0],
            [1, 0, 0, 0, 0, 0],
            [1, 1, 1, 1, 1, 0],
            [1, 0, 0, 0, 0, 0],
            [1, 0, 0, 0, 0, 0],
            [1, 1, 1, 1, 1, 0]
        ]},
        { name: 'N', pattern: [
            [1, 0, 0, 0, 1],
            [1, 1, 0, 0, 1],
            [1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1],
            [1, 0, 0, 0, 1]
        ]}
    ];

    let offsetX = startX;
    letters.forEach(letter => {
        letter.pattern.forEach((row, rowIndex) => {
            let offsetY = startY + rowIndex * (brickHeight + gap); // Calculate Y position with vertical gap
            row.forEach((cell, cellIndex) => {
                if (cell === 1) {
                    bricks.push({
                        id: `${letter.name}-${rowIndex}-${cellIndex}`,
                        x: offsetX + cellIndex * (brickWidth + gap), // Calculate X position with horizontal gap
                        y: offsetY,
                        width: brickWidth,
                        height: brickHeight
                    });
                }
            });
        });
        offsetX += (letter.pattern[0].length * (brickWidth + gap)) + gap; // Adjust for next letter
    });

    return bricks;
};



const Game = () => {
    const colors = ['9C77D8', 'A877D8', 'C577D8', 'E7D7F0', 'ECD7F0', 'F0D7EF', 'FC67A4', '9467FC'];
    const [ballColor, setBallColor] = useState(colors[0]);
    const [paddlePosition, setPaddlePosition] = useState(30); // Center in vw
    const [ballPosition, setBallPosition] = useState({ x: 30, y: 30 }); // Start position in vw and vh
    const [ballVelocity, setBallVelocity] = useState({ x: 0.25, y: 0.25 }); // Velocity in vw/vh per interval
    const [bricks, setBricks] = useState(generateBricks());
    const gameRef = useRef(null);

    const resetGame = () => {
        setPaddlePosition(30);
        setBallPosition({ x: 30, y: 30 });
        setBallVelocity({ x: 0.25, y: 0.25 });
        setBricks(generateBricks());
    };

    useEffect(() => {
        // Device orientation event
        const handleOrientation = (event) => {
            const { gamma } = event; // gamma is the left to right tilt in degrees, where right is positive

            // Convert gamma to a useful range for the paddle position
            const position = 30 + 20 * (gamma / 90); // Scale and shift gamma to fit the game's logic
            setPaddlePosition(Math.max(0, Math.min(position, 60))); // Clamp position to game width
        };

        // Check if the device supports orientation events
        if (window.DeviceOrientationEvent) {
            window.addEventListener('deviceorientation', handleOrientation);
        }

        return () => {
            window.removeEventListener('deviceorientation', handleOrientation);
        };
    }, []);

    useEffect(() => {
        const handleKeyPress = (event) => {
            const key = event.key.toUpperCase();
            if (key === "ARROWLEFT" || key === "A") {
                setPaddlePosition(prev => Math.max(prev - 2, 0));
            } else if (key === "ARROWRIGHT" || key === "D") {
                setPaddlePosition(prev => Math.min(prev + 1, 55));
            }
        };

        document.addEventListener('keydown', handleKeyPress);
        return () => document.removeEventListener('keydown', handleKeyPress);
    }, []);

    
    useEffect(() => {
        const handleResize = () => {
            setBricks(generateBricks());
        };
    
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    

    useEffect(() => {
        const interval = setInterval(() => {
            let newX = ballPosition.x + ballVelocity.x;
            let newY = ballPosition.y + ballVelocity.y;

            // Boundary collision detection
            if (newX <= 0 || newX >= 58) { // Ball boundary on the sides
                setBallVelocity(prev => ({ ...prev, x: -prev.x }));
                setBallColor(colors[Math.floor(Math.random() * colors.length)]);
            }
            if (newY <= 0) { // Ball hits the top
                setBallVelocity(prev => ({ ...prev, y: -prev.y }));
                setBallColor(colors[Math.floor(Math.random() * colors.length)]);
            }

            // Paddle collision
            if (newY + 1 >= 48 && newY + 1 < 52 && newX >= paddlePosition && newX <= paddlePosition + 5) {
                setBallVelocity(prev => ({ ...prev, y: -prev.y }));
                setBallColor(colors[Math.floor(Math.random() * colors.length)]);
            }

            // Brick collision detection
            let hit = false;
            const remainingBricks = bricks.filter(brick => {
                if (!hit && newX >= brick.x && newX <= brick.x + brick.width && newY >= brick.y && newY <= brick.y + brick.height) {
                    hit = true;
                    return false; // Collision detected, remove brick
                }
                return true;
            });

            if (hit) {
                setBallVelocity(prev => ({ ...prev, y: -prev.y }));
                setBallColor(colors[Math.floor(Math.random() * colors.length)]);
            }

            if (remainingBricks.length !== bricks.length) {
                setBricks(remainingBricks);
            }

            if(remainingBricks.length <= 0){
                resetGame();
            }

            setBallPosition({ x: newX, y: newY });

            if (newY >= 58) { // Bottom boundary condition to reset the game
                resetGame();
            }

        }, 20);

        return () => clearInterval(interval);
    }, [ballPosition, ballVelocity, bricks, paddlePosition]);

    return (
        <div ref={gameRef} className="game">
            <Paddle position={paddlePosition} />
            <Ball position={ballPosition} color={`#${ballColor}`} />
            {bricks.map((brick) => (
                <Brick key={brick.id} position={brick} />
            ))}
        </div>
    );
};

export default Game;