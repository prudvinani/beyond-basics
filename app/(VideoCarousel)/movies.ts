import goodone from "@/public/goodone.png"


export type Movie={
    poster:string,
    name:string
}
export const movies=[
    {poster:goodone, name:"Harsha"},
   


]

export const randomMovieSet1=movies.sort(()=>Math.random()-0.5)
.concat(movies.sort(()=>Math.random()-0.5))
.concat(movies.sort(()=>Math.random()-0.5))


export const randomMoviesSet2=movies.sort(()=>Math.random()-0.5)
.concat(movies.sort(()=>Math.random()-0.5))
.concat(movies.sort(()=>Math.random()-0.5))
.sort(()=>Math.random()-0.5)