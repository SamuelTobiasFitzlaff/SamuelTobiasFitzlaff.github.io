import { ExperienceCard } from "@/components/ExperienceCard";
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
          <ExperienceCard
            title="Programador"
            place="BPlus Tecnologia"
            date="11/2021 - Present"
          />
          <ExperienceCard
            title="Estágio"
            place="BPlus Tecnologia"
            date="07/2021 - 11/2021"
          />
          <ExperienceCard
            title="Monitoria de Algoritmos"
            place="UDESC"
            date="06/2019 - 07/2021"
          />
        </PageTextContainer>
        <PageTextContainer>
          <h2>Courses</h2>
          <ExperienceCard
            title="Sistemas de Informação"
            place="UDESC"
            date="2018 - Present"
          />
          <ExperienceCard
            title="Logística"
            place="Instituto Avanza"
            date="2018"
          />
          <ExperienceCard
            title="Marketing"
            place="Instituto Avanza"
            date="2018"
          />
          <ExperienceCard
            title="Recursos Humanos"
            place="Instituto Avanza"
            date="2018"
          />
          <ExperienceCard
            title="Gestão Empresarial"
            place="Instituto Avanza"
            date="2017"
          />
          <ExperienceCard
            title="Montagem e manutenção de microcomputadores"
            place="Senac"
            date="2015"
          />
          <ExperienceCard
            title="Oficina de informática"
            place="Secretaria Municipal de Educação"
            date="2014"
          />
          <ExperienceCard
            title="Informática"
            place="Cenaic"
            date="2012 - 2013"
          />
          <ExperienceCard title="Hardware" place="Cenaic" date="2012 - 2013" />
        </PageTextContainer>
        <PageTextContainer>
          <h2>Skills</h2>
          {/* <h3>Technologies</h3> */}
          <ExperienceCard title="React js" />
          <ExperienceCard title="Next js" />
          <ExperienceCard title="Javascript" />
          <ExperienceCard title="Typescript" />
          <ExperienceCard title="Css" />
          <ExperienceCard title="Styled coponents" />
          <ExperienceCard title="Python" />
          <ExperienceCard title="Blender" />
          {/* <h3>Operating systems</h3> */}
          <ExperienceCard title="GNU/Linux" />
          <ExperienceCard title="Windows" />
          {/* <h3>Languages</h3> */}
          <ExperienceCard title="Portuguese" />
          <ExperienceCard title="English" />
        </PageTextContainer>
      </div>
    </PageContainer>
  );
}
