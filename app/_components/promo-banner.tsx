import Image, { ImageProps } from "next/image";

const PromoBanner = (props: ImageProps) => {
  return (
    // eslint-disable-next-line jsx-a11y/alt-text
    <Image
      height={0}
      width={0}
      className="h-auto w-full object-cover"
      sizes="100%"
      quality={100}
      {...props}
    />
  );
};

export default PromoBanner;
