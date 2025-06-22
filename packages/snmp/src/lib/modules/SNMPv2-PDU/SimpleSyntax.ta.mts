/* eslint-disable */
import {
    INTEGER,
    OCTET_STRING,
    OBJECT_IDENTIFIER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SimpleSyntax
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SimpleSyntax  ::=  CHOICE {
 *         integer-value   INTEGER (-2147483648..2147483647),
 *         string-value    OCTET STRING (SIZE (0..65535)),
 *         objectID-value  OBJECT IDENTIFIER }
 * ```
 */
export
type SimpleSyntax =
    { integer_value: INTEGER } /* CHOICE_ALT_ROOT */
    | { string_value: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | { objectID_value: OBJECT_IDENTIFIER } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_SimpleSyntax: $.ASN1Decoder<SimpleSyntax> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SimpleSyntax
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SimpleSyntax} The decoded data structure.
 */
export
function _decode_SimpleSyntax (el: _Element) {
    if (!_cached_decoder_for_SimpleSyntax) { _cached_decoder_for_SimpleSyntax = $._decode_inextensible_choice<SimpleSyntax>({
    "UNIVERSAL 2": [ "integer_value", $._decodeInteger ],
    "UNIVERSAL 4": [ "string_value", $._decodeOctetString ],
    "UNIVERSAL 6": [ "objectID_value", $._decodeObjectIdentifier ]
}); }
    return _cached_decoder_for_SimpleSyntax(el);
}

let _cached_encoder_for_SimpleSyntax: $.ASN1Encoder<SimpleSyntax> | null = null;

/**
 * @summary Encodes a(n) SimpleSyntax into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SimpleSyntax, encoded as an ASN.1 Element.
 */
export
function _encode_SimpleSyntax (value: SimpleSyntax, elGetter: $.ASN1Encoder<SimpleSyntax>) {
    if (!_cached_encoder_for_SimpleSyntax) { _cached_encoder_for_SimpleSyntax = $._encode_choice<SimpleSyntax>({
    "integer_value": $._encodeInteger,
    "string_value": $._encodeOctetString,
    "objectID_value": $._encodeObjectIdentifier,
}, $.BER); }
    return _cached_encoder_for_SimpleSyntax(value, elGetter);
}


/* eslint-enable */
