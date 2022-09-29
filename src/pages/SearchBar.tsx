import { useNavigate } from "react-router-dom";

type Props = {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

export function SearchBar({ setSearch }: Props) {
  let navigate= useNavigate()
  return (
    <input
      className="search"
      placeholder="Search For a User..."
      onChange={(event) => {
        setSearch(event.target.value);
        navigate('/search')
        console.log(event.target.value)
      }}
    />
  );
}
