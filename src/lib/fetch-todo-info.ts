import ky from 'ky';
import type TodoInfo from '@/types/todo-info.interface';

/**
 * 할 일 상세 정보를 가져오는 async 함수입니다.
 *
 * 할 일 상세 정보를 성공적으로 가져오면, 할 일 상세 정보를 반환합니다.
 * 할 일 상세 정보를 가져오는 데 실패하면, 에러를 콘솔에 출력하고, null을 반환합니다.
 *
 */
const fetchTodoInfo = async (id: number) => {
    try {
        const todoInfo = await ky
            .get(`${process.env.NEXT_PUBLIC_API_URL}/items/${id}`, {
                next: {
                    tags: [`todo-${id}`],
                },
            })
            .json<TodoInfo>();
        return todoInfo;
    } catch (error) {
        console.error(error);
        return null;
    }
};

export default fetchTodoInfo;
