/* eslint-disable */
import {
    INTEGER,
    GraphicString,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SimpleNameType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SimpleNameType  ::=  CHOICE {number  INTEGER,
 *                            string  GraphicString
 * }
 * ```
 */
export
type SimpleNameType =
    { number_: INTEGER } /* CHOICE_ALT_ROOT */
    | { string_: GraphicString } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_SimpleNameType: $.ASN1Decoder<SimpleNameType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SimpleNameType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SimpleNameType} The decoded data structure.
 */
export
function _decode_SimpleNameType (el: _Element) {
    if (!_cached_decoder_for_SimpleNameType) { _cached_decoder_for_SimpleNameType = $._decode_inextensible_choice<SimpleNameType>({
    "UNIVERSAL 2": [ "number_", $._decodeInteger ],
    "UNIVERSAL 25": [ "string_", $._decodeGraphicString ]
}); }
    return _cached_decoder_for_SimpleNameType(el);
}

let _cached_encoder_for_SimpleNameType: $.ASN1Encoder<SimpleNameType> | null = null;

/**
 * @summary Encodes a(n) SimpleNameType into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SimpleNameType, encoded as an ASN.1 Element.
 */
export
function _encode_SimpleNameType (value: SimpleNameType, elGetter: $.ASN1Encoder<SimpleNameType>) {
    if (!_cached_encoder_for_SimpleNameType) { _cached_encoder_for_SimpleNameType = $._encode_choice<SimpleNameType>({
    "number_": $._encodeInteger,
    "string_": $._encodeGraphicString,
}, $.BER); }
    return _cached_encoder_for_SimpleNameType(value, elGetter);
}


/* eslint-enable */
