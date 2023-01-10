## kgid

Fastest unique id generator.

### Installation

```
pnpm i kgid
```

### Usage

```tsx
import { kgid } from 'kgid';

console.log(kgid());
```

### Benchmarking

```bash
➜  benchmark> node index.mjs
┌─────────┬──────────────┬─────────────────────┬───────────────────────┐
│ (index) │  Task Name   │  Average Time (ps)  │     Variance (ps)     │
├─────────┼──────────────┼─────────────────────┼───────────────────────┤
│    0    │   'nanoid'   │ 0.21404910435571142 │ 0.0010931945194185824 │
│    1    │    'kgid'    │ 0.08688025856545194 │ 0.0002604025737242756 │
│    2    │ 'react-uuid' │ 0.7893323068767657  │  0.02007272352994441  │
└─────────┴──────────────┴─────────────────────┴───────────────────────┘
kgid x 26,559,754 ops/sec ±0.31% (97 runs sampled)
react-uuid x 1,408,511 ops/sec ±0.18% (98 runs sampled)
nanoid() x 6,048,306 ops/sec ±0.69% (95 runs sampled)
Fastest is kgid
➜  benchmark> node unique-test.mjs
1000000 times kgid: All generated ids are unique
1000000 times nanoid: All generated ids are unique
1000000 times react-uuid: All generated ids are unique
```
