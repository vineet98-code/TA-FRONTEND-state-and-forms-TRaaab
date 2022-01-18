const foods = [
  {
    "id": 1,
    "title": "buttermilk pancakes",
    "category": "breakfast",
    "price": 15.99,
    "img": 'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    "desc": "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed "
  },
  {
    "id": 2,
    "title": "diner double",
    "category": "lunch",
    "price": 13.99,
    "img": "./images/item-2.jpeg",
    "desc": "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats "
  },
  {
    "id": 3,
    "title": "godzilla milkshake",
    "category": "shakes",
    "price": 6.99,
    "img": "./images/item-3.jpeg",
    "desc": "ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral."
  },
  {
    "id": 4,
    "title": "country delight",
    "category": "breakfast",
    "price": 20.99,
    "img": "./images/item-4.jpeg",
    "desc": "Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, "
  },
  {
    "id": 5,
    "title": "egg attack",
    "category": "lunch",
    "price": 22.99,
    "img": "./images/item-5.jpeg",
    "desc": "franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up "
  },
  {
    "id": 6,
    "title": "oreo dream",
    "category": "shakes",
    "price": 18.99,
    "img": "./images/item-6.jpeg",
    "desc": "Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday"
  },
  {
    "id": 7,
    "title": "bacon overflow",
    "category": "breakfast",
    "price": 8.99,
    "img": "./images/item-7.jpeg",
    "desc": "carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird "
  },
  {
    "id": 8,
    "title": "american classic",
    "category": "lunch",
    "price": 12.99,
    "img": "./images/item-8.jpeg",
    "desc": "on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  "
  },
  {
    "id": 9,
    "title": "quarantine buddy",
    "category": "shakes",
    "price": 16.99,
    "img": "./images/item-9.jpeg",
    "desc": "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing."
  }
]

export default function Food() {
  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        

        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {foods.map((food) => (
            <a key={food.id} href={food.href} className="group">
              <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                <img
                  src={food.img}
                  alt={food.img}
                  className="w-full  object-center object-cover group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{food.title}</h3>
              <h3 className="mt-4 text-sm text-gray-700">{food.category}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{food.price}</p>
              <p className="mt-1 text-lg font-medium text-gray-900">{food.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}