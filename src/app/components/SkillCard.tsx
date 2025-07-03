"use client";
import { motion } from "framer-motion";
import { useState } from "react";

interface Skill {
  name: string;
  proficiency: number;
  highlight: string;
}

interface SkillCardProps {
  skill: Skill;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  const [flipped, setFlipped] = useState(false);
  return (
    <div
      className="relative w-full h-full min-h-36 cursor-pointer perspective"
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onClick={() => setFlipped((f) => !f)}
      tabIndex={0}
      onFocus={() => setFlipped(true)}
      onBlur={() => setFlipped(false)}
      style={{ outline: "none" }}
    >
      <motion.div
        className="absolute w-full h-full transition-transform duration-500 [transform-style:preserve-3d]"
        animate={{ rotateY: flipped ? 180 : 0 }}
      >
        {/* Front */}
        <div className="absolute w-full h-full bg-gray-100 dark:bg-surface_2 rounded-lg shadow-md flex flex-col justify-center items-center p-4 [backface-visibility:hidden]">
          <div className="text-lg font-semibold mb-2">{skill.name}</div>
          <div className="w-full bg-gray-300 dark:bg-gray-800 rounded-full h-3 mb-2">
            <motion.div
              className="bg-blue-500 h-3 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${skill.proficiency}%` }}
              transition={{ duration: 1 }}
            />
          </div>
          <div className="text-sm text-gray-700 dark:text-gray-200">
            Proficiency: {skill.proficiency}%
          </div>
        </div>
        {/* Back */}
        <div className="absolute w-full h-full bg-blue-600 text-white rounded-lg shadow-md flex flex-col justify-center items-center p-4 [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <div className="text-base font-semibold mb-2">{skill.name}</div>
          <div className="text-sm">{skill.highlight}</div>
        </div>
      </motion.div>
    </div>
  );
};

export default SkillCard;
