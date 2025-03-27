'use client';

import { memo, ChangeEventHandler, useCallback } from 'react';
import Image from 'next/image';
import uploadImageFile from '@/actions/upload-image-file';
import cn from '@/utils/cn';

interface Props {
    imageUrl: string;
    updateImageUrl: (imageUrl: string) => void;
}

/**
 * 이미지 렌더링, 이미지 파일 업로드 기능을 제공하는 컴포넌트입니다.
 *
 * 이미지 파일을 업로드하는 데 성공하면, 업로드된 이미지의 URL로 업데이트합니다.
 * 이미지 파일을 업로드하는 데 실패하면, 에러 메시지를 알림창에 표시합니다.
 *
 */
const ImageEditor = ({ imageUrl, updateImageUrl }: Props) => {
    const handleImageFileInputChange: ChangeEventHandler<HTMLInputElement> = useCallback(async e => {
        const files = e.target.files;
        if (!files) return;

        const file = files[0];

        // 선택한 파일이 이미지 파일인지 확인합니다.
        if (!file.type.startsWith('image/')) {
            window.alert('이미지 파일만 업로드할 수 있습니다.');
            return;
        }

        // 선택한 이미지 파일의 크기가 5MB 이하인지 확인합니다.
        const maxFileSize = 1024 * 1024 * 5;
        if (file.size > maxFileSize) {
            window.alert('5MB 이하의 이미지를 업로드해주세요.');
            return;
        }

        const fileNameRegex = /^[a-zA-Z]+$/;

        // 선택한 이미지 파일의 이름이 영어로만 이루어져 있는지 확인합니다.
        if (!fileNameRegex.test(file.name.slice(0, file.name.lastIndexOf('.')))) {
            window.alert('이미지 파일 이름은 영어로만 이루어져야 합니다.');
            return;
        }

        // 이미지 파일을 업로드하고, 결과를 가져옵니다.
        const { status, imageUrl } = await uploadImageFile(file);

        if (status === 'error') {
            window.alert('이미지 업로드에 실패했습니다.');
            return;
        }

        if (status === 'success') {
            updateImageUrl(imageUrl as string);
        }
    }, []);

    return (
        <div className={'relative mt-[17px] h-[311px] w-full rounded-[24px] md:mt-6 lg:w-2/5'}>
            {imageUrl ? (
                <img src={imageUrl} alt={'image'} className={'h-full w-full rounded-[24px] object-cover'} />
            ) : (
                <div
                    className={
                        'flex h-full w-full items-center justify-center rounded-[24px] border-2 border-dashed border-slate-300 bg-slate-50'
                    }
                >
                    <Image src={'/icons/img.svg'} alt='image icon' width={64} height={64} />
                </div>
            )}
            <label
                htmlFor={'imageFileInput'}
                className={`absolute right-4 bottom-4 h-16 w-16 rounded-full ${cn({
                    'bg-slate-200': !imageUrl,
                    'border-2 border-slate-900 bg-slate-900/50': imageUrl,
                })} flex items-center justify-center`}
            >
                <Image
                    src={`${imageUrl ? '/icons/edit.svg' : '/icons/plus-slate.svg'}`}
                    alt={'image plus icon'}
                    width={24}
                    height={24}
                />
            </label>
            <input
                id={'imageFileInput'}
                type={'file'}
                className={'hidden'}
                accept={'image/*'}
                onChange={handleImageFileInputChange}
            />
        </div>
    );
};

export default memo(ImageEditor);
