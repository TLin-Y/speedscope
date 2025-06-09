import {h, render} from 'preact'
import {ApplicationContainer} from './views/application-container'
import {ThemeProvider} from './views/themes/theme'
import {loadFromFoldedText} from './widget'

console.log(`speedscope v${require('../package.json').version}`)

/*
TODO(jlfwong): Fix this
declare const module: any
if (module.hot) {
  module.hot.dispose(() => {
    // Force the old component go through teardown steps
    render(<div />, document.body, document.body.lastElementChild || undefined)
  })
  module.hot.accept()
}
*/

console.log("DEMO LOADED")

if (location.hash === '#demo') {
  const folded = `
main;init 10
main;parse 30
main;render 60
`.trim()

    loadFromFoldedText(folded)
}