/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary SwAppearanceTypes
 * @description
 * Appearance types available in the switching sub-domain (ECMA-269 §13.1.4.2.1
 * Table 13-9, ECMA-285 §9.10).
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/}
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-285/}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SwAppearanceTypes  ::=  BIT STRING
 * {     selectedStandard             ( 0),
 *     basicStandard                 ( 1),
 *     basicBridged                 ( 2),
 *     exclusiveBridged             ( 3),
 *     independentSharedBridged         ( 4),
 *     interDependentSharedBridged         ( 5) }
 * ```
 */
export
type SwAppearanceTypes = BIT_STRING;

/**
 * @summary SwAppearanceTypes_selectedStandard
 * @constant
 * @description
 * Bit set means the SF supports Selected-Standard appearances (ECMA-269
 * §13.1.4.2.1 Table 13-9).
 */
export
const SwAppearanceTypes_selectedStandard: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary selectedStandard
 * @constant
 * @description
 * Alias of `SwAppearanceTypes_selectedStandard`.
 */
export
const selectedStandard: number = SwAppearanceTypes_selectedStandard; /* SHORT_NAMED_BIT */

/**
 * @summary SwAppearanceTypes_basicStandard
 * @constant
 * @description
 * Bit set means the SF supports Basic-Standard appearances (ECMA-269
 * §13.1.4.2.1 Table 13-9).
 */
export
const SwAppearanceTypes_basicStandard: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary basicStandard
 * @constant
 * @description
 * Alias of `SwAppearanceTypes_basicStandard`.
 */
export
const basicStandard: number = SwAppearanceTypes_basicStandard; /* SHORT_NAMED_BIT */

/**
 * @summary SwAppearanceTypes_basicBridged
 * @constant
 * @description
 * Bit set means the SF supports Basic-Bridged appearances (ECMA-269 §13.1.4.2.1
 * Table 13-9).
 */
export
const SwAppearanceTypes_basicBridged: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary basicBridged
 * @constant
 * @description
 * Alias of `SwAppearanceTypes_basicBridged`.
 */
export
const basicBridged: number = SwAppearanceTypes_basicBridged; /* SHORT_NAMED_BIT */

/**
 * @summary SwAppearanceTypes_exclusiveBridged
 * @constant
 * @description
 * Bit set means the SF supports Exclusive-Bridged appearances (ECMA-269
 * §13.1.4.2.1 Table 13-9).
 */
export
const SwAppearanceTypes_exclusiveBridged: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary exclusiveBridged
 * @constant
 * @description
 * Alias of `SwAppearanceTypes_exclusiveBridged`.
 */
export
const exclusiveBridged: number = SwAppearanceTypes_exclusiveBridged; /* SHORT_NAMED_BIT */

/**
 * @summary SwAppearanceTypes_independentSharedBridged
 * @constant
 * @description
 * Bit set means the SF supports Independent-Shared-Bridged appearances
 * (ECMA-269 §13.1.4.2.1 Table 13-9).
 */
export
const SwAppearanceTypes_independentSharedBridged: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary independentSharedBridged
 * @constant
 * @description
 * Alias of `SwAppearanceTypes_independentSharedBridged`.
 */
export
const independentSharedBridged: number = SwAppearanceTypes_independentSharedBridged; /* SHORT_NAMED_BIT */

/**
 * @summary SwAppearanceTypes_interDependentSharedBridged
 * @constant
 * @description
 * Bit set means the SF supports Interdependent-Shared-Bridged appearances
 * (ECMA-269 §13.1.4.2.1 Table 13-9).
 */
export
const SwAppearanceTypes_interDependentSharedBridged: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary interDependentSharedBridged
 * @constant
 * @description
 * Alias of `SwAppearanceTypes_interDependentSharedBridged`.
 */
export
const interDependentSharedBridged: number = SwAppearanceTypes_interDependentSharedBridged; /* SHORT_NAMED_BIT */

let _cached_decoder_for_SwAppearanceTypes: $.ASN1Decoder<SwAppearanceTypes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SwAppearanceTypes
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SwAppearanceTypes (el: _Element): SwAppearanceTypes {
    if (!_cached_decoder_for_SwAppearanceTypes) { _cached_decoder_for_SwAppearanceTypes = $._decodeBitString; }
    return _cached_decoder_for_SwAppearanceTypes(el);
}

let _cached_encoder_for_SwAppearanceTypes: $.ASN1Encoder<SwAppearanceTypes> | null = null;

/**
 * @summary Encodes a(n) SwAppearanceTypes into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SwAppearanceTypes, encoded as an ASN.1 Element.
 */
export
function _encode_SwAppearanceTypes (value: SwAppearanceTypes, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SwAppearanceTypes) { _cached_encoder_for_SwAppearanceTypes = $._encodeBitString; }
    return _cached_encoder_for_SwAppearanceTypes(value, elGetter);
}


/* eslint-enable */
