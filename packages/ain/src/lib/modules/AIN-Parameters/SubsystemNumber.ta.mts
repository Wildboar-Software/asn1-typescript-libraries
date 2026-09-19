/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SubsystemNumber
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SubsystemNumber  ::=  [130] IMPLICIT INTEGER(0..255)
 * ```
 */
export
type SubsystemNumber = INTEGER;

let _cached_decoder_for_SubsystemNumber: $.ASN1Decoder<SubsystemNumber> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SubsystemNumber
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SubsystemNumber (el: _Element): SubsystemNumber {
    if (!_cached_decoder_for_SubsystemNumber) { _cached_decoder_for_SubsystemNumber = $._decode_implicit<SubsystemNumber>(() => $._decodeInteger); }
    return _cached_decoder_for_SubsystemNumber(el);
}

let _cached_encoder_for_SubsystemNumber: $.ASN1Encoder<SubsystemNumber> | null = null;

/**
 * @summary Encodes a(n) SubsystemNumber into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SubsystemNumber, encoded as an ASN.1 Element.
 */
export
function _encode_SubsystemNumber (value: SubsystemNumber, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SubsystemNumber) { _cached_encoder_for_SubsystemNumber = $._encode_implicit(_TagClass.context, 130, () => $._encodeInteger, $.BER); }
    return _cached_encoder_for_SubsystemNumber(value, elGetter);
}


/* eslint-enable */
