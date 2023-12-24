"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import PokeCard from "./components/PokeCard";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store/store";
import { fetchPokeData } from "./store/pokeSlice";
import Loader from "./components/Loader";

function InitData() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(0);
  const observer = useRef<IntersectionObserver | null>(null);
  const lastElementRef = useCallback((node: any) => {
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setPage((prevPage) => prevPage + 1);
      }
    });
    if (node) {
      observer.current.observe(node);
      setPage((prevPage) => prevPage + 1);
    }
  }, []);

  useEffect(() => {
    dispatch(fetchPokeData(page) as any);
  }, [dispatch, page]);

  return <div ref={lastElementRef} />;
}

export default function Home() {
  var data: any = useSelector((state: RootState) => state.poke.data) || [];
  const [searchInput, setSearchInput] = useState("");
  const [filter, setFilter] = useState("");
  const loading = useSelector((state: RootState) => state.poke.loading);
  const [showData, setShowData] = useState(data);

  useEffect(() => {
    setShowData(data);
    data = [];
  }, [data]);

  const filteredData = Object.keys(showData)
    .filter((key) => {
      const matchesSearch =
        showData[key].name.toLowerCase().includes(searchInput.toLowerCase()) ||
        showData[key].id.toString().includes(searchInput);

      const matchesFilter =
        filter === "" ||
        showData[key].types.some((type: any) => type.type.name === filter);

      return matchesSearch && matchesFilter;
    })
    .map((key) => (
      <PokeCard
        key={showData[key].id}
        id={showData[key].id}
        data={showData[key]}
        name={showData[key].name}
      />
    ));

  return (
    <main className="h-full w-full">
      <Navbar onSearchChange={setSearchInput} onFilterChange={setFilter} />
      <div className="mt-20 lg:px-52 sm:px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 grid-flow-row gap-4">
        {filteredData.length === 0 ? (
          <div className="absolute top-1/2 w-full left-0">
            <p className="text-center text-2xl w-full">No results found!</p>
          </div>
        ) : (
          filteredData
        )}
      </div>
      <InitData />
      {loading && <Loader />}
    </main>
  );
}
