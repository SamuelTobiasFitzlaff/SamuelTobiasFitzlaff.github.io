import { Container } from "./styles";

interface IExperienceCardProps {
  title: string;
  place?: string;
  date?: string;
}

export function ExperienceCard({ title, place, date }: IExperienceCardProps) {
  return (
    <Container>
      <h3>
        {title} <span>{place}</span>
      </h3>
      <p>{date}</p>
    </Container>
  );
}
