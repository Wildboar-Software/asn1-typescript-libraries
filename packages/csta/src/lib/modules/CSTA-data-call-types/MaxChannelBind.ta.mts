/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { INTEGER, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary MaxChannelBind
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MaxChannelBind  ::=  INTEGER
 * ```
 */
export
type MaxChannelBind = INTEGER;

let _cached_decoder_for_MaxChannelBind: $.ASN1Decoder<MaxChannelBind> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MaxChannelBind
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MaxChannelBind (el: _Element): MaxChannelBind {
    if (!_cached_decoder_for_MaxChannelBind) { _cached_decoder_for_MaxChannelBind = $._decodeInteger; }
    return _cached_decoder_for_MaxChannelBind(el);
}

let _cached_encoder_for_MaxChannelBind: $.ASN1Encoder<MaxChannelBind> | null = null;

/**
 * @summary Encodes a(n) MaxChannelBind into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MaxChannelBind, encoded as an ASN.1 Element.
 */
export
function _encode_MaxChannelBind (value: MaxChannelBind, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MaxChannelBind) { _cached_encoder_for_MaxChannelBind = $._encodeInteger; }
    return _cached_encoder_for_MaxChannelBind(value, elGetter);
}


/* eslint-enable */
