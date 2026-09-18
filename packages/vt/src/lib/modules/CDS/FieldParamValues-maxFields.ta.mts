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
 * @summary FieldParamValues_maxFields
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FieldParamValues-maxFields ::= CHOICE { unbounded NULL, limit INTEGER }
 * ```
 */
export
type FieldParamValues_maxFields =
    { unbounded: NULL } /* CHOICE_ALT_ROOT */
    | { limit: INTEGER } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_FieldParamValues_maxFields: $.ASN1Decoder<FieldParamValues_maxFields> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FieldParamValues_maxFields
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FieldParamValues_maxFields (el: _Element): FieldParamValues_maxFields {
    if (!_cached_decoder_for_FieldParamValues_maxFields) { _cached_decoder_for_FieldParamValues_maxFields = $._decode_inextensible_choice<FieldParamValues_maxFields>({
    "UNIVERSAL 5": [ "unbounded", $._decodeNull ],
    "UNIVERSAL 2": [ "limit", $._decodeInteger ]
}); }
    return _cached_decoder_for_FieldParamValues_maxFields(el);
}

let _cached_encoder_for_FieldParamValues_maxFields: $.ASN1Encoder<FieldParamValues_maxFields> | null = null;

/**
 * @summary Encodes a(n) FieldParamValues_maxFields into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FieldParamValues_maxFields, encoded as an ASN.1 Element.
 */
export
function _encode_FieldParamValues_maxFields (value: FieldParamValues_maxFields, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FieldParamValues_maxFields) { _cached_encoder_for_FieldParamValues_maxFields = $._encode_choice<FieldParamValues_maxFields>({
    "unbounded": $._encodeNull,
    "limit": $._encodeInteger,
}, $.BER); }
    return _cached_encoder_for_FieldParamValues_maxFields(value, elGetter);
}


/* eslint-enable */
