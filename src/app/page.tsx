import Link from "next/link";

const mockUrls =  [
  "https://utfs.io/f/63107a90-cb23-4cfc-9b75-df95262204a6-jgm484.jpg",
  "https://utfs.io/f/9982839b-8c9a-4e86-8403-864f89acf87d-ly09gt.jpg",
  "https://utfs.io/f/c6b2647a-c2c1-4839-b74f-bd815231b6c8-1s02a.jpg",
  "https://utfs.io/f/208c9046-9699-4d87-a5b9-22ef1f103dad-ar29bf.jpg"
]

const mockImages = mockUrls.map((url, i) => ({
  id: i + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {mockImages.map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt={`image-${image.id}`} />
          </div>
        ))}
      </div>
    </main>
  );
}
