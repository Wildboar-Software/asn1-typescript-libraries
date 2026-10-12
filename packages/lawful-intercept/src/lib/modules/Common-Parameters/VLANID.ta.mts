/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary VLANID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * VLANID  ::=  INTEGER (0..4095)
 * ```
 */
export
type VLANID = INTEGER;

let _cached_decoder_for_VLANID: $.ASN1Decoder<VLANID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) VLANID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_VLANID (el: _Element): VLANID {
    if (!_cached_decoder_for_VLANID) { _cached_decoder_for_VLANID = $._decodeInteger; }
    return _cached_decoder_for_VLANID(el);
}

let _cached_encoder_for_VLANID: $.ASN1Encoder<VLANID> | null = null;

/**
 * @summary Encodes a(n) VLANID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The VLANID, encoded as an ASN.1 Element.
 */
export
function _encode_VLANID (value: VLANID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_VLANID) { _cached_encoder_for_VLANID = $._encodeInteger; }
    return _cached_encoder_for_VLANID(value, elGetter);
}


/* eslint-enable */
