import { GradeProps } from "../types";
import api from "./api";

class Grade {
    async list(): Promise<GradeProps[]> {
        const {data} = await api.post("/grade",{"tablename":"tbgrade_atuacao_taubate"});
        return data;
    }
}

const object = new Grade();
export default object;
