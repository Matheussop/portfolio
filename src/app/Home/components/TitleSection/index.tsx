import Link from "next/link";
import { Line, TitleSectionContainer } from "./styled";

interface TitleSectionProps {
  title: string;
  id?: string;
  redirectTitle?: string;
  redirectUrl?: string;
}

export function TitleSection({title, redirectTitle, id, redirectUrl=''}: TitleSectionProps){
  const redirectTitleFormatted = redirectTitle + '  ~~>';
  return (
    <TitleSectionContainer id={id}>
      <div>
        <span>#</span><h2>{title}</h2>
        <Line className="line"/>
      </div>
      {redirectTitle && <Link href={redirectUrl} >{redirectTitleFormatted} </Link>}
    </TitleSectionContainer>
  )
}