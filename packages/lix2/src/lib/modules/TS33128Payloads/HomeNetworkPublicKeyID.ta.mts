/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary HomeNetworkPublicKeyID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * HomeNetworkPublicKeyID  ::=  OCTET STRING
 * ```
 */
export
type HomeNetworkPublicKeyID = OCTET_STRING; // OctetStringType

let _cached_decoder_for_HomeNetworkPublicKeyID: $.ASN1Decoder<HomeNetworkPublicKeyID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) HomeNetworkPublicKeyID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_HomeNetworkPublicKeyID (el: _Element): HomeNetworkPublicKeyID {
    if (!_cached_decoder_for_HomeNetworkPublicKeyID) { _cached_decoder_for_HomeNetworkPublicKeyID = $._decodeOctetString; }
    return _cached_decoder_for_HomeNetworkPublicKeyID(el);
}

let _cached_encoder_for_HomeNetworkPublicKeyID: $.ASN1Encoder<HomeNetworkPublicKeyID> | null = null;

/**
 * @summary Encodes a(n) HomeNetworkPublicKeyID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The HomeNetworkPublicKeyID, encoded as an ASN.1 Element.
 */
export
function _encode_HomeNetworkPublicKeyID (value: HomeNetworkPublicKeyID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_HomeNetworkPublicKeyID) { _cached_encoder_for_HomeNetworkPublicKeyID = $._encodeOctetString; }
    return _cached_encoder_for_HomeNetworkPublicKeyID(value, elGetter);
}


/* eslint-enable */
