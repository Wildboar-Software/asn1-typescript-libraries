import Benchmark from 'benchmark';

const data = [];
for (let i = 0; i < 10000; i++) {
  data.push({ type: i % 10, value: i });
}

const suite = new Benchmark.Suite();

// Using Map.groupBy()
suite.add('Map.groupBy()', () => {
  Map.groupBy(data, item => item.type);
});

// Manual Map grouping
suite.add('Manual Map grouping', () => {
  const result = new Map();
  for (const item of data) {
    const key = item.type;
    if (!result.has(key)) result.set(key, []);
    result.get(key).push(item);
  }
});

suite
  .on('cycle', event => console.log(String(event.target)))
  .on('complete', function () {
    console.log('Fastest is', this.filter('fastest').map('name'));
  })
  .run();