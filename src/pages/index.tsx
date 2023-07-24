import { PageContainer } from "@/styles/styles";
import Image from "next/image";

export default function pages() {
  return (
    <PageContainer>
      <Image
        src="/photos/profile.jpg"
        alt="Profile picture"
        width={400}
        height={400}
      />
    </PageContainer>
  );
}
