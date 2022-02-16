import { Handler } from 'aws-lambda';
import { randomUUID } from 'crypto';

export const handler: Handler = async (event) => ({
  event: {
    header: {
      namespace: 'Alexa',
      name: 'ErrorResponse',
      payloadVersion: '3',
      messageId: randomUUID(),
    },
    endpoint: {
      endpointId: event.directive.endpoint.endpointId,
    },
    payload: {
      type: 'INVALID_DIRECTIVE',
      message: 'サポートされていないディレクティブです',
    },
  },
});
