export interface AoiProps {
  id: number;
  cd_mun: string;
  nm_mun: string;
  sigla_uf: string;
  area_km2: number;
}

export interface ApontamentoProps {
  id: number;
  correcao: string;
  status: string;
  obs: string;
}

export interface AlteracaoProps {
  id: number;
  municipio: string;
  cod_estado: string;
  cod_class: number;
  class: string;
  obs: string;
  area_km2: number;
}

export interface GradeProps {
  id: number;
  atribuicao: string;
  status: string;
  validacao: string;
  status_val: string;
  obs: string;
  area_km2: string;
}