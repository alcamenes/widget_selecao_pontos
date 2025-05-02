/** @jsx jsx */
import {
  React,
  jsx,
  css,
  type IMDataSourceInfo,
  type DataSource,
  DataSourceStatus,
  type FeatureLayerQueryParams,
  type AllWidgetProps,
  DataSourceComponent
} from 'jimu-core'
import { useState } from 'react';



export default function Widget(props: AllWidgetProps<unknown>) {
  const isDsConfigured = () => {
    if (props.useDataSources && props.useDataSources.length === 1) {
      return true
    }
    return false
  }


  const [uas, setUas] = useState([]);



  function handleSelectionChange() {
    // console.log('1.UAS: ', uas);
    setUas(uas);
  }


  const dataRender = (ds: DataSource, info: IMDataSourceInfo) => {
    uas.length = 0;
    console.log('FOREACH: ', uas);
    if (ds && ds.getStatus() === DataSourceStatus.Loaded) {
      ds.getRecords().map((r, i) => {
        uas.push("'" + r.getFieldValue('no_conglomerado') + "'");
        return null;
      });
    }
    handleSelectionChange();
    return null;
  }

  function getUrl() {
    // handleSelectionChange();
    // console.log('uas', uas);
    const camada = "05";
    const dtDownload = new Date().toISOString().split('T')[0];
    const filename = "Necromassa_";
    const propertyname: string = '';
    const filter = "ua";
    propertyname.concat("lote,bioma,uf,mun,lon_pc,lat_pc,ua,data_coleta,uso_terra_pc",
      "ausencia_necromassa,transecto,nivel_decomposicao,numero_galho,diametro,serp1,serp2,serp3,serp4,serp5");


    const url = "https://sistemas.florestal.gov.br/geoserver/IFN/ows?service=WFS&version=1.0.0&"
      + "request=GetFeature&typeName=IFN%3A" + camada + "&"
      + "format_options=filename:" + filename + "_" + dtDownload + ".csv;csvseparator:semicolon&"
      + "propertyname=" + propertyname + "&"
      + "CQL_FILTER=" + filter + " IN(" + uas + ")&outputFormat=csv";

    console.log('url', url);
    window.open(url, '_blank');
    // return url;
  }

  // console.log('UAS: ', uas);
  // console.log('url', getUrl());

  if (!isDsConfigured()) {
    return <h3>
      Selecione os pontos para realizar o donload dos dados.
      <br />
      Selecioanr a camada.
    </h3>
  }
  return <div className='widget-listen-selection-change' css={style}>
    <h3>
      {/* <a href={getUrl()}>Necromassa</a> */}
      {<button onClick={getUrl} >Necromassa</button>}
    </h3>
    <DataSourceComponent
      useDataSource={props.useDataSources[0]} query={{ where: '1=1' } as FeatureLayerQueryParams} widgetId={props.id} >
      {dataRender}
    </DataSourceComponent>
  </div>
}

const style = css`
  color: black;
  width: 100%;
  height: 100%;
  max-height: 800px;
  overflow: auto;
  .blue-border {
    border: 1px solid var(--sys-color-primary-main);
  }
  .record-list {
    width: 100%;
    margin-top: 20px;
    height: calc(100% - 80px);
    overflow: auto;
  }
`

