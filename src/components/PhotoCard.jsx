import {Button,Card,Chip, Separator} from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import {BiDownload} from 'react-icons/bi';
import {FaHeart} from 'react-icons/fa6';
 

const PhotoCard = ({photo}) => {
     
    return (
        <Card className='border rounded-xl'> 
        <div className='relative w-full aspect-square'>
            <Image
                src={photo.imageUrl}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px)"
                 
                alt={photo.title}
                className='object-cover rounded-tl-xl'
            />

            <Chip size="sm" className='absolute top-2 right-2'>{photo.category}</Chip>
        </div>
        <div>
            <h2 className='font-medium'>{photo.title}</h2>
        </div>

        <div className="flex gap-5">
            <div className='flex items-center gap-2'>
                <p><FaHeart/></p>
                <p>{photo.likes}</p>

            </div>

            <Separator orientation='vertical' />

            <div className='flex items-center gap-2'>
                <p><BiDownload/></p>
                <p>{photo.downloads}</p>
        </div>
        </div>
        <Link href={`/all-photos/${photo.id}`}>
        <Button variant="outline" className={"w-full"}>View</Button> </Link>
        </Card>
    );
};

export default PhotoCard;






// `components/PhotoCard.jsx`

// ```jsx
// import { Button, Card, Chip, Separator } from "@heroui/react";
// import Image from "next/image";
// import Link from "next/link";
// import { BiDownload } from "react-icons/bi";
// import { FaHeart } from "react-icons/fa6";

// const PhotoCard = ({ photo }) => {
//   return (
//     <Card className="border rounded-xl overflow-hidden p-3 space-y-4">

//       {/* Image */}
//       <div className="relative w-full aspect-square">
//         <Image
//           src={photo.imageUrl}
//           fill
//           sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
//           alt={photo.title}
//           className="object-cover rounded-xl"
//         />

//         <Chip size="sm" className="absolute top-2 right-2">
//           {photo.category}
//         </Chip>
//       </div>

//       {/* Title */}
//       <div>
//         <h2 className="font-semibold text-lg">
//           {photo.title}
//         </h2>
//       </div>

//       {/* Likes & Downloads */}
//       <div className="flex gap-5 items-center">

//         <div className="flex items-center gap-2">
//           <FaHeart className="text-red-500" />
//           <p>{photo.likes}</p>
//         </div>

//         <Separator orientation="vertical" className="h-5" />

//         <div className="flex items-center gap-2">
//           <BiDownload className="text-blue-500" />
//           <p>{photo.downloads}</p>
//         </div>

//       </div>

//       {/* Button */}
//       <Link href={`/all-photos/${photo.id}`}>
//         <Button variant="bordered" className="w-full">
//           View Details
//         </Button>
//       </Link>

//     </Card>
//   );
// };

// export default PhotoCard;




 

 
// import { Button, Card, Chip, Separator } from "@heroui/react";
// import Image from "next/image";
// import Link from "next/link";
// import { BiDownload } from "react-icons/bi";
// import { FaHeart } from "react-icons/fa6";

// const PhotoCard = ({ photo }) => {
//   return (
//     <Card className="border rounded-xl overflow-hidden p-3 space-y-4">
      
//       {/* Image */}
//       <div className="relative w-full aspect-square">
//         <Image
//           src={photo.imageUrl}
//           alt={photo.title}
//           fill
//           className="object-cover rounded-xl"
//         />

//         <Chip
//           size="sm"
//           className="absolute top-2 right-2"
//         >
//           {photo.category}
//         </Chip>
//       </div>

//       {/* Title */}
//       <h2 className="font-semibold text-lg">
//         {photo.title}
//       </h2>

//       {/* Likes & Downloads */}
//       <div className="flex items-center gap-5">

//         <div className="flex items-center gap-2">
//           <FaHeart className="text-red-500" />
//           <p>{photo.likes}</p>
//         </div>

//         <Separator
//           orientation="vertical"
//           className="h-5"
//         />

//         <div className="flex items-center gap-2">
//           <BiDownload className="text-blue-500" />
//           <p>{photo.downloads}</p>
//         </div>

//       </div>

//       {/* Button */}
//       <Link href={"/all-photos/" + photo.id}>
//         <Button
//           variant="bordered"
//           className="w-full"
//         >
//           View Details
//         </Button>
//       </Link>

//     </Card>
//   );
// };

// export default PhotoCard;
 









 