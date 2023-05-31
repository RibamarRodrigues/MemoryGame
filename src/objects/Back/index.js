import HomePage from "../../components/HomePage"
import LoadGame from "../LoadGame"

function Back() {
    const $root = document.querySelector('#root')
    while($root.firstChild){
        $root.removeChild($root.firstChild)
    }
    const $html = HomePage()
    $root.insertAdjacentHTML("Beforeend", $html)
    LoadGame()
}

export default Back