import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootObject } from "./coins.types";

export const coinsApi = createApi({
  reducerPath: "api/coins",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.coingecko.com/api/v3/" }),
  endpoints: (build) => ({
    getCoins: build.query<RootObject[], null>({
      query: () => ({
        url: "coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false",
      }),
    }),
  }),
});

export const { useGetCoinsQuery } = coinsApi;