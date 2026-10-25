/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary FspGetParameter_parThrowEventOperation_parameterValue
 * @description
 * 
 * Whether this service instance may invoke FSP-THROW-EVENT. enabled is 0 and
 * disabled is 1.
 * 
 * CCSDS 912.3-B-3, table 3-11.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FspGetParameter-parThrowEventOperation-parameterValue ::= INTEGER
 *       {  enabled           (0)
 *       ,  disabled          (1)
 *       }
 * ```
 */
export
type FspGetParameter_parThrowEventOperation_parameterValue = INTEGER;

/**
 * @summary FspGetParameter_parThrowEventOperation_parameterValue_enabled
 * @description
 *
 * This service instance is authorized to invoke FSP-THROW-EVENT. CCSDS
 * 912.3-B-3, table 3-11.
 * @constant
 * @type {number}
 */
export
const FspGetParameter_parThrowEventOperation_parameterValue_enabled: 0 = 0 satisfies FspGetParameter_parThrowEventOperation_parameterValue; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FspGetParameter_parThrowEventOperation_parameterValue_enabled
 * @description
 *
 * FSP-THROW-EVENT is authorized (CCSDS 912.3-B-3, table 3-11).
 * @constant
 * @type {number}
 */
export
const enabled: 0 = FspGetParameter_parThrowEventOperation_parameterValue_enabled; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary FspGetParameter_parThrowEventOperation_parameterValue_disabled
 * @description
 *
 * This service instance is unauthorized to invoke FSP-THROW-EVENT. CCSDS
 * 912.3-B-3, table 3-11.
 * @constant
 * @type {number}
 */
export
const FspGetParameter_parThrowEventOperation_parameterValue_disabled: 1 = 1 satisfies FspGetParameter_parThrowEventOperation_parameterValue; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FspGetParameter_parThrowEventOperation_parameterValue_disabled
 * @description
 *
 * FSP-THROW-EVENT is unauthorized (CCSDS 912.3-B-3, table 3-11).
 * @constant
 * @type {number}
 */
export
const disabled: 1 = FspGetParameter_parThrowEventOperation_parameterValue_disabled; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_FspGetParameter_parThrowEventOperation_parameterValue: $.ASN1Decoder<FspGetParameter_parThrowEventOperation_parameterValue> = $._decodeInteger;
export const _encode_FspGetParameter_parThrowEventOperation_parameterValue: $.ASN1Encoder<FspGetParameter_parThrowEventOperation_parameterValue> = $._encodeInteger;


/* eslint-enable */
