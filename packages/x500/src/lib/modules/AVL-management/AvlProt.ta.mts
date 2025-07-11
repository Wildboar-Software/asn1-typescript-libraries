/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    AbortAVL,
    _decode_AbortAVL,
    _encode_AbortAVL,
} from "../AVL-management/AbortAVL.ta.mjs";
import {
    AddAvlReq,
    _decode_AddAvlReq,
    _encode_AddAvlReq,
} from "../AVL-management/AddAvlReq.ta.mjs";
import {
    AddAvlRsp,
    _decode_AddAvlRsp,
    _encode_AddAvlRsp,
} from "../AVL-management/AddAvlRsp.ta.mjs";
import {
    CertReq,
    _decode_CertReq,
    _encode_CertReq,
} from "../AVL-management/CertReq.ta.mjs";
import {
    CertRsp,
    _decode_CertRsp,
    _encode_CertRsp,
} from "../AVL-management/CertRsp.ta.mjs";
import {
    DeleteAvlReq,
    _decode_DeleteAvlReq,
    _encode_DeleteAvlReq,
} from "../AVL-management/DeleteAvlReq.ta.mjs";
import {
    DeleteAvlRsp,
    _decode_DeleteAvlRsp,
    _encode_DeleteAvlRsp,
} from "../AVL-management/DeleteAvlRsp.ta.mjs";
import {
    InitializationAbort,
    _decode_InitializationAbort,
    _encode_InitializationAbort,
} from "../AVL-management/InitializationAbort.ta.mjs";
import {
    InitializationAcc,
    _decode_InitializationAcc,
    _encode_InitializationAcc,
} from "../AVL-management/InitializationAcc.ta.mjs";
import {
    InitializationRec,
    _decode_InitializationRec,
    _encode_InitializationRec,
} from "../AVL-management/InitializationRec.ta.mjs";
import {
    InitializationRej,
    _decode_InitializationRej,
    _encode_InitializationRej,
} from "../AVL-management/InitializationRej.ta.mjs";
import {
    ReplaceAvlReq,
    _decode_ReplaceAvlReq,
    _encode_ReplaceAvlReq,
} from "../AVL-management/ReplaceAvlReq.ta.mjs";
import {
    ReplaceAvlRsp,
    _decode_ReplaceAvlRsp,
    _encode_ReplaceAvlRsp,
} from "../AVL-management/ReplaceAvlRsp.ta.mjs";
/**
 * @summary AvlProt
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AvlProt  ::=  CHOICE {
 *   initReq       [0]  InitializationRec,
 *   initAcc       [1]  InitializationAcc,
 *   initRej       [2]  InitializationRej,
 *   initAbt       [3]  InitializationAbort,
 *   certReq       [4]  CertReq,
 *   certRsp       [5]  CertRsp,
 *   addAvlReq     [6]  AddAvlReq,
 *   addAvlRsp     [7]  AddAvlRsp,
 *   replaceAvlReq [8]  ReplaceAvlReq,
 *   replaceAvlRsp [9]  ReplaceAvlRsp,
 *   deleteAvlReq  [10] DeleteAvlReq,
 *   deleteAvlRsp  [11] DeleteAvlRsp,
 *   abortAVL      [12] AbortAVL,
 *   ... }
 * ```
 */
export type AvlProt =
    | { initReq: InitializationRec } /* CHOICE_ALT_ROOT */
    | { initAcc: InitializationAcc } /* CHOICE_ALT_ROOT */
    | { initRej: InitializationRej } /* CHOICE_ALT_ROOT */
    | { initAbt: InitializationAbort } /* CHOICE_ALT_ROOT */
    | { certReq: CertReq } /* CHOICE_ALT_ROOT */
    | { certRsp: CertRsp } /* CHOICE_ALT_ROOT */
    | { addAvlReq: AddAvlReq } /* CHOICE_ALT_ROOT */
    | { addAvlRsp: AddAvlRsp } /* CHOICE_ALT_ROOT */
    | { replaceAvlReq: ReplaceAvlReq } /* CHOICE_ALT_ROOT */
    | { replaceAvlRsp: ReplaceAvlRsp } /* CHOICE_ALT_ROOT */
    | { deleteAvlReq: DeleteAvlReq } /* CHOICE_ALT_ROOT */
    | { deleteAvlRsp: DeleteAvlRsp } /* CHOICE_ALT_ROOT */
    | { abortAVL: AbortAVL } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_AvlProt: $.ASN1Decoder<AvlProt> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AvlProt
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AvlProt} The decoded data structure.
 */
export function _decode_AvlProt(el: _Element): AvlProt {
    if (!_cached_decoder_for_AvlProt) {
        _cached_decoder_for_AvlProt = $._decode_extensible_choice<AvlProt>({
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
                "certReq",
                $._decode_implicit<CertReq>(() => _decode_CertReq),
            ],
            "CONTEXT 5": [
                "certRsp",
                $._decode_implicit<CertRsp>(() => _decode_CertRsp),
            ],
            "CONTEXT 6": [
                "addAvlReq",
                $._decode_implicit<AddAvlReq>(() => _decode_AddAvlReq),
            ],
            "CONTEXT 7": [
                "addAvlRsp",
                $._decode_implicit<AddAvlRsp>(() => _decode_AddAvlRsp),
            ],
            "CONTEXT 8": [
                "replaceAvlReq",
                $._decode_implicit<ReplaceAvlReq>(() => _decode_ReplaceAvlReq),
            ],
            "CONTEXT 9": [
                "replaceAvlRsp",
                $._decode_implicit<ReplaceAvlRsp>(() => _decode_ReplaceAvlRsp),
            ],
            "CONTEXT 10": [
                "deleteAvlReq",
                $._decode_implicit<DeleteAvlReq>(() => _decode_DeleteAvlReq),
            ],
            "CONTEXT 11": [
                "deleteAvlRsp",
                $._decode_implicit<DeleteAvlRsp>(() => _decode_DeleteAvlRsp),
            ],
            "CONTEXT 12": [
                "abortAVL",
                $._decode_implicit<AbortAVL>(() => _decode_AbortAVL),
            ],
        });
    }
    return _cached_decoder_for_AvlProt(el);
}

let _cached_encoder_for_AvlProt: $.ASN1Encoder<AvlProt> | null = null;

/**
 * @summary Encodes a(n) AvlProt into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AvlProt, encoded as an ASN.1 Element.
 */
export function _encode_AvlProt(
    value: AvlProt,
    elGetter: $.ASN1Encoder<AvlProt>
): _Element {
    if (!_cached_encoder_for_AvlProt) {
        _cached_encoder_for_AvlProt = $._encode_choice<AvlProt>(
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
                certReq: $._encode_implicit(
                    _TagClass.context,
                    4,
                    () => _encode_CertReq,
                    $.DER
                ),
                certRsp: $._encode_implicit(
                    _TagClass.context,
                    5,
                    () => _encode_CertRsp,
                    $.DER
                ),
                addAvlReq: $._encode_implicit(
                    _TagClass.context,
                    6,
                    () => _encode_AddAvlReq,
                    $.DER
                ),
                addAvlRsp: $._encode_implicit(
                    _TagClass.context,
                    7,
                    () => _encode_AddAvlRsp,
                    $.DER
                ),
                replaceAvlReq: $._encode_implicit(
                    _TagClass.context,
                    8,
                    () => _encode_ReplaceAvlReq,
                    $.DER
                ),
                replaceAvlRsp: $._encode_implicit(
                    _TagClass.context,
                    9,
                    () => _encode_ReplaceAvlRsp,
                    $.DER
                ),
                deleteAvlReq: $._encode_implicit(
                    _TagClass.context,
                    10,
                    () => _encode_DeleteAvlReq,
                    $.DER
                ),
                deleteAvlRsp: $._encode_implicit(
                    _TagClass.context,
                    11,
                    () => _encode_DeleteAvlRsp,
                    $.DER
                ),
                abortAVL: $._encode_implicit(
                    _TagClass.context,
                    12,
                    () => _encode_AbortAVL,
                    $.DER
                ),
            },
            $.DER
        );
    }
    return _cached_encoder_for_AvlProt(value, elGetter);
}


/* eslint-enable */
