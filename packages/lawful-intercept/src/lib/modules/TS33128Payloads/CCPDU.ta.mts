/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { UPFCCPDU, _decode_UPFCCPDU, _encode_UPFCCPDU } from "../TS33128Payloads/UPFCCPDU.ta.mjs";
// export { UPFCCPDU, _decode_UPFCCPDU, _encode_UPFCCPDU } from "../TS33128Payloads/UPFCCPDU.ta.mjs";
import { ExtendedUPFCCPDU, _decode_ExtendedUPFCCPDU, _encode_ExtendedUPFCCPDU } from "../TS33128Payloads/ExtendedUPFCCPDU.ta.mjs";
// export { ExtendedUPFCCPDU, _decode_ExtendedUPFCCPDU, _encode_ExtendedUPFCCPDU } from "../TS33128Payloads/ExtendedUPFCCPDU.ta.mjs";
import { MMSCCPDU, _decode_MMSCCPDU, _encode_MMSCCPDU } from "../TS33128Payloads/MMSCCPDU.ta.mjs";
// export { MMSCCPDU, _decode_MMSCCPDU, _encode_MMSCCPDU } from "../TS33128Payloads/MMSCCPDU.ta.mjs";
import { NIDDCCPDU, _decode_NIDDCCPDU, _encode_NIDDCCPDU } from "../TS33128Payloads/NIDDCCPDU.ta.mjs";
// export { NIDDCCPDU, _decode_NIDDCCPDU, _encode_NIDDCCPDU } from "../TS33128Payloads/NIDDCCPDU.ta.mjs";
import { PTCCCPDU, _decode_PTCCCPDU, _encode_PTCCCPDU } from "../TS33128Payloads/PTCCCPDU.ta.mjs";
// export { PTCCCPDU, _decode_PTCCCPDU, _encode_PTCCCPDU } from "../TS33128Payloads/PTCCCPDU.ta.mjs";
import { IMSCCPDU, _decode_IMSCCPDU, _encode_IMSCCPDU } from "../TS33128Payloads/IMSCCPDU.ta.mjs";
// export { IMSCCPDU, _decode_IMSCCPDU, _encode_IMSCCPDU } from "../TS33128Payloads/IMSCCPDU.ta.mjs";
import { RCSCCPDU, _decode_RCSCCPDU, _encode_RCSCCPDU } from "../TS33128Payloads/RCSCCPDU.ta.mjs";
// export { RCSCCPDU, _decode_RCSCCPDU, _encode_RCSCCPDU } from "../TS33128Payloads/RCSCCPDU.ta.mjs";
import { MCVideoCCPDU, _decode_MCVideoCCPDU, _encode_MCVideoCCPDU } from "../TS33128Payloads/MCVideoCCPDU.ta.mjs";
// export { MCVideoCCPDU, _decode_MCVideoCCPDU, _encode_MCVideoCCPDU } from "../TS33128Payloads/MCVideoCCPDU.ta.mjs";
import { MCDataCCPDU, _decode_MCDataCCPDU, _encode_MCDataCCPDU } from "../TS33128Payloads/MCDataCCPDU.ta.mjs";
// export { MCDataCCPDU, _decode_MCDataCCPDU, _encode_MCDataCCPDU } from "../TS33128Payloads/MCDataCCPDU.ta.mjs";
import { MCPTTCCPDU, _decode_MCPTTCCPDU, _encode_MCPTTCCPDU } from "../TS33128Payloads/MCPTTCCPDU.ta.mjs";
// export { MCPTTCCPDU, _decode_MCPTTCCPDU, _encode_MCPTTCCPDU } from "../TS33128Payloads/MCPTTCCPDU.ta.mjs";


/**
 * @summary CCPDU
 * @description
 * 
 * Shall be populated as described in the relevant clause of the present
 * document.
 *
 * 3GPP TS 33.128, clause 5.5.3.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CCPDU  ::=  CHOICE
 * {
 *     uPFCCPDU            [1] UPFCCPDU,
 *     extendedUPFCCPDU    [2] ExtendedUPFCCPDU,
 *     mMSCCPDU            [3] MMSCCPDU,
 * 
 *     -- In Rel-16 (threeGPP(4) ts33128(19) r16(16) version9(9)),
 *     -- tag 4 is pTCCCPDU and tag 5 is not used.
 *     -- Rel-17 or newer decoders should decode tag 4 contents as PTCCCPDU if
 *     -- r16 is used in cCPayloadOID.
 *     nIDDCCPDU           [4] NIDDCCPDU,
 *     pTCCCPDU            [5] PTCCCPDU,
 *     iMSCCPDU            [6] IMSCCPDU,
 *     rCSCCPDU            [7] RCSCCPDU,
 *     mCVideoCCPDU        [8] MCVideoCCPDU,
 *     mCDataCCPDU         [9] MCDataCCPDU,
 *     mCPTTCCPDU          [10] MCPTTCCPDU
 * }
 * ```
 */
export
type CCPDU =
    { uPFCCPDU: UPFCCPDU } /* CHOICE_ALT_ROOT */
    | { extendedUPFCCPDU: ExtendedUPFCCPDU } /* CHOICE_ALT_ROOT */
    | { mMSCCPDU: MMSCCPDU } /* CHOICE_ALT_ROOT */
    | { nIDDCCPDU: NIDDCCPDU } /* CHOICE_ALT_ROOT */
    | { pTCCCPDU: PTCCCPDU } /* CHOICE_ALT_ROOT */
    | { iMSCCPDU: IMSCCPDU } /* CHOICE_ALT_ROOT */
    | { rCSCCPDU: RCSCCPDU } /* CHOICE_ALT_ROOT */
    | { mCVideoCCPDU: MCVideoCCPDU } /* CHOICE_ALT_ROOT */
    | { mCDataCCPDU: MCDataCCPDU } /* CHOICE_ALT_ROOT */
    | { mCPTTCCPDU: MCPTTCCPDU } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_CCPDU: $.ASN1Decoder<CCPDU> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CCPDU
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CCPDU (el: _Element): CCPDU {
    if (!_cached_decoder_for_CCPDU) { _cached_decoder_for_CCPDU = $._decode_extensible_choice<CCPDU>({
    "CONTEXT 1": [ "uPFCCPDU", $._decode_implicit<UPFCCPDU>(() => _decode_UPFCCPDU) ],
    "CONTEXT 2": [ "extendedUPFCCPDU", $._decode_implicit<ExtendedUPFCCPDU>(() => _decode_ExtendedUPFCCPDU) ],
    "CONTEXT 3": [ "mMSCCPDU", $._decode_implicit<MMSCCPDU>(() => _decode_MMSCCPDU) ],
    "CONTEXT 4": [ "nIDDCCPDU", $._decode_implicit<NIDDCCPDU>(() => _decode_NIDDCCPDU) ],
    "CONTEXT 5": [ "pTCCCPDU", $._decode_implicit<PTCCCPDU>(() => _decode_PTCCCPDU) ],
    "CONTEXT 6": [ "iMSCCPDU", $._decode_implicit<IMSCCPDU>(() => _decode_IMSCCPDU) ],
    "CONTEXT 7": [ "rCSCCPDU", $._decode_explicit<RCSCCPDU>(() => _decode_RCSCCPDU) ],
    "CONTEXT 8": [ "mCVideoCCPDU", $._decode_implicit<MCVideoCCPDU>(() => _decode_MCVideoCCPDU) ],
    "CONTEXT 9": [ "mCDataCCPDU", $._decode_explicit<MCDataCCPDU>(() => _decode_MCDataCCPDU) ],
    "CONTEXT 10": [ "mCPTTCCPDU", $._decode_implicit<MCPTTCCPDU>(() => _decode_MCPTTCCPDU) ]
}); }
    return _cached_decoder_for_CCPDU(el);
}

let _cached_encoder_for_CCPDU: $.ASN1Encoder<CCPDU> | null = null;

/**
 * @summary Encodes a(n) CCPDU into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CCPDU, encoded as an ASN.1 Element.
 */
export
function _encode_CCPDU (value: CCPDU, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CCPDU) { _cached_encoder_for_CCPDU = $._encode_choice<CCPDU>({
    "uPFCCPDU": $._encode_implicit(_TagClass.context, 1, () => _encode_UPFCCPDU, $.BER),
    "extendedUPFCCPDU": $._encode_implicit(_TagClass.context, 2, () => _encode_ExtendedUPFCCPDU, $.BER),
    "mMSCCPDU": $._encode_implicit(_TagClass.context, 3, () => _encode_MMSCCPDU, $.BER),
    "nIDDCCPDU": $._encode_implicit(_TagClass.context, 4, () => _encode_NIDDCCPDU, $.BER),
    "pTCCCPDU": $._encode_implicit(_TagClass.context, 5, () => _encode_PTCCCPDU, $.BER),
    "iMSCCPDU": $._encode_implicit(_TagClass.context, 6, () => _encode_IMSCCPDU, $.BER),
    "rCSCCPDU": $._encode_explicit(_TagClass.context, 7, () => _encode_RCSCCPDU, $.BER),
    "mCVideoCCPDU": $._encode_implicit(_TagClass.context, 8, () => _encode_MCVideoCCPDU, $.BER),
    "mCDataCCPDU": $._encode_explicit(_TagClass.context, 9, () => _encode_MCDataCCPDU, $.BER),
    "mCPTTCCPDU": $._encode_implicit(_TagClass.context, 10, () => _encode_MCPTTCCPDU, $.BER),
}, $.BER); }
    return _cached_encoder_for_CCPDU(value, elGetter);
}


/* eslint-enable */
