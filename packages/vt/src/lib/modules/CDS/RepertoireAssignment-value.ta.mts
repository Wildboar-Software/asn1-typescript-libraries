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
 * @summary RepertoireAssignment_value
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RepertoireAssignment-value ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type RepertoireAssignment_value =
    { iso2022: OCTET_STRING[] } /* CHOICE_ALT_ROOT */
    | /* FIXME: isonnnn CHOICE_ALT_ROOT */;

let _cached_decoder_for_RepertoireAssignment_value: $.ASN1Decoder<RepertoireAssignment_value> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RepertoireAssignment_value
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RepertoireAssignment_value (el: _Element): RepertoireAssignment_value {
    if (!_cached_decoder_for_RepertoireAssignment_value) { _cached_decoder_for_RepertoireAssignment_value = $._decode_inextensible_choice<RepertoireAssignment_value>({
    "CONTEXT 1": [ "iso2022", $._decode_implicit<OCTET_STRING[]>(() => $._decodeSequenceOf<OCTET_STRING>(() => $._decodeOctetString)) ],
    "// FIXME: COULD_NOT_COMPILE_TYPE_DECODER": [ "isonnnn", undefined ]
}); }
    return _cached_decoder_for_RepertoireAssignment_value(el);
}

let _cached_encoder_for_RepertoireAssignment_value: $.ASN1Encoder<RepertoireAssignment_value> | null = null;

/**
 * @summary Encodes a(n) RepertoireAssignment_value into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RepertoireAssignment_value, encoded as an ASN.1 Element.
 */
export
function _encode_RepertoireAssignment_value (value: RepertoireAssignment_value, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RepertoireAssignment_value) { _cached_encoder_for_RepertoireAssignment_value = $._encode_choice<RepertoireAssignment_value>({
    "iso2022": $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<OCTET_STRING>(() => $._encodeOctetString, $.BER), $.BER),
    "isonnnn": $._encode_implicit(_TagClass.context, 2, () => $._encodeAny, $.BER),
}, $.BER); }
    return _cached_encoder_for_RepertoireAssignment_value(value, elGetter);
}


/* eslint-enable */
