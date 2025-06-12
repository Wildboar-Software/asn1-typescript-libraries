/* eslint-disable */
import { CONTENT_ENCRYPTION } from "../AlgorithmInformation-2009/CONTENT-ENCRYPTION.oca.mjs";
import { ContentEncryptionAlgs } from "../CryptographicMessageSyntaxAlgorithms-2009/ContentEncryptionAlgs.osa.mjs";
export { CONTENT_ENCRYPTION } from "../AlgorithmInformation-2009/CONTENT-ENCRYPTION.oca.mjs";
export { ContentEncryptionAlgs } from "../CryptographicMessageSyntaxAlgorithms-2009/ContentEncryptionAlgs.osa.mjs";

/* START_OF_SYMBOL_DEFINITION ContentEncryptionAlgorithmSet */
/**
 * @summary ContentEncryptionAlgorithmSet
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ContentEncryptionAlgorithmSet CONTENT-ENCRYPTION ::= { ContentEncryptionAlgs, ... }
 * ```
 *
 * @constant
 * @type {CONTENT_ENCRYPTION[]}
 *
 */
export const ContentEncryptionAlgorithmSet: CONTENT_ENCRYPTION[] = [
    ...ContentEncryptionAlgs,
];
/* END_OF_SYMBOL_DEFINITION ContentEncryptionAlgorithmSet */

/* eslint-enable */
