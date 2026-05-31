// import {Button,Card,Chip, Separator} from '@heroui/react';
// import Image from 'next/image';
// import Link from 'next/link';
// import {BiDownload} from 'react-icons/bi';
// import {FaHeart} from 'react-icons/fa6';
 

// const PhotoCard = ({photo}) => {
     
//     return (
//         <Card className='border rounded-xl'> 
//         <div className='relative w-full aspect-square'>
//             <Image
//                 src={photo.imageUrl}
//                 fill
//                 sizes="(max-width: 768px) 100vw, (max-width: 1200px)"
                 
//                 alt={photo.title}
//                 className='object-cover rounded-tl-xl'
//             />

//             <Chip size="sm" className='absolute top-2 right-2'>{photo.category}</Chip>
//         </div>
//         <div>
//             <h2 className='font-medium'>{photo.title}</h2>
//         </div>

//         <div className="flex gap-5">
//             <div className='flex items-center gap-2'>
//                 <p><FaHeart/></p>
//                 <p>{photo.likes}</p>

//             </div>

//             <Separator orientation='vertical' />

//             <div className='flex items-center gap-2'>
//                 <p><BiDownload/></p>
//                 <p>{photo.downloads}</p>
//         </div>
//         </div>
//         <Link href={`/all-photos/${photo.id}`}>
//         <Button variant="outline" className={"w-full"}>View</Button> </Link>
//         </Card>
//     );
// };

// export default PhotoCard;






import { Button, Card, Chip, Separator } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import { BiDownload } from 'react-icons/bi';
import { FaHeart } from 'react-icons/fa6';

const PhotoCard = ({ photo }) => {
    return (
        <Card className='border rounded-xl p-4 flex flex-col gap-3'> 
            <div className='relative w-full aspect-square'>
                <Image
                    src={photo.imageUrl}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px)"
                    alt={photo.title || "Photo"}  
                    className='object-cover rounded-xl'  
                />
                <Chip size="sm" className='absolute top-2 right-2'>{photo.category}</Chip>
            </div>
            
            <div>
                <h2 className='font-medium'>{photo.title}</h2>
            </div>

            <div className="flex gap-4 items-center">
                <div className='flex items-center gap-1'>
                    <FaHeart className="text-red-500" />
                    <p>{photo.likes}</p>
                </div>

                <Separator orientation='vertical' className="h-4" />

                <div className='flex items-center gap-1'>
                    <BiDownload />
                    <p>{photo.downloads}</p>
                </div>
            </div>

            <Link href={`/all-photos/${photo.id}`}>
                <Button variant="bordered" className="w-full">View</Button> 
            </Link>
        </Card>
    );
};

export default PhotoCard;







// import {Button,Card,Chip, Separator} from '@heroui/react';
// import Image from 'next/image';
// import Link from 'next/link';
// import {BiDownload} from 'react-icons/bi';
// import {FaHeart} from 'react-icons/fa6';
 

// const PhotoCard = ({photo}) => {
     
//     return (
//         <Card className='border rounded-xl'> 
//         <div className='relative w-full aspect-square'>
//             <Image
//                 src={photo.imageUrl}
//                 fill
//                 sizes="(max-width: 768px) 100vw, (max-width: 1200px)"
                 
//                 alt={photo.title}
//                 className='object-cover rounded-tl-xl'
//             />

//             <Chip size="sm" className='absolute top-2 right-2'>{photo.category}</Chip>
//         </div>
//         <div>
//             <h2 className='font-medium'>{photo.title}</h2>
//         </div>

//         <div className="flex gap-5">
//             <div className='flex items-center gap-2'>
//                 <p><FaHeart/></p>
//                 <p>{photo.likes}</p>

//             </div>

//             <Separator orientation='vertical' />

//             <div className='flex items-center gap-2'>
//                 <p><BiDownload/></p>
//                 <p>{photo.downloads}</p>
//         </div>
//         </div>
//         <Link href={`/all-photos/${photo.id}`}>
//         <Button variant="outline" className={"w-full"}>View</Button> </Link>
//         </Card>
//     );
// };

// export default PhotoCard;