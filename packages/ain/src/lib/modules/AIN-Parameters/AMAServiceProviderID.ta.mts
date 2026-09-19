/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AMAServiceProviderID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AMAServiceProviderID ::=  [101] IMPLICIT OCTET STRING(SIZE(7))
 * ```
 */
export
type AMAServiceProviderID = OCTET_STRING; // OctetStringType

let _cached_decoder_for_AMAServiceProviderID: $.ASN1Decoder<AMAServiceProviderID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AMAServiceProviderID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AMAServiceProviderID (el: _Element): AMAServiceProviderID {
    if (!_cached_decoder_for_AMAServiceProviderID) { _cached_decoder_for_AMAServiceProviderID = $._decode_implicit<AMAServiceProviderID>(() => $._decodeOctetString); }
    return _cached_decoder_for_AMAServiceProviderID(el);
}

let _cached_encoder_for_AMAServiceProviderID: $.ASN1Encoder<AMAServiceProviderID> | null = null;

/**
 * @summary Encodes a(n) AMAServiceProviderID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AMAServiceProviderID, encoded as an ASN.1 Element.
 */
export
function _encode_AMAServiceProviderID (value: AMAServiceProviderID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AMAServiceProviderID) { _cached_encoder_for_AMAServiceProviderID = $._encode_implicit(_TagClass.context, 101, () => $._encodeOctetString, $.BER); }
    return _cached_encoder_for_AMAServiceProviderID(value, elGetter);
}


/* eslint-enable */
