import { useEffect, useState } from "react";
import service from "../services/Apontamento";
import { ApontamentoProps } from "../types";

export default function Apontamento() {
  const [itens, setItens] = useState([] as ApontamentoProps[]);

  useEffect(() => {
    listApontamento().then((r) => setItens(r));
  });

  const r = itens.map((item) => <div key={item.id}>
    <div>Correção: {item.correcao} - {item.status} - {item.obs}</div>
  </div>);

  return <div>{r}</div>;
}

async function listApontamento() {
  const objects = await service.list();
  return objects;
}
