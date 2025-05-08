<<<<<<< HEAD
<<<<<<< HEAD
# widget_selecao_pontos
=======
# Listen selection change of a data source
=======
>>>>>>> dev

# WIDGET SELEÇÃO DE PONTOS

Componente do Arcgis Experience Builder para seleção de pontos.




## Tecnologias necessárias

- JDK arcgis-experience-builder-1.17.zip -  https://developers.arcgis.com/experience-builder/guide/downloads/


Clone o projeto

<<<<<<< HEAD
  ```tsx
  const dataRender = (ds: DataSource, info: IMDataSourceInfo) => {
    return <div className='record-list'>
        {
          ds && ds.getStatus() === DataSourceStatus.Loaded
            ? ds.getRecords().map((r, i) => {
              return <Button type='tertiary' key={i} onClick={() => ds.selectRecordById(r.getId())} className={classNames({ 'blue-border': ds.getSelectedRecordIds()?.includes(r.getId()) })}>
                {r.getId()}
              </Button>
            })
            : null
        }
      </div>
  }
  ```
>>>>>>> master
=======
```bash
  git clone git@github.com:alcamenes/widget_selecao_pontos.git
```

Vá até o diretório do projeto

```bash
  cd arcgis-experience-builder-1.17/client/your-extensions/widgets/widget_selecao_pontos
```




Execute a aplicação

- Na pasta /client executar
```bash
  npm start
```

- Na pasta /server executar
```bash
  npm start
```
link: https://localhost:3001

## Responsável
- [@alcamenes.santos]
>>>>>>> dev
