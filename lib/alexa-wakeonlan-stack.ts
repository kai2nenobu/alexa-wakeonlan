import { Stack, StackProps } from 'aws-cdk-lib';
import { Runtime } from 'aws-cdk-lib/aws-lambda';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { Construct } from 'constructs';

export class AlexaWakeonlanStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // eslint-disable-next-line no-new
    new NodejsFunction(this, 'AlexaWakeonlanFunction', {
      runtime: Runtime.NODEJS_14_X,
      entry: 'lambda/alexa-wakeonlan.ts',
      description: 'Endpoint function for Alexa WakeOnLan Skill',
      environment: {
        NODE_OPTIONS: '--enable-source-maps',
      },
      bundling: {
        sourceMap: true,
      },
    });
  }
}
