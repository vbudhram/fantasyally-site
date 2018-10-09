#!/usr/bin/env bash
npm run-script build
s3-deploy '../build/fantasyally-site/**' --cwd '../build/fantasyally-site/' --region 'us-east-1' --bucket 'www.fantasyally.com' --distId E1Y04SEUL88WDR --invalidate '/*' --profile vijay
