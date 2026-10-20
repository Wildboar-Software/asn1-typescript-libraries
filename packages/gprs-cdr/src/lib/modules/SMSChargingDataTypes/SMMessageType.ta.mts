/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SMMessageType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMMessageType  ::=  ENUMERATED {
 *    submission          ( 0 ),
 *    deliveryReport      ( 1 ),
 *    sMServiceRequest    ( 2 ),
 *    delivery            ( 3 ),
 *    t4DeviceTrigger     ( 4 ),
 *    sMDeviceTrigger     ( 5 ) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_SMMessageType {
    submission = 0,
    deliveryReport = 1,
    sMServiceRequest = 2,
    delivery = 3,
    t4DeviceTrigger = 4,
    sMDeviceTrigger = 5,
}

/**
 * @summary SMMessageType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMMessageType  ::=  ENUMERATED {
 *    submission          ( 0 ),
 *    deliveryReport      ( 1 ),
 *    sMServiceRequest    ( 2 ),
 *    delivery            ( 3 ),
 *    t4DeviceTrigger     ( 4 ),
 *    sMDeviceTrigger     ( 5 ) }
 * ```
 * 
 * @enum {number}
 */
export
type SMMessageType = _enum_for_SMMessageType;

/**
 * @summary SMMessageType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMMessageType  ::=  ENUMERATED {
 *    submission          ( 0 ),
 *    deliveryReport      ( 1 ),
 *    sMServiceRequest    ( 2 ),
 *    delivery            ( 3 ),
 *    t4DeviceTrigger     ( 4 ),
 *    sMDeviceTrigger     ( 5 ) }
 * ```
 * 
 * @enum {number}
 */
export
const SMMessageType = _enum_for_SMMessageType;

/**
 * @summary SMMessageType_submission
 * @constant
 * @type {number}
 */
export
const SMMessageType_submission: SMMessageType = SMMessageType.submission; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary submission
 * @constant
 * @type {number}
 */
export
const submission: SMMessageType = SMMessageType.submission; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SMMessageType_deliveryReport
 * @constant
 * @type {number}
 */
export
const SMMessageType_deliveryReport: SMMessageType = SMMessageType.deliveryReport; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary deliveryReport
 * @constant
 * @type {number}
 */
export
const deliveryReport: SMMessageType = SMMessageType.deliveryReport; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SMMessageType_sMServiceRequest
 * @constant
 * @type {number}
 */
export
const SMMessageType_sMServiceRequest: SMMessageType = SMMessageType.sMServiceRequest; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sMServiceRequest
 * @constant
 * @type {number}
 */
export
const sMServiceRequest: SMMessageType = SMMessageType.sMServiceRequest; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SMMessageType_delivery
 * @constant
 * @type {number}
 */
export
const SMMessageType_delivery: SMMessageType = SMMessageType.delivery; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary delivery
 * @constant
 * @type {number}
 */
export
const delivery: SMMessageType = SMMessageType.delivery; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SMMessageType_t4DeviceTrigger
 * @constant
 * @type {number}
 */
export
const SMMessageType_t4DeviceTrigger: SMMessageType = SMMessageType.t4DeviceTrigger; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary t4DeviceTrigger
 * @constant
 * @type {number}
 */
export
const t4DeviceTrigger: SMMessageType = SMMessageType.t4DeviceTrigger; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SMMessageType_sMDeviceTrigger
 * @constant
 * @type {number}
 */
export
const SMMessageType_sMDeviceTrigger: SMMessageType = SMMessageType.sMDeviceTrigger; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sMDeviceTrigger
 * @constant
 * @type {number}
 */
export
const sMDeviceTrigger: SMMessageType = SMMessageType.sMDeviceTrigger; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_SMMessageType: $.ASN1Decoder<SMMessageType> = $._decodeEnumerated;

export
const _encode_SMMessageType: $.ASN1Encoder<SMMessageType> = $._encodeEnumerated;

/* eslint-enable */
