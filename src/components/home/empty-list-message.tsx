import Image from 'next/image';

interface Props {
    listType: 'todo' | 'done';
    children: React.ReactNode;
}

/**
 * 할 일 목록이 비어있을 때 관련 이미지와 메시지를 보여줄 컴포넌트입니다.
 */
const EmptyListMessage = ({ listType, children }: Props) => {
    return (
        <div className={'flex flex-col items-center gap-y-4 md:gap-y-6'}>
            <Image
                src={listType === 'todo' ? '/images/empty/todo.png' : '/images/empty/done.png'}
                alt={`${listType} list empty image`}
                width={240}
                height={240}
                className='h-[120px] w-[120px] md:h-[240px] md:w-[240px]'
            />
            {children}
        </div>
    );
};

export default EmptyListMessage;
