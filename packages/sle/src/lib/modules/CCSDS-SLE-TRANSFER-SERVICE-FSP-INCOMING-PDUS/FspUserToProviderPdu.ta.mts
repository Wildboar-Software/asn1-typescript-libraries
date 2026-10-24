/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SleBindInvocation, _decode_SleBindInvocation, _encode_SleBindInvocation } from "../CCSDS-SLE-TRANSFER-SERVICE-BIND-TYPES/SleBindInvocation.ta.mjs";
import { SleUnbindInvocation, _decode_SleUnbindInvocation, _encode_SleUnbindInvocation } from "../CCSDS-SLE-TRANSFER-SERVICE-BIND-TYPES/SleUnbindInvocation.ta.mjs";
import { FspStartInvocation, _decode_FspStartInvocation, _encode_FspStartInvocation } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-INCOMING-PDUS/FspStartInvocation.ta.mjs";
import { SleStopInvocation, _decode_SleStopInvocation, _encode_SleStopInvocation } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-PDUS/SleStopInvocation.ta.mjs";
import { FspTransferDataInvocation, _decode_FspTransferDataInvocation, _encode_FspTransferDataInvocation } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-INCOMING-PDUS/FspTransferDataInvocation.ta.mjs";
import { SleScheduleStatusReportInvocation, _decode_SleScheduleStatusReportInvocation, _encode_SleScheduleStatusReportInvocation } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-PDUS/SleScheduleStatusReportInvocation.ta.mjs";
import { FspGetParameterInvocation, _decode_FspGetParameterInvocation, _encode_FspGetParameterInvocation } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-INCOMING-PDUS/FspGetParameterInvocation.ta.mjs";
import { FspThrowEventInvocation, _decode_FspThrowEventInvocation, _encode_FspThrowEventInvocation } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-INCOMING-PDUS/FspThrowEventInvocation.ta.mjs";
import { FspInvokeDirectiveInvocation, _decode_FspInvokeDirectiveInvocation, _encode_FspInvokeDirectiveInvocation } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-INCOMING-PDUS/FspInvokeDirectiveInvocation.ta.mjs";
import { type SlePeerAbort, _decode_SlePeerAbort, _encode_SlePeerAbort } from "../CCSDS-SLE-TRANSFER-SERVICE-BIND-TYPES/SlePeerAbort.ta.mjs";


/**
 * @summary FspUserToProviderPdu
 * @description
 * 
 * SLE-PDU the FSP provider may receive. Annex A2.6 collects every such PDU in
 * this choice.
 * 
 * `fspBindInvocation` is FSP-BIND, valid only in state 1 (unbound). It
 * establishes the association. `fspUnbindInvocation` is FSP-UNBIND and releases
 * it. `fspStartInvocation` is FSP-START, valid only in state 2 (ready).
 * `fspStopInvocation` is FSP-STOP, valid only in state 3 (active); a positive
 * result returns the provider to state 2 and stops acceptance of
 * FSP-TRANSFER-DATA. Packets not yet passed to the segment queue are discarded;
 * Packets already converted to Frame Data Units are processed to completion.
 * `fspTransferDataInvocation` is FSP-TRANSFER-DATA, valid only in state 3.
 * `fspScheduleStatusReportInvocation` requests an immediate status report,
 * periodic reports, or the end of periodic reports, and is valid in states 2
 * and 3. Periodic reporting is inactive when the provider enters state 2.
 * `fspGetParameterInvocation` asks for one FSP service parameter and is valid
 * in states 2 and 3. `fspThrowEventInvocation` is valid in states 2 and 3.
 * `fspInvokeDirectiveInvocation` is valid only in state 3.
 * `fspPeerAbortInvocation` aborts the association. Either peer may invoke it,
 * and it is not authenticated.
 * 
 * CCSDS 912.3-B-3, sections 3.2.1, 3.3, 3.4.1, 3.5, 3.6.1, 3.8.1, 3.10.1,
 * 3.11.1, 3.12.1, 3.13, and annex A2.6.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FspUserToProviderPdu                 ::=    CHOICE
 * {  fspBindInvocation             [100] SleBindInvocation
 * ,  fspUnbindInvocation           [102] SleUnbindInvocation
 * ,  fspStartInvocation            [0]   FspStartInvocation
 * ,  fspStopInvocation             [2]   SleStopInvocation
 * ,  fspTransferDataInvocation     [10]  FspTransferDataInvocation
 * ,  fspScheduleStatusReportInvocation   [4]
 *                                        SleScheduleStatusReportInvocation
 * ,  fspGetParameterInvocation     [6]   FspGetParameterInvocation
 * ,  fspThrowEventInvocation       [8]   FspThrowEventInvocation
 * ,  fspInvokeDirectiveInvocation  [14]  FspInvokeDirectiveInvocation
 * ,  fspPeerAbortInvocation        [104] SlePeerAbort
 * }
 * ```
 */
export
type FspUserToProviderPdu =
    { fspBindInvocation: SleBindInvocation } /* CHOICE_ALT_ROOT */
    | { fspUnbindInvocation: SleUnbindInvocation } /* CHOICE_ALT_ROOT */
    | { fspStartInvocation: FspStartInvocation } /* CHOICE_ALT_ROOT */
    | { fspStopInvocation: SleStopInvocation } /* CHOICE_ALT_ROOT */
    | { fspTransferDataInvocation: FspTransferDataInvocation } /* CHOICE_ALT_ROOT */
    | { fspScheduleStatusReportInvocation: SleScheduleStatusReportInvocation } /* CHOICE_ALT_ROOT */
    | { fspGetParameterInvocation: FspGetParameterInvocation } /* CHOICE_ALT_ROOT */
    | { fspThrowEventInvocation: FspThrowEventInvocation } /* CHOICE_ALT_ROOT */
    | { fspInvokeDirectiveInvocation: FspInvokeDirectiveInvocation } /* CHOICE_ALT_ROOT */
    | { fspPeerAbortInvocation: SlePeerAbort } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_FspUserToProviderPdu: $.ASN1Decoder<FspUserToProviderPdu> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FspUserToProviderPdu
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FspUserToProviderPdu (el: _Element): FspUserToProviderPdu {
    if (!_cached_decoder_for_FspUserToProviderPdu) { _cached_decoder_for_FspUserToProviderPdu = $._decode_inextensible_choice<FspUserToProviderPdu>({
    "CONTEXT 100": [ "fspBindInvocation", $._decode_implicit<SleBindInvocation>(() => _decode_SleBindInvocation) ],
    "CONTEXT 102": [ "fspUnbindInvocation", $._decode_implicit<SleUnbindInvocation>(() => _decode_SleUnbindInvocation) ],
    "CONTEXT 0": [ "fspStartInvocation", $._decode_implicit<FspStartInvocation>(() => _decode_FspStartInvocation) ],
    "CONTEXT 2": [ "fspStopInvocation", $._decode_implicit<SleStopInvocation>(() => _decode_SleStopInvocation) ],
    "CONTEXT 10": [ "fspTransferDataInvocation", $._decode_implicit<FspTransferDataInvocation>(() => _decode_FspTransferDataInvocation) ],
    "CONTEXT 4": [ "fspScheduleStatusReportInvocation", $._decode_implicit<SleScheduleStatusReportInvocation>(() => _decode_SleScheduleStatusReportInvocation) ],
    "CONTEXT 6": [ "fspGetParameterInvocation", $._decode_implicit<FspGetParameterInvocation>(() => _decode_FspGetParameterInvocation) ],
    "CONTEXT 8": [ "fspThrowEventInvocation", $._decode_implicit<FspThrowEventInvocation>(() => _decode_FspThrowEventInvocation) ],
    "CONTEXT 14": [ "fspInvokeDirectiveInvocation", $._decode_implicit<FspInvokeDirectiveInvocation>(() => _decode_FspInvokeDirectiveInvocation) ],
    "CONTEXT 104": [ "fspPeerAbortInvocation", $._decode_implicit<SlePeerAbort>(() => _decode_SlePeerAbort) ]
}); }
    return _cached_decoder_for_FspUserToProviderPdu(el);
}

let _cached_encoder_for_FspUserToProviderPdu: $.ASN1Encoder<FspUserToProviderPdu> | null = null;

/**
 * @summary Encodes a(n) FspUserToProviderPdu into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FspUserToProviderPdu, encoded as an ASN.1 Element.
 */
export
function _encode_FspUserToProviderPdu (value: FspUserToProviderPdu, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FspUserToProviderPdu) { _cached_encoder_for_FspUserToProviderPdu = $._encode_choice<FspUserToProviderPdu>({
    "fspBindInvocation": $._encode_implicit(_TagClass.context, 100, () => _encode_SleBindInvocation, $.BER),
    "fspUnbindInvocation": $._encode_implicit(_TagClass.context, 102, () => _encode_SleUnbindInvocation, $.BER),
    "fspStartInvocation": $._encode_implicit(_TagClass.context, 0, () => _encode_FspStartInvocation, $.BER),
    "fspStopInvocation": $._encode_implicit(_TagClass.context, 2, () => _encode_SleStopInvocation, $.BER),
    "fspTransferDataInvocation": $._encode_implicit(_TagClass.context, 10, () => _encode_FspTransferDataInvocation, $.BER),
    "fspScheduleStatusReportInvocation": $._encode_implicit(_TagClass.context, 4, () => _encode_SleScheduleStatusReportInvocation, $.BER),
    "fspGetParameterInvocation": $._encode_implicit(_TagClass.context, 6, () => _encode_FspGetParameterInvocation, $.BER),
    "fspThrowEventInvocation": $._encode_implicit(_TagClass.context, 8, () => _encode_FspThrowEventInvocation, $.BER),
    "fspInvokeDirectiveInvocation": $._encode_implicit(_TagClass.context, 14, () => _encode_FspInvokeDirectiveInvocation, $.BER),
    "fspPeerAbortInvocation": $._encode_implicit(_TagClass.context, 104, () => _encode_SlePeerAbort, $.BER),
}, $.BER); }
    return _cached_encoder_for_FspUserToProviderPdu(value, elGetter);
}


/* eslint-enable */
