/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SMSChargingInformation_sMMessageType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMSChargingInformation-sMMessageType ::= ENUMERATED {
 *    submission          ( 0 ),
 *    deliveryReport      ( 1 ),
 *    sMServiceRequest    ( 2 ),
 *    delivery            ( 3 ),
 *    t4DeviceTrigger     ( 4 ),
 *    sMDeviceTrigger     ( 5 )
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_SMSChargingInformation_sMMessageType {
    submission = 0,
    deliveryReport = 1,
    sMServiceRequest = 2,
    delivery = 3,
    t4DeviceTrigger = 4,
    sMDeviceTrigger = 5,
}

/**
 * @summary SMSChargingInformation_sMMessageType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMSChargingInformation-sMMessageType ::= ENUMERATED {
 *    submission          ( 0 ),
 *    deliveryReport      ( 1 ),
 *    sMServiceRequest    ( 2 ),
 *    delivery            ( 3 ),
 *    t4DeviceTrigger     ( 4 ),
 *    sMDeviceTrigger     ( 5 )
 * }
 * ```
 * 
 * @enum {number}
 */
export
type SMSChargingInformation_sMMessageType = _enum_for_SMSChargingInformation_sMMessageType;

/**
 * @summary SMSChargingInformation_sMMessageType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMSChargingInformation-sMMessageType ::= ENUMERATED {
 *    submission          ( 0 ),
 *    deliveryReport      ( 1 ),
 *    sMServiceRequest    ( 2 ),
 *    delivery            ( 3 ),
 *    t4DeviceTrigger     ( 4 ),
 *    sMDeviceTrigger     ( 5 )
 * }
 * ```
 * 
 * @enum {number}
 */
export
const SMSChargingInformation_sMMessageType: typeof _enum_for_SMSChargingInformation_sMMessageType = _enum_for_SMSChargingInformation_sMMessageType;

/**
 * @summary SMSChargingInformation_sMMessageType_submission
 * @constant
 * @type {number}
 */
export
const SMSChargingInformation_sMMessageType_submission: _enum_for_SMSChargingInformation_sMMessageType.submission = SMSChargingInformation_sMMessageType.submission; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary submission
 * @constant
 * @type {number}
 */
export
const submission: _enum_for_SMSChargingInformation_sMMessageType.submission = SMSChargingInformation_sMMessageType.submission; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SMSChargingInformation_sMMessageType_deliveryReport
 * @constant
 * @type {number}
 */
export
const SMSChargingInformation_sMMessageType_deliveryReport: _enum_for_SMSChargingInformation_sMMessageType.deliveryReport = SMSChargingInformation_sMMessageType.deliveryReport; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary deliveryReport
 * @constant
 * @type {number}
 */
export
const deliveryReport: _enum_for_SMSChargingInformation_sMMessageType.deliveryReport = SMSChargingInformation_sMMessageType.deliveryReport; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SMSChargingInformation_sMMessageType_sMServiceRequest
 * @constant
 * @type {number}
 */
export
const SMSChargingInformation_sMMessageType_sMServiceRequest: _enum_for_SMSChargingInformation_sMMessageType.sMServiceRequest = SMSChargingInformation_sMMessageType.sMServiceRequest; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sMServiceRequest
 * @constant
 * @type {number}
 */
export
const sMServiceRequest: _enum_for_SMSChargingInformation_sMMessageType.sMServiceRequest = SMSChargingInformation_sMMessageType.sMServiceRequest; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SMSChargingInformation_sMMessageType_delivery
 * @constant
 * @type {number}
 */
export
const SMSChargingInformation_sMMessageType_delivery: _enum_for_SMSChargingInformation_sMMessageType.delivery = SMSChargingInformation_sMMessageType.delivery; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary delivery
 * @constant
 * @type {number}
 */
export
const delivery: _enum_for_SMSChargingInformation_sMMessageType.delivery = SMSChargingInformation_sMMessageType.delivery; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SMSChargingInformation_sMMessageType_t4DeviceTrigger
 * @constant
 * @type {number}
 */
export
const SMSChargingInformation_sMMessageType_t4DeviceTrigger: _enum_for_SMSChargingInformation_sMMessageType.t4DeviceTrigger = SMSChargingInformation_sMMessageType.t4DeviceTrigger; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary t4DeviceTrigger
 * @constant
 * @type {number}
 */
export
const t4DeviceTrigger: _enum_for_SMSChargingInformation_sMMessageType.t4DeviceTrigger = SMSChargingInformation_sMMessageType.t4DeviceTrigger; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SMSChargingInformation_sMMessageType_sMDeviceTrigger
 * @constant
 * @type {number}
 */
export
const SMSChargingInformation_sMMessageType_sMDeviceTrigger: _enum_for_SMSChargingInformation_sMMessageType.sMDeviceTrigger = SMSChargingInformation_sMMessageType.sMDeviceTrigger; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sMDeviceTrigger
 * @constant
 * @type {number}
 */
export
const sMDeviceTrigger: _enum_for_SMSChargingInformation_sMMessageType.sMDeviceTrigger = SMSChargingInformation_sMMessageType.sMDeviceTrigger; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_SMSChargingInformation_sMMessageType: $.ASN1Decoder<SMSChargingInformation_sMMessageType> = $._decodeEnumerated;

export
const _encode_SMSChargingInformation_sMMessageType: $.ASN1Encoder<SMSChargingInformation_sMMessageType> = $._encodeEnumerated;

/* eslint-enable */
