'use client';

import { ComponentProps, memo } from 'react';
import Image from 'next/image';
import cn from '@/utils/cn';

/**
 * 버튼 공용 컴포넌트의 props 타입입니다.
 */
type ButtonProps = {
    iconSrc: string;
    children: React.ReactNode;
    className?: string;
    purpose: 'addTodo' | 'deleteTodo' | 'updateTodo';
} & ComponentProps<'button'>;

/**
 * 버튼 공용 컴포넌트입니다.
 *
 * 버튼 용도에 따라, 스타일과 아이콘 이미지를 다르게 적용합니다.
 */
const Button = ({ iconSrc, purpose, children, className, ...props }: ButtonProps) => {
    return (
        <div
            className={cn('relative h-14 w-[10.5rem]', {
                'w-14 md:w-[10.125rem] lg:w-[10.5rem]': purpose === 'addTodo',
            })}
        >
            <button
                className={cn(
                    'cursor-pointer',
                    purpose === 'addTodo' && 'bg-violet-600 text-white disabled:bg-slate-200 disabled:text-slate-900',
                    purpose === 'updateTodo' &&
                        'bg-lime-300 text-slate-900 disabled:bg-slate-200 disabled:text-slate-900',
                    purpose === 'deleteTodo' && 'bg-rose-500 text-white',
                    'absolute right-[3.65px] bottom-1 z-10 inline-flex h-13 items-center justify-center gap-x-1 rounded-[24px] border-2 border-slate-900',
                    className,
                )}
                {...props}
            >
                <Image src={iconSrc} alt={'icon image'} width={16} height={16} />
                <span
                    className={cn('inline font-bold', {
                        'hidden md:inline': purpose === 'addTodo',
                    })}
                >
                    {children}
                </span>
            </button>
            <div
                className={cn(
                    className,
                    'absolute top-1 left-[3.65px] h-13 rounded-[24px] border-2 border-slate-900 bg-slate-900',
                    purpose === 'addTodo' && 'left-[1.22px] md:left-[3.65px]',
                )}
            />
        </div>
    );
};

export default memo(Button);
