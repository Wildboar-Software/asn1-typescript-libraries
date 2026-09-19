/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ClearCause
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ClearCause  ::=  [21] IMPLICIT INTEGER(0..255)
 * ```
 */
export
type ClearCause = INTEGER;

let _cached_decoder_for_ClearCause: $.ASN1Decoder<ClearCause> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ClearCause
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ClearCause (el: _Element): ClearCause {
    if (!_cached_decoder_for_ClearCause) { _cached_decoder_for_ClearCause = $._decode_implicit<ClearCause>(() => $._decodeInteger); }
    return _cached_decoder_for_ClearCause(el);
}

let _cached_encoder_for_ClearCause: $.ASN1Encoder<ClearCause> | null = null;

/**
 * @summary Encodes a(n) ClearCause into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ClearCause, encoded as an ASN.1 Element.
 */
export
function _encode_ClearCause (value: ClearCause, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ClearCause) { _cached_encoder_for_ClearCause = $._encode_implicit(_TagClass.context, 21, () => $._encodeInteger, $.BER); }
    return _cached_encoder_for_ClearCause(value, elGetter);
}


/* eslint-enable */
