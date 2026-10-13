/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary FspGetParameter_parBitLockRequired_parameterValue
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FspGetParameter-parBitLockRequired-parameterValue ::= INTEGER
 *       {  yes                     (0)
 *       ,  no                      (1)
 *       }
 * ```
 */
export
type FspGetParameter_parBitLockRequired_parameterValue = INTEGER;

/**
 * @summary FspGetParameter_parBitLockRequired_parameterValue_yes
 * @constant
 * @type {number}
 */
export
const FspGetParameter_parBitLockRequired_parameterValue_yes: FspGetParameter_parBitLockRequired_parameterValue = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FspGetParameter_parBitLockRequired_parameterValue_yes
 * @constant
 * @type {number}
 */
export
const yes: FspGetParameter_parBitLockRequired_parameterValue = FspGetParameter_parBitLockRequired_parameterValue_yes; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary FspGetParameter_parBitLockRequired_parameterValue_no
 * @constant
 * @type {number}
 */
export
const FspGetParameter_parBitLockRequired_parameterValue_no: FspGetParameter_parBitLockRequired_parameterValue = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FspGetParameter_parBitLockRequired_parameterValue_no
 * @constant
 * @type {number}
 */
export
const no: FspGetParameter_parBitLockRequired_parameterValue = FspGetParameter_parBitLockRequired_parameterValue_no; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_FspGetParameter_parBitLockRequired_parameterValue: $.ASN1Decoder<FspGetParameter_parBitLockRequired_parameterValue> = $._decodeInteger;
export const _encode_FspGetParameter_parBitLockRequired_parameterValue: $.ASN1Encoder<FspGetParameter_parBitLockRequired_parameterValue> = $._encodeInteger;


/* eslint-enable */
