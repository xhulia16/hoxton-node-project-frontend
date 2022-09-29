type Props = {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

export function SearchBar({ setSearch }: Props) {
  return (
    <input
      className="search"
      placeholder="Search For a User..."
      onChange={(event) => {
        setSearch(event.target.value);
        console.log(event.target.value)
      }}
    />
  );
}
