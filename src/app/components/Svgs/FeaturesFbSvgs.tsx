import Image from "next/image";

export const WebdevSvg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="h-6 w-6 text-blue-600"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
      />
    </svg>
  );
};

export const ServerDeploySvg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="h-6 w-6 text-blue-600"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Zm-3 6h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Z"
      />
    </svg>
  );
};

export const DiscordSvg = () => {
  return (
    <Image
      width={24}
      height={24}
      alt="image of a robot as icon"
      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAABSElEQVR4nO2WUU7DMAyGcwyoDRyGFya4A1LiwQUGHACuNU7C08YBcNpJ8ARyuwo2tjROIVul/VKkSqntL7HjxJiDhiqwfAmOX9HxHMY8yg6AjudI/rMZPMsOAM6/tADynR2gsOV5CyDfZhfCJcBOgmcBKIiv0PEUyVffBRc5nC/FVk5LUnAgflIH3TLA8aN+5VQbvqPlyelNdaxdgNgg8V3tQ3xpdgKJn2t6yxNt4F++nL9vUsJTjVEpRmfX1VFfAPGxTIXvVd3Q0XpD81GnBTcUj6b1hua7fO8XgNmWgjGPmiA8Q/d2sW4fmu/yHf9TooYFgKE89QRILkJMbMHJi8N/AlBvmUl0sJLz2wXUdwF5zgbwU0D+QX8XUNzWtu1X3oTrz7ITuygkOBB/JNyGPi63K93vD98DsQoC9H0Rxahtv5tScNBg9AUWFId+fkqX7wAAAABJRU5ErkJggg=="
    />
  );
};

export const GamingSvg = () => {
  return (
    <Image
      width={22}
      height={22}
      alt="image of a gamepad as icon"
      src="data:image/png;base64,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"
    />
  );
};

export const CommunitySvg = () => {
  return (
    <Image
      width={24}
      height={24}
      alt="community icon"
      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAByUlEQVR4nO1US0vDQBDuXT2JiN2pB8X/oSKCj4PePWh22oLntiLe1JP+EhEvPg4+/45IfXQmjQ8QKrPZRJuaNCrqJR8MhJnZb+ab3UwulyFDhgzfQB5pHjRdAnITNLvyrRyay/0FFNI2ILc+M6Vp6/eVoyn0DA5VhkvNITFAqhqfxH4yCYUegKZ9QGbf6ECVaSyIA9KVUetQJXoWNNdMTNNlWr6O4gr5rmOs4it7ym/AELVEdfR8wfHy9gyn5YsoMJ22QPORJBhDPraq9gyp5ka3BiQnLV97A1bdx+7yy4+FCOm5r4SqnRPkNavwNC1flIB8Ag/iDhScxnT4CDXXRLWYFFdILxLLF92ptHyfXwHysX9/HgDySXRkCnk3/jfkna/yhSiUGqNmqUSJNbvDK40RyQHkRUC+jWsANNXB4YW0fG2QJZK0YPwdQK/Wd6i0Oz64dN0jphx3wjw2/328Sm7iwkLajBaftYGXuLtVSE92zOsd3QdT1LzRlpvEV6SZ8CAgXdgXvBb3ugPlccVDrnASyXwK+eyj80Gc0mXCgmnJ2Ls1oNCdDPKT+JTm+25c76os4cDqTW+33H6n3hfkpy6QIUOGDLl/xBsLBDAMEbqIDQAAAABJRU5ErkJggg=="
    />
  );
};

export const ShopSvg = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-600">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
</svg>

  );
};