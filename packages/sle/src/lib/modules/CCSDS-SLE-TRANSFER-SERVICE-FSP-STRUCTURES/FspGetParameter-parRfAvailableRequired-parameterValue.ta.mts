/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary FspGetParameter_parRfAvailableRequired_parameterValue
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FspGetParameter-parRfAvailableRequired-parameterValue ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type FspGetParameter_parRfAvailableRequired_parameterValue = INTEGER;

/**
 * @summary FspGetParameter_parRfAvailableRequired_parameterValue_yes
 * @constant
 * @type {number}
 */
export
const FspGetParameter_parRfAvailableRequired_parameterValue_yes: FspGetParameter_parRfAvailableRequired_parameterValue = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FspGetParameter_parRfAvailableRequired_parameterValue_yes
 * @constant
 * @type {number}
 */
export
const yes: FspGetParameter_parRfAvailableRequired_parameterValue = FspGetParameter_parRfAvailableRequired_parameterValue_yes; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary FspGetParameter_parRfAvailableRequired_parameterValue_no
 * @constant
 * @type {number}
 */
export
const FspGetParameter_parRfAvailableRequired_parameterValue_no: FspGetParameter_parRfAvailableRequired_parameterValue = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FspGetParameter_parRfAvailableRequired_parameterValue_no
 * @constant
 * @type {number}
 */
export
const no: FspGetParameter_parRfAvailableRequired_parameterValue = FspGetParameter_parRfAvailableRequired_parameterValue_no; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_FspGetParameter_parRfAvailableRequired_parameterValue: $.ASN1Decoder<FspGetParameter_parRfAvailableRequired_parameterValue> = $._decodeInteger;
export const _encode_FspGetParameter_parRfAvailableRequired_parameterValue: $.ASN1Encoder<FspGetParameter_parRfAvailableRequired_parameterValue> = $._encodeInteger;


/* eslint-enable */
