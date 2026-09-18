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
 * @summary ColourAssignment_value
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ColourAssignment-value ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type ColourAssignment_value =
    { iso6429: PrintableString } /* CHOICE_ALT_ROOT */
    | { isonnnn: _Element } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ColourAssignment_value: $.ASN1Decoder<ColourAssignment_value> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ColourAssignment_value
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ColourAssignment_value (el: _Element): ColourAssignment_value {
    if (!_cached_decoder_for_ColourAssignment_value) { _cached_decoder_for_ColourAssignment_value = $._decode_inextensible_choice<ColourAssignment_value>({
    "CONTEXT 1": [ "iso6429", $._decode_implicit<PrintableString>(() => $._decodePrintableString) ],
    "CONTEXT 2": [ "isonnnn", $._decode_implicit<_Element>(() => $._decodeAny) ]
}); }
    return _cached_decoder_for_ColourAssignment_value(el);
}

let _cached_encoder_for_ColourAssignment_value: $.ASN1Encoder<ColourAssignment_value> | null = null;

/**
 * @summary Encodes a(n) ColourAssignment_value into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ColourAssignment_value, encoded as an ASN.1 Element.
 */
export
function _encode_ColourAssignment_value (value: ColourAssignment_value, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ColourAssignment_value) { _cached_encoder_for_ColourAssignment_value = $._encode_choice<ColourAssignment_value>({
    "iso6429": $._encode_implicit(_TagClass.context, 1, () => $._encodePrintableString, $.BER),
    "isonnnn": $._encode_implicit(_TagClass.context, 2, () => $._encodeAny, $.BER),
}, $.BER); }
    return _cached_encoder_for_ColourAssignment_value(value, elGetter);
}


/* eslint-enable */
