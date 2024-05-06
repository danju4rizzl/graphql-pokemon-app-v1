import { ApolloError } from '@apollo/client/errors'
import React from 'react'

interface FeedbackComponentProps {
  loading: boolean
  error: ApolloError | undefined
}

/**
 * Feedback component to display loading and error states
 */
const Feedback: React.FC<FeedbackComponentProps> = ({ loading, error }) => {
  if (loading) {
    return (
      <div className="w-full p-80 md:p-60 flex">
        <h1 className="animate-spin text-6xl mx-auto">⚙️</h1>
      </div>
    )
  }

  if (error) {
    return (
      <div className="w-full p-80 md:p-60 flex">
        <h1 className="text-slate-200 text-center text-6xl mx-auto">
          {error.message}
        </h1>
      </div>
    )
  }

  return null
}

export default Feedback
