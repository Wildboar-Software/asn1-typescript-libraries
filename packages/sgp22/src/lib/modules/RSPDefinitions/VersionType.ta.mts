/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary VersionType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * VersionType  ::=  OCTET STRING(SIZE(3))
 * ```
 */
export
type VersionType = OCTET_STRING; // OctetStringType

let _cached_decoder_for_VersionType: $.ASN1Decoder<VersionType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) VersionType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_VersionType (el: _Element): VersionType {
    if (!_cached_decoder_for_VersionType) { _cached_decoder_for_VersionType = $._decodeOctetString; }
    return _cached_decoder_for_VersionType(el);
}

let _cached_encoder_for_VersionType: $.ASN1Encoder<VersionType> | null = null;

/**
 * @summary Encodes a(n) VersionType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The VersionType, encoded as an ASN.1 Element.
 */
export
function _encode_VersionType (value: VersionType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_VersionType) { _cached_encoder_for_VersionType = $._encodeOctetString; }
    return _cached_encoder_for_VersionType(value, elGetter);
}


/* eslint-enable */
