import ky from 'ky';
import type Todo from '@/types/todo.interface';

/**
 * 할 일 목록을 가져오는 async 함수입니다.
 *
 * 할 일 목록을 성공적으로 가져오면, 할 일 목록을 반환합니다.
 * 할 일 목록을 가져오는 데 실패하면, 에러를 콘솔에 출력하고, 빈 배열을 반환합니다.
 *
 */
const fetchTodoList = async () => {
    try {
        const todoList = await ky
            .get(`${process.env.NEXT_PUBLIC_API_URL}/items`, {
                next: {
                    tags: ['todos'],
                },
                cache: 'no-store',
            })
            .json<Todo[]>();
        return todoList;
    } catch (error) {
        console.error(error);
        return [];
    }
};

export default fetchTodoList;
