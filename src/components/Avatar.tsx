import { defaultUserImage } from "@/lib/constants";

const Avatar = ({ src = "" }) => {
  return (
    <img
      src={src}
      onError={({ currentTarget }) => {
        currentTarget.onerror = null;
        currentTarget.src = defaultUserImage;
      }}
      className=" w-full h-full object-cover rounded-full fill-foreground"
    />
  );
};

export default Avatar;
