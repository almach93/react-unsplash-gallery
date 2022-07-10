import React, { useState } from "react";
import Unsplash, { toJson } from "unsplash-js";

const unsplash = new Unsplash({
  accessKey: "aXYG6d-wA-o4ltnBPaGb3EkMKIxtApVlZwan5ULMf9w",
});

export default function SearchPhotos() {
    const [query, setQuery] = useState("");
    const [pics, setPics] = useState([]);
    

      const searchPhotos = async (e) => {
        e.preventDefault();
          unsplash.search
            .photos(query)
            .then(toJson)
            .then((json) => {
              setPics(json.results);
            });
      };
    return (
      <>
        <form className="form" onSubmit={searchPhotos}>
          <label className="label" htmlFor="query">
            {" "}
          </label>
          <input
            type="text"
            name="query"
            className="input"
            placeholder={`Search here ...`}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit" className="button">
            submit
          </button>
        </form>
        <div className="card-list">
          {pics.map((pic) => (
            <div className="card" key={pic.id}>
              <img
                className="card--image"
                alt={pic.alt_description}
                src={pic.urls.full}
                width="50%"
                height="50%"
              ></img>
            </div>
          ))};
        </div>
      </>
    );
   
}
