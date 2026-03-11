import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import HighwaysLogo from "../assets/logos/highways-logo.png";

const Home = () => {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const targetDate = new Date('2026-04-09T00:00:00');

        const updateTimer = () => {
            const now = new Date().getTime();
            const distance = targetDate.getTime() - now;

            if (distance < 0) {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
                return;
            }

            setTimeLeft({
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((distance % (1000 * 60)) / 1000)
            });
        };

        updateTimer();
        const timer = setInterval(updateTimer, 1000);

        const observerOptions = { threshold: 0.1 };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('reveal-active');
                }
            });
        }, observerOptions);

        document.querySelectorAll('section').forEach(section => {
            section.classList.add('reveal');
            observer.observe(section);
        });

        return () => {
            observer.disconnect();
            clearInterval(timer);
        };
    }, []);

    return (
        <div className="home-page">
            {/* HERO SECTION */}
            <section id="hero" className="hero" style={{
                position: 'relative',
                overflow: 'hidden',
                background: 'linear-gradient(to bottom, rgba(5,5,5,0.7), rgba(5,5,5,0.9)), url("https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2000&auto=format&fit=crop")',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}>
                <div className="hero-content animate-fade">
                    <div className="flex justify-center mb-12">
                        <img
                            src={HighwaysLogo}
                            alt="Highways Logo"
                            className="w-[95%] h-auto mx-auto"
                        />
                    </div>
                    <div className="hero-info">
                        <div className="premium-countdown">
                            {[
                                { value: timeLeft.days, label: 'DAYS' },
                                { value: timeLeft.hours, label: 'HOURS' },
                                { value: timeLeft.minutes, label: 'MINUTES' },
                                { value: timeLeft.seconds, label: 'SECONDS' }
                            ].map(({ value, label }) => (
                                <div key={label} className="countdown-card">
                                    <div className="card-top">
                                        <span className="countdown-number">
                                            {value.toString().padStart(2, '0')}
                                        </span>
                                    </div>
                                    <div className="card-bottom">
                                        <span className="countdown-label">{label}</span>
                                    </div>
                                    <div className="glow-bar"></div>
                                </div>
                            ))}
                        </div>
                        <div className="date-badge">APRIL 09, 10, 11</div>
                        <p className="hero-tagline">WHERE TRADITION MEETS THE FUTURE</p>
                    </div>
                    <div className="hero-btns">
                        <Link to="/events" className="btn-matsuri">Explore More</Link>
                    </div>
                </div>
            </section>

            {/* ABOUT SECTION */}
            <section id="about" className="about-section world-white" style={{ padding: '100px 0' }}>
                <div className="container">
                    <div className="about-flex">
                        <div className="about-text">
                            <h2 className="section-title left">THE SAGA BEGINS</h2>
                            <p>Highways is the annual intercollegiate cultural festival of Sri Venkateswara College of Engineering (SVCE). Known for its vibrant atmosphere and creative energy, Highways brings together students from across the states to celebrate art, talent, and expression.</p>
                            <p>This year, for <strong>Highways '26</strong>, we are pushing the boundaries of creativity. Experience a festival like never before, where every moment is a masterpiece and every event is a step into the extraordinary.</p>

                        </div>
                        <div className="about-image-container">
                            <div className="image-frame" style={{ position: 'relative' }}>
                                <img src="https://images.unsplash.com/photo-1542332213-31f87348057f?q=80&w=1200&auto=format&fit=crop" alt="Natural Scenery" className="main-about-img" style={{ width: '100%', borderRadius: '15px' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CELEBRITY GUESS SECTION */}
            <section id="celebrities" className="celebrity-section" style={{ padding: '100px 0' }}>
                <div className="container">
                    <h2 className="section-title center">CELEBRITY GUESS</h2>
                    <div className="celebrity-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px', marginTop: '50px' }}>
                        {[
                            { id: 1, type: "ACTOR", hint: "From the blockbusters of Tamil Cinema" },
                            { id: 2, type: "SINGER", hint: "The voice that stole a million hearts" },
                            { id: 3, type: "COMEDIAN", hint: "Laughter is coming to SVCE" },
                            { id: 4, type: "GUEST", hint: "A legend in the making" }
                        ].map(celeb => (
                            <motion.div
                                key={celeb.id}
                                whileHover={{ scale: 1.05 }}
                                className="celebrity-card-premium"
                                style={{
                                    background: 'rgba(255,255,255,0.03)',
                                    borderRadius: '30px',
                                    padding: '40px 20px',
                                    textAlign: 'center',
                                    border: '1px solid rgba(255,255,255,0.05)',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    cursor: 'pointer'
                                }}
                            >
                                <div className="mystery-circle" style={{
                                    width: '150px',
                                    height: '150px',
                                    margin: '0 auto 20px',
                                    background: 'rgba(255,255,255,0.05)',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '4rem',
                                    fontWeight: 900,
                                    color: '#ff4d4d',
                                    textShadow: '0 0 20px rgba(255, 77, 77, 0.4)'
                                }}>?</div>
                                <span style={{ color: '#ff4d4d', fontSize: '0.7rem', fontWeight: 900, letterSpacing: '4px' }}>{celeb.type}</span>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, margin: '10px 0' }}>COMING SOON</h3>
                                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem' }}>{celeb.hint}</p>
                                <div className="reveal-btn" style={{
                                    marginTop: '20px',
                                    background: 'white',
                                    color: 'black',
                                    padding: '8px 20px',
                                    borderRadius: '50px',
                                    fontSize: '0.75rem',
                                    fontWeight: 900
                                }}>REVEAL SOON</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* GLIMPSES SECTION: INFINITE DRIFT */}
            <section id="glimpses" className="glimpses-section-new" style={{ position: 'relative' }}>
                <div className="container" style={{ marginBottom: '4rem' }}>
                    <h2 className="section-title center">PAST GLIMPSES</h2>
                </div>

                <div className="glimpses-track-container" style={{ gap: '180px', marginTop: '100px' }}>
                    {[
                        { 
                            year: "2023", 
                            folder: "Highways 23", 
                            speed: "slow",
                            images: ['15.png', '9.png', '4.webp', '12.png', '18.png', '6.webp', '14.png', '10.png', '19.png', '2.webp', '11.png', '17.png', '8.png', '13.png', '16.png'] 
                        },
                        { 
                            year: "2024", 
                            folder: "Highways 24", 
                            speed: "med",
                            images: ['5.JPG', '1.JPG', '7.JPG', '3.JPG'] 
                        },
                        { 
                            year: "2025", 
                            folder: "Highways 25", 
                            speed: "fast",
                            images: ['31.png', '24.png', '20.png', '28.png', '33.png', '22.png', '26.png', '30.png', '21.png', '29.png', '25.png', '32.png', '23.png', '27.png'] 
                        }
                    ].map((track) => (
                        <div key={track.year} className="track-row-wrapper" style={{ 
                            position: 'relative'
                        }}>
                            {/* Cinematic Year Background Watermark */}
                            <div className="year-watermark" style={{
                                position: 'absolute',
                                left: '5%',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                fontSize: '12vw',
                                fontWeight: 950,
                                color: 'rgba(255,255,255,0.02)',
                                pointerEvents: 'none',
                                zIndex: 0,
                                fontFamily: "'Outfit', sans-serif"
                            }}>
                                {track.year}
                            </div>

                            {/* Floating Integrated Label - Aligned Left for all */}
                            <div className="floating-year-label" style={{
                                position: 'absolute',
                                left: '5%',
                                top: '-60px',
                                zIndex: 10,
                                display: 'flex',
                                alignItems: 'center',
                                gap: '20px'
                            }}>
                                <div style={{ width: '40px', height: '1px', background: '#ff4d4d' }}></div>
                                <span style={{ 
                                    color: 'white', 
                                    fontWeight: 900, 
                                    fontSize: '1.5rem', 
                                    letterSpacing: '5px',
                                    textTransform: 'uppercase'
                                }}>
                                    <span style={{ color: '#ff4d4d' }}>HIGHWAYS</span> '{track.year.slice(2)}
                                </span>
                            </div>
                            
                            <div className="drift-track fast" style={{ zIndex: 1 }}>
                                {/* Repeat twice for a proper 50% loop */}
                                {[...track.images, ...track.images].map((img, i) => (
                                    <div key={`${track.year}-${i}`} className="glimpse-frame" style={{
                                        transform: i % 2 === 0 ? 'translateY(20px)' : 'translateY(-20px)'
                                    }}>
                                        <img src={`/assets/glimpses/${track.folder}/${img}`} alt={`Highways ${track.year}`} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <style>{`
                    .track-row-wrapper {
                        transition: all 0.5s ease;
                    }
                    .track-row-wrapper:hover .year-watermark {
                        color: rgba(255, 77, 77, 0.05);
                        transform: translateY(-50%) scale(1.05);
                    }
                    .track-row-wrapper:hover .floating-year-label span {
                        color: #ff4d4d;
                        letter-spacing: 8px;
                    }
                    .track-row-wrapper:hover .floating-year-label div {
                        width: 80px;
                        background: white;
                    }
                    
                    @media (max-width: 768px) {
                        .glimpses-track-container {
                            gap: 120px !important;
                        }
                        .floating-year-label {
                            left: 50% !important;
                            right: auto !important;
                            transform: translateX(-50%);
                            top: -40px !important;
                        }
                        .floating-year-label span { font-size: 1rem !important; }
                        .floating-year-label div { display: none; }
                        .year-watermark { display: none; }
                        .glimpse-frame {
                            height: 300px !important;
                            transform: none !important;
                        }
                    }
                `}</style>
            </section>


        </div>
    );
};

export default Home;
