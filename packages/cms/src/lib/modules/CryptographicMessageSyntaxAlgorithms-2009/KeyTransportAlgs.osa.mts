/* eslint-disable */
import { type KEY_TRANSPORT } from "../AlgorithmInformation-2009/KEY-TRANSPORT.oca.mjs";
import { kt_rsa } from "../CryptographicMessageSyntaxAlgorithms-2009/kt-rsa.oa.mjs";

/**
 * @summary KeyTransportAlgs
 * @description
 *
 * Object set of CMS key-transport algorithms ([RFC 5911](https://datatracker.ietf.org/doc/html/rfc5911)).
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
