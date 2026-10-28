import { WorksContainer } from "./styled";

export interface WorksCardProps{
  title: string;
  companyName: string;
  date: string;
  locale: string;
  period: string;
  description?: string;
  current?: boolean;
}

export function WorksCard(props: WorksCardProps) {
  return (
    <WorksContainer $current={props.current}>
      <div className="meta">
        <p>{props.date}</p>
        <span>{props.period}</span>
        {props.current && <span className="current">Atual</span>}
      </div>
      <h3>{props.title}</h3>
      <h4>{props.companyName}</h4>
      <p className="locale">{props.locale}</p>
      {props.description && <p className="description">{props.description}</p>}
    </WorksContainer>
  )
}
