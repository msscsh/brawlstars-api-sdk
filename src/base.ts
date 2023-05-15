import fetch from "isomorphic-unfetch";

type Config = {
    apiKey: String;
    baseUrl?: String;
}

export abstract class Base {
    private apiKey: string;
    private baseUrl: string;

    constructor(config: Config) {
        this.apiKey = this.apiKey;
        this.baseUrl = this.baseUrl || "https://api.brawlstars.com/v1";
    }

    protected invoke<T>(endpoint: string, options?: RequestInit): Promise<T> {
        const url = `${this.baseUrl}${endpoint}`

        const headers = {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${this.apiKey}`
        }

        const config = {
            ...options,
            headers
        }

        return fetch(url,config).then(response => {
            if(response.ok){
                return response.json();
            }
            else{
                throw new Error(response.statusText);
            }
        })

    }

}