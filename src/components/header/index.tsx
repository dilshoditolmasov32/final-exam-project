"use cleint";

import Link from "next/link";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

import { logo, phone_icon, email, katalog, user, like, cart } from "@images";
import Image from "next/image";
const Index = () => {
  const links = [
    {
      title: "Продукты",
      url: "/product",
    },
    {
      title: "Контакты",
      url: "/contact",
    },
    {
      title: "Оплата и Доставка    ",
      url: "/delivery",
    },
    {
      title: "Новости",
      url: "/news",
    },
    {
      title: "О нас",
      url: "/about",
    },
  ];
  const top100Films = [{ title: "The Shawshank Redemption", year: 1994 }];
  return (
    <>
      <div className="bg-[#1F1D14]">
        <div className="container">
          <nav className="flex justify-between items-center py-[10px]">
            <ul className="flex items-center gap-[30px]">
              <li>
                <Link href={"/"}>
                  <Image src={logo} alt="sport-logo" />
                </Link>
              </li>
              {links?.map((item, index) => (
                <li
                  key={index}
                  className="font-Fira Sans text-white opacity-80 text-[16px]"
                >
                  <Link href={`${item.url}`}>{item.title}</Link>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-[30px]">
              <p className="flex items-center gap-[5px] ">
                <Image src={phone_icon} alt="phone icon" />
                <Link
                  href="tel:+998905711442"
                  className="font-Fira Sans text-white  text-[16px]"
                >
                  +998 90 571 14 42
                </Link>
              </p>
              <p className="flex items-center gap-[5px]">
                <Image src={email} alt="email icon" />
                <Link
                  href="mailto:dilshoditolmasov32@gmail.com"
                  className="font-Fira Sans text-white  text-[16px]"
                >
                  dilshoditolmasov32@gmail.com
                </Link>
              </p>
            </div>
          </nav>
        </div>
      </div>
      
      <div className=" bg-[#fff]">
        <div className="container bg-[#fff]">
          <div className="flex justify-between py-4">
            <div className="flex justify-between items-center gap-[10px]">
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#1F1D14",
                  "&:hover": {
                    backgroundColor: "#1F1D14",
                  },
                  borderRadius: "5px",
                  paddingX: "40px",
                  paddingY: "15px  ",
                }}
                className="flex items-center gap-[10px] text-[20px] font-Fira Sans  "
              >
                <Image src={katalog} alt="katalog" />
                Каталог
              </Button>
              <input
                type="text"
                className="py-[17px] px-5 bg-[#F2F2F2] rounded-[5px] outline-none border-[#F2F2F2] opacity-80 font-Fira Sans text-[16px] "
                placeholder="Поиск"
              />
            </div>
            <div className="flex justify-between items-center ">
              <button className="flex items-center  py-[13px] px-[13px] bg-[#F2F2F2] rounded-[5px] ">
                <Image src={user} alt="user" />
              </button>
              <button className="flex items-center py-[13px] px-[13px] bg-[#F2F2F2] rounded-[5px] text-[#1F1D14] ml-[13px] mr-[25px] ">
                <Image src={like} alt="like" />
              </button>
              <button className="flex items-center gap-[5px] text-[20px] font-Fira Sans py-[12px] px-[30px] bg-[#F2F2F2] rounded-[5px] text-[#1F1D14] ">
                <Image src={cart} alt="cart" />
                Корзина
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
