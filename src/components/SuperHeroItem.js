import React from 'react';
import {
    CircularProgressbar,
    buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import AnimatedProgressProvider from './AnimatedProgressProvider';

import { easeQuadIn, easeCircle, easeBounce, easeCubic } from 'd3-ease';
import Header from './Header';

const SuperHeroItem = ({ superHeroData }) => {

    const { intelligence, strength, durability, speed, power, combat } = superHeroData.powerstats

    return (
        <>
            <Header />
            {/* {intelligence}<br/>
        {speed}<br/>
        {durability}<br/>
        {power}<br/>
        {combat}<br/>
        {strength}<br/> */}
            <div className='main-container'>
                <div className='left-container'>
                    {/* Add Image here */}
                    <img src={superHeroData.image.url} className='popularImage superHeroImage'></img>
                    <p>
                        <div className='superHeroName'>Name:{superHeroData.name}</div>
                        <div className='superHeroGender'>Gender: {superHeroData.appearance.gender}</div>
                        <div className='superHeroHeight'>Height: {JSON.stringify(superHeroData.appearance.height)}</div>
                        <div className='superHeroHeight'>Weight: {JSON.stringify(superHeroData.appearance.weight)}</div>
                    </p>
                </div>
                <div className='right-container'>
                    {/* All Porgress bar and info will go here */}
                    <div className='progress-container'>
                        <AnimatedProgressProvider
                            valueStart={0}
                            valueEnd={intelligence}
                            duration={1.4}
                            easingFunction={easeQuadIn}
                            repeat>
                            {value => {
                                return (
                                    <CircularProgressbar
                                        value={value}
                                        text={intelligence}
                                        background
                                        /* This is important to include, because if you're fully managing the
                                  animation yourself, you'll want to disable the CSS animation. */
                                        styles={buildStyles({ pathTransition: "none", textColor: 'black', backgroundColor: '#99ccff', pathColor: '#0080ff' })}
                                    />
                                );
                            }}
                        </AnimatedProgressProvider>
                        <div className='progress-description'>Intelligence</div>
                    </div>
                    <div className='progress-container'>
                        <AnimatedProgressProvider
                            valueStart={0}
                            valueEnd={strength}
                            duration={1.4}
                            easingFunction={easeQuadIn}
                            repeat>
                            {value => {
                                return (
                                    <CircularProgressbar
                                        value={value}
                                        text={strength}
                                        background
                                        /* This is important to include, because if you're fully managing the
                                  animation yourself, you'll want to disable the CSS animation. */
                                        styles={buildStyles({ pathTransition: "none", textColor: 'black', backgroundColor: '#99ccff', pathColor: '#0080ff' })}
                                    />
                                );
                            }}
                        </AnimatedProgressProvider>
                        <div className='progress-description'>Strength</div>
                    </div>
                    <div className='progress-container'>
                        <AnimatedProgressProvider
                            valueStart={0}
                            valueEnd={durability}
                            duration={1.4}
                            easingFunction={easeQuadIn}
                            repeat>
                            {value => {
                                return (
                                    <CircularProgressbar
                                        value={value}
                                        text={durability}
                                        background
                                        /* This is important to include, because if you're fully managing the
                                  animation yourself, you'll want to disable the CSS animation. */
                                        styles={buildStyles({ pathTransition: "none", textColor: 'black', backgroundColor: '#99ccff', pathColor: '#0080ff' })}
                                    />
                                );
                            }}
                        </AnimatedProgressProvider>
                        <div className='progress-description'>Durability</div>
                    </div>
                    <div className='progress-container'>
                        <AnimatedProgressProvider
                            valueStart={0}
                            valueEnd={speed}
                            duration={1.4}
                            easingFunction={easeQuadIn}
                            repeat>
                            {value => {
                                return (
                                    <CircularProgressbar
                                        value={value}
                                        text={speed}
                                        background
                                        /* This is important to include, because if you're fully managing the
                                  animation yourself, you'll want to disable the CSS animation. */
                                        styles={buildStyles({ pathTransition: "none", textColor: 'black', backgroundColor: '#99ccff', pathColor: '#0080ff' })}
                                    />
                                );
                            }}
                        </AnimatedProgressProvider>
                        <div className='progress-description'>Speed</div>
                    </div>
                    <div className='progress-container'>
                        <AnimatedProgressProvider
                            valueStart={0}
                            valueEnd={power}
                            duration={1.4}
                            easingFunction={easeQuadIn}
                            repeat>
                            {value => {
                                return (
                                    <CircularProgressbar
                                        value={value}
                                        text={power}
                                        background
                                        /* This is important to include, because if you're fully managing the
                                  animation yourself, you'll want to disable the CSS animation. */
                                        styles={buildStyles({ pathTransition: "none", textColor: 'black', backgroundColor: '#99ccff', pathColor: '#0080ff' })}
                                    />
                                );
                            }}
                        </AnimatedProgressProvider>
                        <div className='progress-description'>Power</div>
                    </div>
                    <div className='progress-container'>
                        <AnimatedProgressProvider
                            valueStart={0}
                            valueEnd={combat}
                            duration={1.4}
                            easingFunction={easeQuadIn}
                            repeat>
                            {value => {
                                return (
                                    <CircularProgressbar
                                        value={value}
                                        text={combat}
                                        background
                                        /* This is important to include, because if you're fully managing the
                                  animation yourself, you'll want to disable the CSS animation. */
                                        styles={buildStyles({ pathTransition: "none", textColor: 'black', backgroundColor: '#99ccff', pathColor: '#0080ff' })}
                                    />
                                );
                            }}
                        </AnimatedProgressProvider>
                        <div className='progress-description'>Combat</div>
                    </div>

                </div>
            </div>
            <div>
                {JSON.stringify(superHeroData)}
            </div>
        </>
    )
}

export default SuperHeroItem
