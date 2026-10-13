/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary FspGetParameter_parTimeoutType_parameterValue
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FspGetParameter-parTimeoutType-parameterValue ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type FspGetParameter_parTimeoutType_parameterValue = INTEGER;

/**
 * @summary FspGetParameter_parTimeoutType_parameterValue_generateAlert
 * @constant
 * @type {number}
 */
export
const FspGetParameter_parTimeoutType_parameterValue_generateAlert: FspGetParameter_parTimeoutType_parameterValue = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FspGetParameter_parTimeoutType_parameterValue_generateAlert
 * @constant
 * @type {number}
 */
export
const generateAlert: FspGetParameter_parTimeoutType_parameterValue = FspGetParameter_parTimeoutType_parameterValue_generateAlert; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary FspGetParameter_parTimeoutType_parameterValue_suspendSequenceControlled
 * @constant
 * @type {number}
 */
export
const FspGetParameter_parTimeoutType_parameterValue_suspendSequenceControlled: FspGetParameter_parTimeoutType_parameterValue = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FspGetParameter_parTimeoutType_parameterValue_suspendSequenceControlled
 * @constant
 * @type {number}
 */
export
const suspendSequenceControlled: FspGetParameter_parTimeoutType_parameterValue = FspGetParameter_parTimeoutType_parameterValue_suspendSequenceControlled; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_FspGetParameter_parTimeoutType_parameterValue: $.ASN1Decoder<FspGetParameter_parTimeoutType_parameterValue> = $._decodeInteger;
export const _encode_FspGetParameter_parTimeoutType_parameterValue: $.ASN1Encoder<FspGetParameter_parTimeoutType_parameterValue> = $._encodeInteger;


/* eslint-enable */
