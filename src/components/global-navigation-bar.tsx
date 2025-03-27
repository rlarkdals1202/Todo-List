import Link from 'next/link';

const GlobalNavigationBar = () => {
    return (
        <nav
            className={
                'flex h-full w-full border-b border-slate-200 px-4 pt-[9.71px] pb-[10.29px] md:px-6 lg:px-28 3xl:px-[360px]'
            }
        >
            <Link href='/'>
                <div
                    className={`h-[40px] w-[71px] bg-[url('/images/logo/logo-small.png')] bg-contain md:w-[151px] md:bg-[url('/images/logo/logo-large.png')]`}
                />
            </Link>
        </nav>
    );
};

export default GlobalNavigationBar;
