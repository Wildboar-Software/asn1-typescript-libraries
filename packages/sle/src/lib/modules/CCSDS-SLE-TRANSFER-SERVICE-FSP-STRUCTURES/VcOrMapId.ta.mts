/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary VcOrMapId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * VcOrMapId                ::=    INTEGER (0 .. 63)
 * ```
 */
export
type VcOrMapId = INTEGER;

let _cached_decoder_for_VcOrMapId: $.ASN1Decoder<VcOrMapId> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) VcOrMapId
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_VcOrMapId (el: _Element): VcOrMapId {
    if (!_cached_decoder_for_VcOrMapId) { _cached_decoder_for_VcOrMapId = $._decodeInteger; }
    return _cached_decoder_for_VcOrMapId(el);
}

let _cached_encoder_for_VcOrMapId: $.ASN1Encoder<VcOrMapId> | null = null;

/**
 * @summary Encodes a(n) VcOrMapId into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The VcOrMapId, encoded as an ASN.1 Element.
 */
export
function _encode_VcOrMapId (value: VcOrMapId, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_VcOrMapId) { _cached_encoder_for_VcOrMapId = $._encodeInteger; }
    return _cached_encoder_for_VcOrMapId(value, elGetter);
}


/* eslint-enable */
