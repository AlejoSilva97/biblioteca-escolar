import React from 'react';

import { Loading } from './Loading';

export const BooksTable = (props) => {

    const {booksArray, isLoading} = props;

    return (
        
        <div className='col-12'>
            {
                isLoading?
                <Loading />:
                <table className='table'>
                    <thead>
                        <tr>
                            <th scope='col'>Title</th>
                            <th scope='col'>Subtitle</th>
                            <th scope='col'>Isbn13</th>
                            <th scope='col'>Price</th>
                            <th scope='col'>Url</th>
                            <th scope='col'>Imagen</th>
                        </tr>
                    </thead>
                    <tbody>
                        {   
                            booksArray.map(({title, subtitle, isbn13, url, price, image}) => {
                                return <tr key={isbn13}>
                                    <td>{title}</td>
                                    <td>{subtitle}</td>
                                    <td>{isbn13}</td>
                                    <td>{price}</td>
                                    <td><a href={url} rel="noreferrer" target='_blank'>{url}</a></td>
                                    <td><img style={{height: '120px'}} alt={title} src={image}></img></td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            }
        </div>
    )
}
