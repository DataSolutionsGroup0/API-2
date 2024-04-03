import { AoiProps } from "../types";
import api from "./api";

class Aoi {
    async list(): Promise<AoiProps[]> {
        const {data} = await api.post("/aoi",{"tablename":"tbaoi_taubate"});
        return data;
    }
}

const object = new Aoi();
export default object;
