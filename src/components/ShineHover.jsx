export default function ShineHover({ children }) {
  return (
    <div className="group flex justify-center items-center relative w-80 h-60 cursor-pointer">
      {children}
      <div className="absolute top-0 -inset-full h-full w-1/2 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine"></div>
    </div>
  );
}
