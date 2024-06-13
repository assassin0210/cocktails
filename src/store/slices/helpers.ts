import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../shared/constants/constants.ts";

export const baseQuery = () => fetchBaseQuery({ baseUrl });
