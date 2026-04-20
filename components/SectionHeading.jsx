export default function SectionHeading({ eyebrow, title, description, align = 'center' }) {
  const alignCls = align === 'center' ? 'text-center mx-auto' : 'text-left';
  return (
    <div className={`max-w-3xl ${alignCls}`}>
      {eyebrow && <span className="pill mb-4">{eyebrow}</span>}
      <h2 className="heading-2">{title}</h2>
      {description && <p className="lead mt-4">{description}</p>}
    </div>
  );
}
