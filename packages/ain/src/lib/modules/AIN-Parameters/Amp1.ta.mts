/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Amp1
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Amp1  ::=  [11] IMPLICIT OCTET STRING(SIZE(6))
 * ```
 */
export
type Amp1 = OCTET_STRING; // OctetStringType

let _cached_decoder_for_Amp1: $.ASN1Decoder<Amp1> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Amp1
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Amp1 (el: _Element): Amp1 {
    if (!_cached_decoder_for_Amp1) { _cached_decoder_for_Amp1 = $._decode_implicit<Amp1>(() => $._decodeOctetString); }
    return _cached_decoder_for_Amp1(el);
}

let _cached_encoder_for_Amp1: $.ASN1Encoder<Amp1> | null = null;

/**
 * @summary Encodes a(n) Amp1 into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Amp1, encoded as an ASN.1 Element.
 */
export
function _encode_Amp1 (value: Amp1, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Amp1) { _cached_encoder_for_Amp1 = $._encode_implicit(_TagClass.context, 11, () => $._encodeOctetString, $.BER); }
    return _cached_encoder_for_Amp1(value, elGetter);
}


/* eslint-enable */
