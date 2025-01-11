import '@/app/globals.css';
import Image from 'next/image';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-row">
      <div className="relative w-full flex-1">
        <Image
          alt="black book"
          src="/images/icons/open-book.png"
          layout="fill" // Makes the image fill the div
          objectFit="contain" // Ensures the image covers the box without distortion
          className="rounded-xl"
        />
      </div>


      <div className="flex-1">{children}</div>
    </div>
  );
}