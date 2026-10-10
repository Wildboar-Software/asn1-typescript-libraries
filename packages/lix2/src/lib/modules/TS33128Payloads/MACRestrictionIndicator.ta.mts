/* eslint-disable */

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

/**
 * @summary Decodes an ASN.1 element into a(n) MACRestrictionIndicator
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_MACRestrictionIndicator = $._decodeEnumerated;

/**
 * @summary Encodes a(n) MACRestrictionIndicator into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MACRestrictionIndicator, encoded as an ASN.1 Element.
 */
export const _encode_MACRestrictionIndicator = $._encodeEnumerated;


/* eslint-enable */
