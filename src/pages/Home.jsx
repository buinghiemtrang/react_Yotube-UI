import React from 'react'

import Section, { SectionTitle, SectionBody } from '../components/Section'
import PolicyCard from '../components/PolicyCard'
import Grid from '../components/Grid'
import VideoThumb from '../components/VideoThumb'
import VideoTrending from '../components/VideoTrending'

import policy from '../assets/data/policy'
import videoThumb from '../assets/data/thumb'
import videoTrending from '../assets/data/trending'

const Home = () => {
    return (
        <div>
            {/* policy card */}
            <Section>
                <SectionBody>
                    <Grid
                        col={5}
                        gap={10}
                    >
                        {
                            policy.map((item, index) => 
                                <PolicyCard
                                    key={index}
                                    icon={item.icon}
                                    name={item.name}
                                />
                            )
                        }
                    </Grid>
                </SectionBody>
            </Section>
            
            {/* video thumdnail */}
            <Section>
                <SectionTitle>
                    ▶️ Video liên quan
                </SectionTitle>
                <SectionBody>
                    <Grid
                        col={5}
                        gap={10}
                    >
                        {
                            videoThumb.map((item, index) => 
                                <VideoThumb
                                    key={index}
                                    img={item.img}
                                    title={item.title}
                                    channel={item.channel}
                                    view={item.view}
                                />
                            )
                        }
                    </Grid>
                </SectionBody>
                <hr />
            </Section>

            {/* video trending */}
            <Section>
                <SectionTitle>
                    Video thịnh hành
                </SectionTitle>
                <SectionBody>
                <Grid
                        col={1}
                        gap={40}
                    >
                        {
                            videoTrending.map((item, index) => 
                                <VideoTrending
                                    key={index}
                                    img={item.img}
                                    title={item.title}
                                    channel={item.channel}
                                    view={item.view}
                                    description={item.description}
                                />
                            )
                        }
                    </Grid>
                </SectionBody>
            </Section>
        </div>
    )
}

export default Home
