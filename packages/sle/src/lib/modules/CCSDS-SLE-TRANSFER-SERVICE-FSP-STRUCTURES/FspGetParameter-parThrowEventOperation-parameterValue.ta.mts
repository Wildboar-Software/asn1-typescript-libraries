/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary FspGetParameter_parThrowEventOperation_parameterValue
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FspGetParameter-parThrowEventOperation-parameterValue ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type FspGetParameter_parThrowEventOperation_parameterValue = INTEGER;

/**
 * @summary FspGetParameter_parThrowEventOperation_parameterValue_enabled
 * @constant
 * @type {number}
 */
export
const FspGetParameter_parThrowEventOperation_parameterValue_enabled: FspGetParameter_parThrowEventOperation_parameterValue = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FspGetParameter_parThrowEventOperation_parameterValue_enabled
 * @constant
 * @type {number}
 */
export
const enabled: FspGetParameter_parThrowEventOperation_parameterValue = FspGetParameter_parThrowEventOperation_parameterValue_enabled; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary FspGetParameter_parThrowEventOperation_parameterValue_disabled
 * @constant
 * @type {number}
 */
export
const FspGetParameter_parThrowEventOperation_parameterValue_disabled: FspGetParameter_parThrowEventOperation_parameterValue = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FspGetParameter_parThrowEventOperation_parameterValue_disabled
 * @constant
 * @type {number}
 */
export
const disabled: FspGetParameter_parThrowEventOperation_parameterValue = FspGetParameter_parThrowEventOperation_parameterValue_disabled; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_FspGetParameter_parThrowEventOperation_parameterValue: $.ASN1Decoder<FspGetParameter_parThrowEventOperation_parameterValue> = $._decodeInteger;
export const _encode_FspGetParameter_parThrowEventOperation_parameterValue: $.ASN1Encoder<FspGetParameter_parThrowEventOperation_parameterValue> = $._encodeInteger;


/* eslint-enable */
