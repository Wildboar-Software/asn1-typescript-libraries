/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SMDeviceTriggerIndicator
 * @description
 *
 * What the MTC-IWF asked the SMS-SC to do with a device trigger: request,
 * replace, or recall (table 6.1.3.5.1 and table 6.3.1.2.1). Carried on the
 * SC-DVT-T4 CDR. The prose names those three actions and does not describe
 * `notDeviceTrigger`.
 *
 * 3GPP TS 32.274 V19.1.0 clause 5.1.4 and table 6.1.3.5.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMDeviceTriggerIndicator  ::=  ENUMERATED {
 *    notDeviceTrigger        ( 0 ),
 *    deviceTriggerRequest    ( 1 ),
 *    deviceTriggerReplace    ( 2 ),
 *    deviceTriggerRecall     ( 3 ) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_SMDeviceTriggerIndicator {
    notDeviceTrigger = 0,
    deviceTriggerRequest = 1,
    deviceTriggerReplace = 2,
    deviceTriggerRecall = 3,
}

/**
 * @summary SMDeviceTriggerIndicator
 * @description
 *
 * What the MTC-IWF asked the SMS-SC to do with a device trigger: request,
 * replace, or recall (table 6.1.3.5.1 and table 6.3.1.2.1). Carried on the
 * SC-DVT-T4 CDR. The prose names those three actions and does not describe
 * `notDeviceTrigger`.
 *
 * 3GPP TS 32.274 V19.1.0 clause 5.1.4 and table 6.1.3.5.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMDeviceTriggerIndicator  ::=  ENUMERATED {
 *    notDeviceTrigger        ( 0 ),
 *    deviceTriggerRequest    ( 1 ),
 *    deviceTriggerReplace    ( 2 ),
 *    deviceTriggerRecall     ( 3 ) }
 * ```
 * 
 * @enum {number}
 */
export
type SMDeviceTriggerIndicator = _enum_for_SMDeviceTriggerIndicator;

/**
 * @summary SMDeviceTriggerIndicator
 * @description
 *
 * What the MTC-IWF asked the SMS-SC to do with a device trigger: request,
 * replace, or recall (table 6.1.3.5.1 and table 6.3.1.2.1). Carried on the
 * SC-DVT-T4 CDR. The prose names those three actions and does not describe
 * `notDeviceTrigger`.
 *
 * 3GPP TS 32.274 V19.1.0 clause 5.1.4 and table 6.1.3.5.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMDeviceTriggerIndicator  ::=  ENUMERATED {
 *    notDeviceTrigger        ( 0 ),
 *    deviceTriggerRequest    ( 1 ),
 *    deviceTriggerReplace    ( 2 ),
 *    deviceTriggerRecall     ( 3 ) }
 * ```
 * 
 * @enum {number}
 */
export
const SMDeviceTriggerIndicator: typeof _enum_for_SMDeviceTriggerIndicator = _enum_for_SMDeviceTriggerIndicator;

/**
 * @summary SMDeviceTriggerIndicator_notDeviceTrigger
 * @description
 *
 * Not a device trigger. TS 32.274's prose only names request, replace, and
 * recall, and does not describe this value.
 *
 * @constant
 * @type {number}
 */
export
const SMDeviceTriggerIndicator_notDeviceTrigger: _enum_for_SMDeviceTriggerIndicator.notDeviceTrigger = SMDeviceTriggerIndicator.notDeviceTrigger; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary notDeviceTrigger
 * @constant
 * @type {number}
 */
export
const notDeviceTrigger: _enum_for_SMDeviceTriggerIndicator.notDeviceTrigger = SMDeviceTriggerIndicator.notDeviceTrigger; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SMDeviceTriggerIndicator_deviceTriggerRequest
 * @description
 *
 * A Device Trigger Request from the MTC-IWF over T4, to be delivered to a UE
 * (clause 5.2.2.4.1).
 *
 * @constant
 * @type {number}
 */
export
const SMDeviceTriggerIndicator_deviceTriggerRequest: _enum_for_SMDeviceTriggerIndicator.deviceTriggerRequest = SMDeviceTriggerIndicator.deviceTriggerRequest; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary deviceTriggerRequest
 * @constant
 * @type {number}
 */
export
const deviceTriggerRequest: _enum_for_SMDeviceTriggerIndicator.deviceTriggerRequest = SMDeviceTriggerIndicator.deviceTriggerRequest; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SMDeviceTriggerIndicator_deviceTriggerReplace
 * @description
 *
 * Replace a pending trigger identified by the external identifier or MSISDN,
 * the SCS identifier, and the old reference number (clause 5.2.2.4.4). If none
 * is pending, the replace fails. A successful replace is then delivered as in
 * clause 5.2.2.4.2.
 *
 * @constant
 * @type {number}
 */
export
const SMDeviceTriggerIndicator_deviceTriggerReplace: _enum_for_SMDeviceTriggerIndicator.deviceTriggerReplace = SMDeviceTriggerIndicator.deviceTriggerReplace; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary deviceTriggerReplace
 * @constant
 * @type {number}
 */
export
const deviceTriggerReplace: _enum_for_SMDeviceTriggerIndicator.deviceTriggerReplace = SMDeviceTriggerIndicator.deviceTriggerReplace; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SMDeviceTriggerIndicator_deviceTriggerRecall
 * @description
 *
 * Recall deletes the pending trigger identified by the external identifier or
 * MSISDN, the SCS identifier, and the old reference number (clause 5.2.2.4.5).
 * Online charging reports a failure when nothing is pending (clause
 * 5.3.2.11.5).
 *
 * @constant
 * @type {number}
 */
export
const SMDeviceTriggerIndicator_deviceTriggerRecall: _enum_for_SMDeviceTriggerIndicator.deviceTriggerRecall = SMDeviceTriggerIndicator.deviceTriggerRecall; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary deviceTriggerRecall
 * @constant
 * @type {number}
 */
export
const deviceTriggerRecall: _enum_for_SMDeviceTriggerIndicator.deviceTriggerRecall = SMDeviceTriggerIndicator.deviceTriggerRecall; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_SMDeviceTriggerIndicator: $.ASN1Decoder<SMDeviceTriggerIndicator> = $._decodeEnumerated;

export
const _encode_SMDeviceTriggerIndicator: $.ASN1Encoder<SMDeviceTriggerIndicator> = $._encodeEnumerated;

/* eslint-enable */
