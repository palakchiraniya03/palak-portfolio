import React from 'react';
import { ProjectShowcaseVisual } from './ProjectShowcaseVisual';

export interface ProjectMicroVisualProps {
  projectId: string;
  isHovered?: boolean;
}

/**
 * Backwards-compatible export that maps to the dedicated large ProjectShowcaseVisual.
 */
export const ProjectMicroVisual: React.FC<ProjectMicroVisualProps> = ({ projectId }) => {
  return <ProjectShowcaseVisual projectId={projectId} />;
};

export { ProjectShowcaseVisual };
