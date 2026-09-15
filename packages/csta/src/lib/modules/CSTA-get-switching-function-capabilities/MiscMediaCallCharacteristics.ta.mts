/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary MiscMediaCallCharacteristics
 * @description
 *
 * `supportAdjustment`: SF can adjust media characteristics when a
 * call is made. Table 13-9.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MiscMediaCallCharacteristics  ::=  BIT STRING
 * {     supportAdjustment                 (0) }
 * ```
 */
export
type MiscMediaCallCharacteristics = BIT_STRING;

/**
 * @summary MiscMediaCallCharacteristics_supportAdjustment
 * @constant
 */
export
const MiscMediaCallCharacteristics_supportAdjustment: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary supportAdjustment
 * @constant
 */
export
const supportAdjustment: number = MiscMediaCallCharacteristics_supportAdjustment; /* SHORT_NAMED_BIT */

let _cached_decoder_for_MiscMediaCallCharacteristics: $.ASN1Decoder<MiscMediaCallCharacteristics> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MiscMediaCallCharacteristics
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MiscMediaCallCharacteristics (el: _Element): MiscMediaCallCharacteristics {
    if (!_cached_decoder_for_MiscMediaCallCharacteristics) { _cached_decoder_for_MiscMediaCallCharacteristics = $._decodeBitString; }
    return _cached_decoder_for_MiscMediaCallCharacteristics(el);
}

let _cached_encoder_for_MiscMediaCallCharacteristics: $.ASN1Encoder<MiscMediaCallCharacteristics> | null = null;

/**
 * @summary Encodes a(n) MiscMediaCallCharacteristics into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MiscMediaCallCharacteristics, encoded as an ASN.1 Element.
 */
export
function _encode_MiscMediaCallCharacteristics (value: MiscMediaCallCharacteristics, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MiscMediaCallCharacteristics) { _cached_encoder_for_MiscMediaCallCharacteristics = $._encodeBitString; }
    return _cached_encoder_for_MiscMediaCallCharacteristics(value, elGetter);
}


/* eslint-enable */
