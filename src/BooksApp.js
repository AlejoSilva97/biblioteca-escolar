import React, { useEffect, useState } from 'react';

import 'bootswatch/dist/superhero/bootstrap.min.css';
import { SearchBooks } from './components/SearchBooks';
import { BooksTable } from './components/BooksTable';
import { fetchBooks } from './helpers/fetch';
import { NoData } from './components/NoData';

export const BooksApp = () => {

    const [booksArray, setbooksArray] = useState([]);
    const [search, setsearch] = useState('');
    const [page, setpage] = useState(1);
    const [totalPages, settotalPages] = useState(0);
    const [totalResults, settotalResults] = useState(0);
    const [isLoading, setisLoading] = useState(false);

    const nextPage = async() => {
        if (page < totalPages) {
            setpage(page + 1);
        }
    }

    const previousPage = async() => {
        if (page > 1) {
            setpage(page-1);
        }
    }

    useEffect(() => {
        const fetch = async() => {
            setisLoading(true);
            const data = await fetchBooks(search,page);
            const {books, total} = data;
            const pages = total/10;

            settotalPages(Math.ceil(pages));
            settotalResults(parseInt(total));
            setbooksArray(books);
            setisLoading(false);
        }
        fetch();
    }, [page, search]);

    return (
        <div className='container p-1'>
            <div className='row' >
                <SearchBooks {...{ setsearch, setpage }}/>
                {
                    totalResults !== 0 &&
                    <div className='col-7 p-2'>
                        <div className='d-flex justify-content-end'>
                            <h6 className='mt-4'>Numero de resultados: <b>{totalResults}</b></h6>
                        </div>
                    </div>
                }
            </div>
            <div className='row mt-4' >
                {
                    booksArray.length < 1 ?
                    <NoData /> :
                    <BooksTable {...{booksArray, isLoading}}/>
                }
            </div>
            {
                totalPages !== 0&&
                <div className='d-flex justify-content-center align-items-center' >
                    <button className='btn btn-success btn-sm' onClick={previousPage}>
                        Anterior
                    </button>
                    &nbsp;
                    {page} de {totalPages}
                    &nbsp;
                    <button className='btn btn-success btn-sm' onClick={nextPage}>
                        Siguiente
                    </button>
                </div>
            }
        </div>
    )
}
