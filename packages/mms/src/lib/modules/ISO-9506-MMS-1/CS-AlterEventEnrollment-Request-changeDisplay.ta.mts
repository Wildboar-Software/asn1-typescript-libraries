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
 * @summary CS_AlterEventEnrollment_Request_changeDisplay
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CS-AlterEventEnrollment-Request-changeDisplay ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type CS_AlterEventEnrollment_Request_changeDisplay =
    { string_: VisibleString } /* CHOICE_ALT_ROOT */
    | { index: INTEGER } /* CHOICE_ALT_ROOT */
    | { noEnhancement: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_CS_AlterEventEnrollment_Request_changeDisplay: $.ASN1Decoder<CS_AlterEventEnrollment_Request_changeDisplay> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CS_AlterEventEnrollment_Request_changeDisplay
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CS_AlterEventEnrollment_Request_changeDisplay (el: _Element): CS_AlterEventEnrollment_Request_changeDisplay {
    if (!_cached_decoder_for_CS_AlterEventEnrollment_Request_changeDisplay) { _cached_decoder_for_CS_AlterEventEnrollment_Request_changeDisplay = $._decode_inextensible_choice<CS_AlterEventEnrollment_Request_changeDisplay>({
    "CONTEXT 0": [ "string_", $._decode_implicit<VisibleString>(() => $._decodeVisibleString) ],
    "CONTEXT 1": [ "index", $._decode_implicit<INTEGER>(() => $._decodeInteger) ],
    "CONTEXT 2": [ "noEnhancement", $._decode_implicit<NULL>(() => $._decodeNull) ]
}); }
    return _cached_decoder_for_CS_AlterEventEnrollment_Request_changeDisplay(el);
}

let _cached_encoder_for_CS_AlterEventEnrollment_Request_changeDisplay: $.ASN1Encoder<CS_AlterEventEnrollment_Request_changeDisplay> | null = null;

/**
 * @summary Encodes a(n) CS_AlterEventEnrollment_Request_changeDisplay into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CS_AlterEventEnrollment_Request_changeDisplay, encoded as an ASN.1 Element.
 */
export
function _encode_CS_AlterEventEnrollment_Request_changeDisplay (value: CS_AlterEventEnrollment_Request_changeDisplay, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CS_AlterEventEnrollment_Request_changeDisplay) { _cached_encoder_for_CS_AlterEventEnrollment_Request_changeDisplay = $._encode_choice<CS_AlterEventEnrollment_Request_changeDisplay>({
    "string_": $._encode_implicit(_TagClass.context, 0, () => $._encodeVisibleString, $.BER),
    "index": $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER),
    "noEnhancement": $._encode_implicit(_TagClass.context, 2, () => $._encodeNull, $.BER),
}, $.BER); }
    return _cached_encoder_for_CS_AlterEventEnrollment_Request_changeDisplay(value, elGetter);
}


/* eslint-enable */
