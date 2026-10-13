/* eslint-disable */
import {
    ASN1Element as _Element,
    VisibleString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary IdentifierString
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IdentifierString         ::=    VisibleString (FROM (ALL EXCEPT " "))
 * ```
 */
export
type IdentifierString = VisibleString; // VisibleString

let _cached_decoder_for_IdentifierString: $.ASN1Decoder<IdentifierString> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IdentifierString
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IdentifierString (el: _Element): IdentifierString {
    if (!_cached_decoder_for_IdentifierString) { _cached_decoder_for_IdentifierString = $._decodeVisibleString; }
    return _cached_decoder_for_IdentifierString(el);
}

let _cached_encoder_for_IdentifierString: $.ASN1Encoder<IdentifierString> | null = null;

/**
 * @summary Encodes a(n) IdentifierString into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IdentifierString, encoded as an ASN.1 Element.
 */
export
function _encode_IdentifierString (value: IdentifierString, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IdentifierString) { _cached_encoder_for_IdentifierString = $._encodeVisibleString; }
    return _cached_encoder_for_IdentifierString(value, elGetter);
}


/* eslint-enable */
