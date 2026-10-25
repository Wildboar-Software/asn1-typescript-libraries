/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DeviceTriggerDeliveryResult
 * @description
 * 
 * Delivery result represents the result of the delivery of a device triggering
 * request: - SUCCESS: The value indicates that the device action request was
 * successfully completed. - UNKNOWN: The value indicates any unspecified
 * errors. - FAILURE: The value indicates that this trigger encountered a
 * delivery error and is deemed permanently undeliverable. - TRIGGERED: The
 * value indicates that Device triggering request is accepted by the SCEF. -
 * EXPIRED: The value indicates that the validity period expired before the
 * trigger could be delivered. - UNCONFIRMED: The value indicates that the
 * delivery of the device action request is not confirmed. - REPLACED: The value
 * indicates that the device triggering replacement request is accepted by the
 * SCEF. - TERMINATE: The SCEF includes this value in the response for a
 * successful device triggering cancellation request. The value indicates that
 * the delivery of the device action request is terminated by the SCS/AS.
 *
 * 3GPP TS 33.128, clause 7.8.3.1.5.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DeviceTriggerDeliveryResult  ::=  ENUMERATED
 * {
 *     success(1),
 *     unknown(2),
 *     failure(3),
 *     triggered(4),
 *     expired(5),
 *     unconfirmed(6),
 *     replaced(7),
 *     terminate(8)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_DeviceTriggerDeliveryResult {
    success = 1,
    unknown = 2,
    failure = 3,
    triggered = 4,
    expired = 5,
    unconfirmed = 6,
    replaced = 7,
    terminate = 8,
}

/**
 * @summary DeviceTriggerDeliveryResult
 * @description
 * 
 * Delivery result represents the result of the delivery of a device triggering
 * request: - SUCCESS: The value indicates that the device action request was
 * successfully completed. - UNKNOWN: The value indicates any unspecified
 * errors. - FAILURE: The value indicates that this trigger encountered a
 * delivery error and is deemed permanently undeliverable. - TRIGGERED: The
 * value indicates that Device triggering request is accepted by the SCEF. -
 * EXPIRED: The value indicates that the validity period expired before the
 * trigger could be delivered. - UNCONFIRMED: The value indicates that the
 * delivery of the device action request is not confirmed. - REPLACED: The value
 * indicates that the device triggering replacement request is accepted by the
 * SCEF. - TERMINATE: The SCEF includes this value in the response for a
 * successful device triggering cancellation request. The value indicates that
 * the delivery of the device action request is terminated by the SCS/AS.
 *
 * 3GPP TS 33.128, clause 7.8.3.1.5.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DeviceTriggerDeliveryResult  ::=  ENUMERATED
 * {
 *     success(1),
 *     unknown(2),
 *     failure(3),
 *     triggered(4),
 *     expired(5),
 *     unconfirmed(6),
 *     replaced(7),
 *     terminate(8)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type DeviceTriggerDeliveryResult = _enum_for_DeviceTriggerDeliveryResult;

/**
 * @summary DeviceTriggerDeliveryResult
 * @description
 * 
 * Delivery result represents the result of the delivery of a device triggering
 * request: - SUCCESS: The value indicates that the device action request was
 * successfully completed. - UNKNOWN: The value indicates any unspecified
 * errors. - FAILURE: The value indicates that this trigger encountered a
 * delivery error and is deemed permanently undeliverable. - TRIGGERED: The
 * value indicates that Device triggering request is accepted by the SCEF. -
 * EXPIRED: The value indicates that the validity period expired before the
 * trigger could be delivered. - UNCONFIRMED: The value indicates that the
 * delivery of the device action request is not confirmed. - REPLACED: The value
 * indicates that the device triggering replacement request is accepted by the
 * SCEF. - TERMINATE: The SCEF includes this value in the response for a
 * successful device triggering cancellation request. The value indicates that
 * the delivery of the device action request is terminated by the SCS/AS.
 *
 * 3GPP TS 33.128, clause 7.8.3.1.5.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DeviceTriggerDeliveryResult  ::=  ENUMERATED
 * {
 *     success(1),
 *     unknown(2),
 *     failure(3),
 *     triggered(4),
 *     expired(5),
 *     unconfirmed(6),
 *     replaced(7),
 *     terminate(8)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const DeviceTriggerDeliveryResult: typeof _enum_for_DeviceTriggerDeliveryResult = _enum_for_DeviceTriggerDeliveryResult;

/**
 * @summary DeviceTriggerDeliveryResult_success
 * @constant
 * @type {number}
 */
export
const DeviceTriggerDeliveryResult_success: _enum_for_DeviceTriggerDeliveryResult.success = DeviceTriggerDeliveryResult.success; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary success
 * @constant
 * @type {number}
 */
export
const success: _enum_for_DeviceTriggerDeliveryResult.success = DeviceTriggerDeliveryResult.success; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DeviceTriggerDeliveryResult_unknown
 * @constant
 * @type {number}
 */
export
const DeviceTriggerDeliveryResult_unknown: _enum_for_DeviceTriggerDeliveryResult.unknown = DeviceTriggerDeliveryResult.unknown; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknown
 * @constant
 * @type {number}
 */
export
const unknown: _enum_for_DeviceTriggerDeliveryResult.unknown = DeviceTriggerDeliveryResult.unknown; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DeviceTriggerDeliveryResult_failure
 * @constant
 * @type {number}
 */
export
const DeviceTriggerDeliveryResult_failure: _enum_for_DeviceTriggerDeliveryResult.failure = DeviceTriggerDeliveryResult.failure; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary failure
 * @constant
 * @type {number}
 */
export
const failure: _enum_for_DeviceTriggerDeliveryResult.failure = DeviceTriggerDeliveryResult.failure; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DeviceTriggerDeliveryResult_triggered
 * @constant
 * @type {number}
 */
export
const DeviceTriggerDeliveryResult_triggered: _enum_for_DeviceTriggerDeliveryResult.triggered = DeviceTriggerDeliveryResult.triggered; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary triggered
 * @constant
 * @type {number}
 */
export
const triggered: _enum_for_DeviceTriggerDeliveryResult.triggered = DeviceTriggerDeliveryResult.triggered; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DeviceTriggerDeliveryResult_expired
 * @constant
 * @type {number}
 */
export
const DeviceTriggerDeliveryResult_expired: _enum_for_DeviceTriggerDeliveryResult.expired = DeviceTriggerDeliveryResult.expired; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary expired
 * @constant
 * @type {number}
 */
export
const expired: _enum_for_DeviceTriggerDeliveryResult.expired = DeviceTriggerDeliveryResult.expired; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DeviceTriggerDeliveryResult_unconfirmed
 * @constant
 * @type {number}
 */
export
const DeviceTriggerDeliveryResult_unconfirmed: _enum_for_DeviceTriggerDeliveryResult.unconfirmed = DeviceTriggerDeliveryResult.unconfirmed; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unconfirmed
 * @constant
 * @type {number}
 */
export
const unconfirmed: _enum_for_DeviceTriggerDeliveryResult.unconfirmed = DeviceTriggerDeliveryResult.unconfirmed; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DeviceTriggerDeliveryResult_replaced
 * @constant
 * @type {number}
 */
export
const DeviceTriggerDeliveryResult_replaced: _enum_for_DeviceTriggerDeliveryResult.replaced = DeviceTriggerDeliveryResult.replaced; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary replaced
 * @constant
 * @type {number}
 */
export
const replaced: _enum_for_DeviceTriggerDeliveryResult.replaced = DeviceTriggerDeliveryResult.replaced; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DeviceTriggerDeliveryResult_terminate
 * @constant
 * @type {number}
 */
export
const DeviceTriggerDeliveryResult_terminate: _enum_for_DeviceTriggerDeliveryResult.terminate = DeviceTriggerDeliveryResult.terminate; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary terminate
 * @constant
 * @type {number}
 */
export
const terminate: _enum_for_DeviceTriggerDeliveryResult.terminate = DeviceTriggerDeliveryResult.terminate; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_DeviceTriggerDeliveryResult: $.ASN1Decoder<DeviceTriggerDeliveryResult> = $._decodeEnumerated;
export const _encode_DeviceTriggerDeliveryResult: $.ASN1Encoder<DeviceTriggerDeliveryResult> = $._encodeEnumerated;


/* eslint-enable */
