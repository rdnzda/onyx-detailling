export default function Navbar() {
    return (
        <nav className="relative z-50 flex justify-between items-center px-8 py-6 max-w-7xl mx-auto">
            {/* Logo */}
            <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-onyx-chrome rounded-tr-xl rounded-bl-xl" /> {/* Petit logo graphique */}
                <span className="font-display font-bold text-2xl tracking-widest text-onyx-titanium">ONYX</span>
            </div>

            {/* Liens Centre */}
            <div className="hidden md:flex gap-10 font-body text-xs font-medium text-onyx-silver uppercase tracking-widest">
                <a href="#" className="hover:text-onyx-titanium transition">Services</a>
                <a href="#" className="hover:text-onyx-titanium transition">Réalisations</a>
                <a href="#" className="hover:text-onyx-titanium transition">Studio</a>
                <a href="#" className="hover:text-onyx-titanium transition">Tarifs</a>
            </div>

            {/* Action Droite */}
            <div className="flex items-center gap-6 font-body text-xs font-bold tracking-widest">
                <span className="text-onyx-chrome cursor-pointer hover:text-onyx-titanium">FR</span>
                <hr className="h-4 border-l border-onyx-steel" />
                <a href="#contact" className="border-b border-onyx-chrome text-onyx-titanium hover:text-onyx-chrome transition">
                    CONTACT US
                </a>
            </div>
        </nav>
    );
}

