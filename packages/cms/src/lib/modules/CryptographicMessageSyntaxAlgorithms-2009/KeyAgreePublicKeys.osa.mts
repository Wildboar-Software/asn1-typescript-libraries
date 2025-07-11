/* eslint-disable */
import { type PUBLIC_KEY } from "../AlgorithmInformation-2009/PUBLIC-KEY.oca.mjs";
import { pk_dh } from "../PKIXAlgs-2009/pk-dh.oa.mjs";

/**
 * @summary KeyAgreePublicKeys
 * @description
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
