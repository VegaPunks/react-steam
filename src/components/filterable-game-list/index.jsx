import { useState } from 'react';
import { GameList } from '../game-list';
import { SearchBar } from '../search-bar';

export const FilterableGameList = ({ games = [] }) => {
	const [filterText, setFilterText] = useState('');
	const [inWishListOnly, setInWishListOnly] = useState(false);

	return (
		<div className="filterable-game-list">
			<SearchBar
				filterText={filterText}
				setFilterText={setFilterText}
				inWishListOnly={inWishListOnly}
				setInWishListOnly={setInWishListOnly}
			/>
			<GameList
				games={games}
				filterText={filterText}
				inWishListOnly={inWishListOnly}
			/>
		</div>
	);
};
