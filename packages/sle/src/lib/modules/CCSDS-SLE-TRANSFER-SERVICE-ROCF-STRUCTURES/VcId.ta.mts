/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary VcId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * VcId                     ::=    INTEGER (0 .. 63)
 * ```
 */
export
type VcId = INTEGER;

let _cached_decoder_for_VcId: $.ASN1Decoder<VcId> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) VcId
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_VcId (el: _Element): VcId {
    if (!_cached_decoder_for_VcId) { _cached_decoder_for_VcId = $._decodeInteger; }
    return _cached_decoder_for_VcId(el);
}

let _cached_encoder_for_VcId: $.ASN1Encoder<VcId> | null = null;

/**
 * @summary Encodes a(n) VcId into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The VcId, encoded as an ASN.1 Element.
 */
export
function _encode_VcId (value: VcId, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_VcId) { _cached_encoder_for_VcId = $._encodeInteger; }
    return _cached_encoder_for_VcId(value, elGetter);
}


/* eslint-enable */
