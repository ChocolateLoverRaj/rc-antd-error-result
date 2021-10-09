
import { Result, Button } from 'antd'
import { FC, ReactNode, MouseEventHandler } from 'react'
import ErrorLogger from './ErrorLogger'

export interface ErrorResultProps {
  error: Error
  title?: ReactNode
  retry?: MouseEventHandler<HTMLElement>
  cancel?: MouseEventHandler<HTMLElement>
  className?: string
}

const ErrorResult: FC<ErrorResultProps> = props => {
  const { error, title, retry, cancel, className } = props

  return (
    <>
      <ErrorLogger {...{ error }} />
      <Result
        status='error'
        title={title ?? 'Error'}
        extra={
          <>
            {retry !== undefined && <Button type='primary' onClick={retry}>Retry</Button>}
            {cancel !== undefined && <Button onClick={cancel}>Cancel</Button>}
          </>
        }
        className={className}
      />
    </>
  )
}

export default ErrorResult
