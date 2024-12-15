export default function Hero() {
  return (
    <div className="relative h-[70vh]">
      <video
        src="/Discover_DC_In_360_ambient1.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="h-[70vh] w-full object-cover"
      >
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-4">欢迎来到华盛顿特区</h1>
          <p className="text-xl">美国的首都，历史与现代交汇的地方</p>
        </div>
      </div>
    </div>
  )
}

