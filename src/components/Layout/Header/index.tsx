import {
  HeaderContainer,
  ButtonContainer,
  ContactButton,
  RegularButton,
} from "./styles";
export default function Header() {
  return (
    <>
      <HeaderContainer>
        <h1>Samuel Fitzlaff</h1>
        <ButtonContainer>
          <RegularButton>Dev</RegularButton>
          <RegularButton>Photos</RegularButton>
          <RegularButton>Blender</RegularButton>
          <RegularButton>Qualifications</RegularButton>
          <ContactButton>Contato</ContactButton>
        </ButtonContainer>
      </HeaderContainer>
    </>
  );
}
