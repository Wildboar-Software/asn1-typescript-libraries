/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SrhrGroupID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SrhrGroupID  ::=  [77] IMPLICIT INTEGER(0..32767)
 * ```
 */
export
type SrhrGroupID = INTEGER;

let _cached_decoder_for_SrhrGroupID: $.ASN1Decoder<SrhrGroupID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SrhrGroupID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SrhrGroupID (el: _Element): SrhrGroupID {
    if (!_cached_decoder_for_SrhrGroupID) { _cached_decoder_for_SrhrGroupID = $._decode_implicit<SrhrGroupID>(() => $._decodeInteger); }
    return _cached_decoder_for_SrhrGroupID(el);
}

let _cached_encoder_for_SrhrGroupID: $.ASN1Encoder<SrhrGroupID> | null = null;

/**
 * @summary Encodes a(n) SrhrGroupID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SrhrGroupID, encoded as an ASN.1 Element.
 */
export
function _encode_SrhrGroupID (value: SrhrGroupID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SrhrGroupID) { _cached_encoder_for_SrhrGroupID = $._encode_implicit(_TagClass.context, 77, () => $._encodeInteger, $.BER); }
    return _cached_encoder_for_SrhrGroupID(value, elGetter);
}


/* eslint-enable */
