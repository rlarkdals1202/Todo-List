import fetchTodoInfo from '@/lib/fetch-todo-info';
import TodoInfo from '@/components/items/[itemId]/todo-info';

interface Props {
    params: Promise<{
        itemId: string;
    }>;
}

// 할 일 상세 페이지 컴포넌트
const Page = async ({ params }: Props) => {
    const { itemId } = await params;

    // 서버로부터 할 일 상세 정보를 가져옵니다.
    const todoInfo = await fetchTodoInfo(Number(itemId));

    // 데이터가 존재하는 경우에만 할 일 상세 정보를 보여줍니다.
    if (todoInfo !== null) {
        return (
            <main
                className={
                    '3xl:px-[360px] flex min-h-[calc(100dvh-3.75rem)] w-full flex-col items-center bg-gray-50 lg:px-28'
                }
            >
                <TodoInfo
                    todoInfo={{
                        id: todoInfo.id,
                        isCompleted: todoInfo.isCompleted,
                        name: todoInfo.name,
                        memo: todoInfo.memo,
                        imageUrl: todoInfo.imageUrl,
                    }}
                />
            </main>
        );
    }

    return <div>할 일 상세 정보를 불러오지 못했어요.</div>;
};

export default Page;
