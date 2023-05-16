import './src/styles/generic/reset.css'
import './src/styles/settings/colors.css'
import './src/styles/elements/base.css'

import HomePage from './src/components/HomePage'
import LoadGame from './src/objects/LoadGame'

const $root = document.querySelector('#root')
const $htmlHomePage = HomePage()
$root.insertAdjacentHTML("Beforeend", $htmlHomePage)
LoadGame()