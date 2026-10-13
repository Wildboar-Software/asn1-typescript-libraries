/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CltuGetParameter_parBitLockRequired_parameterValue
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CltuGetParameter-parBitLockRequired-parameterValue ::= INTEGER
 *       {  yes                                          (0)
 *       ,  no                                           (1)
 *       }
 * ```
 */
export
type CltuGetParameter_parBitLockRequired_parameterValue = INTEGER;

/**
 * @summary CltuGetParameter_parBitLockRequired_parameterValue_yes
 * @constant
 * @type {number}
 */
export
const CltuGetParameter_parBitLockRequired_parameterValue_yes: CltuGetParameter_parBitLockRequired_parameterValue = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CltuGetParameter_parBitLockRequired_parameterValue_yes
 * @constant
 * @type {number}
 */
export
const yes: CltuGetParameter_parBitLockRequired_parameterValue = CltuGetParameter_parBitLockRequired_parameterValue_yes; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CltuGetParameter_parBitLockRequired_parameterValue_no
 * @constant
 * @type {number}
 */
export
const CltuGetParameter_parBitLockRequired_parameterValue_no: CltuGetParameter_parBitLockRequired_parameterValue = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CltuGetParameter_parBitLockRequired_parameterValue_no
 * @constant
 * @type {number}
 */
export
const no: CltuGetParameter_parBitLockRequired_parameterValue = CltuGetParameter_parBitLockRequired_parameterValue_no; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_CltuGetParameter_parBitLockRequired_parameterValue: $.ASN1Decoder<CltuGetParameter_parBitLockRequired_parameterValue> = $._decodeInteger;
export const _encode_CltuGetParameter_parBitLockRequired_parameterValue: $.ASN1Encoder<CltuGetParameter_parBitLockRequired_parameterValue> = $._encodeInteger;


/* eslint-enable */
