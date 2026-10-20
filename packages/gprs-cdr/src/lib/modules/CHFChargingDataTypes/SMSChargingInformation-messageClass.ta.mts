/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SMSChargingInformation_messageClass
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMSChargingInformation-messageClass ::= ENUMERATED {
 *    personal               ( 0 ),
 *    advertisement          ( 1 ),
 *    information-service    ( 2 ),
 *    auto                   ( 3 )
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_SMSChargingInformation_messageClass {
    personal = 0,
    advertisement = 1,
    information_service = 2,
    auto = 3,
}

/**
 * @summary SMSChargingInformation_messageClass
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMSChargingInformation-messageClass ::= ENUMERATED {
 *    personal               ( 0 ),
 *    advertisement          ( 1 ),
 *    information-service    ( 2 ),
 *    auto                   ( 3 )
 * }
 * ```
 * 
 * @enum {number}
 */
export
type SMSChargingInformation_messageClass = _enum_for_SMSChargingInformation_messageClass;

/**
 * @summary SMSChargingInformation_messageClass
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMSChargingInformation-messageClass ::= ENUMERATED {
 *    personal               ( 0 ),
 *    advertisement          ( 1 ),
 *    information-service    ( 2 ),
 *    auto                   ( 3 )
 * }
 * ```
 * 
 * @enum {number}
 */
export
const SMSChargingInformation_messageClass = _enum_for_SMSChargingInformation_messageClass;

/**
 * @summary SMSChargingInformation_messageClass_personal
 * @constant
 * @type {number}
 */
export
const SMSChargingInformation_messageClass_personal: SMSChargingInformation_messageClass = SMSChargingInformation_messageClass.personal; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary personal
 * @constant
 * @type {number}
 */
export
const personal: SMSChargingInformation_messageClass = SMSChargingInformation_messageClass.personal; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SMSChargingInformation_messageClass_advertisement
 * @constant
 * @type {number}
 */
export
const SMSChargingInformation_messageClass_advertisement: SMSChargingInformation_messageClass = SMSChargingInformation_messageClass.advertisement; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary advertisement
 * @constant
 * @type {number}
 */
export
const advertisement: SMSChargingInformation_messageClass = SMSChargingInformation_messageClass.advertisement; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SMSChargingInformation_messageClass_information_service
 * @constant
 * @type {number}
 */
export
const SMSChargingInformation_messageClass_information_service: SMSChargingInformation_messageClass = SMSChargingInformation_messageClass.information_service; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary information_service
 * @constant
 * @type {number}
 */
export
const information_service: SMSChargingInformation_messageClass = SMSChargingInformation_messageClass.information_service; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SMSChargingInformation_messageClass_auto
 * @constant
 * @type {number}
 */
export
const SMSChargingInformation_messageClass_auto: SMSChargingInformation_messageClass = SMSChargingInformation_messageClass.auto; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary auto
 * @constant
 * @type {number}
 */
export
const auto: SMSChargingInformation_messageClass = SMSChargingInformation_messageClass.auto; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_SMSChargingInformation_messageClass: $.ASN1Decoder<SMSChargingInformation_messageClass> = $._decodeEnumerated;

export
const _encode_SMSChargingInformation_messageClass: $.ASN1Encoder<SMSChargingInformation_messageClass> = $._encodeEnumerated;

/* eslint-enable */
