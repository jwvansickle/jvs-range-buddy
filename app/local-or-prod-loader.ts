export default function githubLoader({
  src,
}: {
  src: string
  width: number
  quality?: number
}) {
    const base = process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000/jvs-range-buddy'
      : 'https://jwvansickle.github.io/jvs-range-buddy';
    return `${base}${src.startsWith('/') ? '' : '/'}${src}`;
}