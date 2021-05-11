import { Button } from './Button';

interface Genre{
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface SideBarProps{
  selectedGenreId:number;
  setSelectedGenreId(id:number):void;
  genres: Genre[];
}



export function SideBar(props: SideBarProps) {
  function handleClickButton(id: number) {
  props.setSelectedGenreId(id);
}

return(
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {props.genres.map((genre: { id: number; title: string; name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family'; }) => (
        <Button
          id={String(genre.id)}
          title={genre.title}
          iconName={genre.name}
          onClick={() => handleClickButton(genre.id)}
          selected={props.selectedGenreId === genre.id}
          />)
        )}
      </div>
    </nav>
  )
}