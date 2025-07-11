/* eslint-disable */
import { type KEY_TRANSPORT } from "../AlgorithmInformation-2009/KEY-TRANSPORT.oca.mjs";
import { kta_rsaES_OAEP } from "../PKIX1-PSS-OAEP-Algorithms-2009/kta-rsaES-OAEP.oa.mjs";

/**
 * @summary KeyTransportAlgs
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * KeyTransportAlgs KEY-TRANSPORT ::= { kta-rsaES-OAEP, ... }
 * ```
 *
 * @constant
 * @type {KEY_TRANSPORT[]}
 *
 */
export const KeyTransportAlgs: KEY_TRANSPORT[] = [kta_rsaES_OAEP];

/* eslint-enable */
