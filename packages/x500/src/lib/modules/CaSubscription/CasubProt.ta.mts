/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    CAsubscribeAbort,
    _decode_CAsubscribeAbort,
    _encode_CAsubscribeAbort,
} from "../CaSubscription/CAsubscribeAbort.ta.mjs";
import {
    CertReplaceReq,
    _decode_CertReplaceReq,
    _encode_CertReplaceReq,
} from "../CaSubscription/CertReplaceReq.ta.mjs";
import {
    CertReplaceRsp,
    _decode_CertReplaceRsp,
    _encode_CertReplaceRsp,
} from "../CaSubscription/CertReplaceRsp.ta.mjs";
import {
    CertSubscribeReq,
    _decode_CertSubscribeReq,
    _encode_CertSubscribeReq,
} from "../CaSubscription/CertSubscribeReq.ta.mjs";
import {
    CertSubscribeRsp,
    _decode_CertSubscribeRsp,
    _encode_CertSubscribeRsp,
} from "../CaSubscription/CertSubscribeRsp.ta.mjs";
import {
    CertUnsubscribeReq,
    _decode_CertUnsubscribeReq,
    _encode_CertUnsubscribeReq,
} from "../CaSubscription/CertUnsubscribeReq.ta.mjs";
import {
    CertUnsubscribeRsp,
    _decode_CertUnsubscribeRsp,
    _encode_CertUnsubscribeRsp,
} from "../CaSubscription/CertUnsubscribeRsp.ta.mjs";
import {
    CertUpdateReq,
    _decode_CertUpdateReq,
    _encode_CertUpdateReq,
} from "../CaSubscription/CertUpdateReq.ta.mjs";
import {
    CertUpdateRsp,
    _decode_CertUpdateRsp,
    _encode_CertUpdateRsp,
} from "../CaSubscription/CertUpdateRsp.ta.mjs";
import {
    InitializationAbort,
    _decode_InitializationAbort,
    _encode_InitializationAbort,
} from "../CaSubscription/InitializationAbort.ta.mjs";
import {
    InitializationAcc,
    _decode_InitializationAcc,
    _encode_InitializationAcc,
} from "../CaSubscription/InitializationAcc.ta.mjs";
import {
    InitializationRec,
    _decode_InitializationRec,
    _encode_InitializationRec,
} from "../CaSubscription/InitializationRec.ta.mjs";
import {
    InitializationRej,
    _decode_InitializationRej,
    _encode_InitializationRej,
} from "../CaSubscription/InitializationRej.ta.mjs";
/**
 * @summary CasubProt
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CasubProt  ::=  CHOICE {
 *   initReq             [0]  InitializationRec,
 *   initAcc             [1]  InitializationAcc,
 *   initRej             [2]  InitializationRej,
 *   initAbt             [3]  InitializationAbort,
 *   certSubscribeReq    [4]  CertSubscribeReq,
 *   certSubscribeRsp    [5]  CertSubscribeRsp,
 *   certUnsubscribeReq  [6]  CertUnsubscribeReq,
 *   certUnsubscribeRsp  [7]  CertUnsubscribeRsp,
 *   certReplaceReq      [8]  CertReplaceReq,
 *   certReplaceRsp      [9]  CertReplaceRsp,
 *   certUpdateReq       [10] CertUpdateReq,
 *   certUpdateRsp       [11] CertUpdateRsp,
 *   cAsubscribeAbort    [12] CAsubscribeAbort,
 *   ... }
 * ```
 */
export type CasubProt =
    | { initReq: InitializationRec } /* CHOICE_ALT_ROOT */
    | { initAcc: InitializationAcc } /* CHOICE_ALT_ROOT */
    | { initRej: InitializationRej } /* CHOICE_ALT_ROOT */
    | { initAbt: InitializationAbort } /* CHOICE_ALT_ROOT */
    | { certSubscribeReq: CertSubscribeReq } /* CHOICE_ALT_ROOT */
    | { certSubscribeRsp: CertSubscribeRsp } /* CHOICE_ALT_ROOT */
    | { certUnsubscribeReq: CertUnsubscribeReq } /* CHOICE_ALT_ROOT */
    | { certUnsubscribeRsp: CertUnsubscribeRsp } /* CHOICE_ALT_ROOT */
    | { certReplaceReq: CertReplaceReq } /* CHOICE_ALT_ROOT */
    | { certReplaceRsp: CertReplaceRsp } /* CHOICE_ALT_ROOT */
    | { certUpdateReq: CertUpdateReq } /* CHOICE_ALT_ROOT */
    | { certUpdateRsp: CertUpdateRsp } /* CHOICE_ALT_ROOT */
    | { cAsubscribeAbort: CAsubscribeAbort } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_CasubProt: $.ASN1Decoder<CasubProt> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CasubProt
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CasubProt} The decoded data structure.
 */
export function _decode_CasubProt(el: _Element): CasubProt {
    if (!_cached_decoder_for_CasubProt) {
        _cached_decoder_for_CasubProt = $._decode_extensible_choice<CasubProt>({
            "CONTEXT 0": [
                "initReq",
                $._decode_implicit<InitializationRec>(
                    () => _decode_InitializationRec
                ),
            ],
            "CONTEXT 1": [
                "initAcc",
                $._decode_implicit<InitializationAcc>(
                    () => _decode_InitializationAcc
                ),
            ],
            "CONTEXT 2": [
                "initRej",
                $._decode_implicit<InitializationRej>(
                    () => _decode_InitializationRej
                ),
            ],
            "CONTEXT 3": [
                "initAbt",
                $._decode_implicit<InitializationAbort>(
                    () => _decode_InitializationAbort
                ),
            ],
            "CONTEXT 4": [
                "certSubscribeReq",
                $._decode_implicit<CertSubscribeReq>(
                    () => _decode_CertSubscribeReq
                ),
            ],
            "CONTEXT 5": [
                "certSubscribeRsp",
                $._decode_implicit<CertSubscribeRsp>(
                    () => _decode_CertSubscribeRsp
                ),
            ],
            "CONTEXT 6": [
                "certUnsubscribeReq",
                $._decode_implicit<CertUnsubscribeReq>(
                    () => _decode_CertUnsubscribeReq
                ),
            ],
            "CONTEXT 7": [
                "certUnsubscribeRsp",
                $._decode_implicit<CertUnsubscribeRsp>(
                    () => _decode_CertUnsubscribeRsp
                ),
            ],
            "CONTEXT 8": [
                "certReplaceReq",
                $._decode_implicit<CertReplaceReq>(
                    () => _decode_CertReplaceReq
                ),
            ],
            "CONTEXT 9": [
                "certReplaceRsp",
                $._decode_implicit<CertReplaceRsp>(
                    () => _decode_CertReplaceRsp
                ),
            ],
            "CONTEXT 10": [
                "certUpdateReq",
                $._decode_implicit<CertUpdateReq>(() => _decode_CertUpdateReq),
            ],
            "CONTEXT 11": [
                "certUpdateRsp",
                $._decode_implicit<CertUpdateRsp>(() => _decode_CertUpdateRsp),
            ],
            "CONTEXT 12": [
                "cAsubscribeAbort",
                $._decode_implicit<CAsubscribeAbort>(
                    () => _decode_CAsubscribeAbort
                ),
            ],
        });
    }
    return _cached_decoder_for_CasubProt(el);
}

let _cached_encoder_for_CasubProt: $.ASN1Encoder<CasubProt> | null = null;

/**
 * @summary Encodes a(n) CasubProt into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CasubProt, encoded as an ASN.1 Element.
 */
export function _encode_CasubProt(
    value: CasubProt,
    elGetter: $.ASN1Encoder<CasubProt>
): _Element {
    if (!_cached_encoder_for_CasubProt) {
        _cached_encoder_for_CasubProt = $._encode_choice<CasubProt>(
            {
                initReq: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_InitializationRec,
                    $.DER
                ),
                initAcc: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_InitializationAcc,
                    $.DER
                ),
                initRej: $._encode_implicit(
                    _TagClass.context,
                    2,
                    () => _encode_InitializationRej,
                    $.DER
                ),
                initAbt: $._encode_implicit(
                    _TagClass.context,
                    3,
                    () => _encode_InitializationAbort,
                    $.DER
                ),
                certSubscribeReq: $._encode_implicit(
                    _TagClass.context,
                    4,
                    () => _encode_CertSubscribeReq,
                    $.DER
                ),
                certSubscribeRsp: $._encode_implicit(
                    _TagClass.context,
                    5,
                    () => _encode_CertSubscribeRsp,
                    $.DER
                ),
                certUnsubscribeReq: $._encode_implicit(
                    _TagClass.context,
                    6,
                    () => _encode_CertUnsubscribeReq,
                    $.DER
                ),
                certUnsubscribeRsp: $._encode_implicit(
                    _TagClass.context,
                    7,
                    () => _encode_CertUnsubscribeRsp,
                    $.DER
                ),
                certReplaceReq: $._encode_implicit(
                    _TagClass.context,
                    8,
                    () => _encode_CertReplaceReq,
                    $.DER
                ),
                certReplaceRsp: $._encode_implicit(
                    _TagClass.context,
                    9,
                    () => _encode_CertReplaceRsp,
                    $.DER
                ),
                certUpdateReq: $._encode_implicit(
                    _TagClass.context,
                    10,
                    () => _encode_CertUpdateReq,
                    $.DER
                ),
                certUpdateRsp: $._encode_implicit(
                    _TagClass.context,
                    11,
                    () => _encode_CertUpdateRsp,
                    $.DER
                ),
                cAsubscribeAbort: $._encode_implicit(
                    _TagClass.context,
                    12,
                    () => _encode_CAsubscribeAbort,
                    $.DER
                ),
            },
            $.DER
        );
    }
    return _cached_encoder_for_CasubProt(value, elGetter);
}


/* eslint-enable */
