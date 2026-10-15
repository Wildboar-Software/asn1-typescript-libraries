/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary FspGetParameter_parTimeoutType_parameterValue
 * @description
 * 
 * FOP behavior on timeout: Alert or AD service suspension. `generateAlert` is 0
 * and `suspendSequenceControlled` is 1. Section 3.10.2.5 does not further
 * define either behavior.
 * 
 * CCSDS 912.3-B-3, table 3-11.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FspGetParameter-parTimeoutType-parameterValue ::= INTEGER
 *       {  generateAlert              (0)
 *       ,  suspendSequenceControlled  (1)
 *       }
 * ```
 */
export
type FspGetParameter_parTimeoutType_parameterValue = INTEGER;

/**
 * @summary FspGetParameter_parTimeoutType_parameterValue_generateAlert
 * @description
 *
 * FOP timeout behavior Alert. Section 3.10.2.5 names Alert and does not define
 * that behavior further. CCSDS 912.3-B-3, table 3-11.
 * @constant
 * @type {number}
 */
export
const FspGetParameter_parTimeoutType_parameterValue_generateAlert: FspGetParameter_parTimeoutType_parameterValue = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FspGetParameter_parTimeoutType_parameterValue_generateAlert
 * @description
 *
 * FOP timeout behavior Alert (CCSDS 912.3-B-3, table 3-11).
 * @constant
 * @type {number}
 */
export
const generateAlert: FspGetParameter_parTimeoutType_parameterValue = FspGetParameter_parTimeoutType_parameterValue_generateAlert; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary FspGetParameter_parTimeoutType_parameterValue_suspendSequenceControlled
 * @description
 *
 * FOP timeout behavior AD service suspension. Section 3.10.2.5 names that
 * behavior and does not define it further. CCSDS 912.3-B-3, table 3-11.
 * @constant
 * @type {number}
 */
export
const FspGetParameter_parTimeoutType_parameterValue_suspendSequenceControlled: FspGetParameter_parTimeoutType_parameterValue = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FspGetParameter_parTimeoutType_parameterValue_suspendSequenceControlled
 * @description
 *
 * FOP timeout behavior AD service suspension (CCSDS 912.3-B-3, table 3-11).
 * @constant
 * @type {number}
 */
export
const suspendSequenceControlled: FspGetParameter_parTimeoutType_parameterValue = FspGetParameter_parTimeoutType_parameterValue_suspendSequenceControlled; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_FspGetParameter_parTimeoutType_parameterValue: $.ASN1Decoder<FspGetParameter_parTimeoutType_parameterValue> = $._decodeInteger;
export const _encode_FspGetParameter_parTimeoutType_parameterValue: $.ASN1Encoder<FspGetParameter_parTimeoutType_parameterValue> = $._encodeInteger;


/* eslint-enable */
