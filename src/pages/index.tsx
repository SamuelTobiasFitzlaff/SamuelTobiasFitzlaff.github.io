import {
  ContactButton,
  HomePageContainer,
  ProfilePhoto,
} from "@/styles/styles";

export default function pages() {
  return (
    <HomePageContainer>
      <ProfilePhoto
        src="/photos/profile.jpg"
        alt="Profile picture"
        width={800}
        height={800}
      />
      <div>
        <h2>🚧 This website is still under construction! 🚧</h2>
        <br />
        <h3>Welcome to my Portfolio!</h3>
        <p>
          I am a front-end developer with a passion for photography as a hobby.
          In addition to photography, I have also worked on a few projects in
          Blender. This website serves as a showcase of my interests and
          creative pursuits.
        </p>
        <p>
          Thank you for taking the time to explore my portfolio! If you have any
          questions, collaboration opportunities, or just want to say hello,
          feel free to reach out to me through the contact form below.
        </p>

        {/* <h2>Bem-vindo ao meu Portfólio!</h2>
      <p>
        Eu sou um desenvolvedor front-end e tenho a fotografia como meu hobby.
        Além disso, também trabalhei em alguns projetos no Blender. Este website
        foi criado como uma forma de apresentar meus interesses e criatividade.
      </p>
      <p>
        Agradeço por dedicar seu tempo para explorar o meu portfólio. Caso tenha
        alguma pergunta, oportunidade de colaboração ou apenas queira dizer oi,
        sinta-se à vontade para entrar em contato comigo através do formulário
        abaixo.
      </p> */}
        <ContactButton>Contact</ContactButton>
      </div>
    </HomePageContainer>
  );
}
