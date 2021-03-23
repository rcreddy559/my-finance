import axios, { AxiosResponse } from 'axios';

export async function saveVolumeShockers(value: string[]) {
    console.log(value.length);
    // value = ["ravi","two"]
    
    const graphql = {
        query: `
        mutation {
            saveVolumeShockers(input:`+JSON.stringify(value)+`)
          }`,
        values: ""
    }

    let url: string = "http://localhost:8081/graphql"
    const { data }: AxiosResponse<string[]>
        = await axios.post(url, graphql);
    console.log("data", data);
}