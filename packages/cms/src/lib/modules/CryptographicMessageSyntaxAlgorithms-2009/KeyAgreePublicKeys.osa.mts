/* eslint-disable */
import { type PUBLIC_KEY } from "../AlgorithmInformation-2009/PUBLIC-KEY.oca.mjs";
import { pk_dh } from "../PKIXAlgs-2009/pk-dh.oa.mjs";

/**
 * @summary KeyAgreePublicKeys
 * @description
 *
 * Object set of public keys for CMS key agreement ([RFC 5911](https://datatracker.ietf.org/doc/html/rfc5911)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * KeyAgreePublicKeys PUBLIC-KEY ::= { pk-dh, ...}
 * ```
 *
 * @constant
 * @type {PUBLIC_KEY[]}
 *
 */
export const KeyAgreePublicKeys: PUBLIC_KEY[] = [pk_dh];

/* eslint-enable */
