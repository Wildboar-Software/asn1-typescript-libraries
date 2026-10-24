/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SleBindInvocation, _decode_SleBindInvocation, _encode_SleBindInvocation } from "../CCSDS-SLE-TRANSFER-SERVICE-BIND-TYPES/SleBindInvocation.ta.mjs";
import { SleBindReturn, _decode_SleBindReturn, _encode_SleBindReturn } from "../CCSDS-SLE-TRANSFER-SERVICE-BIND-TYPES/SleBindReturn.ta.mjs";
import { SleUnbindInvocation, _decode_SleUnbindInvocation, _encode_SleUnbindInvocation } from "../CCSDS-SLE-TRANSFER-SERVICE-BIND-TYPES/SleUnbindInvocation.ta.mjs";
import { SleUnbindReturn, _decode_SleUnbindReturn, _encode_SleUnbindReturn } from "../CCSDS-SLE-TRANSFER-SERVICE-BIND-TYPES/SleUnbindReturn.ta.mjs";
import { RcfStartReturn, _decode_RcfStartReturn, _encode_RcfStartReturn } from "../CCSDS-SLE-TRANSFER-SERVICE-RCF-OUTGOING-PDUS/RcfStartReturn.ta.mjs";
import { SleAcknowledgement, _decode_SleAcknowledgement, _encode_SleAcknowledgement } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-PDUS/SleAcknowledgement.ta.mjs";
import { RcfTransferBuffer, _decode_RcfTransferBuffer, _encode_RcfTransferBuffer } from "../CCSDS-SLE-TRANSFER-SERVICE-RCF-OUTGOING-PDUS/RcfTransferBuffer.ta.mjs";
import { SleScheduleStatusReportReturn, _decode_SleScheduleStatusReportReturn, _encode_SleScheduleStatusReportReturn } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-PDUS/SleScheduleStatusReportReturn.ta.mjs";
import { RcfStatusReportInvocation, _decode_RcfStatusReportInvocation, _encode_RcfStatusReportInvocation } from "../CCSDS-SLE-TRANSFER-SERVICE-RCF-OUTGOING-PDUS/RcfStatusReportInvocation.ta.mjs";
import { RcfGetParameterReturn, _decode_RcfGetParameterReturn, _encode_RcfGetParameterReturn } from "../CCSDS-SLE-TRANSFER-SERVICE-RCF-OUTGOING-PDUS/RcfGetParameterReturn.ta.mjs";
import { SlePeerAbort, _decode_SlePeerAbort, _encode_SlePeerAbort } from "../CCSDS-SLE-TRANSFER-SERVICE-BIND-TYPES/SlePeerAbort.ta.mjs";


/**
 * @summary RcfProviderToUserPdu
 * @description
 *
 * One SLE-PDU sent by the RCF provider.
 *
 * rcfBindInvocation: the provider invokes RCF-BIND for a provider-initiated
 * instance. Legal only in state 1 (unbound).
 *
 * rcfBindReturn: the provider reports a user-initiated RCF-BIND. Acceptance
 * moves the provider from state 1 to state 2 (ready).
 *
 * rcfUnbindInvocation: the provider, as association initiator, asks to release
 * the association.
 *
 * rcfUnbindReturn: the provider reports the outcome of RCF-UNBIND.
 *
 * rcfStartReturn: the provider reports RCF-START. A positive result moves the
 * provider to state 3 (active).
 *
 * rcfStopReturn: the provider reports RCF-STOP. A positive result stops frame
 * delivery, releases the transfer buffer, and returns the provider to state 2
 * (ready).
 *
 * rcfTransferBuffer: one release of the transfer buffer, carrying
 * RCF-TRANSFER-DATA and RCF-SYNC-NOTIFY records in insertion order.
 *
 * rcfScheduleStatusReportReturn: the provider reports
 * RCF-SCHEDULE-STATUS-REPORT. The provider state stays unchanged.
 *
 * rcfStatusReportInvocation: the provider sends a status report in state 2 or
 * 3, as requested by the user. Unconfirmed, and sent without waiting for the
 * transfer buffer.
 *
 * rcfGetParameterReturn: the provider reports RCF-GET-PARAMETER. The provider
 * state stays unchanged.
 *
 * rcfPeerAbortInvocation: the provider aborts the association, enters state 1,
 * and discards the transfer buffer. Status-report statistics are kept for the
 * service instance provision period.
 *
 * CCSDS 911.2-B-4, sections 2.6.4.2, 3.2, 3.4.3, 3.5.3, 3.8, 3.9, 3.10, and
 * 3.11.3.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RcfProviderToUserPdu         ::=  CHOICE
 * { rcfBindInvocation                 [100]    SleBindInvocation
 * , rcfBindReturn                     [101]    SleBindReturn
 * , rcfUnbindInvocation               [102]    SleUnbindInvocation
 * , rcfUnbindReturn                   [103]    SleUnbindReturn
 * , rcfStartReturn                    [1]      RcfStartReturn
 * , rcfStopReturn                     [3]      SleAcknowledgement
 * , rcfTransferBuffer                 [8]      RcfTransferBuffer
 * , rcfScheduleStatusReportReturn     [5]      SleScheduleStatusReportReturn
 * , rcfStatusReportInvocation         [9]      RcfStatusReportInvocation
 * , rcfGetParameterReturn             [7]      RcfGetParameterReturn
 * , rcfPeerAbortInvocation            [104]    SlePeerAbort
 * }
 * ```
 */
export
type RcfProviderToUserPdu =
    { rcfBindInvocation: SleBindInvocation } /* CHOICE_ALT_ROOT */
    | { rcfBindReturn: SleBindReturn } /* CHOICE_ALT_ROOT */
    | { rcfUnbindInvocation: SleUnbindInvocation } /* CHOICE_ALT_ROOT */
    | { rcfUnbindReturn: SleUnbindReturn } /* CHOICE_ALT_ROOT */
    | { rcfStartReturn: RcfStartReturn } /* CHOICE_ALT_ROOT */
    | { rcfStopReturn: SleAcknowledgement } /* CHOICE_ALT_ROOT */
    | { rcfTransferBuffer: RcfTransferBuffer } /* CHOICE_ALT_ROOT */
    | { rcfScheduleStatusReportReturn: SleScheduleStatusReportReturn } /* CHOICE_ALT_ROOT */
    | { rcfStatusReportInvocation: RcfStatusReportInvocation } /* CHOICE_ALT_ROOT */
    | { rcfGetParameterReturn: RcfGetParameterReturn } /* CHOICE_ALT_ROOT */
    | { rcfPeerAbortInvocation: SlePeerAbort } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_RcfProviderToUserPdu: $.ASN1Decoder<RcfProviderToUserPdu> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RcfProviderToUserPdu
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RcfProviderToUserPdu (el: _Element): RcfProviderToUserPdu {
    if (!_cached_decoder_for_RcfProviderToUserPdu) { _cached_decoder_for_RcfProviderToUserPdu = $._decode_inextensible_choice<RcfProviderToUserPdu>({
    "CONTEXT 100": [ "rcfBindInvocation", $._decode_implicit<SleBindInvocation>(() => _decode_SleBindInvocation) ],
    "CONTEXT 101": [ "rcfBindReturn", $._decode_implicit<SleBindReturn>(() => _decode_SleBindReturn) ],
    "CONTEXT 102": [ "rcfUnbindInvocation", $._decode_implicit<SleUnbindInvocation>(() => _decode_SleUnbindInvocation) ],
    "CONTEXT 103": [ "rcfUnbindReturn", $._decode_implicit<SleUnbindReturn>(() => _decode_SleUnbindReturn) ],
    "CONTEXT 1": [ "rcfStartReturn", $._decode_implicit<RcfStartReturn>(() => _decode_RcfStartReturn) ],
    "CONTEXT 3": [ "rcfStopReturn", $._decode_implicit<SleAcknowledgement>(() => _decode_SleAcknowledgement) ],
    "CONTEXT 8": [ "rcfTransferBuffer", $._decode_implicit<RcfTransferBuffer>(() => _decode_RcfTransferBuffer) ],
    "CONTEXT 5": [ "rcfScheduleStatusReportReturn", $._decode_implicit<SleScheduleStatusReportReturn>(() => _decode_SleScheduleStatusReportReturn) ],
    "CONTEXT 9": [ "rcfStatusReportInvocation", $._decode_implicit<RcfStatusReportInvocation>(() => _decode_RcfStatusReportInvocation) ],
    "CONTEXT 7": [ "rcfGetParameterReturn", $._decode_implicit<RcfGetParameterReturn>(() => _decode_RcfGetParameterReturn) ],
    "CONTEXT 104": [ "rcfPeerAbortInvocation", $._decode_implicit<SlePeerAbort>(() => _decode_SlePeerAbort) ]
}); }
    return _cached_decoder_for_RcfProviderToUserPdu(el);
}

let _cached_encoder_for_RcfProviderToUserPdu: $.ASN1Encoder<RcfProviderToUserPdu> | null = null;

/**
 * @summary Encodes a(n) RcfProviderToUserPdu into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RcfProviderToUserPdu, encoded as an ASN.1 Element.
 */
export
function _encode_RcfProviderToUserPdu (value: RcfProviderToUserPdu, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RcfProviderToUserPdu) { _cached_encoder_for_RcfProviderToUserPdu = $._encode_choice<RcfProviderToUserPdu>({
    "rcfBindInvocation": $._encode_implicit(_TagClass.context, 100, () => _encode_SleBindInvocation, $.BER),
    "rcfBindReturn": $._encode_implicit(_TagClass.context, 101, () => _encode_SleBindReturn, $.BER),
    "rcfUnbindInvocation": $._encode_implicit(_TagClass.context, 102, () => _encode_SleUnbindInvocation, $.BER),
    "rcfUnbindReturn": $._encode_implicit(_TagClass.context, 103, () => _encode_SleUnbindReturn, $.BER),
    "rcfStartReturn": $._encode_implicit(_TagClass.context, 1, () => _encode_RcfStartReturn, $.BER),
    "rcfStopReturn": $._encode_implicit(_TagClass.context, 3, () => _encode_SleAcknowledgement, $.BER),
    "rcfTransferBuffer": $._encode_implicit(_TagClass.context, 8, () => _encode_RcfTransferBuffer, $.BER),
    "rcfScheduleStatusReportReturn": $._encode_implicit(_TagClass.context, 5, () => _encode_SleScheduleStatusReportReturn, $.BER),
    "rcfStatusReportInvocation": $._encode_implicit(_TagClass.context, 9, () => _encode_RcfStatusReportInvocation, $.BER),
    "rcfGetParameterReturn": $._encode_implicit(_TagClass.context, 7, () => _encode_RcfGetParameterReturn, $.BER),
    "rcfPeerAbortInvocation": $._encode_implicit(_TagClass.context, 104, () => _encode_SlePeerAbort, $.BER),
}, $.BER); }
    return _cached_encoder_for_RcfProviderToUserPdu(value, elGetter);
}


/* eslint-enable */
