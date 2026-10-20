/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary IMEIStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IMEIStatus  ::=  ENUMERATED {
 *    greyListedMobileEquipment        ( 0 ),
 *    blackListedMobileEquipment       ( 1 ),
 *    nonWhiteListedMobileEquipment    ( 2 ) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_IMEIStatus {
    greyListedMobileEquipment = 0,
    blackListedMobileEquipment = 1,
    nonWhiteListedMobileEquipment = 2,
}

/**
 * @summary IMEIStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IMEIStatus  ::=  ENUMERATED {
 *    greyListedMobileEquipment        ( 0 ),
 *    blackListedMobileEquipment       ( 1 ),
 *    nonWhiteListedMobileEquipment    ( 2 ) }
 * ```
 * 
 * @enum {number}
 */
export
type IMEIStatus = _enum_for_IMEIStatus;

/**
 * @summary IMEIStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IMEIStatus  ::=  ENUMERATED {
 *    greyListedMobileEquipment        ( 0 ),
 *    blackListedMobileEquipment       ( 1 ),
 *    nonWhiteListedMobileEquipment    ( 2 ) }
 * ```
 * 
 * @enum {number}
 */
export
const IMEIStatus = _enum_for_IMEIStatus;

/**
 * @summary IMEIStatus_greyListedMobileEquipment
 * @constant
 * @type {number}
 */
export
const IMEIStatus_greyListedMobileEquipment: IMEIStatus = IMEIStatus.greyListedMobileEquipment; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary greyListedMobileEquipment
 * @constant
 * @type {number}
 */
export
const greyListedMobileEquipment: IMEIStatus = IMEIStatus.greyListedMobileEquipment; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IMEIStatus_blackListedMobileEquipment
 * @constant
 * @type {number}
 */
export
const IMEIStatus_blackListedMobileEquipment: IMEIStatus = IMEIStatus.blackListedMobileEquipment; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary blackListedMobileEquipment
 * @constant
 * @type {number}
 */
export
const blackListedMobileEquipment: IMEIStatus = IMEIStatus.blackListedMobileEquipment; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IMEIStatus_nonWhiteListedMobileEquipment
 * @constant
 * @type {number}
 */
export
const IMEIStatus_nonWhiteListedMobileEquipment: IMEIStatus = IMEIStatus.nonWhiteListedMobileEquipment; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nonWhiteListedMobileEquipment
 * @constant
 * @type {number}
 */
export
const nonWhiteListedMobileEquipment: IMEIStatus = IMEIStatus.nonWhiteListedMobileEquipment; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_IMEIStatus: $.ASN1Decoder<IMEIStatus> = $._decodeEnumerated;

export
const _encode_IMEIStatus: $.ASN1Encoder<IMEIStatus> = $._encodeEnumerated;

/* eslint-enable */
