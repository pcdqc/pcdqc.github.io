import Due from '../src/index';

const app = new Due({
  el: '#app',
  data: {
    name: 'chuange',
    age: 24,
    address: {
      city: '北京'
    },
    info: {
      city: 'beijing'
    },
    message: ['a', 'b', {
      name: 'liangshaofeng',
      age: 24
    }]
  }
});

app.$watch('address.info.city', function (val) {
  console.log('我watch住了city');
  console.log(`city${val}`);
});

window.app = app;
