/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MACRestrictionIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MACRestrictionIndicator  ::=  ENUMERATED
 * {
 *     noResrictions(1),
 *     mACAddressNotUseableAsEquipmentIdentifier(2),
 *     unknown(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_MACRestrictionIndicator {
    noResrictions = 1,
    mACAddressNotUseableAsEquipmentIdentifier = 2,
    unknown = 3,
}

/**
 * @summary MACRestrictionIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MACRestrictionIndicator  ::=  ENUMERATED
 * {
 *     noResrictions(1),
 *     mACAddressNotUseableAsEquipmentIdentifier(2),
 *     unknown(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type MACRestrictionIndicator = _enum_for_MACRestrictionIndicator;

/**
 * @summary MACRestrictionIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MACRestrictionIndicator  ::=  ENUMERATED
 * {
 *     noResrictions(1),
 *     mACAddressNotUseableAsEquipmentIdentifier(2),
 *     unknown(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const MACRestrictionIndicator = _enum_for_MACRestrictionIndicator;

/**
 * @summary MACRestrictionIndicator_noResrictions
 * @constant
 * @type {number}
 */
export
const MACRestrictionIndicator_noResrictions: MACRestrictionIndicator = MACRestrictionIndicator.noResrictions; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary noResrictions
 * @constant
 * @type {number}
 */
export
const noResrictions: MACRestrictionIndicator = MACRestrictionIndicator.noResrictions; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MACRestrictionIndicator_mACAddressNotUseableAsEquipmentIdentifier
 * @constant
 * @type {number}
 */
export
const MACRestrictionIndicator_mACAddressNotUseableAsEquipmentIdentifier: MACRestrictionIndicator = MACRestrictionIndicator.mACAddressNotUseableAsEquipmentIdentifier; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mACAddressNotUseableAsEquipmentIdentifier
 * @constant
 * @type {number}
 */
export
const mACAddressNotUseableAsEquipmentIdentifier: MACRestrictionIndicator = MACRestrictionIndicator.mACAddressNotUseableAsEquipmentIdentifier; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MACRestrictionIndicator_unknown
 * @constant
 * @type {number}
 */
export
const MACRestrictionIndicator_unknown: MACRestrictionIndicator = MACRestrictionIndicator.unknown; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknown
 * @constant
 * @type {number}
 */
export
const unknown: MACRestrictionIndicator = MACRestrictionIndicator.unknown; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_MACRestrictionIndicator: $.ASN1Decoder<MACRestrictionIndicator> = $._decodeEnumerated;
export const _encode_MACRestrictionIndicator: $.ASN1Encoder<MACRestrictionIndicator> = $._encodeEnumerated;


/* eslint-enable */
