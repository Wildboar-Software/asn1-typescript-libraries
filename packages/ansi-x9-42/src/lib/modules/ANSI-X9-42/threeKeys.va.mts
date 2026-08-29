/* eslint-disable */
import { INTEGER } from "@wildboar/asn1";


/**
 * @summary threeKeys
 * @description
 *
 * Upper bound of `TripleDES` SIZE: 3-key TDEA, preferred (2-key
 * already provides most of TDEA's strength). ANS X9.42-2003 §A.7.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * threeKeys     INTEGER ::= 3
 * ```
 *
 * @constant
 */
export const threeKeys: INTEGER = 3;

/* eslint-enable */
