/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary FspGetParameter_parSegmHeader_parameterValue
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FspGetParameter-parSegmHeader-parameterValue ::= INTEGER
 *       {  present           (0)
 *       ,  absent            (1)
 *       }
 * ```
 */
export
type FspGetParameter_parSegmHeader_parameterValue = INTEGER;

/**
 * @summary FspGetParameter_parSegmHeader_parameterValue_present
 * @constant
 * @type {number}
 */
export
const FspGetParameter_parSegmHeader_parameterValue_present: FspGetParameter_parSegmHeader_parameterValue = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FspGetParameter_parSegmHeader_parameterValue_present
 * @constant
 * @type {number}
 */
export
const present: FspGetParameter_parSegmHeader_parameterValue = FspGetParameter_parSegmHeader_parameterValue_present; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary FspGetParameter_parSegmHeader_parameterValue_absent
 * @constant
 * @type {number}
 */
export
const FspGetParameter_parSegmHeader_parameterValue_absent: FspGetParameter_parSegmHeader_parameterValue = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FspGetParameter_parSegmHeader_parameterValue_absent
 * @constant
 * @type {number}
 */
export
const absent: FspGetParameter_parSegmHeader_parameterValue = FspGetParameter_parSegmHeader_parameterValue_absent; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_FspGetParameter_parSegmHeader_parameterValue: $.ASN1Decoder<FspGetParameter_parSegmHeader_parameterValue> = $._decodeInteger;
export const _encode_FspGetParameter_parSegmHeader_parameterValue: $.ASN1Encoder<FspGetParameter_parSegmHeader_parameterValue> = $._encodeInteger;


/* eslint-enable */
