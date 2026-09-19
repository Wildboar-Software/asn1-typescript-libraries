/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Name
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Name  ::=  OCTET STRING(SIZE(2))
 * ```
 */
export
type Name = OCTET_STRING; // OctetStringType

let _cached_decoder_for_Name: $.ASN1Decoder<Name> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Name
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Name (el: _Element): Name {
    if (!_cached_decoder_for_Name) { _cached_decoder_for_Name = $._decodeOctetString; }
    return _cached_decoder_for_Name(el);
}

let _cached_encoder_for_Name: $.ASN1Encoder<Name> | null = null;

/**
 * @summary Encodes a(n) Name into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Name, encoded as an ASN.1 Element.
 */
export
function _encode_Name (value: Name, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Name) { _cached_encoder_for_Name = $._encodeOctetString; }
    return _cached_encoder_for_Name(value, elGetter);
}


/* eslint-enable */
