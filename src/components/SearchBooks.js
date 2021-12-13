import React, { useState } from 'react';

export const SearchBooks = (props) => {

    const { setsearch, setpage } = props;
    const [book, setbook] = useState('');

    const handleInputChange = ({target}) => {
        setbook(target.value);
    }

    const handleSubmit = async(e) => {
        e.preventDefault();

        setpage(1);
        setsearch(book);
    }

    return (

        <div className='col-5'>
            <div className='card card-body'>
                <form onSubmit={handleSubmit}>
                    <div className="form-group input-group">
                        <div className="input-group-text bg-dark">
                            <i className="material-icons text-light" >search</i>
                        </div>
                        <input
                            type="text" 
                            className="form-control"
                            placeholder="Buscar libros..."
                            name="book"
                            onChange={handleInputChange}
                            value={book}
                        />
                    </div>
                </form>
            </div>
        </div>

    )
}
