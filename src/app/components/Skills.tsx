import React from "react";
import SkillCard from "@/app/components/SkillCard";
interface Skill {
  name: string;
  proficiency: number;
  highlight: string;
  size?: string;
}

interface SkillsProps {
  skills: Skill[];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => (
  <section
    id="skills"
    className="w-full max-w-5xl text-center bg-surface-1 rounded-xl shadow pb-16 px-6 border border-border mb-20"
  >
    <h3 className="text-2xl font-semibold my-10 text-accent">Skills</h3>
    <div className="grid grid-cols-4 grid-flow-row auto-rows-fr gap-6">
      {skills.map((skill) => (
        <div key={skill.name} className={skill?.size}>
          <SkillCard skill={skill} />
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
