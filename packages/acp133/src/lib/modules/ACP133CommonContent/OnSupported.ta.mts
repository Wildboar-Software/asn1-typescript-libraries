/* eslint-disable */
import {
    ASN1Element as _Element,
    BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary OnSupported
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OnSupported  ::=  BIT STRING { acp127-nn(0), acp127-pn(1), acp127-tn(2) }
 * ```
 */
export
type OnSupported = BIT_STRING;

/**
 * @summary OnSupported_acp127_nn
 * @constant
 */
export
const OnSupported_acp127_nn: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary acp127_nn
 * @constant
 */
export
const acp127_nn: number = OnSupported_acp127_nn; /* SHORT_NAMED_BIT */

/**
 * @summary OnSupported_acp127_pn
 * @constant
 */
export
const OnSupported_acp127_pn: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary acp127_pn
 * @constant
 */
export
const acp127_pn: number = OnSupported_acp127_pn; /* SHORT_NAMED_BIT */

/**
 * @summary OnSupported_acp127_tn
 * @constant
 */
export
const OnSupported_acp127_tn: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary acp127_tn
 * @constant
 */
export
const acp127_tn: number = OnSupported_acp127_tn; /* SHORT_NAMED_BIT */
export const _decode_OnSupported = $._decodeBitString;
export const _encode_OnSupported = $._encodeBitString;


/* eslint-enable */
