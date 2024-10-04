import { data } from 'autoprefixer'
import axios from 'axios';
import React, { useCallback, useEffect, useReducer } from 'react'
import { useSearchParams } from 'react-router-dom';
import CountryView from './CountryView';

const nilaiDefault = {
 data: [],
 filterdata: [],
 loading: true,
};

const reducer = (state, action) => {
    switch (action.type){
        case "FETCH_BERHASIL":
        return{
            ...state,
            data: action.playload,
            filterdata: action.playload,
            loading: false,
        };
        case "SET_FILTER":
            return{
                ...state,
                filterdata:action.playload,
            };
            default :
            throw new Error ("Error dicase")
    }
};

const Country = () => {
    const [state, dispatch] = useReducer(reducer, nilaiDefault);
    const [cari, setCari] = useSearchParams();
    const Pencarian = cari.get("Pencarian");

    const ambilCountry = async () => {
        const response = await axios.get(
            "https://freetestapi.com/api/v1/countries"
        );
        const data = await response.data;
        dispatch({type:"FETCH_BERHASIL", playload:data})
    };

    useEffect(() => {
        if (!Pencarian) {
            ambilCountry();
        } else {
            ubahCountry(Pencarian);
        }
    }, [Pencarian]);

    const ubahCountry = useCallback(
        async (input) => {
            setCari({ Pencarian: input });
            const response = await axios.get(
                "https://freetestapi.com/api/v1/countries?search=" + Pencarian
            );
            const data = await response.data;
            dispatch({type:"SET_FILTER", playload: data});
        },
        [Pencarian]
    );

    const hasilfilter = Pencarian ? state.filterdata : state.data;
    console.log(state);

  return (
    <CountryView
        Pencarian={Pencarian}
        hasilCari={state.filterdata}
        hasilfilter={hasilfilter}
        ubahCountry={ubahCountry}
    />
  );
};

export default Country;