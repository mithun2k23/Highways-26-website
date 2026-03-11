const Glimpses = () => {
    const years = [
        {
            year: "23",
            fullName: "Highways 2023",
            images: ['2.webp', '4.webp', '6.webp', '8.png', '9.png', '10.png', '11.png', '12.png', '13.png', '14.png', '15.png', '16.png', '17.png', '18.png', '19.png']
        },
        {
            year: "24",
            fullName: "Highways 2024",
            images: ['1.JPG', '3.JPG', '5.JPG', '7.JPG']
        },
        {
            year: "25",
            fullName: "Highways 2025",
            images: ['20.png', '21.png', '22.png', '23.png', '24.png', '25.png', '26.png', '27.png', '28.png', '29.png', '30.png', '31.png', '32.png', '33.png']
        }
    ];

    return (
        <section id="glimpses" className="glimpses-section" style={{ paddingTop: '180px', paddingBottom: '150px', background: '#030303', position: 'relative', overflow: 'hidden' }}>
            <div className="section-header" style={{ textAlign: 'center', marginBottom: '100px', position: 'relative', zIndex: 10 }}>
                <span style={{ color: '#ffb7c5', fontSize: '1rem', fontWeight: 900, letterSpacing: '12px', textTransform: 'uppercase', display: 'block', marginBottom: '1.5rem' }}>THE CHRONICLES</span>
                <h2 className="section-title center" style={{ fontSize: 'clamp(4rem, 10vw, 8rem)', fontWeight: 950, color: 'white', letterSpacing: '-5px', textTransform: 'uppercase', lineHeight: 0.8 }}>PAST <span style={{ color: '#ffb7c5' }}>GLIMPSES</span></h2>
            </div>
            
            {years.map((yearGroup, index) => (
                <div key={index} className="glimpses-year-row" style={{ marginBottom: '60px', position: 'relative' }}>
                    <div className="year-label-side" style={{ 
                        position: 'absolute', 
                        left: '5%', 
                        top: '50%', 
                        transform: 'translateY(-50%)', 
                        zIndex: 20,
                        background: 'rgba(3,3,3,0.8)',
                        backdropFilter: 'blur(10px)',
                        padding: '10px 30px',
                        borderRadius: '100px',
                        border: '1px solid rgba(255,255,255,0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '15px'
                    }}>
                        <span style={{ fontSize: '0.8rem', fontWeight: 900, color: '#ffb7c5', letterSpacing: '3px' }}>HIGHWAYS</span>
                        <span style={{ fontSize: '1.8rem', fontWeight: 950, color: 'white' }}>'{yearGroup.year}</span>
                    </div>

                    <div className="glimpses-ticker" style={{ overflow: 'hidden', padding: '20px 0' }}>
                        <div className={`ticker-track ${index % 2 === 0 ? 'ltr' : 'rtl'}`} style={{ 
                            display: 'flex', 
                            gap: '20px', 
                            width: 'max-content',
                            animation: `${index % 2 === 0 ? 'scroll-ltr' : 'scroll-rtl'} 60s linear infinite`
                        }}>
                            {/* Duplicate images multiple times for seamless infinity */}
                            {[...yearGroup.images, ...yearGroup.images, ...yearGroup.images].map((img, i) => (
                                <div key={i} className="glimpse-card" style={{ 
                                    width: '350px', 
                                    height: '220px', 
                                    borderRadius: '20px', 
                                    overflow: 'hidden',
                                    flexShrink: 0,
                                    border: '1px solid rgba(255,255,255,0.05)',
                                    transition: 'all 0.5s cubic-bezier(0.19, 1, 0.22, 1)',
                                    position: 'relative',
                                    cursor: 'pointer'
                                }}>
                                    <img src={`/assets/glimpses/Highways ${yearGroup.year}/${img}`} alt={`${yearGroup.fullName} Moment`} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(0.3) brightness(0.8)' }} />
                                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.5), transparent)', opacity: 0.6 }}></div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Watermark Year Background */}
                    <div style={{ 
                        position: 'absolute', 
                        right: '10%', 
                        top: '50%', 
                        transform: 'translateY(-50%)', 
                        fontSize: '15vw', 
                        fontWeight: 950, 
                        color: 'rgba(255,255,255,0.02)', 
                        pointerEvents: 'none',
                        zIndex: 1,
                        letterSpacing: '-10px'
                    }}>20{yearGroup.year}</div>
                </div>
            ))}

            <style>{`
                @keyframes scroll-ltr {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(calc(-33.33% - 10px)); }
                }
                @keyframes scroll-rtl {
                    0% { transform: translateX(calc(-33.33% - 10px)); }
                    100% { transform: translateX(0); }
                }
                .glimpse-card:hover {
                    transform: scale(1.05) translateY(-10px);
                    border-color: #ffb7c5;
                    box-shadow: 0 30px 60px rgba(0,0,0,0.5), 0 0 20px rgba(255,183,197,0.2);
                    z-index: 100 !important;
                }
                .glimpse-card:hover img {
                    filter: grayscale(0) brightness(1) !important;
                }
                .glimpses-year-row:hover .year-label-side {
                    border-color: #ffb7c5;
                    box-shadow: 0 0 30px rgba(255,183,197,0.3);
                }
                
                @media (max-width: 768px) {
                    .year-label-side {
                        left: 50% !important;
                        top: -20px !important;
                        transform: translateX(-50%) !important;
                        padding: 8px 20px !important;
                    }
                    .year-label-side span:first-child { font-size: 0.6rem !important; }
                    .year-label-side span:last-child { font-size: 1.2rem !important; }
                    .glimpse-card { width: 250px !important; height: 160px !important; }
                    .section-header h2 { font-size: 3rem !important; }
                }
            `}</style>
        </section>
    );
};

export default Glimpses;
