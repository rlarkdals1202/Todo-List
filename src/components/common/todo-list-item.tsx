'use client';

import { ChangeEventHandler, MouseEventHandler } from 'react';
import Image from 'next/image';
import AutosizeInput from 'react-input-autosize';
import cn from '@/utils/cn';

/**
 * 할 일 아이템 공용 컴포넌트의 props 타입입니다.
 */
interface Props {
    name: string;
    isCompleted: boolean;
    className: string;
    isNameEditable: boolean;
    onNameChange?: ChangeEventHandler<HTMLInputElement>;
    onToggleButtonClick: MouseEventHandler<HTMLButtonElement>;
}

/**
 * 할 일 아이템 공용 컴포넌트입니다.
 *
 * 메인 페이지에서 할 일 아이템을 보여줄 때 사용됩니다.
 * 메인 페이지에서는 항목 이름을 수정할 수 없으므로, 단순 텍스트만 보여줍니다.
 * 
 * 할 일 상세 페이지에서 할 일 아이템을 보여줄 때 사용됩니다.
 * 할 일 상세 페이지에서는 항목 이름을 수정할 수 있으므로, AutosizeInput 컴포넌트를 사용해서
 * 사용자가 항목 이름을 수정할 수 있도록 합니다.
 * 
 */
const TodoListItem = ({
    isCompleted,
    name,
    className,
    isNameEditable,
    onNameChange,
    onToggleButtonClick,
}: Props) => {
    return (
        <div
            className={cn(
                `flex items-center gap-x-4 border-2 border-slate-900`,
                {
                    'bg-violet-100': isCompleted,
                    'bg-white': !isCompleted,
                },
                className,
            )}
        >
            <button className={'cursor-pointer'} type={'button'} onClick={onToggleButtonClick}>
                <Image
                    src={`${isCompleted ? '/icons/checked.svg' : '/icons/not-checked.svg'}`}
                    alt={`${isCompleted ? 'checked' : 'unchecked'}`}
                    width={32}
                    height={32}
                />
            </button>
            {isNameEditable ? (
                <AutosizeInput
                    inputClassName={`text-slate-800 max-w-[250px] focus:outline-none underline-offset-2 underline`}
                    value={name}
                    onChange={onNameChange}
                />
            ) : (
                <span className={`line-clamp-1 text-slate-800`}>{name}</span>
            )}
        </div>
    );
};

export default TodoListItem;
