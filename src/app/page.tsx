import AddTodoForm from '@/components/home/add-todo-form';
import Image from 'next/image';
import EmptyListMessage from '@/components/home/empty-list-message';
import TodoList from '@/components/home/todo-list';
import fetchTodoList from '@/lib/fetch-todo-list';

/**
 * 메인 페이지 컴포넌트입니다.
 */
const Page = async () => {
    // 서버로부터 할 일 목록을 가져옵니다.
    const todoList = await fetchTodoList();

    return (
        <main className={'flex min-h-[calc(100dvh-3.75rem)] flex-1 flex-col bg-gray-50'}>
            <div
                className={
                    '3xl:mx-[18.75%] mx-4 mt-4 flex flex-grow flex-col gap-y-6 md:mx-6 md:mt-6 md:gap-y-10 lg:mx-36'
                }
            >
                <AddTodoForm />
                <div className={'flex flex-col gap-y-12 lg:flex-row lg:gap-x-6'}>
                    <div className={'w-full lg:w-1/2 lg:flex-col lg:gap-y-[4rem]'}>
                        <Image src={'/images/text/todo.png'} alt={'todo-text'} width={101} height={36} />
                        {todoList.filter(todo => !todo.isCompleted).length === 0 ? (
                            <EmptyListMessage listType={'todo'}>
                                <p className={'text-center font-bold text-slate-400'}>
                                    할 일이 없어요. <br />
                                    TODO를 새롭게 추가해주세요!
                                </p>
                            </EmptyListMessage>
                        ) : (
                            <TodoList todos={todoList.filter(todo => !todo.isCompleted)} />
                        )}
                    </div>
                    <div className={'w-full lg:w-1/2 lg:flex-col lg:gap-y-[4rem]'}>
                        <Image src={'/images/text/done.png'} alt={'done-text'} width={97} height={36} />
                        {todoList.filter(todo => todo.isCompleted).length === 0 ? (
                            <EmptyListMessage listType={'done'}>
                                <p className={'text-center font-bold text-slate-400'}>
                                    아직 다 한 일이 없어요.
                                    <br />
                                    해야 할 일을 체크해보세요!
                                </p>
                            </EmptyListMessage>
                        ) : (
                            <TodoList todos={todoList.filter(todo => todo.isCompleted)} />
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Page;
