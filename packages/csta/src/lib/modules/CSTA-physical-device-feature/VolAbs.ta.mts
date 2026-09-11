/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { INTEGER, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary VolAbs
 * @description
 *
 * Absolute speaker volume 0..100. ECMA-285 §9.16.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-285/ ECMA-285}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * VolAbs  ::=  INTEGER (0..100)
 * ```
 */
export
type VolAbs = INTEGER;

let _cached_decoder_for_VolAbs: $.ASN1Decoder<VolAbs> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) VolAbs
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_VolAbs (el: _Element): VolAbs {
    if (!_cached_decoder_for_VolAbs) { _cached_decoder_for_VolAbs = $._decodeInteger; }
    return _cached_decoder_for_VolAbs(el);
}

let _cached_encoder_for_VolAbs: $.ASN1Encoder<VolAbs> | null = null;

/**
 * @summary Encodes a(n) VolAbs into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The VolAbs, encoded as an ASN.1 Element.
 */
export
function _encode_VolAbs (value: VolAbs, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_VolAbs) { _cached_encoder_for_VolAbs = $._encodeInteger; }
    return _cached_encoder_for_VolAbs(value, elGetter);
}


/* eslint-enable */
