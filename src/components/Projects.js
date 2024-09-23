import React from 'react';  
import Grid from '@mui/material/Grid2';

export function Projects() {

    return(
        <Grid sx={{
            backgroundColor: '#f6e9d9',
            display: 'flex',
            color: '#282c34',
            flexDirection: 'column',
            borderRadius: 1,
            alignItems: 'center',
            px: 4,
        }}>
            <h1 sx={{ fontSize: '10rem', marginBottom: 2 }}>Projects</h1>

       

            <Grid container >
            <Grid xs={12}>
                    <h2 sx={{ fontSize: '1.5rem', marginBottom: 1 }}>
                        <a href="nikkitpt.github.io/chord-getter/">Chord Getter</a>
                    </h2>
                    <p sx={{ paddingBottom: '200px', flex: '1', fontSize: '2rem' }}>
                        Stack: Python (Flask), JavaScript (React)  
                    </p>
                    <p>Description:  Chord Getter is a web-based application that allows users to extract chords from audio files. The app provides musicians and music enthusiasts with an easy way to visualize and access the chords for their favorite songs.</p>
                    <p>
                        <a href="https://github.com/Nikkitpt/chord-getter">Github Repo</a>
                    </p>
                    <p>
                        <a href="https://nikkitpt.github.io/chord-getter/">Live Link</a>
                    </p>
                </Grid>

                <Grid xs={12}>
                    <h2 sx={{ fontSize: '1.5rem', marginBottom: 1 }}>
                        <a href="nikkitpt.github.io/DefiSciFi/">DefiScifi</a>
                        
                    </h2>
                    <p sx={{ paddingBottom: '200px', flex: '1', fontSize: '2rem' }}>
                        Stack: Python (Flask), JavaScript (React)
                    </p>
                    <p>Description: This project is a decentralized finance dashboard built to demonstrate my understanding of crypto technologies. The application allows users to simulate lending, borrowing, and staking transactions using testnet Ethereum, showcasing my skills in Flask for backend development and React for frontend integration with decentralized systems.</p>
                    <p>
                        <a href="https://github.com/Nikkitpt/DefiSciFi">Github Repo</a>
                    </p>
                    <p>
                        {/* <a href="braveheartsmoveny.org">Live Link</a> */}
                        Live Link
                    </p>
                </Grid>

                <Grid xs={12}>
                    <h2 sx={{ fontSize: '1.5rem', marginBottom: 1 }}>
                        {/* <a href="https://github.com/Nikkitpt/todo_pomodoro">Roland Sampler Clone</a> */}
                        Roland Sampler Clone
                    </h2>
                    <p sx={{ paddingBottom: '200px', flex: '1', fontSize: '2rem' }}>
                        Stack: JavaScript, three.js
                    </p>
                    <p>Description:  Sampler is an interactive 3D visualizer designed to recreate the DJFX looper functionality found on the Roland SP404. Built with Three.js, this tool allows users to interact with sound samples in real-time, mimicking the SP404's looping and sound manipulation features. It provides an immersive experience by combining audio and visual elements, demonstrating my skills in 3D web development and creative coding.</p>
                    <p>
                        <a href="https://github.com/Nikkitpt/sampler">Github Repo</a>
                    </p>
                    <p>
                        {/* <a href="braveheartsmoveny.org">Live Link</a> */}
                        Live Link
                    </p>
                </Grid>
                <Grid xs={12}>
                    <h2 sx={{ fontSize: '1.5rem', marginBottom: 1 }}>
                        <a href="https://braveheartsmoveny.org">Nonprofit Website</a>
                    </h2>
                    <p sx={{ paddingBottom: '200px', flex: '1', fontSize: '2rem' }}>
                        Stack: JavaScript. Html, Css
                    </p>
                    <p>Description:  I designed and implemented a website for Bravehearts Move NY, a nonprofit organization, I created a user-friendly, visually appealing, and responsive site. The platform integrates donation functionality, a staff section, and an easy-to-manage interface, ensuring the nonprofit can easily update content without technical expertise.</p>
                    <p>
                        <a href="https://braveheartsmoveny.org">Live Link</a>
                    </p>
                </Grid>


            </Grid>
        </Grid>

       
    );
} 
