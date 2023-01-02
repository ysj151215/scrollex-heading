import { Keyframes, Scroll } from 'scrollex'

const keyframes: Record<string, Keyframes> = {
  heading: ({ section, container }) => ({
    [section.topAt('container-top')]: {
      translateX: '0%',
    },
    [section.bottomAt('container-bottom') - container.height / 3]: {
      translateX: '-100%',
    },
  }),
}

const SectionHeading = () => {
  return (
    <Scroll.Section className="bg-grid h-[400vh] w-full" style={{ height: '400dvh' }}>
      <div className="sticky top-0 flex h-screen items-center" style={{ height: '100dvh' }}>
        <Scroll.Item className="relative left-1/2" keyframes={keyframes.heading}>
          <h1 className="ui-box whitespace-nowrap text-[240px] font-bold uppercase">
            Keep scrolling
          </h1>
        </Scroll.Item>
      </div>
    </Scroll.Section>
  )
}

export default SectionHeading
