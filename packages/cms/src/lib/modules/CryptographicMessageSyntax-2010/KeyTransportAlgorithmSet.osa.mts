/* eslint-disable */
import { type KEY_TRANSPORT } from "../AlgorithmInformation-2009/KEY-TRANSPORT.oca.mjs";
import { KeyTransportAlgs } from "../CryptographicMessageSyntaxAlgorithms-2009/KeyTransportAlgs.osa.mjs";

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

/* eslint-enable */
