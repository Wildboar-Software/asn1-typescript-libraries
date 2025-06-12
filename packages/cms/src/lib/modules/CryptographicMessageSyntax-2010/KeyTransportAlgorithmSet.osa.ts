/* eslint-disable */
import { KEY_TRANSPORT } from "../AlgorithmInformation-2009/KEY-TRANSPORT.oca.js";
import { KeyTransportAlgs } from "../CryptographicMessageSyntaxAlgorithms-2009/KeyTransportAlgs.osa.js";
export { KEY_TRANSPORT } from "../AlgorithmInformation-2009/KEY-TRANSPORT.oca.js";
export { KeyTransportAlgs } from "../CryptographicMessageSyntaxAlgorithms-2009/KeyTransportAlgs.osa.js";

/* START_OF_SYMBOL_DEFINITION KeyTransportAlgorithmSet */
/**
 * @summary KeyTransportAlgorithmSet
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * KeyTransportAlgorithmSet KEY-TRANSPORT ::= { KeyTransportAlgs, ... }
 * ```
 *
 * @constant
 * @type {KEY_TRANSPORT[]}
 *
 */
export const KeyTransportAlgorithmSet: KEY_TRANSPORT[] = [...KeyTransportAlgs];
/* END_OF_SYMBOL_DEFINITION KeyTransportAlgorithmSet */

/* eslint-enable */
