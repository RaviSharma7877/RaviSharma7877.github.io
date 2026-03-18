'use client';

interface ResumeButtonProps {
  className?: string;
  children?: React.ReactNode;
}

export default function ResumeButton({ className, children }: ResumeButtonProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    // Open in new tab
    window.open('/media/RaviSharmaResume.pdf', '_blank', 'noreferrer');
    // Also trigger download
    const link = document.createElement('a');
    link.href = '/media/RaviSharmaResume.pdf';
    link.download = 'RaviSharma-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <a
      href="/media/RaviSharmaResume.pdf"
      onClick={handleClick}
      className={className}
    >
      {children ?? 'Resume'}
    </a>
  );
}
