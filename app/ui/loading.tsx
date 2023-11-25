import Image from 'next/image';

const Loading = () => {
  return (
    <div className="h-screen w-screen top-0 left-0 absolute z-50 bg-slate-200 flex items-center justify-center">
      <Image
        src="/logo.svg"
        width={100}
        height={100}
        alt="Loading"
        className="animate-pulse-slow opacity-0 transition-opacity duration-1500 ease-in-out infinite"
      />
    </div>
  );
};

export default Loading;
