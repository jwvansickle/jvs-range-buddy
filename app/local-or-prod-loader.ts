export default function githubLoader({
  src,
}: {
  src: string
  width: number
  quality?: number
}) {
    if (process.env.NODE_ENV === 'development') {
        return `http://localhost:3000/${src}`;
    } else {
        return `https://jwvansickle.github.io/jvs-range-buddy/${src}`;
    }
}