// Responsables de los cuarteles
const paddockManagers = [
  { id: 1, taxNumber: '132254524', name: 'JUAN TAPIA BURGOS' },
  { id: 2, taxNumber: '143618668', name: 'EFRAIN SOTO VERA' },
  { id: 3, taxNumber: '78903228', name: 'CARLOS PEREZ GONZALEZ' },
  { id: 4, taxNumber: '176812737', name: 'ANDRES VIÑALES CIENFUEGOS' },
  { id: 5, taxNumber: '216352696', name: 'OSCAR PEREZ ZUÑIGA' },
  { id: 6, taxNumber: '78684747', name: 'JOAQUIN ANDRADE SANDOVAL' }
];

// Arreglo de id's
function listPaddockManagerIds() {
  return paddockManagers.map(
    (paddockManager) => paddockManager.id)
}
//console.log(listPaddockManagerIds())

// 1) Arreglo con ruts ordenados por nombre

function listPaddockManagersByName() {

  function taxNumberSorted() {
    return (paddockManagers.sort((a, b) => {
      const nameA = a.name.toUpperCase()
      const nameB = b.name.toUpperCase()
      if (nameA < nameB) {
        return -1
      }
      if (nameA > nameB) {
        return 1
      }
      return 0
    }
    ))
  }
  const ordenado = taxNumberSorted()
  return ordenado.map(
    (rut) => rut.taxNumber)
}

//console.log(listPaddockManagersByName())

// 2) Ordenar cultivos por hectareas de mayor a menor y mostrar solo nombres

// Tipo de cuartel, en el cual se utiliza el tipo de producto plantado
const paddockType = [
  { id: 1, name: 'PALTOS' },
  { id: 2, name: 'AVELLANOS' },
  { id: 3, name: 'CEREZAS' },
  { id: 4, name: 'NOGALES' },
]

//console.table(paddockType)

// Un paddock representa un cuartel de un campo (Entiéndase también como potrero o parcela), el área está representada en m2, harvestYear es el año en el que se sembró el cuartel
const paddocks = [
  { paddockManagerId: 6, farmId: 1, paddockTypeId: 1, harvestYear: 2019, area: 1200 },
  { paddockManagerId: 1, farmId: 3, paddockTypeId: 4, harvestYear: 2019, area: 500 },
  { paddockManagerId: 5, farmId: 3, paddockTypeId: 2, harvestYear: 2020, area: 20000 },
  { paddockManagerId: 2, farmId: 2, paddockTypeId: 3, harvestYear: 2021, area: 8401 },
  { paddockManagerId: 3, farmId: 1, paddockTypeId: 1, harvestYear: 2020, area: 2877 },
  { paddockManagerId: 5, farmId: 2, paddockTypeId: 2, harvestYear: 2017, area: 15902 },
  { paddockManagerId: 3, farmId: 3, paddockTypeId: 2, harvestYear: 2018, area: 1736 },
  { paddockManagerId: 2, farmId: 3, paddockTypeId: 3, harvestYear: 2020, area: 2965 },
  { paddockManagerId: 4, farmId: 3, paddockTypeId: 4, harvestYear: 2018, area: 1651 },
  { paddockManagerId: 5, farmId: 1, paddockTypeId: 1, harvestYear: 2018, area: 700 },
  { paddockManagerId: 1, farmId: 2, paddockTypeId: 1, harvestYear: 2019, area: 7956 },
  { paddockManagerId: 5, farmId: 3, paddockTypeId: 2, harvestYear: 2020, area: 3745 },
  { paddockManagerId: 6, farmId: 1, paddockTypeId: 3, harvestYear: 2021, area: 11362 },
  { paddockManagerId: 2, farmId: 3, paddockTypeId: 3, harvestYear: 2021, area: 300 },
  { paddockManagerId: 3, farmId: 2, paddockTypeId: 2, harvestYear: 2020, area: 19188 },
  { paddockManagerId: 3, farmId: 1, paddockTypeId: 1, harvestYear: 2019, area: 17137 },
  { paddockManagerId: 4, farmId: 3, paddockTypeId: 2, harvestYear: 2020, area: 100 },
  { paddockManagerId: 2, farmId: 1, paddockTypeId: 3, harvestYear: 2019, area: 11845 },
  { paddockManagerId: 5, farmId: 2, paddockTypeId: 1, harvestYear: 2018, area: 15969 },
  { paddockManagerId: 1, farmId: 3, paddockTypeId: 1, harvestYear: 2029, area: 10420 },
  { paddockManagerId: 5, farmId: 2, paddockTypeId: 3, harvestYear: 2010, area: 3200 },
  { paddockManagerId: 6, farmId: 1, paddockTypeId: 2, harvestYear: 2012, area: 10587 },
  { paddockManagerId: 2, farmId: 2, paddockTypeId: 2, harvestYear: 2018, area: 16750 }
];

//console.table(paddocks)

cultivos = paddocks.map(cultivo => cultivo.paddockTypeId)
//console.log(cultivos)

function sortPaddockTypeByTotalArea() {
  function secondFunction() {
    const joined = paddocks.map(function (e) {
      return Object.assign({}, e, paddockType.reduce(function (acc, val) {
        if (val.id == e.paddockTypeId) {
          return val
        } else {
          return acc
        }
      }, {}))
    })
    
    return (joined.sort((a, b) => {
      const nameA = a.area
      const nameB = b.area
      if (nameA < nameB) {
        return -1
      }
      if (nameA > nameB) {
        return 1
      }
      return 0
      
    }

    ))
  }
  const onlyName = secondFunction()
  return onlyName.map(
    (plantacion) => plantacion.name)
}
console.table(sortPaddockTypeByTotalArea())
//console.table(paddocks)

// function sinOrdenar() {
//   const joined = paddocks.map(function (e) {
//     return Object.assign({}, e, paddockType.reduce(function (acc, val) {
//       if (val.id == e.paddockTypeId) {
//         return val
//       } else {
//         return acc
//       }
//     }, {}))
//   })
  
//   return (joined.sort((a, b) => {
//     const nameA = a.area
//     const nameB = b.area
//     if (nameA < nameB) {
//       return -1
//     }
//     if (nameA > nameB) {
//       return 1
//     }
//     return 0
    
//   }

//   ))
// }
// console.table(sinOrdenar())

const farms = [
  { id: 1, name: 'AGRICOLA SANTA ANA' },
  { id: 2, name: 'VINA SANTA PAULA' },
  { id: 3, name: 'FORESTAL Y AGRICOLA LO ENCINA' }
];
    //console.table(farms)

//


