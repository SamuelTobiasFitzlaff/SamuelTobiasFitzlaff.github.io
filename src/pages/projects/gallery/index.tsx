import {
  CloseModalButton,
  ModalContent,
  PageContainer,
  StyledBackdrop,
  StyledModal,
} from "@/styles/styles";
import { ImageList, ImageListItem } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";

function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}`,
    srcSet: `${image}?w=${size * cols}&h=${size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
  };
}

function getImageDimensions(src: string) {
  return new Promise<{ width: number; height: number }>((resolve) => {
    const img = new window.Image();
    img.onload = () => {
      resolve({ width: img.naturalWidth, height: img.naturalHeight });
    };
    img.src = src;
  });
}

export default function Gallery() {
  const [cols, setCols] = useState(0);
  const [clickedImage, setClickedImage] = useState("");
  const handleOpenModal = (image: string) => setClickedImage(image);
  const handleCloseModal = () => setClickedImage("");

  const [imageHeights, setImageHeights] = useState<{ [key: string]: number }>(
    {}
  );

  useEffect(() => {
    if (cols < 3) {
      itemData.forEach(async (item) => {
        const { width, height } = await getImageDimensions(item.img);
        const deviceWidth = window.innerWidth;
        const calculatedHeight = (deviceWidth / width) * height;

        setImageHeights((prevHeights) => ({
          ...prevHeights,
          [item.img]: calculatedHeight,
        }));
      });
    }
  }, [cols]);

  useEffect(() => {
    function handleResize() {
      setCols(Math.round(window.innerWidth / 320));
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <PageContainer>
      {cols !== 0 && (
        <ImageList
          variant="quilted"
          cols={cols >= 3 ? cols : 1}
          rowHeight={cols >= 3 ? 400 : "auto"}
        >
          {itemData.map((item) => {
            return (
              <ImageListItem
                key={item.img}
                cols={cols >= 3 ? item.cols || 1 : 1}
                rows={cols >= 3 ? item.rows || 1 : 1}
                style={
                  cols < 3 ? { height: imageHeights[item.img] || 400 } : {}
                }
                onClick={() => handleOpenModal(item.img)}
              >
                <Image
                  {...srcset(item.img, 300, item.rows, item.cols)}
                  alt={item.title}
                  fill
                  loading="lazy"
                  style={{ objectFit: "cover" }}
                />
              </ImageListItem>
            );
          })}
        </ImageList>
      )}
      <StyledModal
        aria-labelledby="modal-image"
        aria-describedby="modal-image"
        open={!!clickedImage}
        onClose={handleCloseModal}
        slots={{ backdrop: StyledBackdrop }}
      >
        <ModalContent>
          <CloseModalButton onClick={handleCloseModal}>X</CloseModalButton>
          <Image
            {...srcset(clickedImage, 1000)}
            alt="image"
            fill
            loading="lazy"
            objectFit="contain"
          />
        </ModalContent>
      </StyledModal>
    </PageContainer>
  );
}

const itemData = [
  {
    img: "/photos/gallery/53.jpg",
    title: "Luzes noturnas",
  },
  {
    img: "/photos/gallery/48.jpg",
    title: "Cachoeira",
  },
  {
    img: "/photos/gallery/47.jpg",
    title: "Cachoeira",
  },
  {
    img: "/photos/gallery/49.jpg",
    title: "Pedras empilhadas",
    cols: 2,
    rows: 2,
  },
  {
    img: "/photos/gallery/50.jpg",
    title: "Olhar para a cachoeira",
  },
  {
    img: "/photos/gallery/46.jpg",
    title: "Balão de ar quente",
  },
  {
    img: "/photos/gallery/45.jpg",
    title: "Passarinho",
  },
  {
    img: "/photos/gallery/44.jpg",
    title: "Ferramentas no museu",
  },
  {
    img: "/photos/gallery/43.jpg",
    title: "Tamanco de madeira",
  },
  {
    img: "/photos/gallery/42.jpg",
    title: "Estação Carambehy",
  },
  {
    img: "/photos/gallery/41.jpg",
    title: "Moinho Castrolanda",
  },
  {
    img: "/photos/gallery/40.jpg",
    title: "Jardim",
    cols: 2,
  },
  {
    img: "/photos/gallery/39.jpg",
    title: "Três torres",
  },
  {
    img: "/photos/gallery/38.jpg",
    title: "Coruja",
  },
  {
    img: "/photos/gallery/37.jpg",
    title: "Flor escalando o palanque",
  },
  {
    img: "/photos/gallery/36.jpg",
    title: "Passarinho",
    cols: 2,
  },
  {
    img: "/photos/gallery/34.jpg",
    title: "Beija flor descansando",
  },
  {
    img: "/photos/gallery/52.jpg",
    title: "Fogueira",
    cols: 2,
    rows: 2,
  },
  {
    img: "/photos/gallery/51.jpg",
    title: "Em volta da fogueira",
  },
  {
    img: "/photos/gallery/33.jpg",
    title: "Cachoeira",
    cols: 2,
  },
  {
    img: "/photos/gallery/32.jpg",
    title: "Cachoeira",
  },
  {
    img: "/photos/gallery/31.jpg",
    title: "Urubus",
  },
  {
    img: "/photos/gallery/30.jpg",
    title: "Urubu descansando",
  },
  {
    img: "/photos/gallery/35.jpg",
    title: "Ponta Grossa",
  },
  {
    img: "/photos/gallery/29.jpg",
    title: "Libélula",
  },
  {
    img: "/photos/gallery/27.jpg",
    title: "Folhas",
  },
  {
    img: "/photos/gallery/26.jpg",
    title: "Roda Gigante",
  },
  {
    img: "/photos/gallery/25.jpg",
    title: "Prédios Balneário Camboriú",
  },
  {
    img: "/photos/gallery/24.jpg",
    title: "Praia Balneário Camboriú",
  },
  {
    img: "/photos/gallery/23.jpg",
    title: "Gato",
    cols: 2,
  },
  {
    img: "/photos/gallery/28.jpg",
    title: "Folhas sobre rio",
  },
  {
    img: "/photos/gallery/22.jpg",
    title: "Gansos",
    cols: 2,
  },
  {
    img: "/photos/gallery/20.jpg",
    title: "Balões 5",
  },
  {
    img: "/photos/gallery/19.jpg",
    title: "Balões 4",
  },
  {
    img: "/photos/gallery/17.jpg",
    title: "Balões 2",
    cols: 2,
  },
  {
    img: "/photos/gallery/18.jpg",
    title: "Balões 3",
  },
  {
    img: "/photos/gallery/16.jpg",
    title: "Balões 1",
  },

  {
    img: "/photos/gallery/15.jpg",
    title: "Itaipu 2",
    cols: 2,
  },
  {
    img: "/photos/gallery/14.jpg",
    title: "Itaipu",
    cols: 2,
  },
  {
    img: "/photos/gallery/13.jpg",
    title: "Cataradas do iguaçu 6",
  },
  {
    img: "/photos/gallery/12.jpg",
    title: "Cataradas do iguaçu 5",
    cols: 2,
  },
  {
    img: "/photos/gallery/11.jpg",
    title: "Cataradas do iguaçu 4",
  },
  {
    img: "/photos/gallery/10.jpg",
    title: "Cataradas do iguaçu 3",
  },
  {
    img: "/photos/gallery/9.jpg",
    title: "Cataradas do iguaçu 2",
    cols: 2,
  },
  {
    img: "/photos/gallery/8.jpg",
    title: "Cataradas do iguaçu 1",
  },
  {
    img: "/photos/gallery/7.jpg",
    title: "Tiriva 2",
    rows: 2,
    cols: 2,
  },
  {
    img: "/photos/gallery/6.jpg",
    title: "Tiriva",
  },
  {
    img: "/photos/gallery/5.jpg",
    title: "casa de madeira",
  },
  {
    img: "/photos/gallery/4.jpg",
    title: "Barragem",
    cols: 2,
  },
  {
    img: "/photos/gallery/3.jpg",
    title: "Gôndola",
  },
  {
    img: "/photos/gallery/2.jpg",
    title: "Céu estrelado",
  },
  {
    img: "/photos/gallery/1.jpg",
    title: "Praça República Juliana",
  },
  {
    img: "/photos/gallery/0.jpg",
    title: "Praça Santo Antônio dos Anjos",
  },
];
