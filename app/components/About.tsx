export default function About() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">关于华盛顿特区</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-600 mb-4">
              华盛顿哥伦比亚特区（Washington, D.C.）是美国的首都，位于美国东海岸，
              介于弗吉尼亚州和马里兰州之间。它不属于任何一个州，而是一个联邦特区。
            </p>
            <p className="text-gray-600 mb-4">
              这座城市以美国第一任总统乔治·华盛顿的名字命名，是美国联邦政府的所在地，
              也是许多国际组织、外国使馆、智库和游说团体的总部所在地。
            </p>
          </div>
          <div>
            <p className="text-gray-600 mb-4">
              华盛顿特区不仅是政治中心，也是一个充满活力的文化和历史中心。
              这里有众多的博物馆、纪念碑和历史地标，每年吸引数百万游客前来参观。
            </p>
            <p className="text-gray-600">
              从壮观的国会大厦到庄严的林肯纪念堂，从史密森尼博物馆群到美丽的樱花，
              华盛顿特区为游客提供了丰富多样的体验。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

