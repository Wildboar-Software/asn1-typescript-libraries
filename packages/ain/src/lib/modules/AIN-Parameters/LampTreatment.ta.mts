/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary LampTreatment
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LampTreatment  ::=  [138] IMPLICIT OCTET STRING(SIZE(2..3))
 * ```
 */
export
type LampTreatment = OCTET_STRING; // OctetStringType

let _cached_decoder_for_LampTreatment: $.ASN1Decoder<LampTreatment> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LampTreatment
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LampTreatment (el: _Element): LampTreatment {
    if (!_cached_decoder_for_LampTreatment) { _cached_decoder_for_LampTreatment = $._decode_implicit<LampTreatment>(() => $._decodeOctetString); }
    return _cached_decoder_for_LampTreatment(el);
}

let _cached_encoder_for_LampTreatment: $.ASN1Encoder<LampTreatment> | null = null;

/**
 * @summary Encodes a(n) LampTreatment into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LampTreatment, encoded as an ASN.1 Element.
 */
export
function _encode_LampTreatment (value: LampTreatment, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LampTreatment) { _cached_encoder_for_LampTreatment = $._encode_implicit(_TagClass.context, 138, () => $._encodeOctetString, $.BER); }
    return _cached_encoder_for_LampTreatment(value, elGetter);
}


/* eslint-enable */
