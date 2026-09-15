/* eslint-disable */
import {
    INTEGER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError, ASN1OverflowError } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary CallTerminateCode
 * @description
 *
 * Why the last call ended (Table 17/V.59 as aligned by ITU-T Rec. V.59 Cor.2
 * (03/2002) clause 3; ASN.1 codes govern). `causeUnidentified`(0); DCE
 * `dCEpowerLoss`(20), `equipmentFailure`(21), `inactivityTimerExpired`(25);
 * V.24 108 `cct108isOffInhibitsDial`(31), `cct108turnedOff`(32); dialling
 * `noNumberProvided`(40), `blacklistedNumber`(41),
 * `callAttemptsLimitExceeded`(42), `extensionDeviceOffHook`(43),
 * `callSetupFailTimerExpired`(44), `incomingCallDetected`(45),
 * `loopCurrentInterrupted`(46), `noDialTone`(47), `voiceDetected`(48),
 * `reorderTone`(49), `sitTone`(50), `engagedTone`(51),
 * `longSpaceDisconnect`(52); modem `carrierLost`(60), `trainingFailed`(61),
 * `noModulationinCommon`(62), `retrainFailed`(63),
 * `retrainAttemptCountExceeded`(64), `gstnCleardownReceived`(65),
 * `faxDetected`(66); `protocolError`(80); `userDisconnect`(90); V.92 hold
 * `onHoldTimerExpired`(100), `onHoldRemoteDisc`(101). ITU-T Rec. V.59 (11/2000)
 * §6.11.
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
        const value = _cached_decoder_for_CallTerminateCode(el);
        const _key = Object.keys(value)[0];
        const _expected: Record<string, number> = { "causeUnidentified": 0, "dCEpowerLoss": 20, "equipmentFailure": 21, "inactivityTimerExpired": 25, "cct108isOffInhibitsDial": 31, "cct108turnedOff": 32, "noNumberProvided": 40, "blacklistedNumber": 41, "callAttemptsLimitExceeded": 42, "extensionDeviceOffHook": 43, "callSetupFailTimerExpired": 44, "incomingCallDetected": 45, "loopCurrentInterrupted": 46, "noDialTone": 47, "voiceDetected": 48, "reorderTone": 49, "sitTone": 50, "engagedTone": 51, "longSpaceDisconnect": 52, "carrierLost": 60, "trainingFailed": 61, "noModulationinCommon": 62, "retrainFailed": 63, "retrainAttemptCountExceeded": 64, "gstnCleardownReceived": 65, "faxDetected": 66, "protocolError": 80, "userDisconnect": 90, "onHoldTimerExpired": 100, "onHoldRemoteDisc": 101 }
        if (_key !== undefined && Object.prototype.hasOwnProperty.call(_expected, _key)) {
            const _raw = (value as Record<string, unknown>)[_key];
            const _n = typeof _raw === "bigint" ? Number(_raw) : Number(_raw);
            if (_n !== _expected[_key]) {
                throw new ASN1OverflowError("CallTerminateCode violates INTEGER range");
            }
        }
        return value;
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
    "causeUnidentified": $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER),
    "dCEpowerLoss": $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER),
    "equipmentFailure": $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER),
    "inactivityTimerExpired": $._encode_implicit(_TagClass.context, 3, () => $._encodeInteger, $.BER),
    "cct108isOffInhibitsDial": $._encode_implicit(_TagClass.context, 4, () => $._encodeInteger, $.BER),
    "cct108turnedOff": $._encode_implicit(_TagClass.context, 5, () => $._encodeInteger, $.BER),
    "noNumberProvided": $._encode_implicit(_TagClass.context, 6, () => $._encodeInteger, $.BER),
    "blacklistedNumber": $._encode_implicit(_TagClass.context, 7, () => $._encodeInteger, $.BER),
    "callAttemptsLimitExceeded": $._encode_implicit(_TagClass.context, 8, () => $._encodeInteger, $.BER),
    "extensionDeviceOffHook": $._encode_implicit(_TagClass.context, 9, () => $._encodeInteger, $.BER),
    "callSetupFailTimerExpired": $._encode_implicit(_TagClass.context, 10, () => $._encodeInteger, $.BER),
    "incomingCallDetected": $._encode_implicit(_TagClass.context, 11, () => $._encodeInteger, $.BER),
    "loopCurrentInterrupted": $._encode_implicit(_TagClass.context, 12, () => $._encodeInteger, $.BER),
    "noDialTone": $._encode_implicit(_TagClass.context, 13, () => $._encodeInteger, $.BER),
    "voiceDetected": $._encode_implicit(_TagClass.context, 14, () => $._encodeInteger, $.BER),
    "reorderTone": $._encode_implicit(_TagClass.context, 15, () => $._encodeInteger, $.BER),
    "sitTone": $._encode_implicit(_TagClass.context, 16, () => $._encodeInteger, $.BER),
    "engagedTone": $._encode_implicit(_TagClass.context, 17, () => $._encodeInteger, $.BER),
    "longSpaceDisconnect": $._encode_implicit(_TagClass.context, 18, () => $._encodeInteger, $.BER),
    "carrierLost": $._encode_implicit(_TagClass.context, 19, () => $._encodeInteger, $.BER),
    "trainingFailed": $._encode_implicit(_TagClass.context, 20, () => $._encodeInteger, $.BER),
    "noModulationinCommon": $._encode_implicit(_TagClass.context, 21, () => $._encodeInteger, $.BER),
    "retrainFailed": $._encode_implicit(_TagClass.context, 22, () => $._encodeInteger, $.BER),
    "retrainAttemptCountExceeded": $._encode_implicit(_TagClass.context, 23, () => $._encodeInteger, $.BER),
    "gstnCleardownReceived": $._encode_implicit(_TagClass.context, 24, () => $._encodeInteger, $.BER),
    "faxDetected": $._encode_implicit(_TagClass.context, 25, () => $._encodeInteger, $.BER),
    "protocolError": $._encode_implicit(_TagClass.context, 26, () => $._encodeInteger, $.BER),
    "userDisconnect": $._encode_implicit(_TagClass.context, 27, () => $._encodeInteger, $.BER),
    "onHoldTimerExpired": $._encode_implicit(_TagClass.context, 28, () => $._encodeInteger, $.BER),
    "onHoldRemoteDisc": $._encode_implicit(_TagClass.context, 29, () => $._encodeInteger, $.BER),
}, $.BER); }
    return _cached_encoder_for_CallTerminateCode(value, elGetter);
}

/* eslint-enable */
