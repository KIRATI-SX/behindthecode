import { Github, Linkedin, Globe } from 'lucide-react';

function Footer() {
    return (
        <footer className="flex  flex-col gap-6 lg:flex-row items-center justify-between bg-brown-200 py-10 lg:px-30 lg:py-14.75">
            <div className="flex flex-row items-center gap-4">
                <p className="text-brown-500 text-body-1">Get in touch</p>
                <div className="flex flex-row items-center gap-4">
                    <a 
                        href="#" 
                        aria-label="LinkedIn profile"
                        className="flex items-center justify-center w-8 h-8 rounded-full border bg-brown-500 text-white hover:bg-brown-300 transition-colors"
                    >
                        <Linkedin size={20} />
                    </a>
                    <a 
                        href="#" 
                        aria-label="GitHub profile"
                        className="flex items-center justify-center w-8 h-8 rounded-full border bg-brown-500 text-white hover:bg-brown-300 transition-colors"
                    >
                        <Github size={20} />
                    </a>
                    <a 
                        href="#" 
                        aria-label="Personal website"
                        className="flex items-center justify-center w-8 h-8 rounded-full border bg-brown-500 text-white hover:bg-brown-300 transition-colors"
                    >
                        <Globe size={20} />
                    </a>
                </div>
            </div>
            <a 
                href="#" 
                className="text-brown-600 text-headline-4 underline hover:text-brown-500 transition-colors"
                aria-label="Go to home page"
            >
                Home page
            </a>
        </footer>
    );
}

export default Footer;