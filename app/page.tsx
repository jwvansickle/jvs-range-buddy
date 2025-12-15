import nextLogo from '../public/next.svg';
import vercel from '../public/vercel.svg';
import Image from "next/image";

export default function Home() {
  return (
    <div className="text-center">
      <h1 className="mb-4">Welcome to Range Buddy!</h1>
      <p className="mb-4">Your companion for managing shooting targets.</p>
      <div className="d-flex justify-content-center gap-4">
        <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer">
          <Image src={nextLogo} alt="Next.js Logo" width={100} height={24} />
        </a>
        <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">
          <Image src={vercel} alt="Vercel Logo" width={100} height={24} />
        </a>
      </div>
    </div>
  );
}
