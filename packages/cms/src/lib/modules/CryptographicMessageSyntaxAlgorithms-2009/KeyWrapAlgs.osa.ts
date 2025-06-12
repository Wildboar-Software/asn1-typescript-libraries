/* eslint-disable */
import { KEY_WRAP } from "../AlgorithmInformation-2009/KEY-WRAP.oca.js";
import { kwa_3DESWrap } from "../CryptographicMessageSyntaxAlgorithms-2009/kwa-3DESWrap.oa.js";
import { kwa_RC2Wrap } from "../CryptographicMessageSyntaxAlgorithms-2009/kwa-RC2Wrap.oa.js";
export { KEY_WRAP } from "../AlgorithmInformation-2009/KEY-WRAP.oca.js";
export { kwa_3DESWrap } from "../CryptographicMessageSyntaxAlgorithms-2009/kwa-3DESWrap.oa.js";
export { kwa_RC2Wrap } from "../CryptographicMessageSyntaxAlgorithms-2009/kwa-RC2Wrap.oa.js";

/* START_OF_SYMBOL_DEFINITION KeyWrapAlgs */
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
/* END_OF_SYMBOL_DEFINITION KeyWrapAlgs */

/* eslint-enable */
