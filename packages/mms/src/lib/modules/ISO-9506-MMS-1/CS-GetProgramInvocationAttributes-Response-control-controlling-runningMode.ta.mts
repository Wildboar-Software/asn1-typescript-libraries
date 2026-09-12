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
 * @summary CS_GetProgramInvocationAttributes_Response_control_controlling_runningMode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CS-GetProgramInvocationAttributes-Response-control-controlling-runningMode ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type CS_GetProgramInvocationAttributes_Response_control_controlling_runningMode =
    { freeRunning: NULL } /* CHOICE_ALT_ROOT */
    | { cycleLimited: INTEGER } /* CHOICE_ALT_ROOT */
    | { stepLimited: INTEGER } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_CS_GetProgramInvocationAttributes_Response_control_controlling_runningMode: $.ASN1Decoder<CS_GetProgramInvocationAttributes_Response_control_controlling_runningMode> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CS_GetProgramInvocationAttributes_Response_control_controlling_runningMode
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CS_GetProgramInvocationAttributes_Response_control_controlling_runningMode (el: _Element): CS_GetProgramInvocationAttributes_Response_control_controlling_runningMode {
    if (!_cached_decoder_for_CS_GetProgramInvocationAttributes_Response_control_controlling_runningMode) { _cached_decoder_for_CS_GetProgramInvocationAttributes_Response_control_controlling_runningMode = $._decode_inextensible_choice<CS_GetProgramInvocationAttributes_Response_control_controlling_runningMode>({
    "CONTEXT 0": [ "freeRunning", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 1": [ "cycleLimited", $._decode_implicit<INTEGER>(() => $._decodeInteger) ],
    "CONTEXT 2": [ "stepLimited", $._decode_implicit<INTEGER>(() => $._decodeInteger) ]
}); }
    return _cached_decoder_for_CS_GetProgramInvocationAttributes_Response_control_controlling_runningMode(el);
}

let _cached_encoder_for_CS_GetProgramInvocationAttributes_Response_control_controlling_runningMode: $.ASN1Encoder<CS_GetProgramInvocationAttributes_Response_control_controlling_runningMode> | null = null;

/**
 * @summary Encodes a(n) CS_GetProgramInvocationAttributes_Response_control_controlling_runningMode into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CS_GetProgramInvocationAttributes_Response_control_controlling_runningMode, encoded as an ASN.1 Element.
 */
export
function _encode_CS_GetProgramInvocationAttributes_Response_control_controlling_runningMode (value: CS_GetProgramInvocationAttributes_Response_control_controlling_runningMode, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CS_GetProgramInvocationAttributes_Response_control_controlling_runningMode) { _cached_encoder_for_CS_GetProgramInvocationAttributes_Response_control_controlling_runningMode = $._encode_choice<CS_GetProgramInvocationAttributes_Response_control_controlling_runningMode>({
    "freeRunning": $._encode_implicit(_TagClass.context, 0, () => $._encodeNull, $.BER),
    "cycleLimited": $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER),
    "stepLimited": $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER),
}, $.BER); }
    return _cached_encoder_for_CS_GetProgramInvocationAttributes_Response_control_controlling_runningMode(value, elGetter);
}


/* eslint-enable */
