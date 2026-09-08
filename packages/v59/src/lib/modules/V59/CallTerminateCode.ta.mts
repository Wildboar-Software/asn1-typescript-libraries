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
 * @summary CallTerminateCode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallTerminateCode  ::=  CHOICE {
 *   causeUnidentified            INTEGER(0),
 *   dCEpowerLoss                 INTEGER(20),
 *   equipmentFailure             INTEGER(21),
 *   inactivityTimerExpired       INTEGER(25),
 *   cct108isOffInhibitsDial      INTEGER(31),
 *   cct108turnedOff              INTEGER(32),
 *   noNumberProvided             INTEGER(40),
 *   blacklistedNumber            INTEGER(41),
 *   callAttemptsLimitExceeded    INTEGER(42),
 *   extensionDeviceOffHook       INTEGER(43),
 *   callSetupFailTimerExpired    INTEGER(44),
 *   incomingCallDetected         INTEGER(45),
 *   loopCurrentInterrupted       INTEGER(46),
 *   noDialTone                   INTEGER(47),
 *   voiceDetected                INTEGER(48),
 *   reorderTone                  INTEGER(49),
 *   sitTone                      INTEGER(50),
 *   engagedTone                  INTEGER(51),
 *   longSpaceDisconnect          INTEGER(52),
 *   carrierLost                  INTEGER(60),
 *   trainingFailed               INTEGER(61),
 *   noModulationinCommon         INTEGER(62),
 *   retrainFailed                INTEGER(63),
 *   retrainAttemptCountExceeded  INTEGER(64),
 *   gstnCleardownReceived        INTEGER(65),
 *   faxDetected                  INTEGER(66),
 *   protocolError                INTEGER(80),
 *   userDisconnect               INTEGER(90),
 *   onHoldTimerExpired           INTEGER(100),
 *   onHoldRemoteDisc             INTEGER(101),
 *   ...
 * }
 * ```
 */
export
type CallTerminateCode =
    { causeUnidentified: INTEGER } /* CHOICE_ALT_ROOT */
    | { dCEpowerLoss: INTEGER } /* CHOICE_ALT_ROOT */
    | { equipmentFailure: INTEGER } /* CHOICE_ALT_ROOT */
    | { inactivityTimerExpired: INTEGER } /* CHOICE_ALT_ROOT */
    | { cct108isOffInhibitsDial: INTEGER } /* CHOICE_ALT_ROOT */
    | { cct108turnedOff: INTEGER } /* CHOICE_ALT_ROOT */
    | { noNumberProvided: INTEGER } /* CHOICE_ALT_ROOT */
    | { blacklistedNumber: INTEGER } /* CHOICE_ALT_ROOT */
    | { callAttemptsLimitExceeded: INTEGER } /* CHOICE_ALT_ROOT */
    | { extensionDeviceOffHook: INTEGER } /* CHOICE_ALT_ROOT */
    | { callSetupFailTimerExpired: INTEGER } /* CHOICE_ALT_ROOT */
    | { incomingCallDetected: INTEGER } /* CHOICE_ALT_ROOT */
    | { loopCurrentInterrupted: INTEGER } /* CHOICE_ALT_ROOT */
    | { noDialTone: INTEGER } /* CHOICE_ALT_ROOT */
    | { voiceDetected: INTEGER } /* CHOICE_ALT_ROOT */
    | { reorderTone: INTEGER } /* CHOICE_ALT_ROOT */
    | { sitTone: INTEGER } /* CHOICE_ALT_ROOT */
    | { engagedTone: INTEGER } /* CHOICE_ALT_ROOT */
    | { longSpaceDisconnect: INTEGER } /* CHOICE_ALT_ROOT */
    | { carrierLost: INTEGER } /* CHOICE_ALT_ROOT */
    | { trainingFailed: INTEGER } /* CHOICE_ALT_ROOT */
    | { noModulationinCommon: INTEGER } /* CHOICE_ALT_ROOT */
    | { retrainFailed: INTEGER } /* CHOICE_ALT_ROOT */
    | { retrainAttemptCountExceeded: INTEGER } /* CHOICE_ALT_ROOT */
    | { gstnCleardownReceived: INTEGER } /* CHOICE_ALT_ROOT */
    | { faxDetected: INTEGER } /* CHOICE_ALT_ROOT */
    | { protocolError: INTEGER } /* CHOICE_ALT_ROOT */
    | { userDisconnect: INTEGER } /* CHOICE_ALT_ROOT */
    | { onHoldTimerExpired: INTEGER } /* CHOICE_ALT_ROOT */
    | { onHoldRemoteDisc: INTEGER } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_CallTerminateCode: $.ASN1Decoder<CallTerminateCode> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CallTerminateCode
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CallTerminateCode (el: _Element): CallTerminateCode {
    if (!_cached_decoder_for_CallTerminateCode) { _cached_decoder_for_CallTerminateCode = $._decode_extensible_choice<CallTerminateCode>({
    "CONTEXT 0": [ "causeUnidentified", $._decodeInteger ],
    "CONTEXT 1": [ "dCEpowerLoss", $._decodeInteger ],
    "CONTEXT 2": [ "equipmentFailure", $._decodeInteger ],
    "CONTEXT 3": [ "inactivityTimerExpired", $._decodeInteger ],
    "CONTEXT 4": [ "cct108isOffInhibitsDial", $._decodeInteger ],
    "CONTEXT 5": [ "cct108turnedOff", $._decodeInteger ],
    "CONTEXT 6": [ "noNumberProvided", $._decodeInteger ],
    "CONTEXT 7": [ "blacklistedNumber", $._decodeInteger ],
    "CONTEXT 8": [ "callAttemptsLimitExceeded", $._decodeInteger ],
    "CONTEXT 9": [ "extensionDeviceOffHook", $._decodeInteger ],
    "CONTEXT 10": [ "callSetupFailTimerExpired", $._decodeInteger ],
    "CONTEXT 11": [ "incomingCallDetected", $._decodeInteger ],
    "CONTEXT 12": [ "loopCurrentInterrupted", $._decodeInteger ],
    "CONTEXT 13": [ "noDialTone", $._decodeInteger ],
    "CONTEXT 14": [ "voiceDetected", $._decodeInteger ],
    "CONTEXT 15": [ "reorderTone", $._decodeInteger ],
    "CONTEXT 16": [ "sitTone", $._decodeInteger ],
    "CONTEXT 17": [ "engagedTone", $._decodeInteger ],
    "CONTEXT 18": [ "longSpaceDisconnect", $._decodeInteger ],
    "CONTEXT 19": [ "carrierLost", $._decodeInteger ],
    "CONTEXT 20": [ "trainingFailed", $._decodeInteger ],
    "CONTEXT 21": [ "noModulationinCommon", $._decodeInteger ],
    "CONTEXT 22": [ "retrainFailed", $._decodeInteger ],
    "CONTEXT 23": [ "retrainAttemptCountExceeded", $._decodeInteger ],
    "CONTEXT 24": [ "gstnCleardownReceived", $._decodeInteger ],
    "CONTEXT 25": [ "faxDetected", $._decodeInteger ],
    "CONTEXT 26": [ "protocolError", $._decodeInteger ],
    "CONTEXT 27": [ "userDisconnect", $._decodeInteger ],
    "CONTEXT 28": [ "onHoldTimerExpired", $._decodeInteger ],
    "CONTEXT 29": [ "onHoldRemoteDisc", $._decodeInteger ]
}); }
    return _cached_decoder_for_CallTerminateCode(el);
}

let _cached_encoder_for_CallTerminateCode: $.ASN1Encoder<CallTerminateCode> | null = null;

/**
 * @summary Encodes a(n) CallTerminateCode into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CallTerminateCode, encoded as an ASN.1 Element.
 */
export
function _encode_CallTerminateCode (value: CallTerminateCode, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CallTerminateCode) { _cached_encoder_for_CallTerminateCode = $._encode_choice<CallTerminateCode>({
    "causeUnidentified": $._encodeInteger,
    "dCEpowerLoss": $._encodeInteger,
    "equipmentFailure": $._encodeInteger,
    "inactivityTimerExpired": $._encodeInteger,
    "cct108isOffInhibitsDial": $._encodeInteger,
    "cct108turnedOff": $._encodeInteger,
    "noNumberProvided": $._encodeInteger,
    "blacklistedNumber": $._encodeInteger,
    "callAttemptsLimitExceeded": $._encodeInteger,
    "extensionDeviceOffHook": $._encodeInteger,
    "callSetupFailTimerExpired": $._encodeInteger,
    "incomingCallDetected": $._encodeInteger,
    "loopCurrentInterrupted": $._encodeInteger,
    "noDialTone": $._encodeInteger,
    "voiceDetected": $._encodeInteger,
    "reorderTone": $._encodeInteger,
    "sitTone": $._encodeInteger,
    "engagedTone": $._encodeInteger,
    "longSpaceDisconnect": $._encodeInteger,
    "carrierLost": $._encodeInteger,
    "trainingFailed": $._encodeInteger,
    "noModulationinCommon": $._encodeInteger,
    "retrainFailed": $._encodeInteger,
    "retrainAttemptCountExceeded": $._encodeInteger,
    "gstnCleardownReceived": $._encodeInteger,
    "faxDetected": $._encodeInteger,
    "protocolError": $._encodeInteger,
    "userDisconnect": $._encodeInteger,
    "onHoldTimerExpired": $._encodeInteger,
    "onHoldRemoteDisc": $._encodeInteger,
}, $.BER); }
    return _cached_encoder_for_CallTerminateCode(value, elGetter);
}


/* eslint-enable */
