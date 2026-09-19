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

let _cached_decoder_for_MACRestrictionIndicator: $.ASN1Decoder<MACRestrictionIndicator> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MACRestrictionIndicator
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MACRestrictionIndicator (el: _Element): MACRestrictionIndicator {
    if (!_cached_decoder_for_MACRestrictionIndicator) { _cached_decoder_for_MACRestrictionIndicator = $._decodeEnumerated; }
    return _cached_decoder_for_MACRestrictionIndicator(el);
}

let _cached_encoder_for_MACRestrictionIndicator: $.ASN1Encoder<MACRestrictionIndicator> | null = null;

/**
 * @summary Encodes a(n) MACRestrictionIndicator into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MACRestrictionIndicator, encoded as an ASN.1 Element.
 */
export
function _encode_MACRestrictionIndicator (value: MACRestrictionIndicator, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MACRestrictionIndicator) { _cached_encoder_for_MACRestrictionIndicator = $._encodeEnumerated; }
    return _cached_encoder_for_MACRestrictionIndicator(value, elGetter);
}


/* eslint-enable */
