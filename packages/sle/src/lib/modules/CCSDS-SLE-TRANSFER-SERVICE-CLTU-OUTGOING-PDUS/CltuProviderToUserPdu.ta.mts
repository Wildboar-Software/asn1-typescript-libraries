/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SleBindReturn, _decode_SleBindReturn, _encode_SleBindReturn } from "../CCSDS-SLE-TRANSFER-SERVICE-BIND-TYPES/SleBindReturn.ta.mjs";
import { SleUnbindReturn, _decode_SleUnbindReturn, _encode_SleUnbindReturn } from "../CCSDS-SLE-TRANSFER-SERVICE-BIND-TYPES/SleUnbindReturn.ta.mjs";
import { CltuStartReturn, _decode_CltuStartReturn, _encode_CltuStartReturn } from "../CCSDS-SLE-TRANSFER-SERVICE-CLTU-OUTGOING-PDUS/CltuStartReturn.ta.mjs";
import { SleAcknowledgement, _decode_SleAcknowledgement, _encode_SleAcknowledgement } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-PDUS/SleAcknowledgement.ta.mjs";
import { SleScheduleStatusReportReturn, _decode_SleScheduleStatusReportReturn, _encode_SleScheduleStatusReportReturn } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-PDUS/SleScheduleStatusReportReturn.ta.mjs";
import { CltuGetParameterReturn, _decode_CltuGetParameterReturn, _encode_CltuGetParameterReturn } from "../CCSDS-SLE-TRANSFER-SERVICE-CLTU-OUTGOING-PDUS/CltuGetParameterReturn.ta.mjs";
import { CltuThrowEventReturn, _decode_CltuThrowEventReturn, _encode_CltuThrowEventReturn } from "../CCSDS-SLE-TRANSFER-SERVICE-CLTU-OUTGOING-PDUS/CltuThrowEventReturn.ta.mjs";
import { CltuTransferDataReturn, _decode_CltuTransferDataReturn, _encode_CltuTransferDataReturn } from "../CCSDS-SLE-TRANSFER-SERVICE-CLTU-OUTGOING-PDUS/CltuTransferDataReturn.ta.mjs";
import { CltuAsyncNotifyInvocation, _decode_CltuAsyncNotifyInvocation, _encode_CltuAsyncNotifyInvocation } from "../CCSDS-SLE-TRANSFER-SERVICE-CLTU-OUTGOING-PDUS/CltuAsyncNotifyInvocation.ta.mjs";
import { CltuStatusReportInvocation, _decode_CltuStatusReportInvocation, _encode_CltuStatusReportInvocation } from "../CCSDS-SLE-TRANSFER-SERVICE-CLTU-OUTGOING-PDUS/CltuStatusReportInvocation.ta.mjs";
import { type SlePeerAbort, _decode_SlePeerAbort, _encode_SlePeerAbort } from "../CCSDS-SLE-TRANSFER-SERVICE-BIND-TYPES/SlePeerAbort.ta.mjs";


/**
 * @summary CltuProviderToUserPdu
 * @description
 * 
 * One provider-to-user SLE-PDU for a Forward CLTU association. Returns answer
 * confirmed operations. cltuAsyncNotifyInvocation and
 * cltuStatusReportInvocation are unconfirmed provider invocations.
 * cltuPeerAbortInvocation is the provider's CLTU-PEER-ABORT (section 3.12); the
 * user may send the same operation on CltuUserToProviderPdu.
 *
 * cltuBindReturn answers CLTU-BIND (section 3.2). cltuUnbindReturn answers
 * CLTU-UNBIND; an accepted unbind reports positive result and releases the
 * association (section 3.3). cltuStartReturn answers CLTU-START (section 3.4).
 * cltuStopReturn answers CLTU-STOP (section 3.5); see CltuUserToProviderPdu for
 * the stop effects. cltuScheduleStatusReportReturn answers
 * CLTU-SCHEDULE-STATUS-REPORT (section 3.8). cltuGetParameterReturn,
 * cltuThrowEventReturn, and cltuTransferDataReturn answer sections 3.10, 3.11,
 * and 3.6. cltuAsyncNotifyInvocation is section 3.7. cltuStatusReportInvocation
 * is section 3.9 and is sent only as arranged by CLTU-SCHEDULE-STATUS-REPORT.
 * CCSDS 912.1-B-5, sections 2.6.4 and 3.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CltuProviderToUserPdu          ::=    CHOICE
 * {  cltuBindReturn                         [101] SleBindReturn
 * ,  cltuUnbindReturn                       [103] SleUnbindReturn
 * ,  cltuStartReturn                        [1]   CltuStartReturn
 * ,  cltuStopReturn                         [3]   SleAcknowledgement
 * ,  cltuScheduleStatusReportReturn         [5]   SleScheduleStatusReportReturn
 * ,  cltuGetParameterReturn                 [7]   CltuGetParameterReturn
 * ,  cltuThrowEventReturn                   [9]   CltuThrowEventReturn
 * ,  cltuTransferDataReturn                 [11]  CltuTransferDataReturn
 * ,  cltuAsyncNotifyInvocation              [12]  CltuAsyncNotifyInvocation
 * ,  cltuStatusReportInvocation             [13]  CltuStatusReportInvocation
 * ,  cltuPeerAbortInvocation                [104] SlePeerAbort
 * }
 * ```
 */
export
type CltuProviderToUserPdu =
    { cltuBindReturn: SleBindReturn } /* CHOICE_ALT_ROOT */
    | { cltuUnbindReturn: SleUnbindReturn } /* CHOICE_ALT_ROOT */
    | { cltuStartReturn: CltuStartReturn } /* CHOICE_ALT_ROOT */
    | { cltuStopReturn: SleAcknowledgement } /* CHOICE_ALT_ROOT */
    | { cltuScheduleStatusReportReturn: SleScheduleStatusReportReturn } /* CHOICE_ALT_ROOT */
    | { cltuGetParameterReturn: CltuGetParameterReturn } /* CHOICE_ALT_ROOT */
    | { cltuThrowEventReturn: CltuThrowEventReturn } /* CHOICE_ALT_ROOT */
    | { cltuTransferDataReturn: CltuTransferDataReturn } /* CHOICE_ALT_ROOT */
    | { cltuAsyncNotifyInvocation: CltuAsyncNotifyInvocation } /* CHOICE_ALT_ROOT */
    | { cltuStatusReportInvocation: CltuStatusReportInvocation } /* CHOICE_ALT_ROOT */
    | { cltuPeerAbortInvocation: SlePeerAbort } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_CltuProviderToUserPdu: $.ASN1Decoder<CltuProviderToUserPdu> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CltuProviderToUserPdu
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CltuProviderToUserPdu (el: _Element): CltuProviderToUserPdu {
    if (!_cached_decoder_for_CltuProviderToUserPdu) { _cached_decoder_for_CltuProviderToUserPdu = $._decode_inextensible_choice<CltuProviderToUserPdu>({
    "CONTEXT 101": [ "cltuBindReturn", $._decode_implicit<SleBindReturn>(() => _decode_SleBindReturn) ],
    "CONTEXT 103": [ "cltuUnbindReturn", $._decode_implicit<SleUnbindReturn>(() => _decode_SleUnbindReturn) ],
    "CONTEXT 1": [ "cltuStartReturn", $._decode_implicit<CltuStartReturn>(() => _decode_CltuStartReturn) ],
    "CONTEXT 3": [ "cltuStopReturn", $._decode_implicit<SleAcknowledgement>(() => _decode_SleAcknowledgement) ],
    "CONTEXT 5": [ "cltuScheduleStatusReportReturn", $._decode_implicit<SleScheduleStatusReportReturn>(() => _decode_SleScheduleStatusReportReturn) ],
    "CONTEXT 7": [ "cltuGetParameterReturn", $._decode_implicit<CltuGetParameterReturn>(() => _decode_CltuGetParameterReturn) ],
    "CONTEXT 9": [ "cltuThrowEventReturn", $._decode_implicit<CltuThrowEventReturn>(() => _decode_CltuThrowEventReturn) ],
    "CONTEXT 11": [ "cltuTransferDataReturn", $._decode_implicit<CltuTransferDataReturn>(() => _decode_CltuTransferDataReturn) ],
    "CONTEXT 12": [ "cltuAsyncNotifyInvocation", $._decode_implicit<CltuAsyncNotifyInvocation>(() => _decode_CltuAsyncNotifyInvocation) ],
    "CONTEXT 13": [ "cltuStatusReportInvocation", $._decode_implicit<CltuStatusReportInvocation>(() => _decode_CltuStatusReportInvocation) ],
    "CONTEXT 104": [ "cltuPeerAbortInvocation", $._decode_implicit<SlePeerAbort>(() => _decode_SlePeerAbort) ]
}); }
    return _cached_decoder_for_CltuProviderToUserPdu(el);
}

let _cached_encoder_for_CltuProviderToUserPdu: $.ASN1Encoder<CltuProviderToUserPdu> | null = null;

/**
 * @summary Encodes a(n) CltuProviderToUserPdu into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CltuProviderToUserPdu, encoded as an ASN.1 Element.
 */
export
function _encode_CltuProviderToUserPdu (value: CltuProviderToUserPdu, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CltuProviderToUserPdu) { _cached_encoder_for_CltuProviderToUserPdu = $._encode_choice<CltuProviderToUserPdu>({
    "cltuBindReturn": $._encode_implicit(_TagClass.context, 101, () => _encode_SleBindReturn, $.BER),
    "cltuUnbindReturn": $._encode_implicit(_TagClass.context, 103, () => _encode_SleUnbindReturn, $.BER),
    "cltuStartReturn": $._encode_implicit(_TagClass.context, 1, () => _encode_CltuStartReturn, $.BER),
    "cltuStopReturn": $._encode_implicit(_TagClass.context, 3, () => _encode_SleAcknowledgement, $.BER),
    "cltuScheduleStatusReportReturn": $._encode_implicit(_TagClass.context, 5, () => _encode_SleScheduleStatusReportReturn, $.BER),
    "cltuGetParameterReturn": $._encode_implicit(_TagClass.context, 7, () => _encode_CltuGetParameterReturn, $.BER),
    "cltuThrowEventReturn": $._encode_implicit(_TagClass.context, 9, () => _encode_CltuThrowEventReturn, $.BER),
    "cltuTransferDataReturn": $._encode_implicit(_TagClass.context, 11, () => _encode_CltuTransferDataReturn, $.BER),
    "cltuAsyncNotifyInvocation": $._encode_implicit(_TagClass.context, 12, () => _encode_CltuAsyncNotifyInvocation, $.BER),
    "cltuStatusReportInvocation": $._encode_implicit(_TagClass.context, 13, () => _encode_CltuStatusReportInvocation, $.BER),
    "cltuPeerAbortInvocation": $._encode_implicit(_TagClass.context, 104, () => _encode_SlePeerAbort, $.BER),
}, $.BER); }
    return _cached_encoder_for_CltuProviderToUserPdu(value, elGetter);
}


/* eslint-enable */
