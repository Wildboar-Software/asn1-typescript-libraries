/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary JurisdictionInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * JurisdictionInformation ::=  [147] IMPLICIT OCTET STRING(SIZE(3))
 * ```
 */
export
type JurisdictionInformation = OCTET_STRING; // OctetStringType

let _cached_decoder_for_JurisdictionInformation: $.ASN1Decoder<JurisdictionInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) JurisdictionInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_JurisdictionInformation (el: _Element): JurisdictionInformation {
    if (!_cached_decoder_for_JurisdictionInformation) { _cached_decoder_for_JurisdictionInformation = $._decode_implicit<JurisdictionInformation>(() => $._decodeOctetString); }
    return _cached_decoder_for_JurisdictionInformation(el);
}

let _cached_encoder_for_JurisdictionInformation: $.ASN1Encoder<JurisdictionInformation> | null = null;

/**
 * @summary Encodes a(n) JurisdictionInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The JurisdictionInformation, encoded as an ASN.1 Element.
 */
export
function _encode_JurisdictionInformation (value: JurisdictionInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_JurisdictionInformation) { _cached_encoder_for_JurisdictionInformation = $._encode_implicit(_TagClass.context, 147, () => $._encodeOctetString, $.BER); }
    return _cached_encoder_for_JurisdictionInformation(value, elGetter);
}


/* eslint-enable */
