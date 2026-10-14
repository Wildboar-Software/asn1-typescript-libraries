/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CltuGetParameter_parNotificationMode_parameterValue
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CltuGetParameter-parNotificationMode-parameterValue ::= INTEGER
 *       {  deferred                         (0)
 * 
 * 
 * 
 * 
 *       ,  immediate                        (1)
 *       }
 * ```
 */
export
type CltuGetParameter_parNotificationMode_parameterValue = INTEGER;

/**
 * @summary CltuGetParameter_parNotificationMode_parameterValue_deferred
 * @constant
 * @type {number}
 */
export
const CltuGetParameter_parNotificationMode_parameterValue_deferred: CltuGetParameter_parNotificationMode_parameterValue = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CltuGetParameter_parNotificationMode_parameterValue_deferred
 * @constant
 * @type {number}
 */
export
const deferred: CltuGetParameter_parNotificationMode_parameterValue = CltuGetParameter_parNotificationMode_parameterValue_deferred; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CltuGetParameter_parNotificationMode_parameterValue_immediate
 * @constant
 * @type {number}
 */
export
const CltuGetParameter_parNotificationMode_parameterValue_immediate: CltuGetParameter_parNotificationMode_parameterValue = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CltuGetParameter_parNotificationMode_parameterValue_immediate
 * @constant
 * @type {number}
 */
export
const immediate: CltuGetParameter_parNotificationMode_parameterValue = CltuGetParameter_parNotificationMode_parameterValue_immediate; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_CltuGetParameter_parNotificationMode_parameterValue: $.ASN1Decoder<CltuGetParameter_parNotificationMode_parameterValue> = $._decodeInteger;
export const _encode_CltuGetParameter_parNotificationMode_parameterValue: $.ASN1Encoder<CltuGetParameter_parNotificationMode_parameterValue> = $._encodeInteger;


/* eslint-enable */
