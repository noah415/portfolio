import React from 'react';

interface Props {
  key: any,
  name: string,
}

export const SkillCard = ({name}: Props) => {
  return (
    <div className="rounded-md font-secondary2">
      <p>{name}</p>
    </div>
  );
}