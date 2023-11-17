import useSWR from "swr";
import fetcher from "@/lib/fetcher";

const useMovieList = () => {
  const { data, error, isLoading } = useSWR("/api/movies", fetcher, {
    revalidateIFStale: false,
    revalidateOnFocus: false,
    revalidationOnReconnect: false,
  });

  return {
    data,
    error,
    isLoading,
  };
};
export default useMovieList;
