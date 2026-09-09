/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { INTEGER, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary MicGainAbs
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MicGainAbs  ::=  INTEGER (0..100)
 * ```
 */
export
type MicGainAbs = INTEGER;

let _cached_decoder_for_MicGainAbs: $.ASN1Decoder<MicGainAbs> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MicGainAbs
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MicGainAbs (el: _Element): MicGainAbs {
    if (!_cached_decoder_for_MicGainAbs) { _cached_decoder_for_MicGainAbs = $._decodeInteger; }
    return _cached_decoder_for_MicGainAbs(el);
}

let _cached_encoder_for_MicGainAbs: $.ASN1Encoder<MicGainAbs> | null = null;

/**
 * @summary Encodes a(n) MicGainAbs into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MicGainAbs, encoded as an ASN.1 Element.
 */
export
function _encode_MicGainAbs (value: MicGainAbs, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MicGainAbs) { _cached_encoder_for_MicGainAbs = $._encodeInteger; }
    return _cached_encoder_for_MicGainAbs(value, elGetter);
}


/* eslint-enable */
