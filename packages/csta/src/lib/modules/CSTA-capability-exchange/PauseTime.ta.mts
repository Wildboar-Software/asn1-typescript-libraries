/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { INTEGER, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary PauseTime
 * @description
 * Duration in milliseconds of a pause (comma in Diallable Digits) in a dialling
 * sequence (1..2000). Omitted from Get Switching Function Capabilities when
 * unknown (ECMA-269 §13.1.4.2.1 Table 13-9, ECMA-285 §9.10).
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/}
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-285/}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PauseTime  ::=  INTEGER (1..2000)
 * ```
 */
export
type PauseTime = INTEGER;

let _cached_decoder_for_PauseTime: $.ASN1Decoder<PauseTime> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PauseTime
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PauseTime (el: _Element): PauseTime {
    if (!_cached_decoder_for_PauseTime) { _cached_decoder_for_PauseTime = $._decodeInteger; }
    return _cached_decoder_for_PauseTime(el);
}

let _cached_encoder_for_PauseTime: $.ASN1Encoder<PauseTime> | null = null;

/**
 * @summary Encodes a(n) PauseTime into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PauseTime, encoded as an ASN.1 Element.
 */
export
function _encode_PauseTime (value: PauseTime, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PauseTime) { _cached_encoder_for_PauseTime = $._encodeInteger; }
    return _cached_encoder_for_PauseTime(value, elGetter);
}


/* eslint-enable */
