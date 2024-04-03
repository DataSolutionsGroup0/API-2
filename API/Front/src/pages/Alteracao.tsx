import { useEffect, useState } from "react";
import service from "../services/Alteracao";
import { AlteracaoProps } from "../types";

export default function Alteracao() {
  const [itens, setItens] = useState([] as AlteracaoProps[]);

  useEffect(() => {
    listAlteracao().then((r) => setItens(r));
  });

  const r = itens.map((item) => <div key={item.id}>
    <div>Município: {item.municipio} - {item.cod_estado}</div>
    <div>Classe: {item.cod_class} - {item.class}</div>
    <div>Observação: {item.obs}</div>
  </div>);

  return <div>{r}</div>;
}

async function listAlteracao() {
  const objects = await service.list();
  return objects;
}
