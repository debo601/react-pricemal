// import React from "react";
// import { useLocation } from "react-router-dom";

// const SearchResults = () => {
//   const location = useLocation();
//   const queryParams = new URLSearchParams(location.search);
//   const searchTerm = queryParams.get("q");

//   return (
//     <div className="container mt-4">
//       <h2>Showing results for: "{searchTerm}"</h2>
//       {/* Add logic to display results based on searchTerm */}
//     </div>
//   );
// };

// export default SearchResults;

// SearchResults.jsx


import React from "react";
import { useLocation } from "react-router-dom";

function SearchResults() {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query");

  return (
    <div className="container">
      <h2>Search Results for: "{query}"</h2>
      {/* You can now use this query to fetch data from your API */}
    </div>
  );
}

export default SearchResults;
