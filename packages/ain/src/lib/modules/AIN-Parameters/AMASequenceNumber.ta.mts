/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AMASequenceNumber
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AMASequenceNumber  ::=  [89] IMPLICIT OCTET STRING(SIZE(2))
 * ```
 */
export
type AMASequenceNumber = OCTET_STRING; // OctetStringType

let _cached_decoder_for_AMASequenceNumber: $.ASN1Decoder<AMASequenceNumber> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AMASequenceNumber
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AMASequenceNumber (el: _Element): AMASequenceNumber {
    if (!_cached_decoder_for_AMASequenceNumber) { _cached_decoder_for_AMASequenceNumber = $._decode_implicit<AMASequenceNumber>(() => $._decodeOctetString); }
    return _cached_decoder_for_AMASequenceNumber(el);
}

let _cached_encoder_for_AMASequenceNumber: $.ASN1Encoder<AMASequenceNumber> | null = null;

/**
 * @summary Encodes a(n) AMASequenceNumber into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AMASequenceNumber, encoded as an ASN.1 Element.
 */
export
function _encode_AMASequenceNumber (value: AMASequenceNumber, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AMASequenceNumber) { _cached_encoder_for_AMASequenceNumber = $._encode_implicit(_TagClass.context, 89, () => $._encodeOctetString, $.BER); }
    return _cached_encoder_for_AMASequenceNumber(value, elGetter);
}


/* eslint-enable */
