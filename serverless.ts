import type { AWS } from '@serverless/typescript';

import hello from '@functions/post';
import hellotest from '@functions/get';
import getWPath from '@functions/get_w_path';
import dynamoGetSample from '@functions/dynamo_get_sample';
import dynamoPutSample from '@functions/dynamo_put_sample';
import dynamoConfigs from './severless/resources';
import iam from './severless/iam';

const serverlessConfiguration: AWS = {
  service: 'sample',
  frameworkVersion: '3',
  plugins: ['serverless-esbuild'],
  provider: {
    apiName: "api-gateway-name",
    name: 'aws',
    runtime: 'nodejs14.x',
    region: 'ca-central-1',
    profile: 'personal',
    stage: 'api-gateway-staging-name',
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
      NODE_OPTIONS: '--enable-source-maps --stack-trace-limit=1000',
    },
    logRetentionInDays: 14,
    iamRoleStatements: iam
  },
  // import the function via paths
  functions: { 
    hello,
    hellotest,
    getWPath,
    dynamoGetSample,
    dynamoPutSample
  },
  package: { individually: true },
  custom: {
    esbuild: {
      bundle: true,
      minify: false,
      sourcemap: true,
      exclude: ['aws-sdk'],
      target: 'node14',
      define: { 'require.resolve': undefined },
      platform: 'node',
      concurrency: 10,
    },
  },
  resources: {
    Resources: {
      ...dynamoConfigs
    },
  }
};

module.exports = serverlessConfiguration;
