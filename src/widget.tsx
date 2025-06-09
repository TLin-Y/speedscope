import { importFromProfire } from './import/bg-flamegraph'
import { profileGroupAtom } from './app-state'
import {h, render} from 'preact'
import {ApplicationContainer} from './views/application-container'
import {ThemeProvider} from './views/themes/theme'
import {Profile, ProfileGroup} from './lib/profile'

function toGroup(profile: Profile): ProfileGroup {
  return { name: profile.getName(), indexToView: 0, profiles: [profile] }
}

export function loadFromFoldedText(folded: string) {
  const lines: Iterable<string> = folded.trim().split('\n')

  const profile = importFromProfire(lines)
  if (!profile) {
    throw new Error('Invalid folded format')
  }

  const group: ProfileGroup = toGroup(profile)
  profileGroupAtom.setProfileGroup(group)

  render(
    <ThemeProvider>
      <ApplicationContainer />
    </ThemeProvider>,
    document.body,
    document.body.lastElementChild || undefined,
  )
}
