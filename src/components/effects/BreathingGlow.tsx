export function BreathingGlow() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Primary purple orb - top left */}
      <div
        className="absolute -top-[20%] -left-[10%] w-[60vw] h-[60vw] rounded-full opacity-[0.07] blur-[120px] animate-breathe-1"
        style={{
          background: 'radial-gradient(circle, #9333ea 0%, #7c3aed 40%, transparent 70%)',
        }}
      />

      {/* Pink orb - right center */}
      <div
        className="absolute top-[20%] -right-[15%] w-[50vw] h-[50vw] rounded-full opacity-[0.06] blur-[100px] animate-breathe-2"
        style={{
          background: 'radial-gradient(circle, #ec4899 0%, #db2777 40%, transparent 70%)',
        }}
      />

      {/* Blue orb - bottom left */}
      <div
        className="absolute -bottom-[10%] -left-[15%] w-[55vw] h-[55vw] rounded-full opacity-[0.05] blur-[110px] animate-breathe-3"
        style={{
          background: 'radial-gradient(circle, #3b82f6 0%, #2563eb 40%, transparent 70%)',
        }}
      />

      {/* Secondary purple orb - bottom right */}
      <div
        className="absolute -bottom-[20%] -right-[10%] w-[45vw] h-[45vw] rounded-full opacity-[0.06] blur-[100px] animate-breathe-4"
        style={{
          background: 'radial-gradient(circle, #a855f7 0%, #7c3aed 40%, transparent 70%)',
        }}
      />

      {/* Subtle center glow */}
      <div
        className="absolute top-[40%] left-[30%] w-[40vw] h-[40vw] rounded-full opacity-[0.03] blur-[80px] animate-breathe-5"
        style={{
          background: 'radial-gradient(circle, #f472b6 0%, #a855f7 50%, transparent 70%)',
        }}
      />
    </div>
  )
}
