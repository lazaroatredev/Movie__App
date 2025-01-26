export type Language =
    | 'en'  // Inglés  
    | 'es'  // Español  
    | 'fr'  // Francés  
    | 'de'  // Alemán  
    | 'it'  // Italiano  
    | 'pt'  // Portugués  
    | 'ru'  // Ruso  
    | 'zh'  // Chino (Simplificado)  
    | 'ja'  // Japonés  
    | 'ko'  // Coreano  
    | 'ar'  // Árabe  
    | 'nl'  // Holandés  
    | 'sv'  // Sueco  
    | 'da'  // Danés  
    | 'no'  // Noruego  
    | 'fi'  // Finlandés  
    | 'tr'  // Turco  
    | 'hu'  // Húngaro  
    | 'cs'  // Checo  
    | 'el'  // Griego  
    | 'he'; // Hebreo  


export interface Movie {
    title: string,
    vote_average: number,
    poster_path: string,
    release_date: string,
    original_language: Language,
    id:number
}

export interface MovieApiResponse {
    page: number,
    results: Movie[],
    total_pages: number,
    total_results : number
}