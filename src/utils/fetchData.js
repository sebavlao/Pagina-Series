const API = "https://api.themoviedb.org/3";

export const fetchData = async (path) => {
    try {
        const response = await fetch(API+path, {
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzODI5YTQ4ZDllMzViNzk3MTdiNTBkYjI2N2M2YTkwZCIsInN1YiI6IjY2MzZkMWExNDcwZWFkMDEyNTEyOTU5YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XhDcgYKXrfQoAHliTYD4KP3k4Sn-v_2WLh49VA16odI'
            }
        });
        return await response.json()
    } catch(err) {
        console.log("Error: ", err);
        throw err;
    }
};