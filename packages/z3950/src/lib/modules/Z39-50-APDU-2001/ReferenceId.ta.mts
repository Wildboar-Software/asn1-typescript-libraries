/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ReferenceId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReferenceId      ::=  [2] IMPLICIT OCTET STRING
 * ```
 */
export
type ReferenceId = OCTET_STRING; // OctetStringType

let _cached_decoder_for_ReferenceId: $.ASN1Decoder<ReferenceId> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ReferenceId
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ReferenceId (el: _Element): ReferenceId {
    if (!_cached_decoder_for_ReferenceId) { _cached_decoder_for_ReferenceId = $._decode_implicit<ReferenceId>(() => $._decodeOctetString); }
    return _cached_decoder_for_ReferenceId(el);
}

let _cached_encoder_for_ReferenceId: $.ASN1Encoder<ReferenceId> | null = null;

/**
 * @summary Encodes a(n) ReferenceId into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReferenceId, encoded as an ASN.1 Element.
 */
export
function _encode_ReferenceId (value: ReferenceId, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ReferenceId) { _cached_encoder_for_ReferenceId = $._encode_implicit(_TagClass.context, 2, () => $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER), $.BER); }
    return _cached_encoder_for_ReferenceId(value, elGetter);
}


/* eslint-enable */
