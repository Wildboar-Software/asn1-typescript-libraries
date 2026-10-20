/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SMSChargingInformation_sMPriority
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMSChargingInformation-sMPriority ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
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
 * SMSChargingInformation-sMPriority ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
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
 * SMSChargingInformation-sMPriority ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
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
const SMSChargingInformation_sMPriority_low: SMSChargingInformation_sMPriority = SMSChargingInformation_sMPriority.low; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary low
 * @constant
 * @type {number}
 */
export
const low: SMSChargingInformation_sMPriority = SMSChargingInformation_sMPriority.low; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SMSChargingInformation_sMPriority_normal
 * @constant
 * @type {number}
 */
export
const SMSChargingInformation_sMPriority_normal: SMSChargingInformation_sMPriority = SMSChargingInformation_sMPriority.normal; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary normal
 * @constant
 * @type {number}
 */
export
const normal: SMSChargingInformation_sMPriority = SMSChargingInformation_sMPriority.normal; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SMSChargingInformation_sMPriority_high
 * @constant
 * @type {number}
 */
export
const SMSChargingInformation_sMPriority_high: SMSChargingInformation_sMPriority = SMSChargingInformation_sMPriority.high; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary high
 * @constant
 * @type {number}
 */
export
const high: SMSChargingInformation_sMPriority = SMSChargingInformation_sMPriority.high; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_SMSChargingInformation_sMPriority: $.ASN1Decoder<SMSChargingInformation_sMPriority> = $._decodeEnumerated;

export
const _encode_SMSChargingInformation_sMPriority: $.ASN1Encoder<SMSChargingInformation_sMPriority> = $._encodeEnumerated;

/* eslint-enable */
