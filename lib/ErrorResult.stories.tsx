import ErrorResult from './ErrorResult'
import { Story } from '@storybook/react'
import 'antd/dist/antd.css'

export default {
  title: ErrorResult.displayName,
  component: ErrorResult,
  argTypes: {
    title: { table: { defaultValue: { summary: 'Error' } } }
  }
}

interface StoryProps {
  title: string
  showCancel: boolean
  showRetry: boolean
  errorMessage: string
  className: string
  retry: any
  cancel: any
}
export const CustomizableDemo: Story<StoryProps> = ({
  title,
  showCancel,
  showRetry,
  errorMessage,
  className,
  retry,
  cancel
}) =>
  <ErrorResult
    error={new Error(errorMessage)}
    title={title}
    cancel={showCancel ? cancel : undefined}
    retry={showRetry ? retry : undefined}
    className={className}
  />

CustomizableDemo.args = {
  errorMessage: 'Error finding friend: 404',
  showCancel: true,
  showRetry: true
}
CustomizableDemo.argTypes = {
  title: { type: 'string' },
  error: { table: { disable: true } },
  retry: { table: { disable: true }, action: 'Retry' },
  cancel: { table: { disable: true }, action: 'Cancel' }
}
