/* eslint-disable */
import {
    ASN1Element as _Element,
    BOOLEAN
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PDNNBIFOMSupport
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PDNNBIFOMSupport  ::=  BOOLEAN
 * ```
 */
export
type PDNNBIFOMSupport = BOOLEAN; // BooleanType

let _cached_decoder_for_PDNNBIFOMSupport: $.ASN1Decoder<PDNNBIFOMSupport> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PDNNBIFOMSupport
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PDNNBIFOMSupport (el: _Element): PDNNBIFOMSupport {
    if (!_cached_decoder_for_PDNNBIFOMSupport) { _cached_decoder_for_PDNNBIFOMSupport = $._decodeBoolean; }
    return _cached_decoder_for_PDNNBIFOMSupport(el);
}

let _cached_encoder_for_PDNNBIFOMSupport: $.ASN1Encoder<PDNNBIFOMSupport> | null = null;

/**
 * @summary Encodes a(n) PDNNBIFOMSupport into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PDNNBIFOMSupport, encoded as an ASN.1 Element.
 */
export
function _encode_PDNNBIFOMSupport (value: PDNNBIFOMSupport, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PDNNBIFOMSupport) { _cached_encoder_for_PDNNBIFOMSupport = $._encodeBoolean; }
    return _cached_encoder_for_PDNNBIFOMSupport(value, elGetter);
}


/* eslint-enable */
