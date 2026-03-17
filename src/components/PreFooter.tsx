const PreFooter = () => {
    return (
        <div className="pre-footer-sections">
            {/* Contact Section */}
            <section className="w-full px-6 md:px-12 lg:px-20 py-24 text-white" id="contact">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-12 max-w-3xl space-y-3">
                        <h2 className="ds-title">For queries</h2>
                        <p className="ds-subtitle">please contact</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
                        <div className="ds-card space-y-5">
                            <h3 className="text-2xl lg:text-3xl font-semibold tracking-tight">Pranneeth D K</h3>
                            <div className="space-y-2 ds-body">
                                <a className="block hover:text-white transition duration-300" href="tel:+916379560034">+91 6379560034</a>
                                <a className="block hover:text-white transition duration-300" href="mailto:mail@pranneethdk.in">mail@pranneethdk.in</a>
                            </div>
                        </div>

                        <div className="ds-card space-y-5">
                            <h3 className="text-2xl lg:text-3xl font-semibold tracking-tight">Sowndhar V</h3>
                            <div className="space-y-2 ds-body">
                                <a className="block hover:text-white transition duration-300" href="tel:+919025366598">+91 9025366598</a>
                                <a className="block hover:text-white transition duration-300" href="mailto:sowndhar06.v@gmail.com">sowndhar06.v@gmail.com</a>
                            </div>
                        </div>

                        <div className="ds-card space-y-5">
                            <h3 className="text-2xl lg:text-3xl font-semibold tracking-tight">Sharvesh</h3>
                            <div className="space-y-2 ds-body">
                                <a className="block hover:text-white transition duration-300" href="tel:+916380168529">+91 6380168529</a>
                                <span className="block italic opacity-60">Event Coordinator</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Location Section */}
            <section className="w-full px-6 md:px-12 lg:px-20 py-24 text-white">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8 max-w-xl">
                        <h2 className="ds-title">
                            Join Us at<br />Sri Venkateswara<br />College of<br />Engineering
                        </h2>
                        <p className="ds-body">
                            Post Bag No.1, Pennalur Village Chennai - Bangaluru High Road Sriperumbudur Tk, Tamil Nadu 602117, India
                        </p>
                        <p className="ds-body">
                            HIGHWAYS'26 will be hosted at the vibrant campus of <span className="font-semibold text-white">Sri Venkateswara College of Engineering</span>, offering world-class infrastructure, spacious venues, and an energetic atmosphere to celebrate culture, talent, and innovation.
                        </p>
                    </div>

                    <div className="relative w-full h-[320px] sm:h-[380px] md:h-[420px] lg:h-[460px] rounded-2xl overflow-hidden shadow-xl border border-white/10">
                        <iframe
                            src="https://www.google.com/maps?q=Sri+Venkateswara+College+of+Engineering+Sriperumbudur+Tamil+Nadu+602117&output=embed"
                            className="absolute inset-0 w-full h-full border-0 grayscale invert opacity-80"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="SVCE Location"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PreFooter;
