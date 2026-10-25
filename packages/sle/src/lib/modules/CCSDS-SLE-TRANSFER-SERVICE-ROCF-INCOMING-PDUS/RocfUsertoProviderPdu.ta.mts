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
import { RocfStartInvocation, _decode_RocfStartInvocation, _encode_RocfStartInvocation } from "../CCSDS-SLE-TRANSFER-SERVICE-ROCF-INCOMING-PDUS/RocfStartInvocation.ta.mjs";
import { SleStopInvocation, _decode_SleStopInvocation, _encode_SleStopInvocation } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-PDUS/SleStopInvocation.ta.mjs";
import { SleScheduleStatusReportInvocation, _decode_SleScheduleStatusReportInvocation, _encode_SleScheduleStatusReportInvocation } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-PDUS/SleScheduleStatusReportInvocation.ta.mjs";
import { RocfGetParameterInvocation, _decode_RocfGetParameterInvocation, _encode_RocfGetParameterInvocation } from "../CCSDS-SLE-TRANSFER-SERVICE-ROCF-INCOMING-PDUS/RocfGetParameterInvocation.ta.mjs";
import { type SlePeerAbort, _decode_SlePeerAbort, _encode_SlePeerAbort } from "../CCSDS-SLE-TRANSFER-SERVICE-BIND-TYPES/SlePeerAbort.ta.mjs";


/**
 * @summary RocfUsertoProviderPdu
 * @description
 * 
 * SLE-PDU the ROCF provider can receive. The user sends START, STOP,
 * SCHEDULE-STATUS-REPORT, and GET-PARAMETER. BIND, UNBIND, and PEER-ABORT are
 * carried here when the user is the invoker: the initiator sends BIND and
 * UNBIND, and either peer may send PEER-ABORT. BIND is valid only in state 1
 * (unbound). START is valid only in state 2 (ready). STOP is valid only in
 * state 3 (active). SCHEDULE-STATUS-REPORT and GET-PARAMETER are valid in
 * states 2 and 3. An operation that the current state forbids makes the
 * performer peer-abort with protocol error.
 *
 * CCSDS 911.5-B-4, sections 2.6.4.2, 3.2.1, 3.4.1, 3.5.1, 3.8.1, 3.10.1,
 * 3.11.1, 4.1.1, and annex A2.6.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RocfUsertoProviderPdu                      ::=  CHOICE
 * {  rocfBindInvocation                  [100] SleBindInvocation
 * ,  rocfBindReturn                      [101] SleBindReturn
 * ,  rocfUnbindInvocation                [102] SleUnbindInvocation
 * ,  rocfUnbindReturn                    [103] SleUnbindReturn
 * ,  rocfStartInvocation                 [0]   RocfStartInvocation
 * ,  rocfStopInvocation                  [2]   SleStopInvocation
 * ,  rocfScheduleStatusReportInvocation  [4]
 *                                     SleScheduleStatusReportInvocation
 * ,  rocfGetParameterInvocation          [6]   RocfGetParameterInvocation
 * ,  rocfPeerAbortInvocation             [104] SlePeerAbort
 * }
 * ```
 */
export
type RocfUsertoProviderPdu =
    { rocfBindInvocation: SleBindInvocation } /* CHOICE_ALT_ROOT */
    | { rocfBindReturn: SleBindReturn } /* CHOICE_ALT_ROOT */
    | { rocfUnbindInvocation: SleUnbindInvocation } /* CHOICE_ALT_ROOT */
    | { rocfUnbindReturn: SleUnbindReturn } /* CHOICE_ALT_ROOT */
    | { rocfStartInvocation: RocfStartInvocation } /* CHOICE_ALT_ROOT */
    | { rocfStopInvocation: SleStopInvocation } /* CHOICE_ALT_ROOT */
    | { rocfScheduleStatusReportInvocation: SleScheduleStatusReportInvocation } /* CHOICE_ALT_ROOT */
    | { rocfGetParameterInvocation: RocfGetParameterInvocation } /* CHOICE_ALT_ROOT */
    | { rocfPeerAbortInvocation: SlePeerAbort } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_RocfUsertoProviderPdu: $.ASN1Decoder<RocfUsertoProviderPdu> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RocfUsertoProviderPdu
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RocfUsertoProviderPdu (el: _Element): RocfUsertoProviderPdu {
    if (!_cached_decoder_for_RocfUsertoProviderPdu) { _cached_decoder_for_RocfUsertoProviderPdu = $._decode_inextensible_choice<RocfUsertoProviderPdu>({
    "CONTEXT 100": [ "rocfBindInvocation", $._decode_implicit<SleBindInvocation>(() => _decode_SleBindInvocation) ],
    "CONTEXT 101": [ "rocfBindReturn", $._decode_implicit<SleBindReturn>(() => _decode_SleBindReturn) ],
    "CONTEXT 102": [ "rocfUnbindInvocation", $._decode_implicit<SleUnbindInvocation>(() => _decode_SleUnbindInvocation) ],
    "CONTEXT 103": [ "rocfUnbindReturn", $._decode_implicit<SleUnbindReturn>(() => _decode_SleUnbindReturn) ],
    "CONTEXT 0": [ "rocfStartInvocation", $._decode_implicit<RocfStartInvocation>(() => _decode_RocfStartInvocation) ],
    "CONTEXT 2": [ "rocfStopInvocation", $._decode_implicit<SleStopInvocation>(() => _decode_SleStopInvocation) ],
    "CONTEXT 4": [ "rocfScheduleStatusReportInvocation", $._decode_implicit<SleScheduleStatusReportInvocation>(() => _decode_SleScheduleStatusReportInvocation) ],
    "CONTEXT 6": [ "rocfGetParameterInvocation", $._decode_implicit<RocfGetParameterInvocation>(() => _decode_RocfGetParameterInvocation) ],
    "CONTEXT 104": [ "rocfPeerAbortInvocation", $._decode_implicit<SlePeerAbort>(() => _decode_SlePeerAbort) ]
}); }
    return _cached_decoder_for_RocfUsertoProviderPdu(el);
}

let _cached_encoder_for_RocfUsertoProviderPdu: $.ASN1Encoder<RocfUsertoProviderPdu> | null = null;

/**
 * @summary Encodes a(n) RocfUsertoProviderPdu into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RocfUsertoProviderPdu, encoded as an ASN.1 Element.
 */
export
function _encode_RocfUsertoProviderPdu (value: RocfUsertoProviderPdu, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RocfUsertoProviderPdu) { _cached_encoder_for_RocfUsertoProviderPdu = $._encode_choice<RocfUsertoProviderPdu>({
    "rocfBindInvocation": $._encode_implicit(_TagClass.context, 100, () => _encode_SleBindInvocation, $.BER),
    "rocfBindReturn": $._encode_implicit(_TagClass.context, 101, () => _encode_SleBindReturn, $.BER),
    "rocfUnbindInvocation": $._encode_implicit(_TagClass.context, 102, () => _encode_SleUnbindInvocation, $.BER),
    "rocfUnbindReturn": $._encode_implicit(_TagClass.context, 103, () => _encode_SleUnbindReturn, $.BER),
    "rocfStartInvocation": $._encode_implicit(_TagClass.context, 0, () => _encode_RocfStartInvocation, $.BER),
    "rocfStopInvocation": $._encode_implicit(_TagClass.context, 2, () => _encode_SleStopInvocation, $.BER),
    "rocfScheduleStatusReportInvocation": $._encode_implicit(_TagClass.context, 4, () => _encode_SleScheduleStatusReportInvocation, $.BER),
    "rocfGetParameterInvocation": $._encode_implicit(_TagClass.context, 6, () => _encode_RocfGetParameterInvocation, $.BER),
    "rocfPeerAbortInvocation": $._encode_implicit(_TagClass.context, 104, () => _encode_SlePeerAbort, $.BER),
}, $.BER); }
    return _cached_encoder_for_RocfUsertoProviderPdu(value, elGetter);
}


/* eslint-enable */
