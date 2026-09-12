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
 * @summary CS_EventNotification
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CS-EventNotification  ::=  [0] CHOICE {
 *    string                     [0] IMPLICIT VisibleString,
 *    index                      [1] IMPLICIT INTEGER,
 *    noEnhancement              NULL   }
 * ```
 */
export
type CS_EventNotification =
    { string_: VisibleString } /* CHOICE_ALT_ROOT */
    | { index: INTEGER } /* CHOICE_ALT_ROOT */
    | { noEnhancement: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_CS_EventNotification: $.ASN1Decoder<CS_EventNotification> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CS_EventNotification
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CS_EventNotification (el: _Element): CS_EventNotification {
    if (!_cached_decoder_for_CS_EventNotification) { _cached_decoder_for_CS_EventNotification = $._decode_explicit<CS_EventNotification>(() => $._decode_inextensible_choice<CS_EventNotification>({
    "CONTEXT 0": [ "string_", $._decode_implicit<VisibleString>(() => $._decodeVisibleString) ],
    "CONTEXT 1": [ "index", $._decode_implicit<INTEGER>(() => $._decodeInteger) ],
    "UNIVERSAL 5": [ "noEnhancement", $._decodeNull ]
})); }
    return _cached_decoder_for_CS_EventNotification(el);
}

let _cached_encoder_for_CS_EventNotification: $.ASN1Encoder<CS_EventNotification> | null = null;

/**
 * @summary Encodes a(n) CS_EventNotification into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CS_EventNotification, encoded as an ASN.1 Element.
 */
export
function _encode_CS_EventNotification (value: CS_EventNotification, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CS_EventNotification) { _cached_encoder_for_CS_EventNotification = $._encode_explicit(_TagClass.context, 0, () => $._encode_choice<CS_EventNotification>({
    "string_": $._encode_implicit(_TagClass.context, 0, () => $._encodeVisibleString, $.BER),
    "index": $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER),
    "noEnhancement": $._encodeNull,
}, $.BER), $.BER); }
    return _cached_encoder_for_CS_EventNotification(value, elGetter);
}


/* eslint-enable */
