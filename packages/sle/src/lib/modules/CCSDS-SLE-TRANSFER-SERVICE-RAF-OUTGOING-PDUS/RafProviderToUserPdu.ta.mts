/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SleBindInvocation, _decode_SleBindInvocation, _encode_SleBindInvocation } from "../CCSDS-SLE-TRANSFER-SERVICE-BIND-TYPES/SleBindInvocation.ta.mjs";
import { SleBindReturn, _decode_SleBindReturn, _encode_SleBindReturn } from "../CCSDS-SLE-TRANSFER-SERVICE-BIND-TYPES/SleBindReturn.ta.mjs";
import { SleUnbindInvocation, _decode_SleUnbindInvocation, _encode_SleUnbindInvocation } from "../CCSDS-SLE-TRANSFER-SERVICE-BIND-TYPES/SleUnbindInvocation.ta.mjs";
import { SleUnbindReturn, _decode_SleUnbindReturn, _encode_SleUnbindReturn } from "../CCSDS-SLE-TRANSFER-SERVICE-BIND-TYPES/SleUnbindReturn.ta.mjs";
import { RafStartReturn, _decode_RafStartReturn, _encode_RafStartReturn } from "../CCSDS-SLE-TRANSFER-SERVICE-RAF-OUTGOING-PDUS/RafStartReturn.ta.mjs";
import { SleAcknowledgement, _decode_SleAcknowledgement, _encode_SleAcknowledgement } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-PDUS/SleAcknowledgement.ta.mjs";
import { RafTransferBuffer, _decode_RafTransferBuffer, _encode_RafTransferBuffer } from "../CCSDS-SLE-TRANSFER-SERVICE-RAF-OUTGOING-PDUS/RafTransferBuffer.ta.mjs";
import { SleScheduleStatusReportReturn, _decode_SleScheduleStatusReportReturn, _encode_SleScheduleStatusReportReturn } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-PDUS/SleScheduleStatusReportReturn.ta.mjs";
import { RafStatusReportInvocation, _decode_RafStatusReportInvocation, _encode_RafStatusReportInvocation } from "../CCSDS-SLE-TRANSFER-SERVICE-RAF-OUTGOING-PDUS/RafStatusReportInvocation.ta.mjs";
import { RafGetParameterReturn, _decode_RafGetParameterReturn, _encode_RafGetParameterReturn } from "../CCSDS-SLE-TRANSFER-SERVICE-RAF-OUTGOING-PDUS/RafGetParameterReturn.ta.mjs";
import { SlePeerAbort, _decode_SlePeerAbort, _encode_SlePeerAbort } from "../CCSDS-SLE-TRANSFER-SERVICE-BIND-TYPES/SlePeerAbort.ta.mjs";


/**
 * @summary RafProviderToUserPdu
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RafProviderToUserPdu         ::=  CHOICE
 * { rafBindInvocation                 [100]   SleBindInvocation
 * , rafBindReturn                     [101]   SleBindReturn
 * , rafUnbindInvocation               [102]   SleUnbindInvocation
 * , rafUnbindReturn                   [103]   SleUnbindReturn
 * , rafStartReturn                    [1]     RafStartReturn
 * , rafStopReturn                     [3]     SleAcknowledgement
 * , rafTransferBuffer                 [8]     RafTransferBuffer
 * , rafScheduleStatusReportReturn     [5]     SleScheduleStatusReportReturn
 * , rafStatusReportInvocation         [9]     RafStatusReportInvocation
 * , rafGetParameterReturn             [7]     RafGetParameterReturn
 * , rafPeerAbortInvocation            [104]   SlePeerAbort
 * }
 * ```
 */
export
type RafProviderToUserPdu =
    { rafBindInvocation: SleBindInvocation } /* CHOICE_ALT_ROOT */
    | { rafBindReturn: SleBindReturn } /* CHOICE_ALT_ROOT */
    | { rafUnbindInvocation: SleUnbindInvocation } /* CHOICE_ALT_ROOT */
    | { rafUnbindReturn: SleUnbindReturn } /* CHOICE_ALT_ROOT */
    | { rafStartReturn: RafStartReturn } /* CHOICE_ALT_ROOT */
    | { rafStopReturn: SleAcknowledgement } /* CHOICE_ALT_ROOT */
    | { rafTransferBuffer: RafTransferBuffer } /* CHOICE_ALT_ROOT */
    | { rafScheduleStatusReportReturn: SleScheduleStatusReportReturn } /* CHOICE_ALT_ROOT */
    | { rafStatusReportInvocation: RafStatusReportInvocation } /* CHOICE_ALT_ROOT */
    | { rafGetParameterReturn: RafGetParameterReturn } /* CHOICE_ALT_ROOT */
    | { rafPeerAbortInvocation: SlePeerAbort } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_RafProviderToUserPdu: $.ASN1Decoder<RafProviderToUserPdu> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RafProviderToUserPdu
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RafProviderToUserPdu (el: _Element): RafProviderToUserPdu {
    if (!_cached_decoder_for_RafProviderToUserPdu) { _cached_decoder_for_RafProviderToUserPdu = $._decode_inextensible_choice<RafProviderToUserPdu>({
    "CONTEXT 100": [ "rafBindInvocation", $._decode_implicit<SleBindInvocation>(() => _decode_SleBindInvocation) ],
    "CONTEXT 101": [ "rafBindReturn", $._decode_implicit<SleBindReturn>(() => _decode_SleBindReturn) ],
    "CONTEXT 102": [ "rafUnbindInvocation", $._decode_implicit<SleUnbindInvocation>(() => _decode_SleUnbindInvocation) ],
    "CONTEXT 103": [ "rafUnbindReturn", $._decode_implicit<SleUnbindReturn>(() => _decode_SleUnbindReturn) ],
    "CONTEXT 1": [ "rafStartReturn", $._decode_implicit<RafStartReturn>(() => _decode_RafStartReturn) ],
    "CONTEXT 3": [ "rafStopReturn", $._decode_implicit<SleAcknowledgement>(() => _decode_SleAcknowledgement) ],
    "CONTEXT 8": [ "rafTransferBuffer", $._decode_implicit<RafTransferBuffer>(() => _decode_RafTransferBuffer) ],
    "CONTEXT 5": [ "rafScheduleStatusReportReturn", $._decode_implicit<SleScheduleStatusReportReturn>(() => _decode_SleScheduleStatusReportReturn) ],
    "CONTEXT 9": [ "rafStatusReportInvocation", $._decode_implicit<RafStatusReportInvocation>(() => _decode_RafStatusReportInvocation) ],
    "CONTEXT 7": [ "rafGetParameterReturn", $._decode_implicit<RafGetParameterReturn>(() => _decode_RafGetParameterReturn) ],
    "CONTEXT 104": [ "rafPeerAbortInvocation", $._decode_implicit<SlePeerAbort>(() => _decode_SlePeerAbort) ]
}); }
    return _cached_decoder_for_RafProviderToUserPdu(el);
}

let _cached_encoder_for_RafProviderToUserPdu: $.ASN1Encoder<RafProviderToUserPdu> | null = null;

/**
 * @summary Encodes a(n) RafProviderToUserPdu into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RafProviderToUserPdu, encoded as an ASN.1 Element.
 */
export
function _encode_RafProviderToUserPdu (value: RafProviderToUserPdu, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RafProviderToUserPdu) { _cached_encoder_for_RafProviderToUserPdu = $._encode_choice<RafProviderToUserPdu>({
    "rafBindInvocation": $._encode_implicit(_TagClass.context, 100, () => _encode_SleBindInvocation, $.BER),
    "rafBindReturn": $._encode_implicit(_TagClass.context, 101, () => _encode_SleBindReturn, $.BER),
    "rafUnbindInvocation": $._encode_implicit(_TagClass.context, 102, () => _encode_SleUnbindInvocation, $.BER),
    "rafUnbindReturn": $._encode_implicit(_TagClass.context, 103, () => _encode_SleUnbindReturn, $.BER),
    "rafStartReturn": $._encode_implicit(_TagClass.context, 1, () => _encode_RafStartReturn, $.BER),
    "rafStopReturn": $._encode_implicit(_TagClass.context, 3, () => _encode_SleAcknowledgement, $.BER),
    "rafTransferBuffer": $._encode_implicit(_TagClass.context, 8, () => _encode_RafTransferBuffer, $.BER),
    "rafScheduleStatusReportReturn": $._encode_implicit(_TagClass.context, 5, () => _encode_SleScheduleStatusReportReturn, $.BER),
    "rafStatusReportInvocation": $._encode_implicit(_TagClass.context, 9, () => _encode_RafStatusReportInvocation, $.BER),
    "rafGetParameterReturn": $._encode_implicit(_TagClass.context, 7, () => _encode_RafGetParameterReturn, $.BER),
    "rafPeerAbortInvocation": $._encode_implicit(_TagClass.context, 104, () => _encode_SlePeerAbort, $.BER),
}, $.BER); }
    return _cached_encoder_for_RafProviderToUserPdu(value, elGetter);
}


/* eslint-enable */
