import type { AWS } from '@serverless/typescript';

import hello from '@functions/hello';
import hellotest from '@functions/hellotest';

const serverlessConfiguration: AWS = {
  service: 'sample',
  frameworkVersion: '3',
  plugins: ['serverless-esbuild'],
  provider: {
    apiName: "this will be a api gateway name",
    name: 'aws',
    runtime: 'nodejs14.x',
    region: 'ca-central-1',
    profile: 'personal',
    stage: 'This will be a api gateway staging name',
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
      NODE_OPTIONS: '--enable-source-maps --stack-trace-limit=1000',
    },
  },
  // import the function via paths
  functions: { hello, hellotest },
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
};

module.exports = serverlessConfiguration;
