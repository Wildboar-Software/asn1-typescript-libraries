/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    SPKM_DEL,
    _decode_SPKM_DEL,
    _encode_SPKM_DEL,
} from "../SpkmGssTokens/SPKM-DEL.ta.mjs";
import {
    SPKM_ERROR,
    _decode_SPKM_ERROR,
    _encode_SPKM_ERROR,
} from "../SpkmGssTokens/SPKM-ERROR.ta.mjs";
import {
    SPKM_MIC,
    _decode_SPKM_MIC,
    _encode_SPKM_MIC,
} from "../SpkmGssTokens/SPKM-MIC.ta.mjs";
import {
    SPKM_REP_IT,
    _decode_SPKM_REP_IT,
    _encode_SPKM_REP_IT,
} from "../SpkmGssTokens/SPKM-REP-IT.ta.mjs";
import {
    SPKM_REP_TI,
    _decode_SPKM_REP_TI,
    _encode_SPKM_REP_TI,
} from "../SpkmGssTokens/SPKM-REP-TI.ta.mjs";
import {
    SPKM_REQ,
    _decode_SPKM_REQ,
    _encode_SPKM_REQ,
} from "../SpkmGssTokens/SPKM-REQ.ta.mjs";
import {
    SPKM_WRAP,
    _decode_SPKM_WRAP,
    _encode_SPKM_WRAP,
} from "../SpkmGssTokens/SPKM-WRAP.ta.mjs";
/**
 * @summary SPKMInnerContextToken
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SPKMInnerContextToken  ::=  CHOICE {
 *   req     [0]  SPKM-REQ,
 *   rep-ti  [1]  SPKM-REP-TI,
 *   rep-it  [2]  SPKM-REP-IT,
 *   error   [3]  SPKM-ERROR,
 *   mic     [4]  SPKM-MIC,
 *   wrap    [5]  SPKM-WRAP,
 *   del     [6]  SPKM-DEL
 * }
 * ```
 */
export type SPKMInnerContextToken =
    | { req: SPKM_REQ } /* CHOICE_ALT_ROOT */
    | { rep_ti: SPKM_REP_TI } /* CHOICE_ALT_ROOT */
    | { rep_it: SPKM_REP_IT } /* CHOICE_ALT_ROOT */
    | { error: SPKM_ERROR } /* CHOICE_ALT_ROOT */
    | { mic: SPKM_MIC } /* CHOICE_ALT_ROOT */
    | { wrap: SPKM_WRAP } /* CHOICE_ALT_ROOT */
    | { del: SPKM_DEL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_SPKMInnerContextToken: $.ASN1Decoder<SPKMInnerContextToken> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SPKMInnerContextToken
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SPKMInnerContextToken} The decoded data structure.
 */
export function _decode_SPKMInnerContextToken(el: _Element): SPKMInnerContextToken {
    if (!_cached_decoder_for_SPKMInnerContextToken) {
        _cached_decoder_for_SPKMInnerContextToken = $._decode_inextensible_choice<SPKMInnerContextToken>(
            {
                "CONTEXT 0": [
                    "req",
                    $._decode_implicit<SPKM_REQ>(() => _decode_SPKM_REQ),
                ],
                "CONTEXT 1": [
                    "rep_ti",
                    $._decode_implicit<SPKM_REP_TI>(() => _decode_SPKM_REP_TI),
                ],
                "CONTEXT 2": [
                    "rep_it",
                    $._decode_implicit<SPKM_REP_IT>(() => _decode_SPKM_REP_IT),
                ],
                "CONTEXT 3": [
                    "error",
                    $._decode_implicit<SPKM_ERROR>(() => _decode_SPKM_ERROR),
                ],
                "CONTEXT 4": [
                    "mic",
                    $._decode_implicit<SPKM_MIC>(() => _decode_SPKM_MIC),
                ],
                "CONTEXT 5": [
                    "wrap",
                    $._decode_implicit<SPKM_WRAP>(() => _decode_SPKM_WRAP),
                ],
                "CONTEXT 6": [
                    "del",
                    $._decode_implicit<SPKM_DEL>(() => _decode_SPKM_DEL),
                ],
            }
        );
    }
    return _cached_decoder_for_SPKMInnerContextToken(el);
}

let _cached_encoder_for_SPKMInnerContextToken: $.ASN1Encoder<SPKMInnerContextToken> | null = null;

/**
 * @summary Encodes a(n) SPKMInnerContextToken into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SPKMInnerContextToken, encoded as an ASN.1 Element.
 */
export function _encode_SPKMInnerContextToken(
    value: SPKMInnerContextToken,
    elGetter: $.ASN1Encoder<SPKMInnerContextToken>
): _Element {
    if (!_cached_encoder_for_SPKMInnerContextToken) {
        _cached_encoder_for_SPKMInnerContextToken = $._encode_choice<SPKMInnerContextToken>(
            {
                req: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_SPKM_REQ,
                    $.DER
                ),
                rep_ti: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_SPKM_REP_TI,
                    $.DER
                ),
                rep_it: $._encode_implicit(
                    _TagClass.context,
                    2,
                    () => _encode_SPKM_REP_IT,
                    $.DER
                ),
                error: $._encode_implicit(
                    _TagClass.context,
                    3,
                    () => _encode_SPKM_ERROR,
                    $.DER
                ),
                mic: $._encode_implicit(
                    _TagClass.context,
                    4,
                    () => _encode_SPKM_MIC,
                    $.DER
                ),
                wrap: $._encode_implicit(
                    _TagClass.context,
                    5,
                    () => _encode_SPKM_WRAP,
                    $.DER
                ),
                del: $._encode_implicit(
                    _TagClass.context,
                    6,
                    () => _encode_SPKM_DEL,
                    $.DER
                ),
            },
            $.DER
        );
    }
    return _cached_encoder_for_SPKMInnerContextToken(value, elGetter);
}


/* eslint-enable */
