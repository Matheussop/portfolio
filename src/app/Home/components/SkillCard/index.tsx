import React from "react";
import { InfosContainer, NameContainer, SkillContainer } from "./styles";

export interface SkillProps{
  name: string;
  description: string[];
}

export function SkillCard({name, description}: SkillProps) {
  return (
    <SkillContainer>
      { name && (
        <NameContainer>
          <h3>{name}</h3>
        </NameContainer>
      )}
      <InfosContainer>
        {description && 
          description.map((item, index) => (
            <p key={index}>{item}</p>
          ))
        }
      </InfosContainer>
    </SkillContainer>
  )
}