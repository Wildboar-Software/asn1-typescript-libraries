/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RedirectionInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RedirectionInformation  ::=  [44] IMPLICIT OCTET STRING(SIZE(2))
 * ```
 */
export
type RedirectionInformation = OCTET_STRING; // OctetStringType

let _cached_decoder_for_RedirectionInformation: $.ASN1Decoder<RedirectionInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RedirectionInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RedirectionInformation (el: _Element): RedirectionInformation {
    if (!_cached_decoder_for_RedirectionInformation) { _cached_decoder_for_RedirectionInformation = $._decode_implicit<RedirectionInformation>(() => $._decodeOctetString); }
    return _cached_decoder_for_RedirectionInformation(el);
}

let _cached_encoder_for_RedirectionInformation: $.ASN1Encoder<RedirectionInformation> | null = null;

/**
 * @summary Encodes a(n) RedirectionInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RedirectionInformation, encoded as an ASN.1 Element.
 */
export
function _encode_RedirectionInformation (value: RedirectionInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RedirectionInformation) { _cached_encoder_for_RedirectionInformation = $._encode_implicit(_TagClass.context, 44, () => $._encodeOctetString, $.BER); }
    return _cached_encoder_for_RedirectionInformation(value, elGetter);
}


/* eslint-enable */
