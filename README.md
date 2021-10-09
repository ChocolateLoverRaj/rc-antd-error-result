# rc-antd-error-result

![Created with ](https://img.shields.io/badge/Created%20with-@programmerraj/create-3cb371?style=flat)
[![TS-Standard - Typescript Standard Style Guide](https://badgen.net/badge/code%20style/ts-standard/blue?icon=typescript)](https://github.com/standard/ts-standard)

## [Demo / Docs / Storybook](https://chocolateloverraj.github.io/rc-antd-error-result)

## Install
```
npm i rc-antd-error-result
```

## Example
```jsx
import ErrorResult from 'rc-antd-error-result'

<ErrorResult 
  error={new Error('Some error')}
  title="Something didn't work"
  retry={() => {}}
  cancel={() => {}}
  className='a class name if you want'
/>
```
You can play around with props in the storybook demo.