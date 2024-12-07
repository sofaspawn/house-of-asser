import Image from "next/image";
//import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/GUaM7sSKjwTglH4jpTdAkdPmUwKtia1LbjGsy3ruDo84n0E2",
  "https://utfs.io/f/GUaM7sSKjwTgEXWXVgyiKxjztA8Sawyu3moDTOvCGYRc7iPV",
  "https://utfs.io/f/GUaM7sSKjwTgx0xFoN8iYrRDct0TfmWnyHMpqX5BGdZQgwjC",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {mockImages.map((image) => (
          <div className="w-48" key={image.id}>
            <Image
              src={image.url}
              height={400}
              width={600}
              alt={image.url as unknown as string}
            />
          </div>
        ))}
      </div>
    </main>
  );
}
