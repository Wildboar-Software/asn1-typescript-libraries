/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SMSChargingInformation_sMPriority
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMSChargingInformation-sMPriority ::= ENUMERATED {
 *    low         ( 0 ),
 *    normal      ( 1 ),
 *    high        ( 2 )
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_SMSChargingInformation_sMPriority {
    low = 0,
    normal = 1,
    high = 2,
}

/**
 * @summary SMSChargingInformation_sMPriority
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMSChargingInformation-sMPriority ::= ENUMERATED {
 *    low         ( 0 ),
 *    normal      ( 1 ),
 *    high        ( 2 )
 * }
 * ```
 * 
 * @enum {number}
 */
export
type SMSChargingInformation_sMPriority = _enum_for_SMSChargingInformation_sMPriority;

/**
 * @summary SMSChargingInformation_sMPriority
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMSChargingInformation-sMPriority ::= ENUMERATED {
 *    low         ( 0 ),
 *    normal      ( 1 ),
 *    high        ( 2 )
 * }
 * ```
 * 
 * @enum {number}
 */
export
const SMSChargingInformation_sMPriority = _enum_for_SMSChargingInformation_sMPriority;

/**
 * @summary SMSChargingInformation_sMPriority_low
 * @constant
 * @type {number}
 */
export
const SMSChargingInformation_sMPriority_low = SMSChargingInformation_sMPriority.low satisfies SMSChargingInformation_sMPriority; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary low
 * @constant
 * @type {number}
 */
export
const low = SMSChargingInformation_sMPriority.low satisfies SMSChargingInformation_sMPriority; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SMSChargingInformation_sMPriority_normal
 * @constant
 * @type {number}
 */
export
const SMSChargingInformation_sMPriority_normal = SMSChargingInformation_sMPriority.normal satisfies SMSChargingInformation_sMPriority; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary normal
 * @constant
 * @type {number}
 */
export
const normal = SMSChargingInformation_sMPriority.normal satisfies SMSChargingInformation_sMPriority; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SMSChargingInformation_sMPriority_high
 * @constant
 * @type {number}
 */
export
const SMSChargingInformation_sMPriority_high = SMSChargingInformation_sMPriority.high satisfies SMSChargingInformation_sMPriority; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary high
 * @constant
 * @type {number}
 */
export
const high = SMSChargingInformation_sMPriority.high satisfies SMSChargingInformation_sMPriority; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_SMSChargingInformation_sMPriority: $.ASN1Decoder<SMSChargingInformation_sMPriority> = $._decodeEnumerated;

export
const _encode_SMSChargingInformation_sMPriority: $.ASN1Encoder<SMSChargingInformation_sMPriority> = $._encodeEnumerated;

/* eslint-enable */
