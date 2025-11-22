import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

type TrailProgress = {
  completedLessons: Record<string, boolean>;
};

type ProgressState = Record<string, TrailProgress>; // trailId -> progresso

type ProgressContextType = {
  progress: ProgressState;
  markLessonCompleted: (trailId: string, lessonId: string) => void;
};

const ProgressContext = createContext<ProgressContextType | undefined>(
  undefined
);

export const ProgressProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [progress, setProgress] = useState<ProgressState>({});

  const markLessonCompleted = (trailId: string, lessonId: string) => {
    setProgress((prev) => {
      const trailProgress = prev[trailId] ?? { completedLessons: {} };

      // se já estava concluída, não muda nada
      if (trailProgress.completedLessons[lessonId]) {
        return prev;
      }

      return {
        ...prev,
        [trailId]: {
          completedLessons: {
            ...trailProgress.completedLessons,
            [lessonId]: true,
          },
        },
      };
    });
  };

  return (
    <ProgressContext.Provider value={{ progress, markLessonCompleted }}>
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = (): ProgressContextType => {
  const ctx = useContext(ProgressContext);
  if (!ctx) {
    throw new Error("useProgress must be used within a ProgressProvider");
  }
  return ctx;
};
