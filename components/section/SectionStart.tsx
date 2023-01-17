import { Scroll } from 'scrollex'

const SectionStart = () => {
  return (
    <Scroll.Section className="h-screen w-full" style={{ height: '100dvh' }}>
      <div className="flex h-screen items-center justify-center" style={{ height: '100dvh' }}>
        <h1 className="text-xl font-bold uppercase">Keep scrolling</h1>
      </div>
    </Scroll.Section>
  )
}

export default SectionStart
