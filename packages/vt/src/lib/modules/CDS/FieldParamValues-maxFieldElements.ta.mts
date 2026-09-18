/* eslint-disable */
import {
    INTEGER,
    NULL,
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
 * @summary FieldParamValues_maxFieldElements
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FieldParamValues-maxFieldElements ::= CHOICE { unbounded NULL, limit INTEGER }
 * ```
 */
export
type FieldParamValues_maxFieldElements =
    { unbounded: NULL } /* CHOICE_ALT_ROOT */
    | { limit: INTEGER } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_FieldParamValues_maxFieldElements: $.ASN1Decoder<FieldParamValues_maxFieldElements> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FieldParamValues_maxFieldElements
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FieldParamValues_maxFieldElements (el: _Element): FieldParamValues_maxFieldElements {
    if (!_cached_decoder_for_FieldParamValues_maxFieldElements) { _cached_decoder_for_FieldParamValues_maxFieldElements = $._decode_inextensible_choice<FieldParamValues_maxFieldElements>({
    "UNIVERSAL 5": [ "unbounded", $._decodeNull ],
    "UNIVERSAL 2": [ "limit", $._decodeInteger ]
}); }
    return _cached_decoder_for_FieldParamValues_maxFieldElements(el);
}

let _cached_encoder_for_FieldParamValues_maxFieldElements: $.ASN1Encoder<FieldParamValues_maxFieldElements> | null = null;

/**
 * @summary Encodes a(n) FieldParamValues_maxFieldElements into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FieldParamValues_maxFieldElements, encoded as an ASN.1 Element.
 */
export
function _encode_FieldParamValues_maxFieldElements (value: FieldParamValues_maxFieldElements, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FieldParamValues_maxFieldElements) { _cached_encoder_for_FieldParamValues_maxFieldElements = $._encode_choice<FieldParamValues_maxFieldElements>({
    "unbounded": $._encodeNull,
    "limit": $._encodeInteger,
}, $.BER); }
    return _cached_encoder_for_FieldParamValues_maxFieldElements(value, elGetter);
}


/* eslint-enable */
