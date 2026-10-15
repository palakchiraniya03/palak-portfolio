export const BackgroundGrid = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Warm graphite base (#202020) */}
      <div className="absolute inset-0 bg-[#202020]" />

      {/* Subtle sage green technical grid overlay */}
      <div className="absolute inset-0 bg-tech-grid opacity-75" />

      {/* Static soft center-top ambient vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(157,183,165,0.05),transparent_70%)]" />

      {/* Quiet, non-animating ambient depth layers */}
      <div className="absolute -top-[15%] -left-[10%] w-[550px] h-[550px] rounded-full bg-[#9DB7A5]/[0.025] blur-[140px]" />
      <div className="absolute top-[40%] -right-[10%] w-[600px] h-[600px] rounded-full bg-[#303832]/20 blur-[160px]" />
    </div>
  );
};
