import pkg from '@/../package.json';

import { BRANDING_NAME, ORG_NAME } from './branding';

export const CURRENT_VERSION = pkg.version;

export const isServerMode = process.env.NEXT_PUBLIC_SERVICE_MODE === 'server';
export const isUsePgliteDB = process.env.NEXT_PUBLIC_CLIENT_DB === 'pglite';

export const isDeprecatedEdition = !isServerMode && !isUsePgliteDB;

// @ts-ignore
export const isCustomBranding = BRANDING_NAME !== '聊城人工智能Ai医疗测试平台';
// @ts-ignore
export const isCustomORG = ORG_NAME !== 'LobeHub';
