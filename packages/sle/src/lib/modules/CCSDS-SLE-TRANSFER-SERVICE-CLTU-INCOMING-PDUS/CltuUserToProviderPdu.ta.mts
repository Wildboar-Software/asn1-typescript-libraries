/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SleBindInvocation, _decode_SleBindInvocation, _encode_SleBindInvocation } from "../CCSDS-SLE-TRANSFER-SERVICE-BIND-TYPES/SleBindInvocation.ta.mjs";
import { SleUnbindInvocation, _decode_SleUnbindInvocation, _encode_SleUnbindInvocation } from "../CCSDS-SLE-TRANSFER-SERVICE-BIND-TYPES/SleUnbindInvocation.ta.mjs";
import { CltuStartInvocation, _decode_CltuStartInvocation, _encode_CltuStartInvocation } from "../CCSDS-SLE-TRANSFER-SERVICE-CLTU-INCOMING-PDUS/CltuStartInvocation.ta.mjs";
import { SleStopInvocation, _decode_SleStopInvocation, _encode_SleStopInvocation } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-PDUS/SleStopInvocation.ta.mjs";
import { SleScheduleStatusReportInvocation, _decode_SleScheduleStatusReportInvocation, _encode_SleScheduleStatusReportInvocation } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-PDUS/SleScheduleStatusReportInvocation.ta.mjs";
import { CltuGetParameterInvocation, _decode_CltuGetParameterInvocation, _encode_CltuGetParameterInvocation } from "../CCSDS-SLE-TRANSFER-SERVICE-CLTU-INCOMING-PDUS/CltuGetParameterInvocation.ta.mjs";
import { CltuThrowEventInvocation, _decode_CltuThrowEventInvocation, _encode_CltuThrowEventInvocation } from "../CCSDS-SLE-TRANSFER-SERVICE-CLTU-INCOMING-PDUS/CltuThrowEventInvocation.ta.mjs";
import { CltuTransferDataInvocation, _decode_CltuTransferDataInvocation, _encode_CltuTransferDataInvocation } from "../CCSDS-SLE-TRANSFER-SERVICE-CLTU-INCOMING-PDUS/CltuTransferDataInvocation.ta.mjs";
import { SlePeerAbort, _decode_SlePeerAbort, _encode_SlePeerAbort } from "../CCSDS-SLE-TRANSFER-SERVICE-BIND-TYPES/SlePeerAbort.ta.mjs";


/**
 * @summary CltuUserToProviderPdu
 * @description
 * 
 * One user-to-provider SLE-PDU for a Forward CLTU association. An operation
 * that is illegal in the current provider state is aborted with CLTU-PEER-ABORT
 * diagnostic protocol error (section 4.1.1). An undecodable PDU is aborted with
 * diagnostic encoding error (section 4.1.2).
 *
 * cltuBindInvocation is CLTU-BIND, invoked by the user in state 1 (unbound) to
 * establish the association. It is blocking. If the return is late the user may
 * PEER-ABORT and bind again. A positive result enters state 2 (ready) and
 * leaves periodic status reporting off. The service version-number for this
 * issue is 6 (section 3.2.2.8.7).
 *
 * cltuUnbindInvocation is CLTU-UNBIND, user only, state 2. It releases the
 * association and returns the provider to state 1. unbind-reason end lets the
 * provider delete the service instance. suspend leaves a later bind possible
 * until the provision period ends. version not supported is used only as the
 * first operation after BIND when the initiator rejects the version the
 * provider proposed. The result of an accepted UNBIND is positive result.
 * UNBIND invoked outside state 2 causes PEER-ABORT.
 *
 * cltuStartInvocation is CLTU-START (section 3.4). cltuStopInvocation is
 * CLTU-STOP, user only, state 3 (section 3.5): stop radiation of CLTUs already
 * received. A positive result returns to state 2, discards CLTUs whose
 * radiation has not begun, finishes a CLTU already radiating, and still emits a
 * requested ASYNC-NOTIFY for that CLTU. A negative result keeps the buffer and
 * stays in state 3. Diagnostics are duplicate invoke id and other reason.
 *
 * cltuScheduleStatusReportInvocation is CLTU-SCHEDULE-STATUS-REPORT, user,
 * states 2 and 3 (section 3.8). report-request-type immediately sends one
 * status report and then stops periodic reports. periodically sends one report
 * now and then one every reporting-cycle seconds. stop ends periodic reports.
 * reporting-cycle is present only for periodically. A negative result leaves
 * the previous reporting setup in place. Diagnostics include duplicate invoke
 * id, already stopped, invalid reporting cycle, and other reason.
 *
 * cltuGetParameterInvocation is CLTU-GET-PARAMETER (section 3.10).
 * cltuThrowEventInvocation is CLTU-THROW-EVENT (section 3.11).
 * cltuTransferDataInvocation is CLTU-TRANSFER-DATA, state 3 only (section 3.6).
 *
 * cltuPeerAbortInvocation is CLTU-PEER-ABORT, unconfirmed, from either peer in
 * states 2 and 3, and from the user in state 1 when a CLTU-BIND return is late
 * (section 3.12). The invocation carries only the diagnostic. The association
 * ends, the provider returns to state 1, buffered CLTUs are discarded, and a
 * CLTU already radiating is finished. Status-report
 * statistics and parameters that correlate notifications with the operations
 * that caused them are kept. CCSDS 912.1-B-5, sections 2.6.4, 3.2, 3.3, 3.5,
 * 3.8, and 3.12.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CltuUserToProviderPdu          ::=    CHOICE
 * {  cltuBindInvocation                  [100]    SleBindInvocation
 * ,  cltuUnbindInvocation                [102]    SleUnbindInvocation
 * ,  cltuStartInvocation                 [0]      CltuStartInvocation
 * ,  cltuStopInvocation                  [2]      SleStopInvocation
 * ,  cltuScheduleStatusReportInvocation  [4]
 *                               SleScheduleStatusReportInvocation
 * ,  cltuGetParameterInvocation          [6]      CltuGetParameterInvocation
 * ,  cltuThrowEventInvocation            [8]      CltuThrowEventInvocation
 * ,  cltuTransferDataInvocation          [10]     CltuTransferDataInvocation
 * ,  cltuPeerAbortInvocation             [104]    SlePeerAbort
 * }
 * ```
 */
export
type CltuUserToProviderPdu =
    { cltuBindInvocation: SleBindInvocation } /* CHOICE_ALT_ROOT */
    | { cltuUnbindInvocation: SleUnbindInvocation } /* CHOICE_ALT_ROOT */
    | { cltuStartInvocation: CltuStartInvocation } /* CHOICE_ALT_ROOT */
    | { cltuStopInvocation: SleStopInvocation } /* CHOICE_ALT_ROOT */
    | { cltuScheduleStatusReportInvocation: SleScheduleStatusReportInvocation } /* CHOICE_ALT_ROOT */
    | { cltuGetParameterInvocation: CltuGetParameterInvocation } /* CHOICE_ALT_ROOT */
    | { cltuThrowEventInvocation: CltuThrowEventInvocation } /* CHOICE_ALT_ROOT */
    | { cltuTransferDataInvocation: CltuTransferDataInvocation } /* CHOICE_ALT_ROOT */
    | { cltuPeerAbortInvocation: SlePeerAbort } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_CltuUserToProviderPdu: $.ASN1Decoder<CltuUserToProviderPdu> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CltuUserToProviderPdu
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CltuUserToProviderPdu (el: _Element): CltuUserToProviderPdu {
    if (!_cached_decoder_for_CltuUserToProviderPdu) { _cached_decoder_for_CltuUserToProviderPdu = $._decode_inextensible_choice<CltuUserToProviderPdu>({
    "CONTEXT 100": [ "cltuBindInvocation", $._decode_implicit<SleBindInvocation>(() => _decode_SleBindInvocation) ],
    "CONTEXT 102": [ "cltuUnbindInvocation", $._decode_implicit<SleUnbindInvocation>(() => _decode_SleUnbindInvocation) ],
    "CONTEXT 0": [ "cltuStartInvocation", $._decode_implicit<CltuStartInvocation>(() => _decode_CltuStartInvocation) ],
    "CONTEXT 2": [ "cltuStopInvocation", $._decode_implicit<SleStopInvocation>(() => _decode_SleStopInvocation) ],
    "CONTEXT 4": [ "cltuScheduleStatusReportInvocation", $._decode_implicit<SleScheduleStatusReportInvocation>(() => _decode_SleScheduleStatusReportInvocation) ],
    "CONTEXT 6": [ "cltuGetParameterInvocation", $._decode_implicit<CltuGetParameterInvocation>(() => _decode_CltuGetParameterInvocation) ],
    "CONTEXT 8": [ "cltuThrowEventInvocation", $._decode_implicit<CltuThrowEventInvocation>(() => _decode_CltuThrowEventInvocation) ],
    "CONTEXT 10": [ "cltuTransferDataInvocation", $._decode_implicit<CltuTransferDataInvocation>(() => _decode_CltuTransferDataInvocation) ],
    "CONTEXT 104": [ "cltuPeerAbortInvocation", $._decode_implicit<SlePeerAbort>(() => _decode_SlePeerAbort) ]
}); }
    return _cached_decoder_for_CltuUserToProviderPdu(el);
}

let _cached_encoder_for_CltuUserToProviderPdu: $.ASN1Encoder<CltuUserToProviderPdu> | null = null;

/**
 * @summary Encodes a(n) CltuUserToProviderPdu into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CltuUserToProviderPdu, encoded as an ASN.1 Element.
 */
export
function _encode_CltuUserToProviderPdu (value: CltuUserToProviderPdu, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CltuUserToProviderPdu) { _cached_encoder_for_CltuUserToProviderPdu = $._encode_choice<CltuUserToProviderPdu>({
    "cltuBindInvocation": $._encode_implicit(_TagClass.context, 100, () => _encode_SleBindInvocation, $.BER),
    "cltuUnbindInvocation": $._encode_implicit(_TagClass.context, 102, () => _encode_SleUnbindInvocation, $.BER),
    "cltuStartInvocation": $._encode_implicit(_TagClass.context, 0, () => _encode_CltuStartInvocation, $.BER),
    "cltuStopInvocation": $._encode_implicit(_TagClass.context, 2, () => _encode_SleStopInvocation, $.BER),
    "cltuScheduleStatusReportInvocation": $._encode_implicit(_TagClass.context, 4, () => _encode_SleScheduleStatusReportInvocation, $.BER),
    "cltuGetParameterInvocation": $._encode_implicit(_TagClass.context, 6, () => _encode_CltuGetParameterInvocation, $.BER),
    "cltuThrowEventInvocation": $._encode_implicit(_TagClass.context, 8, () => _encode_CltuThrowEventInvocation, $.BER),
    "cltuTransferDataInvocation": $._encode_implicit(_TagClass.context, 10, () => _encode_CltuTransferDataInvocation, $.BER),
    "cltuPeerAbortInvocation": $._encode_implicit(_TagClass.context, 104, () => _encode_SlePeerAbort, $.BER),
}, $.BER); }
    return _cached_encoder_for_CltuUserToProviderPdu(value, elGetter);
}


/* eslint-enable */
