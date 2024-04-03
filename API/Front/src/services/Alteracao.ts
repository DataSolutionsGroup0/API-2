import { AlteracaoProps } from "../types";
import api from "./api";

class Alteracao {
    async list(): Promise<AlteracaoProps[]> {
        const {data} = await api.post("/alteracao",{"tablename":"tbalteracao_taubate"});
        return data;
    }
}

const object = new Alteracao();
export default object;
