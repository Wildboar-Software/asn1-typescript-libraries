/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SleBindReturn, _decode_SleBindReturn, _encode_SleBindReturn } from "../CCSDS-SLE-TRANSFER-SERVICE-BIND-TYPES/SleBindReturn.ta.mjs";
import { SleUnbindReturn, _decode_SleUnbindReturn, _encode_SleUnbindReturn } from "../CCSDS-SLE-TRANSFER-SERVICE-BIND-TYPES/SleUnbindReturn.ta.mjs";
import { FspStartReturn, _decode_FspStartReturn, _encode_FspStartReturn } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-OUTGOING-PDUS/FspStartReturn.ta.mjs";
import { SleAcknowledgement, _decode_SleAcknowledgement, _encode_SleAcknowledgement } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-PDUS/SleAcknowledgement.ta.mjs";
import { FspTransferDataReturn, _decode_FspTransferDataReturn, _encode_FspTransferDataReturn } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-OUTGOING-PDUS/FspTransferDataReturn.ta.mjs";
import { FspAsyncNotifyInvocation, _decode_FspAsyncNotifyInvocation, _encode_FspAsyncNotifyInvocation } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-OUTGOING-PDUS/FspAsyncNotifyInvocation.ta.mjs";
import { SleScheduleStatusReportReturn, _decode_SleScheduleStatusReportReturn, _encode_SleScheduleStatusReportReturn } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-PDUS/SleScheduleStatusReportReturn.ta.mjs";
import { FspStatusReportInvocation, _decode_FspStatusReportInvocation, _encode_FspStatusReportInvocation } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-OUTGOING-PDUS/FspStatusReportInvocation.ta.mjs";
import { FspGetParameterReturn, _decode_FspGetParameterReturn, _encode_FspGetParameterReturn } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-OUTGOING-PDUS/FspGetParameterReturn.ta.mjs";
import { FspThrowEventReturn, _decode_FspThrowEventReturn, _encode_FspThrowEventReturn } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-OUTGOING-PDUS/FspThrowEventReturn.ta.mjs";
import { FspInvokeDirectiveReturn, _decode_FspInvokeDirectiveReturn, _encode_FspInvokeDirectiveReturn } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-OUTGOING-PDUS/FspInvokeDirectiveReturn.ta.mjs";
import { type SlePeerAbort, _decode_SlePeerAbort, _encode_SlePeerAbort } from "../CCSDS-SLE-TRANSFER-SERVICE-BIND-TYPES/SlePeerAbort.ta.mjs";


/**
 * @summary FspProviderToUserPdu
 * @description
 * 
 * SLE-PDU the FSP provider may send. Annex A2.7 collects every such PDU in this
 * choice.
 * 
 * `fspBindReturn` and `fspUnbindReturn` complete FSP-BIND and FSP-UNBIND.
 * `fspStartReturn` completes FSP-START. `fspStopReturn` completes FSP-STOP.
 * `fspTransferDataReturn` completes FSP-TRANSFER-DATA.
 * `fspAsyncNotifyInvocation` is the unconfirmed notification, valid in states 2
 * and 3. `fspScheduleStatusReportReturn` completes FSP-SCHEDULE-STATUS-REPORT.
 * `fspStatusReportInvocation` is the unconfirmed status report.
 * `fspGetParameterReturn` completes FSP-GET-PARAMETER. `fspThrowEventReturn`
 * completes FSP-THROW-EVENT. `fspInvokeDirectiveReturn` completes
 * FSP-INVOKE-DIRECTIVE. `fspPeerAbortInvocation` aborts the association. Either
 * peer may invoke it, and it is not authenticated.
 * 
 * CCSDS 912.3-B-3, sections 3.2 through 3.13 and annex A2.7.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FspProviderToUserPdu                 ::=    CHOICE
 * {  fspBindReturn                 [101] SleBindReturn
 * ,  fspUnbindReturn               [103] SleUnbindReturn
 * ,  fspStartReturn                [1]   FspStartReturn
 * ,  fspStopReturn                 [3]   SleAcknowledgement
 * ,  fspTransferDataReturn         [11]  FspTransferDataReturn
 * ,  fspAsyncNotifyInvocation      [12]  FspAsyncNotifyInvocation
 * ,  fspScheduleStatusReportReturn [5]   SleScheduleStatusReportReturn
 * ,  fspStatusReportInvocation     [13]  FspStatusReportInvocation
 * ,  fspGetParameterReturn         [7]   FspGetParameterReturn
 * ,  fspThrowEventReturn           [9]   FspThrowEventReturn
 * ,  fspInvokeDirectiveReturn      [15]  FspInvokeDirectiveReturn
 * ,  fspPeerAbortInvocation        [104] SlePeerAbort
 * }
 * ```
 */
export
type FspProviderToUserPdu =
    { fspBindReturn: SleBindReturn } /* CHOICE_ALT_ROOT */
    | { fspUnbindReturn: SleUnbindReturn } /* CHOICE_ALT_ROOT */
    | { fspStartReturn: FspStartReturn } /* CHOICE_ALT_ROOT */
    | { fspStopReturn: SleAcknowledgement } /* CHOICE_ALT_ROOT */
    | { fspTransferDataReturn: FspTransferDataReturn } /* CHOICE_ALT_ROOT */
    | { fspAsyncNotifyInvocation: FspAsyncNotifyInvocation } /* CHOICE_ALT_ROOT */
    | { fspScheduleStatusReportReturn: SleScheduleStatusReportReturn } /* CHOICE_ALT_ROOT */
    | { fspStatusReportInvocation: FspStatusReportInvocation } /* CHOICE_ALT_ROOT */
    | { fspGetParameterReturn: FspGetParameterReturn } /* CHOICE_ALT_ROOT */
    | { fspThrowEventReturn: FspThrowEventReturn } /* CHOICE_ALT_ROOT */
    | { fspInvokeDirectiveReturn: FspInvokeDirectiveReturn } /* CHOICE_ALT_ROOT */
    | { fspPeerAbortInvocation: SlePeerAbort } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_FspProviderToUserPdu: $.ASN1Decoder<FspProviderToUserPdu> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FspProviderToUserPdu
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FspProviderToUserPdu (el: _Element): FspProviderToUserPdu {
    if (!_cached_decoder_for_FspProviderToUserPdu) { _cached_decoder_for_FspProviderToUserPdu = $._decode_inextensible_choice<FspProviderToUserPdu>({
    "CONTEXT 101": [ "fspBindReturn", $._decode_implicit<SleBindReturn>(() => _decode_SleBindReturn) ],
    "CONTEXT 103": [ "fspUnbindReturn", $._decode_implicit<SleUnbindReturn>(() => _decode_SleUnbindReturn) ],
    "CONTEXT 1": [ "fspStartReturn", $._decode_implicit<FspStartReturn>(() => _decode_FspStartReturn) ],
    "CONTEXT 3": [ "fspStopReturn", $._decode_implicit<SleAcknowledgement>(() => _decode_SleAcknowledgement) ],
    "CONTEXT 11": [ "fspTransferDataReturn", $._decode_implicit<FspTransferDataReturn>(() => _decode_FspTransferDataReturn) ],
    "CONTEXT 12": [ "fspAsyncNotifyInvocation", $._decode_implicit<FspAsyncNotifyInvocation>(() => _decode_FspAsyncNotifyInvocation) ],
    "CONTEXT 5": [ "fspScheduleStatusReportReturn", $._decode_implicit<SleScheduleStatusReportReturn>(() => _decode_SleScheduleStatusReportReturn) ],
    "CONTEXT 13": [ "fspStatusReportInvocation", $._decode_implicit<FspStatusReportInvocation>(() => _decode_FspStatusReportInvocation) ],
    "CONTEXT 7": [ "fspGetParameterReturn", $._decode_implicit<FspGetParameterReturn>(() => _decode_FspGetParameterReturn) ],
    "CONTEXT 9": [ "fspThrowEventReturn", $._decode_implicit<FspThrowEventReturn>(() => _decode_FspThrowEventReturn) ],
    "CONTEXT 15": [ "fspInvokeDirectiveReturn", $._decode_implicit<FspInvokeDirectiveReturn>(() => _decode_FspInvokeDirectiveReturn) ],
    "CONTEXT 104": [ "fspPeerAbortInvocation", $._decode_implicit<SlePeerAbort>(() => _decode_SlePeerAbort) ]
}); }
    return _cached_decoder_for_FspProviderToUserPdu(el);
}

let _cached_encoder_for_FspProviderToUserPdu: $.ASN1Encoder<FspProviderToUserPdu> | null = null;

/**
 * @summary Encodes a(n) FspProviderToUserPdu into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FspProviderToUserPdu, encoded as an ASN.1 Element.
 */
export
function _encode_FspProviderToUserPdu (value: FspProviderToUserPdu, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FspProviderToUserPdu) { _cached_encoder_for_FspProviderToUserPdu = $._encode_choice<FspProviderToUserPdu>({
    "fspBindReturn": $._encode_implicit(_TagClass.context, 101, () => _encode_SleBindReturn, $.BER),
    "fspUnbindReturn": $._encode_implicit(_TagClass.context, 103, () => _encode_SleUnbindReturn, $.BER),
    "fspStartReturn": $._encode_implicit(_TagClass.context, 1, () => _encode_FspStartReturn, $.BER),
    "fspStopReturn": $._encode_implicit(_TagClass.context, 3, () => _encode_SleAcknowledgement, $.BER),
    "fspTransferDataReturn": $._encode_implicit(_TagClass.context, 11, () => _encode_FspTransferDataReturn, $.BER),
    "fspAsyncNotifyInvocation": $._encode_implicit(_TagClass.context, 12, () => _encode_FspAsyncNotifyInvocation, $.BER),
    "fspScheduleStatusReportReturn": $._encode_implicit(_TagClass.context, 5, () => _encode_SleScheduleStatusReportReturn, $.BER),
    "fspStatusReportInvocation": $._encode_implicit(_TagClass.context, 13, () => _encode_FspStatusReportInvocation, $.BER),
    "fspGetParameterReturn": $._encode_implicit(_TagClass.context, 7, () => _encode_FspGetParameterReturn, $.BER),
    "fspThrowEventReturn": $._encode_implicit(_TagClass.context, 9, () => _encode_FspThrowEventReturn, $.BER),
    "fspInvokeDirectiveReturn": $._encode_implicit(_TagClass.context, 15, () => _encode_FspInvokeDirectiveReturn, $.BER),
    "fspPeerAbortInvocation": $._encode_implicit(_TagClass.context, 104, () => _encode_SlePeerAbort, $.BER),
}, $.BER); }
    return _cached_encoder_for_FspProviderToUserPdu(value, elGetter);
}


/* eslint-enable */
