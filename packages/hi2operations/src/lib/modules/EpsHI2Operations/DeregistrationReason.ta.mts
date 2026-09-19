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
 * @summary DeregistrationReason
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DeregistrationReason  ::=  CHOICE
 * {
 *  reason-CodeAVP [1] INTEGER,
 *  server-AssignmentType [2] INTEGER,
 *  -- Coded according to 3GPP TS 29.229 [96]
 *  ...
 * }
 * ```
 */
export
type DeregistrationReason =
    { reason_CodeAVP: INTEGER } /* CHOICE_ALT_ROOT */
    | { server_AssignmentType: INTEGER } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_DeregistrationReason: $.ASN1Decoder<DeregistrationReason> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DeregistrationReason
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DeregistrationReason (el: _Element): DeregistrationReason {
    if (!_cached_decoder_for_DeregistrationReason) { _cached_decoder_for_DeregistrationReason = $._decode_extensible_choice<DeregistrationReason>({
    "CONTEXT 1": [ "reason_CodeAVP", $._decode_implicit<INTEGER>(() => $._decodeInteger) ],
    "CONTEXT 2": [ "server_AssignmentType", $._decode_implicit<INTEGER>(() => $._decodeInteger) ]
}); }
    return _cached_decoder_for_DeregistrationReason(el);
}

let _cached_encoder_for_DeregistrationReason: $.ASN1Encoder<DeregistrationReason> | null = null;

/**
 * @summary Encodes a(n) DeregistrationReason into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeregistrationReason, encoded as an ASN.1 Element.
 */
export
function _encode_DeregistrationReason (value: DeregistrationReason, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DeregistrationReason) { _cached_encoder_for_DeregistrationReason = $._encode_choice<DeregistrationReason>({
    "reason_CodeAVP": $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER),
    "server_AssignmentType": $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER),
}, $.BER); }
    return _cached_encoder_for_DeregistrationReason(value, elGetter);
}


/* eslint-enable */
