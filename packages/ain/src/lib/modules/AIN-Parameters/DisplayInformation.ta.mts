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
 * @summary DisplayInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DisplayInformation  ::=  CHOICE{
 *         blank[0] IMPLICIT OCTET STRING(SIZE(1..20)),
 *         skip[1] IMPLICIT OCTET STRING(SIZE(1..20)),
 *         continuation[2] IMPLICIT OCTET STRING(SIZE(1..20)),
 *         calledAddress[3] IMPLICIT OCTET STRING(SIZE(1..20)),
 *         cause[4] IMPLICIT OCTET STRING(SIZE(1..20)),
 *         progressIndicator[5] IMPLICIT OCTET STRING(SIZE(1..20)),
 *         notificationIndicator[6] IMPLICIT OCTET STRING(SIZE(1..20)),
 *         prompt[7] IMPLICIT OCTET STRING(SIZE(1..20)),
 *         accumulatedDigits[8] IMPLICIT OCTET STRING(SIZE(1..20)),
 *         status[9] IMPLICIT OCTET STRING(SIZE(1..20)),
 *         inband[10] IMPLICIT OCTET STRING
 *         (SIZE(1..20)),
 *         callingAddress[11] IMPLICIT OCTET STRING(SIZE(1..20)),
 *         reason[12] IMPLICIT OCTET STRING(SIZE(1..20)),
 *         callingPartyName[13] IMPLICIT OCTET STRING(SIZE(1..20)),
 *         calledPartyName[14] IMPLICIT OCTET STRING
 *         (SIZE(1..20)),
 *         originalCalledName[15] IMPLICIT OCTET STRING(SIZE(1..20)),
 *         redirectingName[16] IMPLICIT OCTET STRING(SIZE(1..20)),
 *         connectedName[17] IMPLICIT OCTET STRING
 *         (SIZE(1..20)),
 *         origRestrictions[18] IMPLICIT OCTET STRING
 *         (SIZE(1..20)),
 *         dateTimeOfDay[19] IMPLICIT OCTET STRING(SIZE(1..20)),
 *         callAppearanceID[20] IMPLICIT OCTET STRING
 *         (SIZE(1..20)),
 *         featureAddress[21] IMPLICIT OCTET STRING(SIZE(1..20)),
 *         redirectionName[22] IMPLICIT OCTET STRING
 *         (SIZE(1..20)),
 *         redirectionNumber[23] IMPLICIT OCTET STRING(SIZE(1..20)),
 *         redirectingNumber[24] IMPLICIT OCTET STRING(SIZE(1..20)),
 *         originalCalledNumber[25] IMPLICIT OCTET STRING(SIZE(1..20)),
 *         connectedNumber[26] IMPLICIT OCTET STRING
 *         (SIZE(1..20)),
 *         text[30] IMPLICIT OCTET STRING(SIZE(1..20)),
 *         redirectingReason[31] IMPLICIT OCTET STRING(SIZE(1..20))
 *     }
 * ```
 */
export
type DisplayInformation =
    { blank: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | { skip: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | { continuation: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | { calledAddress: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | { cause: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | { progressIndicator: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | { notificationIndicator: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | { prompt: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | { accumulatedDigits: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | { status: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | { inband: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | { callingAddress: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | { reason: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | { callingPartyName: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | { calledPartyName: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | { originalCalledName: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | { redirectingName: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | { connectedName: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | { origRestrictions: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | { dateTimeOfDay: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | { callAppearanceID: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | { featureAddress: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | { redirectionName: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | { redirectionNumber: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | { redirectingNumber: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | { originalCalledNumber: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | { connectedNumber: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | { text: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | { redirectingReason: OCTET_STRING } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_DisplayInformation: $.ASN1Decoder<DisplayInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DisplayInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DisplayInformation (el: _Element): DisplayInformation {
    if (!_cached_decoder_for_DisplayInformation) { _cached_decoder_for_DisplayInformation = $._decode_inextensible_choice<DisplayInformation>({
    "CONTEXT 0": [ "blank", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ],
    "CONTEXT 1": [ "skip", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ],
    "CONTEXT 2": [ "continuation", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ],
    "CONTEXT 3": [ "calledAddress", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ],
    "CONTEXT 4": [ "cause", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ],
    "CONTEXT 5": [ "progressIndicator", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ],
    "CONTEXT 6": [ "notificationIndicator", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ],
    "CONTEXT 7": [ "prompt", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ],
    "CONTEXT 8": [ "accumulatedDigits", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ],
    "CONTEXT 9": [ "status", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ],
    "CONTEXT 10": [ "inband", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ],
    "CONTEXT 11": [ "callingAddress", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ],
    "CONTEXT 12": [ "reason", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ],
    "CONTEXT 13": [ "callingPartyName", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ],
    "CONTEXT 14": [ "calledPartyName", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ],
    "CONTEXT 15": [ "originalCalledName", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ],
    "CONTEXT 16": [ "redirectingName", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ],
    "CONTEXT 17": [ "connectedName", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ],
    "CONTEXT 18": [ "origRestrictions", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ],
    "CONTEXT 19": [ "dateTimeOfDay", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ],
    "CONTEXT 20": [ "callAppearanceID", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ],
    "CONTEXT 21": [ "featureAddress", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ],
    "CONTEXT 22": [ "redirectionName", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ],
    "CONTEXT 23": [ "redirectionNumber", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ],
    "CONTEXT 24": [ "redirectingNumber", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ],
    "CONTEXT 25": [ "originalCalledNumber", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ],
    "CONTEXT 26": [ "connectedNumber", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ],
    "CONTEXT 30": [ "text", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ],
    "CONTEXT 31": [ "redirectingReason", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ]
}); }
    return _cached_decoder_for_DisplayInformation(el);
}

let _cached_encoder_for_DisplayInformation: $.ASN1Encoder<DisplayInformation> | null = null;

/**
 * @summary Encodes a(n) DisplayInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DisplayInformation, encoded as an ASN.1 Element.
 */
export
function _encode_DisplayInformation (value: DisplayInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DisplayInformation) { _cached_encoder_for_DisplayInformation = $._encode_choice<DisplayInformation>({
    "blank": $._encode_implicit(_TagClass.context, 0, () => $._encodeOctetString, $.BER),
    "skip": $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER),
    "continuation": $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER),
    "calledAddress": $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER),
    "cause": $._encode_implicit(_TagClass.context, 4, () => $._encodeOctetString, $.BER),
    "progressIndicator": $._encode_implicit(_TagClass.context, 5, () => $._encodeOctetString, $.BER),
    "notificationIndicator": $._encode_implicit(_TagClass.context, 6, () => $._encodeOctetString, $.BER),
    "prompt": $._encode_implicit(_TagClass.context, 7, () => $._encodeOctetString, $.BER),
    "accumulatedDigits": $._encode_implicit(_TagClass.context, 8, () => $._encodeOctetString, $.BER),
    "status": $._encode_implicit(_TagClass.context, 9, () => $._encodeOctetString, $.BER),
    "inband": $._encode_implicit(_TagClass.context, 10, () => $._encodeOctetString, $.BER),
    "callingAddress": $._encode_implicit(_TagClass.context, 11, () => $._encodeOctetString, $.BER),
    "reason": $._encode_implicit(_TagClass.context, 12, () => $._encodeOctetString, $.BER),
    "callingPartyName": $._encode_implicit(_TagClass.context, 13, () => $._encodeOctetString, $.BER),
    "calledPartyName": $._encode_implicit(_TagClass.context, 14, () => $._encodeOctetString, $.BER),
    "originalCalledName": $._encode_implicit(_TagClass.context, 15, () => $._encodeOctetString, $.BER),
    "redirectingName": $._encode_implicit(_TagClass.context, 16, () => $._encodeOctetString, $.BER),
    "connectedName": $._encode_implicit(_TagClass.context, 17, () => $._encodeOctetString, $.BER),
    "origRestrictions": $._encode_implicit(_TagClass.context, 18, () => $._encodeOctetString, $.BER),
    "dateTimeOfDay": $._encode_implicit(_TagClass.context, 19, () => $._encodeOctetString, $.BER),
    "callAppearanceID": $._encode_implicit(_TagClass.context, 20, () => $._encodeOctetString, $.BER),
    "featureAddress": $._encode_implicit(_TagClass.context, 21, () => $._encodeOctetString, $.BER),
    "redirectionName": $._encode_implicit(_TagClass.context, 22, () => $._encodeOctetString, $.BER),
    "redirectionNumber": $._encode_implicit(_TagClass.context, 23, () => $._encodeOctetString, $.BER),
    "redirectingNumber": $._encode_implicit(_TagClass.context, 24, () => $._encodeOctetString, $.BER),
    "originalCalledNumber": $._encode_implicit(_TagClass.context, 25, () => $._encodeOctetString, $.BER),
    "connectedNumber": $._encode_implicit(_TagClass.context, 26, () => $._encodeOctetString, $.BER),
    "text": $._encode_implicit(_TagClass.context, 30, () => $._encodeOctetString, $.BER),
    "redirectingReason": $._encode_implicit(_TagClass.context, 31, () => $._encodeOctetString, $.BER),
}, $.BER); }
    return _cached_encoder_for_DisplayInformation(value, elGetter);
}


/* eslint-enable */
