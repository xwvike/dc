import Image from 'next/image'

const attractions = [
  { name: '国会大厦', image: '/licensed-image.jpeg', description: '美国国会所在地，立法机构的象征。' },
  { name: '白宫', image: '/US_119809810.jpg', description: '美国总统的官邸和办公室。' },
  { name: '林肯纪念堂', image: '/pixels.sh_visitors-to-the-lincoln-memorial-at-night_mydccool-via-crowdriff.jpg.webp', description: '纪念美国第16任总统亚伯拉罕·林肯。' },
  { name: '华盛顿纪念碑', image: '/jn.jpeg', description: '为纪念美国第一任总统乔治·华盛顿而建。' },
]

export default function Attractions() {
  return (
    <section id="attractions" className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">主要景点</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {attractions.map((attraction, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src={attraction.image}
                alt={attraction.name}
                width={600}
                height={400}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{attraction.name}</h3>
                <p className="text-gray-600">{attraction.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

