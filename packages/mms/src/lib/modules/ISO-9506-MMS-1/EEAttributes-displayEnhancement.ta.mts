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
 * @summary EEAttributes_displayEnhancement
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EEAttributes-displayEnhancement ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type EEAttributes_displayEnhancement =
    { string_: VisibleString } /* CHOICE_ALT_ROOT */
    | { index: INTEGER } /* CHOICE_ALT_ROOT */
    | { noEnhancement: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_EEAttributes_displayEnhancement: $.ASN1Decoder<EEAttributes_displayEnhancement> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EEAttributes_displayEnhancement
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EEAttributes_displayEnhancement (el: _Element): EEAttributes_displayEnhancement {
    if (!_cached_decoder_for_EEAttributes_displayEnhancement) { _cached_decoder_for_EEAttributes_displayEnhancement = $._decode_inextensible_choice<EEAttributes_displayEnhancement>({
    "CONTEXT 0": [ "string_", $._decode_implicit<VisibleString>(() => $._decodeVisibleString) ],
    "CONTEXT 1": [ "index", $._decode_implicit<INTEGER>(() => $._decodeInteger) ],
    "UNIVERSAL 5": [ "noEnhancement", $._decodeNull ]
}); }
    return _cached_decoder_for_EEAttributes_displayEnhancement(el);
}

let _cached_encoder_for_EEAttributes_displayEnhancement: $.ASN1Encoder<EEAttributes_displayEnhancement> | null = null;

/**
 * @summary Encodes a(n) EEAttributes_displayEnhancement into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EEAttributes_displayEnhancement, encoded as an ASN.1 Element.
 */
export
function _encode_EEAttributes_displayEnhancement (value: EEAttributes_displayEnhancement, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EEAttributes_displayEnhancement) { _cached_encoder_for_EEAttributes_displayEnhancement = $._encode_choice<EEAttributes_displayEnhancement>({
    "string_": $._encode_implicit(_TagClass.context, 0, () => $._encodeVisibleString, $.BER),
    "index": $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER),
    "noEnhancement": $._encodeNull,
}, $.BER); }
    return _cached_encoder_for_EEAttributes_displayEnhancement(value, elGetter);
}


/* eslint-enable */
