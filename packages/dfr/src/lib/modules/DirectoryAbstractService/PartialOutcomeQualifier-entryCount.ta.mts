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
 * @summary PartialOutcomeQualifier_entryCount
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PartialOutcomeQualifier-entryCount ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type PartialOutcomeQualifier_entryCount =
    { bestEstimate: INTEGER } /* CHOICE_ALT_ROOT */
    | { lowEstimate: INTEGER } /* CHOICE_ALT_ROOT */
    | { exact: INTEGER } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_PartialOutcomeQualifier_entryCount: $.ASN1Decoder<PartialOutcomeQualifier_entryCount> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PartialOutcomeQualifier_entryCount
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PartialOutcomeQualifier_entryCount (el: _Element): PartialOutcomeQualifier_entryCount {
    if (!_cached_decoder_for_PartialOutcomeQualifier_entryCount) { _cached_decoder_for_PartialOutcomeQualifier_entryCount = $._decode_extensible_choice<PartialOutcomeQualifier_entryCount>({
    "CONTEXT 7": [ "bestEstimate", $._decode_implicit<INTEGER>(() => $._decodeInteger) ],
    "CONTEXT 8": [ "lowEstimate", $._decode_implicit<INTEGER>(() => $._decodeInteger) ],
    "CONTEXT 9": [ "exact", $._decode_implicit<INTEGER>(() => $._decodeInteger) ]
}); }
    return _cached_decoder_for_PartialOutcomeQualifier_entryCount(el);
}

let _cached_encoder_for_PartialOutcomeQualifier_entryCount: $.ASN1Encoder<PartialOutcomeQualifier_entryCount> | null = null;

/**
 * @summary Encodes a(n) PartialOutcomeQualifier_entryCount into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PartialOutcomeQualifier_entryCount, encoded as an ASN.1 Element.
 */
export
function _encode_PartialOutcomeQualifier_entryCount (value: PartialOutcomeQualifier_entryCount, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PartialOutcomeQualifier_entryCount) { _cached_encoder_for_PartialOutcomeQualifier_entryCount = $._encode_choice<PartialOutcomeQualifier_entryCount>({
    "bestEstimate": $._encode_implicit(_TagClass.context, 7, () => $._encodeInteger, $.BER),
    "lowEstimate": $._encode_implicit(_TagClass.context, 8, () => $._encodeInteger, $.BER),
    "exact": $._encode_implicit(_TagClass.context, 9, () => $._encodeInteger, $.BER),
}, $.BER); }
    return _cached_encoder_for_PartialOutcomeQualifier_entryCount(value, elGetter);
}


/* eslint-enable */
