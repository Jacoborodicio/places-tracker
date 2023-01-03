export const baseApiUrl = (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') ?
    'http://localhost:9000/api/v1' :
    'https://jacoborodicio.com/api/v1';