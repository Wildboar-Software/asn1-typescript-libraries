/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary NetworkSpecificFacilities
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NetworkSpecificFacilities  ::=  [108] IMPLICIT OCTET STRING(SIZE(2..12))
 * ```
 */
export
type NetworkSpecificFacilities = OCTET_STRING; // OctetStringType

let _cached_decoder_for_NetworkSpecificFacilities: $.ASN1Decoder<NetworkSpecificFacilities> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NetworkSpecificFacilities
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NetworkSpecificFacilities (el: _Element): NetworkSpecificFacilities {
    if (!_cached_decoder_for_NetworkSpecificFacilities) { _cached_decoder_for_NetworkSpecificFacilities = $._decode_implicit<NetworkSpecificFacilities>(() => $._decodeOctetString); }
    return _cached_decoder_for_NetworkSpecificFacilities(el);
}

let _cached_encoder_for_NetworkSpecificFacilities: $.ASN1Encoder<NetworkSpecificFacilities> | null = null;

/**
 * @summary Encodes a(n) NetworkSpecificFacilities into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NetworkSpecificFacilities, encoded as an ASN.1 Element.
 */
export
function _encode_NetworkSpecificFacilities (value: NetworkSpecificFacilities, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NetworkSpecificFacilities) { _cached_encoder_for_NetworkSpecificFacilities = $._encode_implicit(_TagClass.context, 108, () => $._encodeOctetString, $.BER); }
    return _cached_encoder_for_NetworkSpecificFacilities(value, elGetter);
}


/* eslint-enable */
