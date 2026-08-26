/* eslint-disable */
import { type KEY_AGREE } from "../AlgorithmInformation-2009/KEY-AGREE.oca.mjs";
import { kaa_esdh } from "../CryptographicMessageSyntaxAlgorithms-2009/kaa-esdh.oa.mjs";
import { kaa_ssdh } from "../CryptographicMessageSyntaxAlgorithms-2009/kaa-ssdh.oa.mjs";

/**
 * @summary KeyAgreementAlgs
 * @description
 *
 * Object set of CMS key-agreement algorithms ([RFC 5911](https://datatracker.ietf.org/doc/html/rfc5911)).
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

/* eslint-enable */
