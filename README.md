<!--
  Title: use-async-cache
  Description: a list of `[element1, ..., elementn]` use `async-date from same api`。`[element1, ..., elementn]` will share same async-cache，`api` will request once。
  Author: JiangWeixian
  -->

# use-async-cache
![Version](https://img.shields.io/npm/v/use-async-cache?style=for-the-badge)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](#)
[![Twitter: jiangweixian](https://img.shields.io/twitter/follow/jiangweixian.svg?style=for-the-badge)](https://twitter.com/jiangweixian)

> a simple react hooks implement for async cache store;

> a list of `[element1, ..., elementn]` use `async-date from same api`。`[element1, ..., elementn]` will share same async-cache，`api` will request once。

see more [props](/docs/use-async-cache.md)

## Install

```sh
npm install use-async-cache --save
```

## Usage
> api will only request once

```tsx
import React from 'react';
import { useAsyncCache } from 'use-async-cache';

import { cache } from '@/api/cache';

export const Element = () => {
  const { cached } = useAsyncCache({
    id: '1',
    api: cache.fetch,
  });
  return <span>{cached && cached.data}</span>;
};
```

```tsx
import React from 'react';

import { Element } from './components/Element';

export default () => {
  return Array(10)
    .fill(0)
    .map(() => <Element />);
};
```

**api.cache.fetch will only request once for 10 element**

## Author

👤 **JW**

* Twitter: [@jiangweixian](https://twitter.com/jiangweixian)
* Github: [@JiangWeixian](https://github.com/JiangWeixian)

## Show your support

Give a ⭐️ if this project helped you!

<a href="https://www.patreon.com/jiangweixian">
  <img src="https://c5.patreon.com/external/logo/become_a_patron_button@2x.png" width="160">
</a>

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
