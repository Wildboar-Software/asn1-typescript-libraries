/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PkgdName
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PkgdName  ::=  OCTET STRING(SIZE(4))
 * ```
 */
export
type PkgdName = OCTET_STRING; // OctetStringType

let _cached_decoder_for_PkgdName: $.ASN1Decoder<PkgdName> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PkgdName
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PkgdName (el: _Element): PkgdName {
    if (!_cached_decoder_for_PkgdName) { _cached_decoder_for_PkgdName = $._decodeOctetString; }
    return _cached_decoder_for_PkgdName(el);
}

let _cached_encoder_for_PkgdName: $.ASN1Encoder<PkgdName> | null = null;

/**
 * @summary Encodes a(n) PkgdName into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PkgdName, encoded as an ASN.1 Element.
 */
export
function _encode_PkgdName (value: PkgdName, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PkgdName) { _cached_encoder_for_PkgdName = $._encodeOctetString; }
    return _cached_encoder_for_PkgdName(value, elGetter);
}


/* eslint-enable */
