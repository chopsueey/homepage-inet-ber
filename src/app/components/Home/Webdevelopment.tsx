import Image from "next/image";
import img1 from "public/images/webdevelopment-3-bing-ai.jpeg"
export default function Webdevelopment() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col justify-center">
        <h1 className="text-center text-4xl">Eigene Website? Eigener Server?</h1>
        <h1 className="text-center text-4xl">Wir helfen dir.</h1>
      </div>
      <div className="w-fit shadow-lg">
                <Image
                  className="h-auto max-w-full rounded-xl opacity-50"
                  src={img1}
                  alt="webdevelopment process"
                  width={500}
                  height={500}
                />
              </div>
        {/* <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
          enim earum numquam cum doloribus soluta repellat optio autem
          reiciendis distinctio obcaecati consequatur sint ea natus, ipsa dicta?
          Quam, quaerat amet.
        </p> */}
    </div>
  );
}
