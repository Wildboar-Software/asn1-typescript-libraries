/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CltuGetParameter_parNotificationMode_parameterValue
 * @description
 * 
 * When the provider reports a production-status change to interrupted. deferred
 * is 0 and immediate is 1. The parameter is optional and records the provider's
 * behavior (Annex C). CCSDS 912.1-B-5, table 3-11 and section 3.7.2.3.
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
 * @description
 *
 * The user is told that production-status changed to interrupted only when
 * radiation of a CLTU is affected: cltu-status is radiation started, or
 * radiation must start because of the CLTU's earliest-radiation-time and
 * latest-radiation-time. Until that notification, the provider still accepts
 * CLTU-TRANSFER-DATA. CCSDS 912.1-B-5, table 3-11 and section 3.7.2.3.
 * @constant
 * @type {number}
 */
export
const CltuGetParameter_parNotificationMode_parameterValue_deferred: CltuGetParameter_parNotificationMode_parameterValue = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CltuGetParameter_parNotificationMode_parameterValue_deferred
 * @description
 *
 * Notify production interrupted only when a CLTU's radiation is affected (CCSDS
 * 912.1-B-5, section 3.7.2.3).
 * @constant
 * @type {number}
 */
export
const deferred: CltuGetParameter_parNotificationMode_parameterValue = CltuGetParameter_parNotificationMode_parameterValue_deferred; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CltuGetParameter_parNotificationMode_parameterValue_immediate
 * @description
 *
 * CLTU-ASYNC-NOTIFY is sent as soon as production-status changes to
 * interrupted. CCSDS 912.1-B-5, table 3-11 and section 3.7.2.3.
 * @constant
 * @type {number}
 */
export
const CltuGetParameter_parNotificationMode_parameterValue_immediate: CltuGetParameter_parNotificationMode_parameterValue = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CltuGetParameter_parNotificationMode_parameterValue_immediate
 * @description
 *
 * Notify production interrupted as soon as the transition is detected (CCSDS
 * 912.1-B-5, section 3.7.2.3).
 * @constant
 * @type {number}
 */
export
const immediate: CltuGetParameter_parNotificationMode_parameterValue = CltuGetParameter_parNotificationMode_parameterValue_immediate; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_CltuGetParameter_parNotificationMode_parameterValue: $.ASN1Decoder<CltuGetParameter_parNotificationMode_parameterValue> = $._decodeInteger;
export const _encode_CltuGetParameter_parNotificationMode_parameterValue: $.ASN1Encoder<CltuGetParameter_parNotificationMode_parameterValue> = $._encodeInteger;


/* eslint-enable */
