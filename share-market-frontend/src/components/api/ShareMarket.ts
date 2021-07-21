import axios, { AxiosResponse } from 'axios';
import Company from "../typings/Company";

const url: string = "http://localhost:8081/api/v1/company"
export async function getCompany() {
    const { data }: AxiosResponse<Company[]> = await axios.get(url);
    return data;
}

export async function deleteCompany(id: number) {

    const { data }: AxiosResponse<Company[]> = await axios.delete(url+"/"+id);
    return data;
}