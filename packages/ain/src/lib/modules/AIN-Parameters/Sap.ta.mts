/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Sap
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Sap  ::=  [81] IMPLICIT OCTET STRING(SIZE(1..10))
 * ```
 */
export
type Sap = OCTET_STRING; // OctetStringType

let _cached_decoder_for_Sap: $.ASN1Decoder<Sap> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Sap
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Sap (el: _Element): Sap {
    if (!_cached_decoder_for_Sap) { _cached_decoder_for_Sap = $._decode_implicit<Sap>(() => $._decodeOctetString); }
    return _cached_decoder_for_Sap(el);
}

let _cached_encoder_for_Sap: $.ASN1Encoder<Sap> | null = null;

/**
 * @summary Encodes a(n) Sap into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Sap, encoded as an ASN.1 Element.
 */
export
function _encode_Sap (value: Sap, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Sap) { _cached_encoder_for_Sap = $._encode_implicit(_TagClass.context, 81, () => $._encodeOctetString, $.BER); }
    return _cached_encoder_for_Sap(value, elGetter);
}


/* eslint-enable */
