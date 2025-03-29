'use client';

import { ChangeEventHandler } from 'react';
import TextareaAutosize from 'react-textarea-autosize';

interface Props {
    memo: string;
    onMemoChange: ChangeEventHandler<HTMLTextAreaElement>;
}

/**
 * 할 일 메모 기능을 제공하는 컴포넌트입니다.
 */
const TodoMemo = ({ memo, onMemoChange }: Props) => {
    return (
        <div
            className={
                'mt-[15px] flex h-[311px] w-full flex-col items-center gap-y-4 rounded-[24px] bg-[url("/images/memo/memo.png")] bg-cover bg-center bg-no-repeat px-4 py-6 md:mt-6 lg:w-3/5'
            }
        >
            <span className={'font-extrabold text-amber-800'}>Memo</span>
            <div className={'flex h-full w-full items-center justify-center overflow-y-auto overscroll-y-contain'}>
                <TextareaAutosize
                    className={
                        'scrollbar scrollbar-thumb-amber-200 scrollbar-track-amber-50 h-fit max-h-full w-full resize-none text-center align-middle focus:outline-none'
                    }
                    onChange={onMemoChange}
                    value={memo ?? ''}
                />
            </div>
        </div>
    );
};

export default TodoMemo;
