import {
  CloseModalButton,
  ModalContent,
  PageContainer,
  StyledBackdrop,
  StyledModal,
} from "@/styles/styles";
import { Button } from "@mui/base";
import { ImageList, ImageListItem } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";

function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function Gallery() {
  const [cols, setCols] = useState(0);
  const [clickedImage, setClickedImage] = useState("");
  const handleOpenModal = (image: string) => setClickedImage(image);
  const handleCloseModal = () => setClickedImage("");

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
          rowHeight={320}
        >
          {itemData.map((item) => (
            <ImageListItem
              key={item.img}
              cols={cols >= 3 ? item.cols || 1 : 1}
              rows={cols >= 3 ? item.rows || 1 : 1}
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
          ))}
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
    rows: 2,
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
    img: "/photos/gallery/18.jpg",
    title: "Balões 3",
  },
  {
    img: "/photos/gallery/17.jpg",
    title: "Balões 2",
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
    rows: 2,
    cols: 3,
  },
  {
    img: "/photos/gallery/8.jpg",
    title: "Cataradas do iguaçu 1",
  },
  {
    img: "/photos/gallery/7.jpg",
    title: "Tiriva 2",
    rows: 3,
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
