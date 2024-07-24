import { product1, product2, product3, product4, like, cart } from "@images";
import { Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const Index = () => {
  const products = [
    {
      id: "1",
      image: product1,
      name: "Бутса Nike Mercurial Superfly 8 FG",
      price: "250 000 uzs",
    },
    {
      id: "2",
      image: product2,
      name: "Бутса Nike Mercurial Superfly 8 FG",
      price: "250 000 uzs",
    },
    {
      id: "3",
      image: product3,
      name: "Бутса Nike Mercurial Superfly 8 FG",
      price: "250 000 uzs",
    },
    {
      id: "4",
      image: product4,
      name: "Бутса Nike Mercurial Superfly 8 FG",
      price: "250 000 uzs",
    },
  ];

  return (
    <>
      <div>
        <div className="container">
          <div className="py-[70px]">
            <h2 className="text-[#1F1D14] text-[32px] font-Fira Sans font-bold mb-9">
              Продукты
            </h2>
            <div className="flex gap-6">
              {products.map((item) => (
                <div
                  className="pt-[25px] rounded-[5px] bg-white w-[292px] relative"
                  key={item.id}
                >
                  <div className="absolute top-[10px] right-[14px]">
                    <Link href={"#like"}>
                      <a>
                        <Image src={like} alt="like" />
                      </a>
                    </Link>
                  </div>
                  <Image
                    src={item.image}
                    alt={`product_image_${item.id}`}
                    className="pl-[30px] pr-5"
                  />
                  <p className="pl-[30px] pr-5 mb-6 mt-5 text-[20px]">
                    {item.name}
                  </p>
                  <div className="pl-[30px] pr-5 mb-[25px] text-[20px] font-semibold">
                    {item.price}
                  </div>
                  <button className="bg-[#FBD029] w-full flex items-center justify-center gap-[6px] py-[15px] font-Fira Sans text-[20px] text-[#1F1D14] rounded-br-[5px] rounded-bl-[5px]">
                    <Image src={cart} alt="korzinka_icon" />
                    Корзина
                  </button>
                </div>
              ))}
            </div>
          </div>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#FBD029",
              "&:hover": {
                backgroundColor: "#FBD029",
              },
              borderRadius: "5px",
              paddingX: "40px",
              paddingY: "15px",
              width: "100%",
              marginBottom: "40px",
              color: "#1F1D14",
              fontWeight: 600,
              fontSize: "24px",
            }}
            className="flex items-center gap-[10px] text-[20px] font-Fira Sans"
          >
            Yana ko'rsatish 4
          </Button>
        </div>
      </div>
    </>
  );
};

export default Index;
