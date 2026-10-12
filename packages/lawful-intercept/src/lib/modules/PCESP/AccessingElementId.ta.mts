/* eslint-disable */
import {
    ASN1Element as _Element,
    VisibleString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AccessingElementId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AccessingElementId  ::=  VisibleString (SIZE(1..15, ...))
 * ```
 */
export
type AccessingElementId = VisibleString; // VisibleString

let _cached_decoder_for_AccessingElementId: $.ASN1Decoder<AccessingElementId> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AccessingElementId
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AccessingElementId (el: _Element): AccessingElementId {
    if (!_cached_decoder_for_AccessingElementId) { _cached_decoder_for_AccessingElementId = $._decodeVisibleString; }
    return _cached_decoder_for_AccessingElementId(el);
}

let _cached_encoder_for_AccessingElementId: $.ASN1Encoder<AccessingElementId> | null = null;

/**
 * @summary Encodes a(n) AccessingElementId into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AccessingElementId, encoded as an ASN.1 Element.
 */
export
function _encode_AccessingElementId (value: AccessingElementId, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AccessingElementId) { _cached_encoder_for_AccessingElementId = $._encodeVisibleString; }
    return _cached_encoder_for_AccessingElementId(value, elGetter);
}


/* eslint-enable */
