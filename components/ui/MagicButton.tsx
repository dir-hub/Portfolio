import React from 'react'

const MagicButton = ({
    title,
    icon,
    position,
    handleClick,
    otherClasses,
    copied,
    disabled
}:{
    title: string,
    icon: React.ReactNode,
    position: 'left' | 'right',
    handleClick?: () => void,
    otherClasses?: string;
    copied?: boolean;
    disabled?: boolean;
}) => {
  return (
    <button
      className="relative w-full inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none md:w-60"
      onClick={handleClick}
      disabled={disabled}
      aria-pressed={copied}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-2 text-sm font-medium text-white backdrop-blur-3xl gap-2 ${otherClasses} ${copied ? 'ring-2 ring-emerald-400' : ''}`}
      >
        {position === 'left' && icon}
        {title}
        {position === 'right' && icon}
      </span>
    </button>
  )
}

export default MagicButton