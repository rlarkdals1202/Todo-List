import Link from 'next/link';

const GlobalNavigationBar = () => {
    return (
        <nav
            className={
                'w-full h-full pt-[9.71px] pb-[10.29px] px-4 md:px-6 3xl:px-[20rem] border-box border-b border-slate-200 flex'
            }
        >
            <Link href='/'>
                <div
                    className={`w-[71px] h-[40px] bg-[url('/images/logo/logo-small.png')] md:bg-[url('/images/logo/logo-large.png')] md:w-[151px] bg-contain`}
                />
            </Link>
        </nav>
    );
};

export default GlobalNavigationBar;
