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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";



/**
 * @summary CallProgressRes
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallProgressRes  ::=  CHOICE {
 *   noPrevCall     INTEGER(0),
 *   noDialTone     INTEGER(1),
 *   noRingBack     INTEGER(2),
 *   reOrderTone    INTEGER(3),
 *   busyTone       INTEGER(4),
 *   voiceDetected  INTEGER(5),
 *   aNSdetected    INTEGER(6),
 *   aNSamDetected  INTEGER(7),
 *   v8bisDetected  INTEGER(8),
 *   txpDetected    INTEGER(9),
 *   unKnownSig     INTEGER(20),
 *   connected      INTEGER(40),
 *   ...
 * }
 * ```
 */
export
type CallProgressRes =
    { noPrevCall: INTEGER } /* CHOICE_ALT_ROOT */
    | { noDialTone: INTEGER } /* CHOICE_ALT_ROOT */
    | { noRingBack: INTEGER } /* CHOICE_ALT_ROOT */
    | { reOrderTone: INTEGER } /* CHOICE_ALT_ROOT */
    | { busyTone: INTEGER } /* CHOICE_ALT_ROOT */
    | { voiceDetected: INTEGER } /* CHOICE_ALT_ROOT */
    | { aNSdetected: INTEGER } /* CHOICE_ALT_ROOT */
    | { aNSamDetected: INTEGER } /* CHOICE_ALT_ROOT */
    | { v8bisDetected: INTEGER } /* CHOICE_ALT_ROOT */
    | { txpDetected: INTEGER } /* CHOICE_ALT_ROOT */
    | { unKnownSig: INTEGER } /* CHOICE_ALT_ROOT */
    | { connected: INTEGER } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_CallProgressRes: $.ASN1Decoder<CallProgressRes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CallProgressRes
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CallProgressRes (el: _Element): CallProgressRes {
    if (!_cached_decoder_for_CallProgressRes) { _cached_decoder_for_CallProgressRes = $._decode_extensible_choice<CallProgressRes>({
    "CONTEXT 0": [ "noPrevCall", $._decodeInteger ],
    "CONTEXT 1": [ "noDialTone", $._decodeInteger ],
    "CONTEXT 2": [ "noRingBack", $._decodeInteger ],
    "CONTEXT 3": [ "reOrderTone", $._decodeInteger ],
    "CONTEXT 4": [ "busyTone", $._decodeInteger ],
    "CONTEXT 5": [ "voiceDetected", $._decodeInteger ],
    "CONTEXT 6": [ "aNSdetected", $._decodeInteger ],
    "CONTEXT 7": [ "aNSamDetected", $._decodeInteger ],
    "CONTEXT 8": [ "v8bisDetected", $._decodeInteger ],
    "CONTEXT 9": [ "txpDetected", $._decodeInteger ],
    "CONTEXT 10": [ "unKnownSig", $._decodeInteger ],
    "CONTEXT 11": [ "connected", $._decodeInteger ]
}); }
    return _cached_decoder_for_CallProgressRes(el);
}

let _cached_encoder_for_CallProgressRes: $.ASN1Encoder<CallProgressRes> | null = null;

/**
 * @summary Encodes a(n) CallProgressRes into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CallProgressRes, encoded as an ASN.1 Element.
 */
export
function _encode_CallProgressRes (value: CallProgressRes, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CallProgressRes) { _cached_encoder_for_CallProgressRes = $._encode_choice<CallProgressRes>({
    "noPrevCall": $._encodeInteger,
    "noDialTone": $._encodeInteger,
    "noRingBack": $._encodeInteger,
    "reOrderTone": $._encodeInteger,
    "busyTone": $._encodeInteger,
    "voiceDetected": $._encodeInteger,
    "aNSdetected": $._encodeInteger,
    "aNSamDetected": $._encodeInteger,
    "v8bisDetected": $._encodeInteger,
    "txpDetected": $._encodeInteger,
    "unKnownSig": $._encodeInteger,
    "connected": $._encodeInteger,
}, $.BER); }
    return _cached_encoder_for_CallProgressRes(value, elGetter);
}


/* eslint-enable */
