/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary CallStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallStatus  ::=  ENUMERATED {
 *     answered(0),
 *     alerting(1)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_CallStatus {
    answered = 0,
    alerting = 1,
}

/**
 * @summary CallStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallStatus  ::=  ENUMERATED {
 *     answered(0),
 *     alerting(1)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type CallStatus = _enum_for_CallStatus;

/**
 * @summary CallStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallStatus  ::=  ENUMERATED {
 *     answered(0),
 *     alerting(1)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const CallStatus = _enum_for_CallStatus;

/**
 * @summary CallStatus_answered
 * @constant
 * @type {number}
 */
export
const CallStatus_answered: CallStatus = CallStatus.answered; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary answered
 * @constant
 * @type {number}
 */
export
const answered: CallStatus = CallStatus.answered; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CallStatus_alerting
 * @constant
 * @type {number}
 */
export
const CallStatus_alerting: CallStatus = CallStatus.alerting; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary alerting
 * @constant
 * @type {number}
 */
export
const alerting: CallStatus = CallStatus.alerting; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_CallStatus: $.ASN1Decoder<CallStatus> = $._decodeEnumerated;

export
const _encode_CallStatus: $.ASN1Encoder<CallStatus> = $._encodeEnumerated;

/* eslint-enable */
