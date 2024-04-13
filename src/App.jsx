import { GAMES } from "./index"
import { FilterableGameList } from "./components/filterable-game-list/"


export const App = () => {
    return (
        <>
            <FilterableGameList games={GAMES} />
        </>
    )
}