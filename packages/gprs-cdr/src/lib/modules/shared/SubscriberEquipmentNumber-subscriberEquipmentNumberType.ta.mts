/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SubscriberEquipmentNumber_subscriberEquipmentNumberType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SubscriberEquipmentNumber-subscriberEquipmentNumberType ::= ENUMERATED {
 *    iMEISV           ( 0 ),
 *    mAC              ( 1 ),
 *    eUI64            ( 2 ),
 *    modifiedEUI64    ( 3 )
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_SubscriberEquipmentNumber_subscriberEquipmentNumberType {
    iMEISV = 0,
    mAC = 1,
    eUI64 = 2,
    modifiedEUI64 = 3,
}

/**
 * @summary SubscriberEquipmentNumber_subscriberEquipmentNumberType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SubscriberEquipmentNumber-subscriberEquipmentNumberType ::= ENUMERATED {
 *    iMEISV           ( 0 ),
 *    mAC              ( 1 ),
 *    eUI64            ( 2 ),
 *    modifiedEUI64    ( 3 )
 * }
 * ```
 * 
 * @enum {number}
 */
export
type SubscriberEquipmentNumber_subscriberEquipmentNumberType = _enum_for_SubscriberEquipmentNumber_subscriberEquipmentNumberType;

/**
 * @summary SubscriberEquipmentNumber_subscriberEquipmentNumberType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SubscriberEquipmentNumber-subscriberEquipmentNumberType ::= ENUMERATED {
 *    iMEISV           ( 0 ),
 *    mAC              ( 1 ),
 *    eUI64            ( 2 ),
 *    modifiedEUI64    ( 3 )
 * }
 * ```
 * 
 * @enum {number}
 */
export
const SubscriberEquipmentNumber_subscriberEquipmentNumberType = _enum_for_SubscriberEquipmentNumber_subscriberEquipmentNumberType;

/**
 * @summary SubscriberEquipmentNumber_subscriberEquipmentNumberType_iMEISV
 * @constant
 * @type {number}
 */
export
const SubscriberEquipmentNumber_subscriberEquipmentNumberType_iMEISV = SubscriberEquipmentNumber_subscriberEquipmentNumberType.iMEISV satisfies SubscriberEquipmentNumber_subscriberEquipmentNumberType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary iMEISV
 * @constant
 * @type {number}
 */
export
const iMEISV = SubscriberEquipmentNumber_subscriberEquipmentNumberType.iMEISV satisfies SubscriberEquipmentNumber_subscriberEquipmentNumberType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SubscriberEquipmentNumber_subscriberEquipmentNumberType_mAC
 * @constant
 * @type {number}
 */
export
const SubscriberEquipmentNumber_subscriberEquipmentNumberType_mAC = SubscriberEquipmentNumber_subscriberEquipmentNumberType.mAC satisfies SubscriberEquipmentNumber_subscriberEquipmentNumberType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mAC
 * @constant
 * @type {number}
 */
export
const mAC = SubscriberEquipmentNumber_subscriberEquipmentNumberType.mAC satisfies SubscriberEquipmentNumber_subscriberEquipmentNumberType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SubscriberEquipmentNumber_subscriberEquipmentNumberType_eUI64
 * @constant
 * @type {number}
 */
export
const SubscriberEquipmentNumber_subscriberEquipmentNumberType_eUI64 = SubscriberEquipmentNumber_subscriberEquipmentNumberType.eUI64 satisfies SubscriberEquipmentNumber_subscriberEquipmentNumberType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary eUI64
 * @constant
 * @type {number}
 */
export
const eUI64 = SubscriberEquipmentNumber_subscriberEquipmentNumberType.eUI64 satisfies SubscriberEquipmentNumber_subscriberEquipmentNumberType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SubscriberEquipmentNumber_subscriberEquipmentNumberType_modifiedEUI64
 * @constant
 * @type {number}
 */
export
const SubscriberEquipmentNumber_subscriberEquipmentNumberType_modifiedEUI64 = SubscriberEquipmentNumber_subscriberEquipmentNumberType.modifiedEUI64 satisfies SubscriberEquipmentNumber_subscriberEquipmentNumberType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary modifiedEUI64
 * @constant
 * @type {number}
 */
export
const modifiedEUI64 = SubscriberEquipmentNumber_subscriberEquipmentNumberType.modifiedEUI64 satisfies SubscriberEquipmentNumber_subscriberEquipmentNumberType; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_SubscriberEquipmentNumber_subscriberEquipmentNumberType: $.ASN1Decoder<SubscriberEquipmentNumber_subscriberEquipmentNumberType> = $._decodeEnumerated;

export
const _encode_SubscriberEquipmentNumber_subscriberEquipmentNumberType: $.ASN1Encoder<SubscriberEquipmentNumber_subscriberEquipmentNumberType> = $._encodeEnumerated;

/* eslint-enable */
