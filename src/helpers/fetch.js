export const fetchBooks = async(book, page = 1) => {
    
    const url = `https://api.itbook.store/1.0/search/${book}/${page}`;

    const resp = await fetch(url);
    const body = await resp.json();

    return body;

}