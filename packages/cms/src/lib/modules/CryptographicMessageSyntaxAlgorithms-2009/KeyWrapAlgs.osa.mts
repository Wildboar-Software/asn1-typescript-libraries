/* eslint-disable */
import { type KEY_WRAP } from "../AlgorithmInformation-2009/KEY-WRAP.oca.mjs";
import { kwa_3DESWrap } from "../CryptographicMessageSyntaxAlgorithms-2009/kwa-3DESWrap.oa.mjs";
import { kwa_RC2Wrap } from "../CryptographicMessageSyntaxAlgorithms-2009/kwa-RC2Wrap.oa.mjs";

/**
 * @summary KeyWrapAlgs
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * KeyWrapAlgs KEY-WRAP ::= { kwa-3DESWrap | kwa-RC2Wrap, ... }
 * ```
 *
 * @constant
 * @type {KEY_WRAP[]}
 *
 */
export const KeyWrapAlgs: KEY_WRAP[] = [kwa_3DESWrap, kwa_RC2Wrap];

/* eslint-enable */
