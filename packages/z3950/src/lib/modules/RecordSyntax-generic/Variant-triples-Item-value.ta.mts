/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
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
 * @summary Variant_triples_Item_value
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Variant-triples-Item-value ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type Variant_triples_Item_value =
    { integer: INTEGER } /* CHOICE_ALT_ROOT */
    | { string_: InternationalString } /* CHOICE_ALT_ROOT */
    | { octetString: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | { oid: OBJECT_IDENTIFIER } /* CHOICE_ALT_ROOT */
    | { boolean_: BOOLEAN } /* CHOICE_ALT_ROOT */
    | { null_: NULL } /* CHOICE_ALT_ROOT */
    | { unit: Unit } /* CHOICE_ALT_ROOT */
    | { valueAndUnit: IntUnit } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_Variant_triples_Item_value: $.ASN1Decoder<Variant_triples_Item_value> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Variant_triples_Item_value
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Variant_triples_Item_value (el: _Element): Variant_triples_Item_value {
    if (!_cached_decoder_for_Variant_triples_Item_value) { _cached_decoder_for_Variant_triples_Item_value = $._decode_inextensible_choice<Variant_triples_Item_value>({
    "UNIVERSAL 2": [ "integer", $._decodeInteger ],
    "*": [ "string_", _decode_InternationalString ],
    "UNIVERSAL 4": [ "octetString", $._decodeOctetString ],
    "UNIVERSAL 6": [ "oid", $._decodeObjectIdentifier ],
    "UNIVERSAL 1": [ "boolean_", $._decodeBoolean ],
    "UNIVERSAL 5": [ "null_", $._decodeNull ],
    "CONTEXT 1": [ "unit", $._decode_implicit<Unit>(() => _decode_Unit) ],
    "CONTEXT 2": [ "valueAndUnit", $._decode_implicit<IntUnit>(() => _decode_IntUnit) ]
}); }
    return _cached_decoder_for_Variant_triples_Item_value(el);
}

let _cached_encoder_for_Variant_triples_Item_value: $.ASN1Encoder<Variant_triples_Item_value> | null = null;

/**
 * @summary Encodes a(n) Variant_triples_Item_value into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Variant_triples_Item_value, encoded as an ASN.1 Element.
 */
export
function _encode_Variant_triples_Item_value (value: Variant_triples_Item_value, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Variant_triples_Item_value) { _cached_encoder_for_Variant_triples_Item_value = $._encode_choice<Variant_triples_Item_value>({
    "integer": $._encodeInteger,
    "string_": _encode_InternationalString,
    "octetString": $._encodeOctetString,
    "oid": $._encodeObjectIdentifier,
    "boolean_": $._encodeBoolean,
    "null_": $._encodeNull,
    "unit": $._encode_implicit(_TagClass.context, 1, () => _encode_Unit, $.BER),
    "valueAndUnit": $._encode_implicit(_TagClass.context, 2, () => _encode_IntUnit, $.BER),
}, $.BER); }
    return _cached_encoder_for_Variant_triples_Item_value(value, elGetter);
}


/* eslint-enable */
