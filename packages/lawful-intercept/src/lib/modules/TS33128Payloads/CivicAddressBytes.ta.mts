/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CivicAddressBytes
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CivicAddressBytes  ::=  OCTET STRING
 * ```
 */
export
type CivicAddressBytes = OCTET_STRING; // OctetStringType

let _cached_decoder_for_CivicAddressBytes: $.ASN1Decoder<CivicAddressBytes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CivicAddressBytes
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CivicAddressBytes (el: _Element): CivicAddressBytes {
    if (!_cached_decoder_for_CivicAddressBytes) { _cached_decoder_for_CivicAddressBytes = $._decodeOctetString; }
    return _cached_decoder_for_CivicAddressBytes(el);
}

let _cached_encoder_for_CivicAddressBytes: $.ASN1Encoder<CivicAddressBytes> | null = null;

/**
 * @summary Encodes a(n) CivicAddressBytes into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CivicAddressBytes, encoded as an ASN.1 Element.
 */
export
function _encode_CivicAddressBytes (value: CivicAddressBytes, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CivicAddressBytes) { _cached_encoder_for_CivicAddressBytes = $._encodeOctetString; }
    return _cached_encoder_for_CivicAddressBytes(value, elGetter);
}


/* eslint-enable */
