import MovieGallery from '@/components/MovieGallery';
import { useEffect, useState } from 'react';



const Home = () => {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const targetDate = new Date('2026-03-15T00:00:00');

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
            <section id="hero" className="hero">
                <div className="shimenawa-rope"></div>
                <div className="fuji-motif"></div>

                <div className="hero-content animate-fade">
                    <div className="festival-aura"></div>

                    <div className="hero-main-branding">
                        <h2 className="highways-26-text text-glitch" data-text="HIGHWAYS 2026">HIGHWAYS 2026</h2>
                    </div>
                    <div className="hero-info">
                        <div className="timer-grid">
                            {[
                                { value: timeLeft.days, label: 'Days', max: 365 },
                                { value: timeLeft.hours, label: 'Hours', max: 24 },
                                { value: timeLeft.minutes, label: 'Minutes', max: 60 },
                                { value: timeLeft.seconds, label: 'Seconds', max: 60 }
                            ].map(({ value, label, max }) => {
                                const radius = 65;
                                const stroke = 8;
                                const normalizedRadius = radius - stroke;
                                const circumference = normalizedRadius * 2 * Math.PI;
                                const offset = circumference - (value / max) * circumference;

                                return (
                                    <div key={label} className="timer-circle-container">
                                        <div className="timer-circle">
                                            <svg style={{ width: '100%', height: '100%', transform: 'rotate(-90deg)' }} viewBox="0 0 140 140">
                                                <circle cx="70" cy="70" r={normalizedRadius} stroke="#1f2937" strokeWidth={stroke} fill="transparent" />
                                                <circle
                                                    cx="70"
                                                    cy="70"
                                                    r={normalizedRadius}
                                                    stroke="var(--kin)"
                                                    strokeWidth={stroke}
                                                    fill="transparent"
                                                    strokeDasharray={circumference}
                                                    strokeDashoffset={offset}
                                                    strokeLinecap="round"
                                                    style={{ transition: 'stroke-dashoffset 1s linear', filter: 'drop-shadow(0 0 8px var(--kin))' }}
                                                />
                                            </svg>
                                            <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
                                                <span className="timer-value">
                                                    {value.toString().padStart(2, '0')}
                                                </span>
                                                <span className="timer-label">
                                                    {label}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        <div className="date-badge">TBD</div>
                        <p className="hero-tagline">WHERE TRADITION MEETS THE FUTURE</p>
                    </div>
                    <div className="hero-btns">
                        <a href="#glimpses" className="btn-matsuri">Explore More</a>
                    </div>
                </div>

                <div className="hero-bottom-decor"></div>
                <div className="wave-divider" style={{ position: 'absolute', bottom: 0 }}></div>
            </section>

            {/* ABOUT SECTION */}
            <section id="about" className="about-section world-white" style={{ padding: '100px 0' }}>
                <div className="container">
                    <div className="about-flex">
                        <div className="about-text">
                            <h2 className="section-title left">OUR HERITAGE</h2>
                            <p>Highways is the annual intercollegiate cultural festival of Sri Venkateswara College of Engineering (SVCE). Known for its vibrant atmosphere and creative energy, Highways brings together students from across the states to celebrate art, talent, and expression.</p>
                            <p>This year, for <strong>Highways '26</strong>, we are embracing the spirit of the <em>Japanese Carnival</em>. Imagine the glow of a thousand lanterns, the rhythm of taiko drums, and the festive magic of a Matsuri night, all right here on our campus.</p>
                            <div className="about-highlights">
                                <div className="highlight"><i className="fas fa-drum"></i> Cultural Fusion</div>
                                <div className="highlight"><i className="fas fa-mask"></i> Artistic Expression</div>
                                <div className="highlight"><i className="fas fa-fire"></i> Infinite Energy</div>
                            </div>
                        </div>
                        <div className="about-image-container">
                            <div className="image-frame" style={{ position: 'relative' }}>
                                <img src="https://images.unsplash.com/photo-1542332213-31f87348057f?w=800&q=80" alt="Carnival Vibe" className="main-about-img" style={{ width: '100%', border: '5px solid var(--murasaki)', boxShadow: '15px 15px 0 var(--kin)' }} />
                                <div className="hanko-stamp">HIGHWAYS 2026</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CELEBRITY GUESS SECTION */}
            <section id="celebrities" className="celebrity-section" style={{ padding: '100px 0' }}>
                <div className="container">
                    <h2 className="section-title center">CELEBRITY GUESS</h2>
                    <div className="celebrity-grid">
                        {[1, 2, 3, 4].map(i => (
                            <div key={i} className="celebrity-card">
                                <div className="celeb-image-placeholder">
                                    <span className="mystery-mark">?</span>
                                </div>
                                <div className="celeb-info">
                                    <h3>Mystery Guest {i}</h3>
                                    <p>Can you guess who's coming?</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* GLIMPSES SECTION */}
            <MovieGallery />


            {/* GLIMPSES SECTION */}
            {/* <section id="glimpses" className="glimpses-section" style={{ padding: '100px 0' }}>
                <div className="section-header">
                    <h2 className="section-title center">PAST GLIMPSES</h2>
                </div>

                <div className="glimpses-ticker">
                    <div className="ticker-track ltr">
                        {[
                            '1.JPG', '2.webp', '3.JPG', '4.webp', '5.JPG', '6.webp', '7.JPG', '8.png', '9.png', '10.png', '11.png'
                        ].map((img, i) => (
                            <div key={i} className="glimpse-card">
                                <img src={`/assets/glimpses/${img}`} alt="Highways Moment" />
                            </div>
                        ))}
                        {[
                            '1.JPG', '2.webp', '3.JPG', '4.webp', '5.JPG', '6.webp', '7.JPG', '8.png', '9.png', '10.png', '11.png'
                        ].map((img, i) => (
                            <div key={`dup1-${i}`} className="glimpse-card">
                                <img src={`/assets/glimpses/${img}`} alt="Highways Moment" />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="glimpses-ticker" style={{ marginTop: '20px' }}>
                    <div className="ticker-track rtl">
                        {[
                            '12.png', '13.png', '14.png', '15.png', '16.png', '17.png', '18.png', '19.png', '20.png', '21.png', '22.png'
                        ].map((img, i) => (
                            <div key={i} className="glimpse-card">
                                <img src={`/assets/glimpses/${img}`} alt="Highways Moment" />
                            </div>
                        ))}
                        {[
                            '12.png', '13.png', '14.png', '15.png', '16.png', '17.png', '18.png', '19.png', '20.png', '21.png', '22.png'
                        ].map((img, i) => (
                            <div key={`dup2-${i}`} className="glimpse-card">
                                <img src={`/assets/glimpses/${img}`} alt="Highways Moment" />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="glimpses-ticker" style={{ marginTop: '20px' }}>
                    <div className="ticker-track ltr">
                        {[
                            '23.png', '24.png', '25.png', '26.png', '27.png', '28.png', '29.png', '30.png', '31.png', '32.png', '33.png'
                        ].map((img, i) => (
                            <div key={i} className="glimpse-card">
                                <img src={`/assets/glimpses/${img}`} alt="Highways Moment" />
                            </div>
                        ))}
                        {[
                            '23.png', '24.png', '25.png', '26.png', '27.png', '28.png', '29.png', '30.png', '31.png', '32.png', '33.png'
                        ].map((img, i) => (
                            <div key={`dup3-${i}`} className="glimpse-card">
                                <img src={`/assets/glimpses/${img}`} alt="Highways Moment" />
                            </div>
                        ))}
                    </div>
                </div>
            </section> */}


        </div>
    );
};

export default Home;
