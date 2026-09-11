/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary SwAppearanceAddressability
 * @description
 * Appearance addressability available in the switching sub-domain (ECMA-269
 * §13.1.4.2.1 Table 13-9, ECMA-285 §9.10).
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/}
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-285/}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SwAppearanceAddressability  ::=  BIT STRING
 * {     nonAddressable                 ( 0),
 *     addressable                 ( 1) }
 * ```
 */
export
type SwAppearanceAddressability = BIT_STRING;

/**
 * @summary SwAppearanceAddressability_nonAddressable
 * @constant
 * @description
 * Bit set means the SF supports non-addressable appearances in the switching
 * sub-domain (ECMA-269 §13.1.4.2.1 Table 13-9).
 */
export
const SwAppearanceAddressability_nonAddressable: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary nonAddressable
 * @constant
 * @description
 * Alias of `SwAppearanceAddressability_nonAddressable`.
 */
export
const nonAddressable: number = SwAppearanceAddressability_nonAddressable; /* SHORT_NAMED_BIT */

/**
 * @summary SwAppearanceAddressability_addressable
 * @constant
 * @description
 * Bit set means the SF supports addressable appearances in the switching
 * sub-domain (ECMA-269 §13.1.4.2.1 Table 13-9).
 */
export
const SwAppearanceAddressability_addressable: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary addressable
 * @constant
 * @description
 * Alias of `SwAppearanceAddressability_addressable`.
 */
export
const addressable: number = SwAppearanceAddressability_addressable; /* SHORT_NAMED_BIT */

let _cached_decoder_for_SwAppearanceAddressability: $.ASN1Decoder<SwAppearanceAddressability> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SwAppearanceAddressability
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SwAppearanceAddressability (el: _Element): SwAppearanceAddressability {
    if (!_cached_decoder_for_SwAppearanceAddressability) { _cached_decoder_for_SwAppearanceAddressability = $._decodeBitString; }
    return _cached_decoder_for_SwAppearanceAddressability(el);
}

let _cached_encoder_for_SwAppearanceAddressability: $.ASN1Encoder<SwAppearanceAddressability> | null = null;

/**
 * @summary Encodes a(n) SwAppearanceAddressability into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SwAppearanceAddressability, encoded as an ASN.1 Element.
 */
export
function _encode_SwAppearanceAddressability (value: SwAppearanceAddressability, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SwAppearanceAddressability) { _cached_encoder_for_SwAppearanceAddressability = $._encodeBitString; }
    return _cached_encoder_for_SwAppearanceAddressability(value, elGetter);
}


/* eslint-enable */
