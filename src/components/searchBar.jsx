import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm(""); 
    }
  };

  const navStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const formStyle = {
    display: "flex",
    alignItems: "center",
    width: "100%",
    maxWidth: "600px",
    borderRadius: "30px",
    overflow: "hidden",
    
  };

  const inputStyle = {
    flex: 1,
    border: "none",
    padding: "10px 15px",
    fontSize: "16px",
    borderRadius: "30px 0 0 30px",
    outline: "none",
    
  };

  const buttonStyle = {
    backgroundColor: "#ecf000c7",
    border: "none",
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
    borderRadius: "0 30px 30px 0",
  };

  return (
    <nav style={navStyle}>
      <form onSubmit={handleSearch} style={formStyle}>
        <input
          type="text"
          placeholder="Search for a meal..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={inputStyle}
        />
        <button type="submit" style={buttonStyle}>
          Search
        </button>
      </form>
    </nav>
  );
}
