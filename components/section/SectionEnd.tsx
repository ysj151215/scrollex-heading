import { ComponentType } from 'react'
import { Scroll } from 'scrollex'
import { GitHubIcon, TwitterIcon } from '../Icons'

type LinkProps = {
  icon: ComponentType
  link: string
  label: string
}

const ConnectLink = ({ icon: Icon, link, label }: LinkProps) => {
  return (
    <li className="relative">
      <a aria-label={label} href={link} rel="external nofollow noopener noreferrer" target="_blank">
        {Icon ? <Icon aria-hidden="true" /> : null}
      </a>
    </li>
  )
}

const SectionEnd = () => {
  const links: LinkProps[] = [
    {
      icon: GitHubIcon,
      link: 'https://github.com/untitled-lab/scrollex-heading',
      label: 'GitHub',
    },
    {
      icon: TwitterIcon,
      link: 'https://twitter.com/ysj151215',
      label: 'Twitter',
    },
  ]

  return (
    <Scroll.Section className="h-screen w-full" style={{ height: '100dvh' }}>
      <div
        className="flex h-screen flex-col items-center justify-center"
        style={{ height: '100dvh' }}
      >
        <h1 className="mb-8 text-xl font-bold uppercase">Star & Follow me on</h1>
        <ul className="flex justify-center space-x-8" role="list">
          {links.map((link, idx) => (
            <ConnectLink
              key={`connect-link-${idx}`}
              link={link.link}
              icon={link.icon}
              label={link.label}
            />
          ))}
        </ul>
      </div>
    </Scroll.Section>
  )
}

export default SectionEnd
