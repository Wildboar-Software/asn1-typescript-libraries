/* eslint-disable */
import { type KEY_TRANSPORT } from "../AlgorithmInformation-2009/KEY-TRANSPORT.oca.mjs";
import { kt_rsa } from "../CryptographicMessageSyntaxAlgorithms-2009/kt-rsa.oa.mjs";

/**
 * @summary KeyTransportAlgs
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * KeyTransportAlgs KEY-TRANSPORT ::= { kt-rsa, ... }
 * ```
 *
 * @constant
 * @type {KEY_TRANSPORT[]}
 *
 */
export const KeyTransportAlgs: KEY_TRANSPORT[] = [kt_rsa];

/* eslint-enable */
