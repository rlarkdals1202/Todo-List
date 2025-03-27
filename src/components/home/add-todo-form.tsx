'use client';

import { useEffect, useState, useCallback, ChangeEventHandler, useActionState } from 'react';
import TodoInput from '@/components/home/todo-input';
import Button from '@/components/common/button';
import createTodo from '@/actions/create-todo';

/**
 * 새로운 할 일을 추가하는 폼 컴포넌트입니다.
 *
 * action state의 status가 success이면, 할 일이 성공적으로 추가되었다는 의미이며, 인풋 값을 초기화합니다.
 * action state의 status가 error이면, 할 일을 추가하는 데 실패했다는 의미이며, 에러 메시지를 알림창에 표시합니다.
 *
 */
const AddTodoForm = () => {
    const [value, setValue] = useState('');

    const [state, formAction] = useActionState(createTodo, null);

    const handleInputChange: ChangeEventHandler<HTMLInputElement> = useCallback(e => {
        setValue(() => e.target.value);
    }, []);

    useEffect(() => {
        if (state && state.status === 'success') {
            setValue('');
        }
        if (state && state.status === 'error') {
            window.alert(state.error);
        }
    }, [state]);

    return (
        <form className={'flex w-full gap-x-2 md:gap-x-4'} action={formAction}>
            <TodoInput value={value} onInputChange={handleInputChange} />
            <Button
                className={'right-[1.22px] w-[55px] md:right-[3.65px] md:w-[158px] md:gap-x-1 lg:w-[164px]'}
                iconSrc={`${value ? '/icons/plus-white.svg' : '/icons/plus-black.svg'}`}
                purpose={'addTodo'}
                disabled={!value.trim()}
                type={'submit'}
            >
                추가하기
            </Button>
        </form>
    );
};

export default AddTodoForm;
