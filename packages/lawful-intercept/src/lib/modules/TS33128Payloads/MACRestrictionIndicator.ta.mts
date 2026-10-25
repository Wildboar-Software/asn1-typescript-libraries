/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MACRestrictionIndicator
 * @description
 * 
 * Indicates whether the non-IMEISV PEI MACAddress can be used as an equipment
 * identifier. Required if non-IMEISVPEI is used, see TS 24.501 [13] clause
 * 9.11.3.4.
 *
 * 3GPP TS 33.128, clause 6.2.2.2.2.
 * https://www.3gpp.org/DynaReport/33128.htm
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
 * Indicates whether the non-IMEISV PEI MACAddress can be used as an equipment
 * identifier. Required if non-IMEISVPEI is used, see TS 24.501 [13] clause
 * 9.11.3.4.
 *
 * 3GPP TS 33.128, clause 6.2.2.2.2.
 * https://www.3gpp.org/DynaReport/33128.htm
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
 * Indicates whether the non-IMEISV PEI MACAddress can be used as an equipment
 * identifier. Required if non-IMEISVPEI is used, see TS 24.501 [13] clause
 * 9.11.3.4.
 *
 * 3GPP TS 33.128, clause 6.2.2.2.2.
 * https://www.3gpp.org/DynaReport/33128.htm
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
const MACRestrictionIndicator: typeof _enum_for_MACRestrictionIndicator = _enum_for_MACRestrictionIndicator;

/**
 * @summary MACRestrictionIndicator_noResrictions
 * @constant
 * @type {number}
 */
export
const MACRestrictionIndicator_noResrictions: _enum_for_MACRestrictionIndicator.noResrictions = MACRestrictionIndicator.noResrictions; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary noResrictions
 * @constant
 * @type {number}
 */
export
const noResrictions: _enum_for_MACRestrictionIndicator.noResrictions = MACRestrictionIndicator.noResrictions; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MACRestrictionIndicator_mACAddressNotUseableAsEquipmentIdentifier
 * @constant
 * @type {number}
 */
export
const MACRestrictionIndicator_mACAddressNotUseableAsEquipmentIdentifier: _enum_for_MACRestrictionIndicator.mACAddressNotUseableAsEquipmentIdentifier = MACRestrictionIndicator.mACAddressNotUseableAsEquipmentIdentifier; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mACAddressNotUseableAsEquipmentIdentifier
 * @constant
 * @type {number}
 */
export
const mACAddressNotUseableAsEquipmentIdentifier: _enum_for_MACRestrictionIndicator.mACAddressNotUseableAsEquipmentIdentifier = MACRestrictionIndicator.mACAddressNotUseableAsEquipmentIdentifier; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MACRestrictionIndicator_unknown
 * @constant
 * @type {number}
 */
export
const MACRestrictionIndicator_unknown: _enum_for_MACRestrictionIndicator.unknown = MACRestrictionIndicator.unknown; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknown
 * @constant
 * @type {number}
 */
export
const unknown: _enum_for_MACRestrictionIndicator.unknown = MACRestrictionIndicator.unknown; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_MACRestrictionIndicator: $.ASN1Decoder<MACRestrictionIndicator> = $._decodeEnumerated;
export const _encode_MACRestrictionIndicator: $.ASN1Encoder<MACRestrictionIndicator> = $._encodeEnumerated;


/* eslint-enable */
