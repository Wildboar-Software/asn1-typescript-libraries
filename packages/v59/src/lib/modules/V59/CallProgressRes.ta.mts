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
 * @summary CallProgressRes
 * @description
 *
 * Result of the previous call (Table 16/V.59). Codes: `noPrevCall`(0),
 * `noDialTone`(1), `noRingBack`(2), `reOrderTone`(3), `busyTone`(4),
 * `voiceDetected`(5), `aNSdetected`(6) V.25 ANS, `aNSamDetected`(7) V.8 ANSam,
 * `v8bisDetected`(8), `txpDetected`(9) text telephone, `unKnownSig`(20),
 * `connected`(40). ITU-T Rec. V.59 (11/2000) §6.11.
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
        const value = _cached_decoder_for_CallProgressRes(el);
        const _key = Object.keys(value)[0];
        const _expected: Record<string, number> = { "noPrevCall": 0, "noDialTone": 1, "noRingBack": 2, "reOrderTone": 3, "busyTone": 4, "voiceDetected": 5, "aNSdetected": 6, "aNSamDetected": 7, "v8bisDetected": 8, "txpDetected": 9, "unKnownSig": 20, "connected": 40 }
        if (_key !== undefined && Object.prototype.hasOwnProperty.call(_expected, _key)) {
            const _raw = (value as Record<string, unknown>)[_key];
            const _n = typeof _raw === "bigint" ? Number(_raw) : Number(_raw);
            if (_n !== _expected[_key]) {
                throw new ASN1OverflowError("CallProgressRes violates INTEGER range");
            }
        }
        return value;
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
    "noPrevCall": $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER),
    "noDialTone": $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER),
    "noRingBack": $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER),
    "reOrderTone": $._encode_implicit(_TagClass.context, 3, () => $._encodeInteger, $.BER),
    "busyTone": $._encode_implicit(_TagClass.context, 4, () => $._encodeInteger, $.BER),
    "voiceDetected": $._encode_implicit(_TagClass.context, 5, () => $._encodeInteger, $.BER),
    "aNSdetected": $._encode_implicit(_TagClass.context, 6, () => $._encodeInteger, $.BER),
    "aNSamDetected": $._encode_implicit(_TagClass.context, 7, () => $._encodeInteger, $.BER),
    "v8bisDetected": $._encode_implicit(_TagClass.context, 8, () => $._encodeInteger, $.BER),
    "txpDetected": $._encode_implicit(_TagClass.context, 9, () => $._encodeInteger, $.BER),
    "unKnownSig": $._encode_implicit(_TagClass.context, 10, () => $._encodeInteger, $.BER),
    "connected": $._encode_implicit(_TagClass.context, 11, () => $._encodeInteger, $.BER),
}, $.BER); }
    return _cached_encoder_for_CallProgressRes(value, elGetter);
}

/* eslint-enable */
