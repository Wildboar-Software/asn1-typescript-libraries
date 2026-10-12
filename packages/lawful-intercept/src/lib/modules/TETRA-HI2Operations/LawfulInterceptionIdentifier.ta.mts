/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary LawfulInterceptionIdentifier
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LawfulInterceptionIdentifier  ::=  OCTET STRING (SIZE (1..25))
 * ```
 */
export
type LawfulInterceptionIdentifier = OCTET_STRING; // OctetStringType

let _cached_decoder_for_LawfulInterceptionIdentifier: $.ASN1Decoder<LawfulInterceptionIdentifier> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LawfulInterceptionIdentifier
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LawfulInterceptionIdentifier (el: _Element): LawfulInterceptionIdentifier {
    if (!_cached_decoder_for_LawfulInterceptionIdentifier) { _cached_decoder_for_LawfulInterceptionIdentifier = $._decodeOctetString; }
    return _cached_decoder_for_LawfulInterceptionIdentifier(el);
}

let _cached_encoder_for_LawfulInterceptionIdentifier: $.ASN1Encoder<LawfulInterceptionIdentifier> | null = null;

/**
 * @summary Encodes a(n) LawfulInterceptionIdentifier into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LawfulInterceptionIdentifier, encoded as an ASN.1 Element.
 */
export
function _encode_LawfulInterceptionIdentifier (value: LawfulInterceptionIdentifier, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LawfulInterceptionIdentifier) { _cached_encoder_for_LawfulInterceptionIdentifier = $._encodeOctetString; }
    return _cached_encoder_for_LawfulInterceptionIdentifier(value, elGetter);
}


/* eslint-enable */
