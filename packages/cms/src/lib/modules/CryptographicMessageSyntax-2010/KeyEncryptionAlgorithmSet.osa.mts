/* eslint-disable */
import { KEY_WRAP } from "../AlgorithmInformation-2009/KEY-WRAP.oca.mjs";
import { KeyWrapAlgs } from "../CryptographicMessageSyntaxAlgorithms-2009/KeyWrapAlgs.osa.mjs";
export { KEY_WRAP } from "../AlgorithmInformation-2009/KEY-WRAP.oca.mjs";
export { KeyWrapAlgs } from "../CryptographicMessageSyntaxAlgorithms-2009/KeyWrapAlgs.osa.mjs";

/* START_OF_SYMBOL_DEFINITION KeyEncryptionAlgorithmSet */
/**
 * @summary KeyEncryptionAlgorithmSet
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * KeyEncryptionAlgorithmSet KEY-WRAP ::= { KeyWrapAlgs, ... }
 * ```
 *
 * @constant
 * @type {KEY_WRAP[]}
 *
 */
export const KeyEncryptionAlgorithmSet: KEY_WRAP[] = [...KeyWrapAlgs];
/* END_OF_SYMBOL_DEFINITION KeyEncryptionAlgorithmSet */

/* eslint-enable */
