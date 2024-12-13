function Footer({ children }) {
    return (
        <footer className="bg-stone-800 text-white h-[15vh] flex justify-center items-center text-center px-20 py-3">
            <p className="max-h-full overflow-auto">{children}</p>
        </footer>
    );
}

export default Footer;
