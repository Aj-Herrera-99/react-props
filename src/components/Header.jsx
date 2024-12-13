function Header({ title }) {
    return (
        <header className="flex justify-center items-center bg-slate-50 font-semibold uppercase top-0 left-0 w-full h-[10vh] fixed z-20">
            <h1>{title}</h1>
        </header>
    );
}

export default Header;
