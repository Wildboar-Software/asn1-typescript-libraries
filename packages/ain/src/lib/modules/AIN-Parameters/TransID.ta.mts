/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TransID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TransID  ::=  [163] IMPLICIT OCTET STRING(SIZE(4))
 * ```
 */
export
type TransID = OCTET_STRING; // OctetStringType

let _cached_decoder_for_TransID: $.ASN1Decoder<TransID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TransID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TransID (el: _Element): TransID {
    if (!_cached_decoder_for_TransID) { _cached_decoder_for_TransID = $._decode_implicit<TransID>(() => $._decodeOctetString); }
    return _cached_decoder_for_TransID(el);
}

let _cached_encoder_for_TransID: $.ASN1Encoder<TransID> | null = null;

/**
 * @summary Encodes a(n) TransID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TransID, encoded as an ASN.1 Element.
 */
export
function _encode_TransID (value: TransID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TransID) { _cached_encoder_for_TransID = $._encode_implicit(_TagClass.context, 163, () => $._encodeOctetString, $.BER); }
    return _cached_encoder_for_TransID(value, elGetter);
}


/* eslint-enable */
