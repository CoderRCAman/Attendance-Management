import { useState, useEffect } from "react";
import "../../admin/addremove.css";
export default function Pagination({
  postsPerPage,
  totalPosts,
  paginate,
  page,
}) {
  const [pages, setPages] = useState([]);

  const [leftOver, setLeftover] = useState(0);
  useEffect(() => {
    const pagesNumbers = [];
    totalPosts % 3 === 0
      ? setLeftover(Math.floor(totalPosts / 3))
      : setLeftover(Math.floor(totalPosts / 3 + 1));
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
      pagesNumbers.push(i);
    }
    setPages(pagesNumbers);
  }, []);

  return (
    <div>
      <div className="flex-container">
        {pages.length > 0 && (
          <div className="paginate-ctn">
            <div
              className="round-effect"
              onClick={(e) => {
                paginate(page - 1);
              }}
            >
              {" "}
              &lsaquo;{" "}
            </div>
            {pages.length > 0 &&
              pages.map((number) => (
                <div
                  key={number}
                  className={
                    page === number ? "round-effect active" : "round-effect"
                  }
                  onClick={() => {
                    paginate(number);
                  }}
                >
                  {number}
                </div>
              ))}

            <div
              className="round-effect"
              onClick={(e) => {
                paginate(page + 1);
              }}
            >
              {" "}
              &rsaquo;{" "}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
