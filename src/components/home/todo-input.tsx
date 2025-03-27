'use client';

import { ChangeEventHandler } from 'react';

/**
 * 새로운 할 일을 입력하기 위한 Input 컴포넌트의 props 타입입니다.
 */
interface Props {
    value: string;
    onInputChange: ChangeEventHandler<HTMLInputElement>;
}

/**
 * 새로운 할 일을 입력하기 위한 Input 컴포넌트입니다.
 */
const TodoInput = ({ value, onInputChange }: Props) => {
    return (
        <div className={'relative h-14 min-w-0 flex-1 rounded-[24px]'}>
            <input
                name={'todo'}
                className={
                    'absolute right-[1.12px] bottom-[3.5px] z-10 h-[53px] w-full rounded-[24px] border-2 border-slate-900 bg-slate-100 p-4 pr-5 pl-6 placeholder:text-slate-400 focus:outline-none'
                }
                value={value}
                onChange={onInputChange}
                placeholder={'할 일을 입력해주세요.'}
            />
            <div
                className={
                    'absolute top-[3.5px] left-[1.12px] h-[53px] w-full rounded-[24px] border-2 border-slate-900 bg-slate-900'
                }
            />
        </div>
    );
};

export default TodoInput;
