/** @jsx jsx */
import {
  React,
  jsx,
  type IMDataSourceInfo,
  type DataSource,
  DataSourceStatus,
  type FeatureLayerQueryParams,
  type AllWidgetProps,
  DataSourceComponent
} from 'jimu-core'
// import { Alert } from 'jimu-ui';
import { useState } from 'react';
// import { CalciteAlert } from 'calcite-components';

interface GeoserverProps {
  camada: string,
  filename: string,
  propertyname: string
}

export default function Widget(props: AllWidgetProps<unknown>) {
  const isDsConfigured = () => {
    if (props.useDataSources && props.useDataSources.length === 1) {
      return true
    }
    return false
  }


  const [uas, setUas] = useState([]);
  const [msg, setMsg] = useState('');


  function handleSelectionChange() {
    setUas(uas);
    if (uas.length !== 0) {
      setMsg('');
    } else {
      setMsg('Selecione os pontos');
    }
  }


  const selecao = (ds: DataSource, info: IMDataSourceInfo) => {
    uas.length = 0;
    // console.log('FOREACH: ', uas);
    if (ds && ds.getStatus() === DataSourceStatus.Loaded) {
      ds.getRecords().map((r, i) => {
        uas.push("'" + r.getFieldValue('no_conglomerado') + "'");
        return null;
      });
    }
    handleSelectionChange();
    return null;
  }

  const getNecromassa = () => {
    const str = '';
    const props: GeoserverProps = {
      camada: "05",
      filename: "Necromassa_",
      propertyname: str.concat("lote,bioma,uf,mun,lon_pc,lat_pc,ua,data_coleta,uso_terra_pc,",
        "ausencia_necromassa,transecto,nivel_decomposicao,numero_galho,diametro,serp1,serp2,serp3,serp4,serp5")
    }
    return props;
  }

  const getUsoTerra = () => {
    const str = '';
    const props: GeoserverProps = {
      camada: "01",
      filename: "Uso_Terra_",
      propertyname: str.concat("lote,bioma,uf,mun,ua,sub,impedimento,lon_pc,lat_pc,",
        "altitude,declividade,cobertura_florestal,subp,uso_da_terra")
    }
    return props;
  }

  const getAntropismo = () => {
    const str = '';
    const props: GeoserverProps = {
      camada: "02",
      filename: "Antopismo_",
      propertyname: str.concat("lote,bioma,uf,mun,lon_pc,lat_pc,ua,data_coleta,tipo_antropismo,obs")
    }
    return props;
  }

  const getUnidadeAmostral = () => {
    const str = '';
    const props: GeoserverProps = {
      camada: "03",
      filename: "Unidade_Amostral_",
      propertyname: str.concat("lote,bioma,uf,mun,lon_pc,lat_pc,data_coleta,ua,relevo,exposicao_terreno,presenca_erosao,",
        "tipo_erosao,coleta_solo,impedimento,metodo_coleta_solo,amostra_granel,horizonte_granel,",
        "amostra_indefor,horizonte_indefor,obs_gerais,outras_obs")
    }
    return props;
  }

  const getArvoreDAP5 = () => {
    const str = '';
    const props: GeoserverProps = {
      camada: "04",
      filename: "Arvore_DAP5_",
      propertyname: str.concat("lote,ua,bioma,uf,municipio,lon_pc,lat_pc,subunidade,subparcela,data_coleta,",
        "sem_arvore,numero_arvore,numero_fuste,especie_campo,dap,db1,db2,sa,qf,ps,aff,ht,hf,pl,hm,hab,obs,tocos,mb,dap_grupo")
    }
    return props;
  }

  const getArvoreDAP10 = () => {
    const str = '';
    const props: GeoserverProps = {
      camada: "06",
      filename: "Arvore_DAP10_",
      propertyname: str.concat("lote,bioma,uf,municipio,long_pc,lat_pc,data_coleta,ua,subunidade,subparcela,",
        "sem_arvore,numero_arvore,numero_fuste,mb,especie_campo,dap,db1,db2,sa,qf,ps,aff,ht,hf,pl,hm,hab,obs,tocos,dap_grupo")
    }
    return props;
  }

  const getBioeconomia = () => {
    const str = '';
    const props: GeoserverProps = {
      camada: "07",
      filename: "Bioeconomia_",
      propertyname: str.concat("lote,ua,estado,bioma,municipio,lat_pc,long_pc,ids,tur,idtur,ictur,ftur,",
        "nas,idnas,icnas,fnas,agu,idagu,icagu,fagu,sol,idsol,icsol,fsol,rel,idrel,icrel,frel,sec,idsec,icsec,",
        "fsec,pve,idpve,icpve,fpve,rec,idrec,icrec,frec,sau,idsau,icsau,fsau,hig,idhig,ichig,fhig,rit,idrit,",
        "icrit,frit,and,idand,icand,fand,ans,idans,icans,fans,edu,idedu,icedu,fedu,pes,idpes,icpes,fpes,",
        "out,idout,icout,fout,mcav,ofamc,ofamc_nlp,ofemc,ofemc_nlp")
    }
    return props;
  }

  const getPercepcaoAmbiental = () => {
    const str = '';
    const props: GeoserverProps = {
      camada: "08",
      filename: "Percepcao_Ambiental_",
      propertyname: str.concat("lote,ua,estado,bioma,municipio,lat_pc,long_pc,ids,nav,pfl1,",
        "pfl1_classe,pfl2,pfl2_classe,ppfl1,ppfl1_classe,ppfl2,ppfl2_classe,psafl1,psafl1_classe,",
        "psafl2,psafl2_classe,pmafl1,pmafl1_classe,pmafl2,pmafl2_classe,pmc1,pmc1_classe,pmc2,",
        "pmc2_classe,caf1,caf2,caf3,caf4,caf5,caf6,caf7,caf8,caf9,caf10,caf11,caf12,caf13,caf14,",
        "caf15,caf16,caf17,caf18,clfl,dlfl,sofl,cofl,cpcfl,qlvc,pncfl,lic,lic1,lic2,lic3,lic4,pmc,",
        "ofppfl1,ofppfl1_nlp,ofppfl2,ofppfl2_nlp")
    }
    return props;
  }

  const getUsoRecurso = () => {
    const str = '';
    const props: GeoserverProps = {
      camada: "10",
      filename: "Uso_Recurso_",
      propertyname: str.concat("lote,ua,estado,bioma,municipio,lat_pc,long_pc,ids,",
        "pfu1,ppfu1,pfu2,ppfu2,pfu3,ppfu3,pfu4,ppfu4,pfu5,ppfu5,pfu6,ppfu6,pfu7,ppfu7,pfu8,",
        "ppfu8,pfu9,ppfu9,pfu10,ppfu10,mps,idmps,icmps,omps,mmps,mpl,idmpl,icmpl,ompl,mmpl,",
        "mpp,idmpp,icmpp,ompp,mmpp,mpc,idmpc,icmpc,ompc,mmpc,mpo,idmpo,icmpo,ompo,mmpo,umc,",
        "fumc,fumc1,fumc2,fumc3,fumc4,fumc5,fumc6,uba,iudba,iucba,ouba,mba,uca,iudca,iucca,",
        "ouca,mca,uce,iudce,iucce,ouce,mce,uci,iudci,iucci,ouci,mci,ufl,iudfl,iucfl,oufl,mfl,",
        "ufo,iudfo,iucfo,oufo,mfo,ufr,iudfr,iucfr,oufr,mfr,ula,iudla,iucla,oula,mla,uol,iudol,",
        "iucol,ouol,mol,upa,iudpa,iucpa,oupa,mpa,upor,iudpor,iucpor,oupor,mpor,ure,iudre,iucre,",
        "oure,mre,use,iudse,iucse,ouse,mse,ura,iudra,iucra,oura,mra,ume,iudme,iucme,oume,mme,",
        "ucac,iudcac,iuccac,oucac,mcac,unm,iudnm,iucnm,ounm,mnm,fcr,qfcr")
    }
    return props;
  }

  const getPerfilSocEco = () => {
    const str = '';
    const props: GeoserverProps = {
      camada: "10",
      filename: "Perfil_Socioeconomico_",
      propertyname: str.concat("lote,ua,estado,bioma,municipio,lat_pc,long_pc,ids,",
        "pfu1,ppfu1,pfu2,ppfu2,pfu3,ppfu3,pfu4,ppfu4,pfu5,ppfu5,pfu6,ppfu6,pfu7,ppfu7,pfu8,",
        "ppfu8,pfu9,ppfu9,pfu10,ppfu10,mps,idmps,icmps,omps,mmps,mpl,idmpl,icmpl,ompl,mmpl,",
        "mpp,idmpp,icmpp,ompp,mmpp,mpc,idmpc,icmpc,ompc,mmpc,mpo,idmpo,icmpo,ompo,mmpo,umc,",
        "fumc,fumc1,fumc2,fumc3,fumc4,fumc5,fumc6,uba,iudba,iucba,ouba,mba,uca,iudca,iucca,",
        "ouca,mca,uce,iudce,iucce,ouce,mce,uci,iudci,iucci,ouci,mci,ufl,iudfl,iucfl,oufl,mfl,",
        "ufo,iudfo,iucfo,oufo,mfo,ufr,iudfr,iucfr,oufr,mfr,ula,iudla,iucla,oula,mla,uol,iudol,",
        "iucol,ouol,mol,upa,iudpa,iucpa,oupa,mpa,upor,iudpor,iucpor,oupor,mpor,ure,iudre,iucre,",
        "oure,mre,use,iudse,iucse,ouse,mse,ura,iudra,iucra,oura,mra,ume,iudme,iucme,oume,mme,",
        "ucac,iudcac,iuccac,oucac,mcac,unm,iudnm,iucnm,ounm,mnm,fcr,qfcr")
    }
    return props;
  }

  const getUsoSoloEntorno = () => {
    const str = '';
    const props: GeoserverProps = {
      camada: "11",
      filename: "Uso_Solo_Entorno_",
      propertyname: str.concat("lote,ua,estado,bioma,municipio,lat_pc,long_pc,",
        "ids,tfp,efp,ufpl,aipf,psmf,dnap,dnapn,dnaps1,dnaps2,apcf,tbp,nbr,pqbu,ubdc,otb,",
        "qeb,asub,eag,eagf,saf,silvo,espf,ean,cpfl,pexo,pecot,eecot,cse,cde,inc,aes,vue,",
        "pes,cos,coa,prsd,cas,conf,mpt,eap,deu,pen,mczu,mzuc,mcc,crie,gril")
    }
    return props;
  }

  const getColetas = () => {
    const str = '';
    const props: GeoserverProps = {
      camada: "12",
      filename: "Coleta_Botanica_",
      propertyname: str.concat("type,license,institution,institution_code,",
        "dataset_name,is_referenced_by,identifier_lote,identifier_ua,decimal_latitude,",
        "decimal_longitude,coordinate_precision,country,biome,region,state_province,",
        "municipality,locality,field_number,field_name,recorded_by,record_number,",
        "event_date,family,genus,specific_epithet,infraspecific_epithet,",
        "scientific_name,taxon_rank")
    }
    return props;
  }


  const AlertComponent = () => {
    // setMsg('Selecione os pontos');
    // console.log('MSG', msg);
    return null;
  }


  function getUrl(botao: string) {
    // handleSelectionChange();
    let geoserverProps: GeoserverProps;
    const dtDownload: string = new Date().toISOString().split('T')[0];

    if (uas.length === 0) {
      return AlertComponent();
    }

    switch (botao) {
      case 'necromassa':
        geoserverProps = getNecromassa();
        break;
      case 'usoTerra':
        geoserverProps = getUsoTerra();
        break;
      case 'antropismo':
        geoserverProps = getAntropismo();
        break;
      case 'ua':
        geoserverProps = getUnidadeAmostral();
        break;
      case 'dap5':
        geoserverProps = getArvoreDAP5();
        break;
      case 'dap10':
        geoserverProps = getArvoreDAP10();
        break;
      case 'bioeconomia':
        geoserverProps = getBioeconomia();
        break;
      case 'percepcao':
        geoserverProps = getPercepcaoAmbiental();
        break;
      case 'usoRecurso':
        geoserverProps = getUsoRecurso();
        break;
      case 'perfilSocioeconomico':
        geoserverProps = getPerfilSocEco();
        break;
      case 'usoSoloEntorno':
        geoserverProps = getUsoSoloEntorno();
        break;
      case 'coletas':
        geoserverProps = getColetas();
        break;
    }

    let filter = '';
    if (botao === 'coletas') {
      filter = 'identifier_ua';
    } else {
      filter = 'ua';
    }

    const url = "https://sistemas.florestal.gov.br/geoserver/IFN/ows?service=WFS&version=1.0.0&"
      + "request=GetFeature&typeName=IFN%3A" + geoserverProps.camada + "&"
      + "format_options=filename:" + geoserverProps.filename + "_" + dtDownload + ".csv;csvseparator:semicolon&"
      + "propertyname=" + geoserverProps.propertyname + "&"
      + "CQL_FILTER=" + filter + " IN(" + uas + ")&outputFormat=csv";

    // console.log('url', url);
    window.open(url, '_blank');
    // return url;
  }

  // console.log('UAS: ', uas);
  // console.log('url', getUrl());

  if (!isDsConfigured()) {
    return <h3>
      Selecione os pontos para realizar o donload dos dados.
      <br />
      Selecionar a camada.
    </h3>
  }
  return <div className='d-flex justify-content-center p-5'>
    <h6>
      <p>Dados abertos</p>
      {msg}
      <div className='d-flex  list-group flex-column '>
        <li className='p-1'>
          <button className='btn-default' type='submit' disabled={msg !== ''}
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => getUrl('necromassa')}>Necromassa</button>
        </li>
        <li className='p-1'>
          <button className='btn-default' type='submit' disabled={msg !== ''}
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => getUrl('usoTerra')}>Uso da Terra</button>
        </li>
        <li className='p-1'>
          <button className='btn-default' type='submit' disabled={msg !== ''}
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => getUrl('antropismo')}>Antropismo</button>
        </li>  <li className='p-1'>
          <button className='btn-default' type='submit' disabled={msg !== ''}
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => getUrl('ua')}>Unidade Amostral</button>
        </li>
        <li className='p-1'>
          <button className='btn-default' type='submit' disabled={msg !== ''}
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => getUrl('dap5')}>Árvore DAP5</button>
        </li>
        <li className='p-1'>
          <button className='btn-default' type='submit' disabled={msg !== ''}
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => getUrl('dap10')}>Árvore DAP10</button>
        </li>
        <li className='p-1'>
          <button className='btn-default' type='submit' disabled={msg !== ''}
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => getUrl('bioeconomia')}>Bioeconomia</button>
        </li>
        <li className='p-1'>
          <button className='btn-default' type='submit' disabled={msg !== ''}
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => getUrl('percepcao')}>Percepção Ambiental</button>
        </li>
        <li className='p-1'>
          <button className='btn-default' type='submit' disabled={msg !== ''}
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => getUrl('usoRecurso')}>Uso de Recursos</button>
        </li>
        <li className='p-1'>
          <button className='btn-default' type='submit' disabled={msg !== ''}
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => getUrl('perfilSocioeconomico')}>Perfil Socioeconomico</button>
        </li>
        <li className='p-1'>
          <button className='btn-default' type='submit' disabled={msg !== ''}
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => getUrl('usoSoloEntorno')}>Uso do Solo no Entorno</button>
        </li>
        <li className='p-1'>
          <button className='btn-default' type='submit' disabled={msg !== ''}
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => getUrl('coletas')}>Coletas Botânicas</button>
        </li>
      </div>
    </h6>
    <DataSourceComponent
      useDataSource={props.useDataSources[0]} query={{ where: '1=1' } as FeatureLayerQueryParams} widgetId={props.id} >
      {selecao}
    </DataSourceComponent>
  </div>
}


