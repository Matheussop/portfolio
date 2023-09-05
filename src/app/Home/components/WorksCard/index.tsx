import { WorksContainer } from "./styled";

export interface WorksCardProps{
  title: string;
  companyName: string;
  date: string;
  locale: string;
  period: string;
}

export function WorksCard(props: WorksCardProps) {
  return (
    <WorksContainer>
      <h1>{props.title}</h1>
      <h2>{props.companyName} - {props.period} </h2>
      <p>{props.date}</p>
      <p>{props.locale}</p>
    </WorksContainer>
  )
}