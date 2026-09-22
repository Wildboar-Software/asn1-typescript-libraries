/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary KeyIdentifier
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * KeyIdentifier  ::=  OCTET STRING
 * ```
 */
export
type KeyIdentifier = OCTET_STRING; // OctetStringType

let _cached_decoder_for_KeyIdentifier: $.ASN1Decoder<KeyIdentifier> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) KeyIdentifier
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_KeyIdentifier (el: _Element): KeyIdentifier {
    if (!_cached_decoder_for_KeyIdentifier) { _cached_decoder_for_KeyIdentifier = $._decodeOctetString; }
    return _cached_decoder_for_KeyIdentifier(el);
}

let _cached_encoder_for_KeyIdentifier: $.ASN1Encoder<KeyIdentifier> | null = null;

/**
 * @summary Encodes a(n) KeyIdentifier into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The KeyIdentifier, encoded as an ASN.1 Element.
 */
export
function _encode_KeyIdentifier (value: KeyIdentifier, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_KeyIdentifier) { _cached_encoder_for_KeyIdentifier = $._encodeOctetString; }
    return _cached_encoder_for_KeyIdentifier(value, elGetter);
}


/* eslint-enable */
