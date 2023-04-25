import { useRouter } from "next/router";
import { BiHomeAlt } from "react-icons/bi";
import { BsMailbox } from "react-icons/bs";
import { BsViewList } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const NavBar: React.FC = () => {
  const router = useRouter();

  const linkVariants = {
    initial: {
      width: "100%",
      left: 0,
    },
    animate: {
      width: (() => {
        switch (router.route) {
          case "/":
            return "calc(79.25% / 3)";
          case "/conversations":
            return "calc(105% / 3 )";
          case "/news":
            return "calc(92% / 3)";

          default:
            return "calc(100% / 3 )";
        }
      })(),
      left:
        router.route === "/"
          ? 0
          : router.route === "/conversations"
          ? "calc(85% / 3)"
          : "calc(100% /1.5)",
    },
  };

  return (
    <div
      style={{ gridRow: "12" }}
      className="fixed z-10 row-span-1 flex h-10 items-center justify-center gap-2 overflow-hidden rounded-md bg-[#252525]/90 px-1 shadow-2xl"
    >
      <motion.div
        variants={linkVariants}
        initial="initial"
        animate="animate"
        className="absolute m-1 h-8 gap-2 overflow-hidden rounded bg-[#505050]/80 "
      />
      <Link
        href="/"
        className="z-20 flex flex-row items-center gap-2 rounded px-2 py-1 duration-100 ease-in-out hover:z-30 hover:bg-[#252525]"
      >
        <BiHomeAlt
          size={20}
          color={router.route == "/" ? "#fff2cc" : "gray"}
          className=""
        />
        <p className={router.route == "/" ? `text-white` : `text-gray-300`}>
          Home
        </p>
      </Link>

      <Link
        href="/conversations"
        className="z-20 flex flex-row items-center gap-2 rounded px-2 py-1 duration-100 ease-in-out hover:scale-102 hover:bg-[#252525]"
      >
        <BsMailbox
          size={22}
          color={router.route == "/conversations" ? "#fff2cc" : "gray"}
        />
        <p
          className={
            router.route == "/conversations" ? `text-white` : `text-gray-300`
          }
        >
          Messages
        </p>
      </Link>

      <Link
        href="/news"
        className=" z-20 flex flex-row items-center gap-2 rounded px-2 py-1 duration-100 ease-in-out hover:scale-102 hover:bg-[#252525]"
      >
        <BsViewList
          size={20}
          color={router.route == "/news" ? "#fff2cc" : "gray"}
          className=" "
        />
        <p className={router.route == "/news" ? `text-white` : `text-gray-300`}>
          Discover
        </p>
      </Link>
    </div>
  );
};

export default NavBar;
// duration-100 ease-in-out hover:scale-110
