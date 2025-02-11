import Image from "next/image";

export default function Home() {
  return (
    <div style={{
        zIndex: -1,
        position: "fixed",
        width: "100%",
        height: "100%"
    }}>
      <Image
          src={"/background.webp"}
          alt={"coding background"}
          layout={"fill"}
          objectFit={"cover"}
      />
      <h1 style={{
          color: "white"
      }}>portfolio</h1>
    </div>
  );
}
