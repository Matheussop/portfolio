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
      <div className="meta">
        <p>{props.date}</p>
        <span>{props.period}</span>
      </div>
      <h1>{props.title}</h1>
      <h2>{props.companyName}</h2>
      <p className="locale">{props.locale}</p>
    </WorksContainer>
  )
}
