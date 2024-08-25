import { PageContainer, PageTextContainer } from "@/styles/styles";

export default function contact() {
  return (
    <PageContainer>
      <PageTextContainer style={{ maxWidth: "50ch" }}>
        <p>
          <strong>Contact Me:</strong> If you&apos;re interested in working together, have any
          inquiries, or need further information, <em>don&apos;t hesitate to reach
            out.</em>
        </p>
        <br />
        <p>
          Send me an email, and I&apos;ll get back to you as soon as
          possible. <a href="mailto:samuel.fitzlaff@proton.me">samuel.fitzlaff@proton.me</a>
        </p>
        <br />
        <p>
          <em>Let&apos;s make something great together.</em>
        </p>
      </PageTextContainer>
    </PageContainer>
  );
}
