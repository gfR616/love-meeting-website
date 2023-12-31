const qualities = {
  tedious: {
    _id: '658f0e4c597330a88fe6fa5c',
    name: 'Нудила',
    color: 'primary'
  },
  strange: {
    _id: '658f0e4c597330a88fe6fa5e',
    name: 'Странный',
    color: 'secondary'
  },
  buller: {
    _id: '658f0e4c597330a88fe6fa60',
    name: 'Троль',
    color: 'success'
  },
  alcoholic: {
    _id: '658f0e4c597330a88fe6fa62',
    name: 'Алкоголик',
    color: 'danger'
  },
  handsome: {
    _id: '658f0e4c597330a88fe6fa64',
    name: 'Красавчик',
    color: 'info'
  },
  uncertain: {
    _id: '658f0e4c597330a88fe6fa66',
    name: 'Неуверенный',
    color: 'dark'
  }
}

const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(qualities)
    }, 2000)
  })

export default {
  fetchAll
}
