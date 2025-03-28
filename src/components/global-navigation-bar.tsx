import Link from 'next/link';

/**
 * Global Navigation Bar 컴포넌트입니다.
 *
 * 화면 크기에 따라, 로고 이미지를 다르게 보여줍니다.
 */
const GlobalNavigationBar = () => {
    return (
        <nav
            className={
                '3xl:px-[18.75%] flex h-full w-full border-b border-slate-200 px-4 pt-[9.71px] pb-[10.29px] md:px-6 lg:px-36'
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
