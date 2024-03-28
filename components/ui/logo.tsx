import Link from 'next/link';
import Image from 'next/image';
import { envirobyte } from '@/public/images';

export default function Logo() {
  return (
    <Link href="/">
      <Image src={envirobyte} alt="envirobyte" className="w-[120px] -ml-1" />
    </Link>
  )
}
