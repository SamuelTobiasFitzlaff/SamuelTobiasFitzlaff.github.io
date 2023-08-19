import { PageContainer, PageTextContainer } from "@/styles/styles";

export default function experience() {
  return (
    <PageContainer>
      <PageTextContainer>
        <h1>Experience</h1>
      </PageTextContainer>
      <br />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "auto auto auto",
          gap: "1rem",
        }}
      >
        <PageTextContainer>
          <h2>Professional Experience</h2>
          <ul>
            <li>Monitoria de algoritmos, UDESC</li>
            <li>Estágio, BPlus Tecnologia</li>
            <li>Programadord, BPlus Tecnologia</li>
          </ul>
        </PageTextContainer>
        <PageTextContainer>
          <h2>Courses</h2>
          <ul>
            <li>Hardware, Cenaic</li>
            <li>Software, Cenaic</li>
            <li>Inglês para web, Cenaic</li>
            <li>Digitação, Cenaic</li>
            <li>Montagem e manutenção de micros, Senac</li>
            <li>Gestão Empresarial, Instituto Avanza</li>
            <li>Administração, Instituto Avanza</li>
            <li>, Instituto Avanza</li>
            <li>Logistica, Instituto Avanza</li>
            <li>Cursando sistemas de informação, UDESC</li>
          </ul>
        </PageTextContainer>
        <PageTextContainer>
          <h2>Knowledge</h2>
          <ul>
            <li>
              Tecnologies
              <ul>
                <li>React js</li>
                <li>Next js</li>
                <li>Javascript</li>
                <li>Typescript</li>
                <li>Css</li>
                <li>Styled coponents</li>
                <li>Python</li>
                <li>Blender</li>
              </ul>
            </li>
            <li>
              Operating systems
              <ul>
                <li>GNU/Linux</li>
                <li>Windows</li>
              </ul>
            </li>
            <li>
              Languages
              <ul>
                <li>Portuguese</li>
                <li>English</li>
              </ul>
            </li>
          </ul>
        </PageTextContainer>
      </div>
    </PageContainer>
  );
}
