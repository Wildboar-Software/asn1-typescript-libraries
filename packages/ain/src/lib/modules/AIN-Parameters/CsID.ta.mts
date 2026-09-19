/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CsID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CsID  ::=  [137] IMPLICIT INTEGER(1..2)
 * ```
 */
export
type CsID = INTEGER;

let _cached_decoder_for_CsID: $.ASN1Decoder<CsID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CsID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CsID (el: _Element): CsID {
    if (!_cached_decoder_for_CsID) { _cached_decoder_for_CsID = $._decode_implicit<CsID>(() => $._decodeInteger); }
    return _cached_decoder_for_CsID(el);
}

let _cached_encoder_for_CsID: $.ASN1Encoder<CsID> | null = null;

/**
 * @summary Encodes a(n) CsID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CsID, encoded as an ASN.1 Element.
 */
export
function _encode_CsID (value: CsID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CsID) { _cached_encoder_for_CsID = $._encode_implicit(_TagClass.context, 137, () => $._encodeInteger, $.BER); }
    return _cached_encoder_for_CsID(value, elGetter);
}


/* eslint-enable */
