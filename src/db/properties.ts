export const MONGO_URL = process.env.NODE_ENV === 'development'? process.env.MONGO_URL : process.env.MONGO_URL
export const PORT = process.env.PORT || 3001