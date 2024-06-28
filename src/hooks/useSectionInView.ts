import { useActiveSectionContext } from "@/context/ActiveSectionContext";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { SectionName } from "@/types/types";

export const useSectionInView = (section: SectionName, threshold = 0.75) => {
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();
  const { ref, inView } = useInView({
    threshold,
  });

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(section);
    }
  }, [inView, setActiveSection, timeOfLastClick, section]);
  return { ref };
};
