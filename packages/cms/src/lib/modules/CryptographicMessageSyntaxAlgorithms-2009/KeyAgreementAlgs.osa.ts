/* eslint-disable */
import { KEY_AGREE } from "../AlgorithmInformation-2009/KEY-AGREE.oca.js";
import { kaa_esdh } from "../CryptographicMessageSyntaxAlgorithms-2009/kaa-esdh.oa.js";
import { kaa_ssdh } from "../CryptographicMessageSyntaxAlgorithms-2009/kaa-ssdh.oa.js";
export { KEY_AGREE } from "../AlgorithmInformation-2009/KEY-AGREE.oca.js";
export { kaa_esdh } from "../CryptographicMessageSyntaxAlgorithms-2009/kaa-esdh.oa.js";
export { kaa_ssdh } from "../CryptographicMessageSyntaxAlgorithms-2009/kaa-ssdh.oa.js";

/* START_OF_SYMBOL_DEFINITION KeyAgreementAlgs */
/**
 * @summary KeyAgreementAlgs
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * KeyAgreementAlgs KEY-AGREE ::= { kaa-esdh | kaa-ssdh, ...}
 * ```
 *
 * @constant
 * @type {KEY_AGREE[]}
 *
 */
export const KeyAgreementAlgs: KEY_AGREE[] = [kaa_esdh, kaa_ssdh];
/* END_OF_SYMBOL_DEFINITION KeyAgreementAlgs */

/* eslint-enable */
