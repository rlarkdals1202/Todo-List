'use client';

import { useState, useCallback, ChangeEventHandler, useEffect } from 'react';
import type TodoInfo from '@/types/todo-info.interface';
import TodoListItem from '@/components/common/todo-list-item';
import ImageEditor from '@/components/items/[itemId]/image-editor';
import TodoMemo from '@/components/items/[itemId]/todo-memo';
import TodoActions from '@/components/items/[itemId]/todo-actions';
import cn from '@/utils/cn';

interface Props {
    todoInfo: TodoInfo;
}

/**
 * 할 일 상세 정보를 보여주는 컴포넌트입니다.
 */
const TodoInfo = ({ todoInfo }: Props) => {
    const [isUpdateButtonActive, setIsUpdateButtonActive] = useState(false);

    const [currentTodoInfo, setCurrentTodoInfo] = useState(() => ({
        ...todoInfo,
        memo: todoInfo.memo ?? '',
        imageUrl: todoInfo.imageUrl ?? '',
    }));

    const [previousTodoInfo] = useState(() => ({
        ...todoInfo,
        memo: todoInfo.memo ?? '',
        imageUrl: todoInfo.imageUrl ?? '',
    }));

    const handleNameChange: ChangeEventHandler<HTMLInputElement> = useCallback(e => {
        setCurrentTodoInfo(prev => ({
            ...prev,
            name: e.target.value,
        }));
    }, []);

    const handleMemoChange: ChangeEventHandler<HTMLTextAreaElement> = useCallback(e => {
        setCurrentTodoInfo(prev => ({
            ...prev,
            memo: e.target.value,
        }));
    }, []);

    const updateImageUrl = useCallback((imageUrl: string) => {
        setCurrentTodoInfo(prev => ({
            ...prev,
            imageUrl,
        }));
    }, []);

    // 할 일 상세 정보가 변경되면, 수정 버튼을 활성화합니다.
    // 기존 내용과 동일하다면, 수정 버튼을 비활성화합니다.
    useEffect(() => {
        setIsUpdateButtonActive(JSON.stringify(currentTodoInfo) !== JSON.stringify(previousTodoInfo));
    }, [currentTodoInfo]);

    return (
        <div className={'3xl:px-[102px] w-full flex-grow bg-white px-4 py-4 md:px-6 md:py-6 lg:px-9'}>
            <TodoListItem
                className={cn('h-16 justify-center rounded-[24px] border-2 border-slate-900 text-[20px] font-bold', {
                    'bg-violet-200': currentTodoInfo.isCompleted,
                    'bg-white': !currentTodoInfo.isCompleted,
                })}
                name={currentTodoInfo.name}
                isCompleted={currentTodoInfo.isCompleted}
                isNameEditable={true}
                onNameChange={handleNameChange}
                onToggleButtonClick={() => {
                    setCurrentTodoInfo(prev => ({
                        ...prev,
                        isCompleted: !prev.isCompleted,
                    }));
                }}
            />
            <div className={'flex flex-col lg:flex-row lg:gap-x-6'}>
                <ImageEditor imageUrl={currentTodoInfo.imageUrl} updateImageUrl={updateImageUrl} />
                <TodoMemo memo={currentTodoInfo.memo} onMemoChange={handleMemoChange} />
            </div>
            <TodoActions todoInfo={currentTodoInfo} isUpdateButtonActive={isUpdateButtonActive} />
        </div>
    );
};

export default TodoInfo;
