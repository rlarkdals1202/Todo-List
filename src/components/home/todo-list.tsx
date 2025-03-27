'use client';

import { useCallback } from 'react';
import Link from 'next/link';
import TodoListItem from '@/components/common/todo-list-item';
import Todo from '@/types/todo.interface';
import changeTodoState from '@/actions/change-todo-state';

/**
 * 할 일 목록을 표시하는 컴포넌트입니다.
 */
const TodoList = ({ todos }: { todos: Todo[] }) => {

    // 할 일의 id와 완료 여부 상태를 매개변수를 통해 받아서, 할 일의 상태를 변경하는 함수를 내부에서 호출합니다.
    const toggleTodoState = useCallback(async (id: number, isCompleted: boolean) => {
        await changeTodoState({ id, isCompleted });
    }, []);

    return (
        <div className={'mt-4 flex flex-col gap-y-4'}>
            {todos.map(todo => (
                <Link href={`/items/${todo.id}`} key={todo.id}>
                    <TodoListItem
                        isNameEditable={false}
                        className={`h-[50px] rounded-[27px] px-3 ${todo.isCompleted ? 'line-through' : 'no-underline'}`}
                        {...todo}
                        onToggleButtonClick={e => {
                            e.preventDefault();
                            toggleTodoState(todo.id, todo.isCompleted);
                        }}
                    />
                </Link>
            ))}
        </div>
    );
};

export default TodoList;
