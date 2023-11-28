import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

const useGames = () => {
  interface Game {
    id: number;
    name: string;
  }

  interface FetchGamesResponse {
    count: number;
    results: Game[];
  }

  const [games, setGmaes] = useState<Game[]>([]);
  const [error, setErrors] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<FetchGamesResponse>("/games", { signal: controller.signal })
      .then((res) => setGmaes(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setErrors(err.message);
      });

    return () => controller.abort();
  }, []);
  return { games, error };
};

export default useGames;
