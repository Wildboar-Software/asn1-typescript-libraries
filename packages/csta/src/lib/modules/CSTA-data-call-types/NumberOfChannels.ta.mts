/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { INTEGER, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary NumberOfChannels
 * @description
 *
 * Available media-stream channels at a device. If omitted in capability
 * exchange, the count is unknown but at least one. On a connection, absence
 * means one channel. ECMA-269 §12.2.8, Get Logical Device Information.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/ ECMA-269}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NumberOfChannels  ::=  INTEGER
 * ```
 */
export
type NumberOfChannels = INTEGER;

let _cached_decoder_for_NumberOfChannels: $.ASN1Decoder<NumberOfChannels> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NumberOfChannels
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NumberOfChannels (el: _Element): NumberOfChannels {
    if (!_cached_decoder_for_NumberOfChannels) { _cached_decoder_for_NumberOfChannels = $._decodeInteger; }
    return _cached_decoder_for_NumberOfChannels(el);
}

let _cached_encoder_for_NumberOfChannels: $.ASN1Encoder<NumberOfChannels> | null = null;

/**
 * @summary Encodes a(n) NumberOfChannels into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NumberOfChannels, encoded as an ASN.1 Element.
 */
export
function _encode_NumberOfChannels (value: NumberOfChannels, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NumberOfChannels) { _cached_encoder_for_NumberOfChannels = $._encodeInteger; }
    return _cached_encoder_for_NumberOfChannels(value, elGetter);
}


/* eslint-enable */
