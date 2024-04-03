import { ApontamentoProps } from "../types";
import api from "./api";

class Apontamento {
    async list(): Promise<ApontamentoProps[]> {
        const {data} = await api.post("/apontamento",{"tablename":"tbapontamento_alteracao_taubate"});
        return data;
    }
}

const object = new Apontamento();
export default object;
