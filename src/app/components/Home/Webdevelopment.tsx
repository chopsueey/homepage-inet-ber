import Image from "next/image";

export default function Webdevelopment() {
  return (
    <div className="flex h-full flex-col">
      <div>
        <h1 className="text-4xl">Webentwicklung</h1>
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
          enim earum numquam cum doloribus soluta repellat optio autem
          reiciendis distinctio obcaecati consequatur sint ea natus, ipsa dicta?
          Quam, quaerat amet.
        </p>
      </div>
      <div>
        <div className="flex items-center justify-center pt-10">
          <Image
            src="/images/sectorlink-com-webdevelopment.jpg"
            alt="webdev technology"
            width={700}
            height={700}
            className="rounded-xl"
          />
        </div>
      </div>
    </div>
  );
}
