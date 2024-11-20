import React, { useEffect, useState } from "react";
import './Pagination.css';

const Pagination = () => {
    const [Data, setData] = useState([]); 
    const [page, setPage] = useState(1);
    const rightB = Array.from({ length: 3 }, (_, index) => (page+1) + index);
    const leftB = Array.from({ length: 4 }, (_, index) => page - index).sort((a,b)=>a-b);
    const ButtonsDisplay = [...leftB, ...rightB];


    const getImages = async () => {
        try {
            const response = await fetch(`https://picsum.photos/v2/list?page=${page}&limit=5`);
            const jsondata = await response.json();
            setData(jsondata);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const handelPrevious = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    };

    const handelNext = () => {
        setPage(page + 1);
    };

    useEffect(() => {
        getImages();
    }, [page]);

    return (
        <div>
            <div className="imageConta">
                {Data.map((current, index) => (
                    <img src={current.download_url} key={index} alt="Random" />
                ))}
            </div>
            <div className="buttons">
                {page > 1 && <button onClick={handelPrevious}>Prev</button>}

                {ButtonsDisplay.map((val, index) => {
                    return (


                        val > 0 ?
                        <button
                            className={page === val ? "selected" : ""}
                            key={index}
                            onClick={() => setPage(val)}
                        >
                            {val}
                        </button>:""
                    );
                })}

                <button onClick={handelNext}>Next</button>
            </div>
        </div>
    );
};

export default Pagination;
