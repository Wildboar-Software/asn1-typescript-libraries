/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SubscriberEquipmentType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SubscriberEquipmentType  ::=  ENUMERATED {
 *    iMEISV           ( 0 ),
 *    mAC              ( 1 ),
 *    eUI64            ( 2 ),
 *    modifiedEUI64    ( 3 ) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_SubscriberEquipmentType {
    iMEISV = 0,
    mAC = 1,
    eUI64 = 2,
    modifiedEUI64 = 3,
}

/**
 * @summary SubscriberEquipmentType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SubscriberEquipmentType  ::=  ENUMERATED {
 *    iMEISV           ( 0 ),
 *    mAC              ( 1 ),
 *    eUI64            ( 2 ),
 *    modifiedEUI64    ( 3 ) }
 * ```
 * 
 * @enum {number}
 */
export
type SubscriberEquipmentType = _enum_for_SubscriberEquipmentType;

/**
 * @summary SubscriberEquipmentType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SubscriberEquipmentType  ::=  ENUMERATED {
 *    iMEISV           ( 0 ),
 *    mAC              ( 1 ),
 *    eUI64            ( 2 ),
 *    modifiedEUI64    ( 3 ) }
 * ```
 * 
 * @enum {number}
 */
export
const SubscriberEquipmentType = _enum_for_SubscriberEquipmentType;

/**
 * @summary SubscriberEquipmentType_iMEISV
 * @constant
 * @type {number}
 */
export
const SubscriberEquipmentType_iMEISV = SubscriberEquipmentType.iMEISV; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary iMEISV
 * @constant
 * @type {number}
 */
export
const iMEISV = SubscriberEquipmentType.iMEISV; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SubscriberEquipmentType_mAC
 * @constant
 * @type {number}
 */
export
const SubscriberEquipmentType_mAC = SubscriberEquipmentType.mAC; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mAC
 * @constant
 * @type {number}
 */
export
const mAC = SubscriberEquipmentType.mAC; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SubscriberEquipmentType_eUI64
 * @constant
 * @type {number}
 */
export
const SubscriberEquipmentType_eUI64 = SubscriberEquipmentType.eUI64; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary eUI64
 * @constant
 * @type {number}
 */
export
const eUI64 = SubscriberEquipmentType.eUI64; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SubscriberEquipmentType_modifiedEUI64
 * @constant
 * @type {number}
 */
export
const SubscriberEquipmentType_modifiedEUI64 = SubscriberEquipmentType.modifiedEUI64; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary modifiedEUI64
 * @constant
 * @type {number}
 */
export
const modifiedEUI64 = SubscriberEquipmentType.modifiedEUI64; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_SubscriberEquipmentType: $.ASN1Decoder<SubscriberEquipmentType> = $._decodeEnumerated;

export
const _encode_SubscriberEquipmentType: $.ASN1Encoder<SubscriberEquipmentType> = $._encodeEnumerated;

/* eslint-enable */
