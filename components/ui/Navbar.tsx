import { Image, Spacer, Text, useTheme } from "@nextui-org/react";
import Link from "next/link";

export const Navbar = () => {
  const { theme } = useTheme();

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "row",
        alignItems: "cente",
        justifyContent: "start",
        padding: "0px 20px",
        backgroundColor: theme?.colors.gray50.value,
      }}
    >
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/132.png"
        alt="Imagen del la web"
        width={70}
        height={10}
      />

      <Text color="white" css={{marginTop:'10px'}} h3>
        <Link href="/">Pokemon</Link>
      </Text>
      <Spacer css={{ flex: "1" }} />
      <Text color="white" css={{marginTop:'10px'}} h3>
        <Link href="/favorites">Favoritos</Link>
      </Text>
    </div>
  );
};
