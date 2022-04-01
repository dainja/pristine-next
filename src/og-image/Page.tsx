import { GetServerSideProps, NextPage } from "next";
import { getImageConfig } from "./";
import bg from "../../public/images/salon.jpg";
import { TextLogo } from "../../components/Logo";

export const OgImage: NextPage<{
  imageConfig: string | string[] | undefined;
}> = (props) => {
  const imageConfig = getImageConfig(props.imageConfig);
  return (
    <div style={{ height: "100vh" }} className="relative w-full bg-custom1">
      <div className="relative h-full">
        <img
          src={bg.src}
          alt=""
          className="opacity-75 blur-sm w-full h-full object-cover"
        />
      </div>
      {imageConfig.id !== "start" ? (
        <div className="absolute top-0 left-0 right-0 bottom-0">
          <div className="flex h-full justify-center items-center text-white drop-shadow-2xl">
            <p className="text-center font-aurora text-9xl">
              {imageConfig.title}
            </p>
          </div>
        </div>
      ) : undefined}
      <div className="absolute bottom-0 left-0 right-0 text-center">
        {imageConfig.id === "start" ? (
          <TextLogo className="w-8/12 p-10" />
        ) : (
          <TextLogo className="w-4/12 p-10" />
        )}
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  return {
    props: {
      imageConfig: query.imageConfig,
    },
  };
};
