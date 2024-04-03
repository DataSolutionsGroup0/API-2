import { useEffect, useState } from "react";
import service from "../services/Aoi";
import { AoiProps } from "../types";

export default function Aoi() {
  const [itens, setItens] = useState([] as AoiProps[]);

  useEffect(() => {
    listAoi().then((r) => setItens(r));
  });

  const r = itens.map((item) => <div key={item.id}>
    <div>Município: {item.cd_mun} - {item.nm_mun} - {item.sigla_uf}</div>
    <div>Área: {item.area_km2} Km2</div>
  </div>);

  return <div>{r}</div>;
}

async function listAoi() {
  const objects = await service.list();
  return objects;
}
