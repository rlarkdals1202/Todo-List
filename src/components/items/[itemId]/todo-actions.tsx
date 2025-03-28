'use client';

import { useRouter } from 'next/navigation';
import Button from '@/components/common/button';
import deleteTodo from '@/actions/delete-todo';
import updateTodo from '@/actions/patch-todo';
import TodoInfo from '@/types/todo-info.interface';

interface Props {
    todoInfo: TodoInfo;
    isUpdateButtonActive: boolean;
}

/**
 * 할 일 수정, 삭제 기능을 제공하는 컴포넌트입니다.
 *
 * 할 일 수정, 삭제에 성공하면, 메인 페이지로 이동합니다.
 * 할 일 수정, 삭제에 실패하면, 에러 메시지를 알림창에 표시합니다.
 *
 */
const TodoActions = ({ todoInfo, isUpdateButtonActive }: Props) => {
    const router = useRouter();

    const handleDeleteTodoButtonClick = async () => {
        if (window.confirm('정말 삭제하시겠습니까?')) {
            const { status, message } = await deleteTodo(todoInfo.id);
            if (status === 'success') {
                router.push('/');
            } else {
                window.alert(message);
            }
        }
    };

    const handleUpdateTodoButtonClick = async () => {
        if (todoInfo.name.trim() === '') {
            window.alert('할 일 이름을 입력해주세요.');
            return;
        }

        if (window.confirm('정말 수정하시겠습니까?')) {
            const { status, message } = await updateTodo(todoInfo);
            if (status === 'success') {
                router.push('/');
            } else {
                window.alert(message);
            }
        }
    };
    return (
        <div className={'mt-6 flex justify-center gap-x-[7px] md:gap-x-4 lg:justify-end'}>
            <Button
                purpose={'updateTodo'}
                className={'w-[164px]'}
                iconSrc={'/icons/check.svg'}
                disabled={!isUpdateButtonActive}
                onClick={handleUpdateTodoButtonClick}
            >
                <span className={'font-bold text-slate-900'}>수정 완료</span>
            </Button>
            <Button
                purpose={'deleteTodo'}
                className={'w-[164px]'}
                iconSrc={'/icons/x.svg'}
                onClick={handleDeleteTodoButtonClick}
            >
                <span className={'font-bold text-white'}>삭제하기</span>
            </Button>
        </div>
    );
};

export default TodoActions;
