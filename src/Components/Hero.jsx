import React from "react";

const Hero = () => {
    const quotes = [
        "The words of wisdom from Islam guide hearts towards peace.",
        "Find inspiration in timeless quotes rooted in faith.",
        "A journey of reflection begins with a single verse.",
        "Illuminate your life with the beauty of Islamic teachings.",
        "Every quote is a reminder, every reminder is a blessing.",
        "Strengthen your soul with words that inspire faith.",
        "Discover wisdom, embrace patience, and live with gratitude.",
        "Let the light of guidance shine through meaningful words.",
        "Daily inspiration for a heart that seeks closeness to Allah.",
        "Share, reflect, and grow with powerful Islamic quotes.",
    ];

    // Pick a random quote on each reload
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

    return (
        <section className="bg-gradient-to-r from-orange-100 to-orange-200 h-[60vh] flex flex-col items-center justify-center text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-700 leading-snug max-w-3xl px-4">
                {randomQuote}
            </h1>
            <div className="max-w-3xl border-4 bg-white p-4 md:p-8 mt-4 md:mt-8 mx-2">
                <p className="text-3xl md:text-5xl font-semibold text-gray-800">Want to Join Us?</p>
                <p className="text-xl mt-3">Become part of our growing community! Share your favorite Islamic quotes, inspire others, and spread the light of wisdom. Together, we can make faith and knowledge accessible to everyone.</p>
            </div>
        </section>
    );
};

export default Hero;
