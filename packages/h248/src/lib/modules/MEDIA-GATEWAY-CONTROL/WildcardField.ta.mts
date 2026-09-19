/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary WildcardField
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * WildcardField  ::=  OCTET STRING(SIZE(1))
 * ```
 */
export
type WildcardField = OCTET_STRING; // OctetStringType

let _cached_decoder_for_WildcardField: $.ASN1Decoder<WildcardField> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) WildcardField
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_WildcardField (el: _Element): WildcardField {
    if (!_cached_decoder_for_WildcardField) { _cached_decoder_for_WildcardField = $._decodeOctetString; }
    return _cached_decoder_for_WildcardField(el);
}

let _cached_encoder_for_WildcardField: $.ASN1Encoder<WildcardField> | null = null;

/**
 * @summary Encodes a(n) WildcardField into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The WildcardField, encoded as an ASN.1 Element.
 */
export
function _encode_WildcardField (value: WildcardField, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_WildcardField) { _cached_encoder_for_WildcardField = $._encodeOctetString; }
    return _cached_encoder_for_WildcardField(value, elGetter);
}


/* eslint-enable */
