/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SemiOctetString
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SemiOctetString  ::=  OCTET STRING
 * ```
 */
export
type SemiOctetString = OCTET_STRING; // OctetStringType

let _cached_decoder_for_SemiOctetString: $.ASN1Decoder<SemiOctetString> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SemiOctetString
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SemiOctetString (el: _Element): SemiOctetString {
    if (!_cached_decoder_for_SemiOctetString) { _cached_decoder_for_SemiOctetString = $._decodeOctetString; }
    return _cached_decoder_for_SemiOctetString(el);
}

let _cached_encoder_for_SemiOctetString: $.ASN1Encoder<SemiOctetString> | null = null;

/**
 * @summary Encodes a(n) SemiOctetString into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SemiOctetString, encoded as an ASN.1 Element.
 */
export
function _encode_SemiOctetString (value: SemiOctetString, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SemiOctetString) { _cached_encoder_for_SemiOctetString = $._encodeOctetString; }
    return _cached_encoder_for_SemiOctetString(value, elGetter);
}


/* eslint-enable */
