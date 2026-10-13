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
import { RcfStartInvocation, _decode_RcfStartInvocation, _encode_RcfStartInvocation } from "../CCSDS-SLE-TRANSFER-SERVICE-RCF-INCOMING-PDUS/RcfStartInvocation.ta.mjs";
import { SleStopInvocation, _decode_SleStopInvocation, _encode_SleStopInvocation } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-PDUS/SleStopInvocation.ta.mjs";
import { SleScheduleStatusReportInvocation, _decode_SleScheduleStatusReportInvocation, _encode_SleScheduleStatusReportInvocation } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-PDUS/SleScheduleStatusReportInvocation.ta.mjs";
import { RcfGetParameterInvocation, _decode_RcfGetParameterInvocation, _encode_RcfGetParameterInvocation } from "../CCSDS-SLE-TRANSFER-SERVICE-RCF-INCOMING-PDUS/RcfGetParameterInvocation.ta.mjs";
import { SlePeerAbort, _decode_SlePeerAbort, _encode_SlePeerAbort } from "../CCSDS-SLE-TRANSFER-SERVICE-BIND-TYPES/SlePeerAbort.ta.mjs";


/**
 * @summary RcfUserToProviderPdu
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RcfUserToProviderPdu             ::=  CHOICE
 * { rcfBindInvocation                 [100] SleBindInvocation
 * , rcfBindReturn                     [101] SleBindReturn
 * , rcfUnbindInvocation               [102] SleUnbindInvocation
 * , rcfUnbindReturn                   [103] SleUnbindReturn
 * , rcfStartInvocation                [0]   RcfStartInvocation
 * , rcfStopInvocation                 [2]   SleStopInvocation
 * , rcfScheduleStatusReportInvocation [4]   SleScheduleStatusReportInvocation
 * , rcfGetParameterInvocation         [6]   RcfGetParameterInvocation
 * , rcfPeerAbortInvocation            [104] SlePeerAbort
 * }
 * ```
 */
export
type RcfUserToProviderPdu =
    { rcfBindInvocation: SleBindInvocation } /* CHOICE_ALT_ROOT */
    | { rcfBindReturn: SleBindReturn } /* CHOICE_ALT_ROOT */
    | { rcfUnbindInvocation: SleUnbindInvocation } /* CHOICE_ALT_ROOT */
    | { rcfUnbindReturn: SleUnbindReturn } /* CHOICE_ALT_ROOT */
    | { rcfStartInvocation: RcfStartInvocation } /* CHOICE_ALT_ROOT */
    | { rcfStopInvocation: SleStopInvocation } /* CHOICE_ALT_ROOT */
    | { rcfScheduleStatusReportInvocation: SleScheduleStatusReportInvocation } /* CHOICE_ALT_ROOT */
    | { rcfGetParameterInvocation: RcfGetParameterInvocation } /* CHOICE_ALT_ROOT */
    | { rcfPeerAbortInvocation: SlePeerAbort } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_RcfUserToProviderPdu: $.ASN1Decoder<RcfUserToProviderPdu> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RcfUserToProviderPdu
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RcfUserToProviderPdu (el: _Element): RcfUserToProviderPdu {
    if (!_cached_decoder_for_RcfUserToProviderPdu) { _cached_decoder_for_RcfUserToProviderPdu = $._decode_inextensible_choice<RcfUserToProviderPdu>({
    "CONTEXT 100": [ "rcfBindInvocation", $._decode_implicit<SleBindInvocation>(() => _decode_SleBindInvocation) ],
    "CONTEXT 101": [ "rcfBindReturn", $._decode_implicit<SleBindReturn>(() => _decode_SleBindReturn) ],
    "CONTEXT 102": [ "rcfUnbindInvocation", $._decode_implicit<SleUnbindInvocation>(() => _decode_SleUnbindInvocation) ],
    "CONTEXT 103": [ "rcfUnbindReturn", $._decode_implicit<SleUnbindReturn>(() => _decode_SleUnbindReturn) ],
    "CONTEXT 0": [ "rcfStartInvocation", $._decode_implicit<RcfStartInvocation>(() => _decode_RcfStartInvocation) ],
    "CONTEXT 2": [ "rcfStopInvocation", $._decode_implicit<SleStopInvocation>(() => _decode_SleStopInvocation) ],
    "CONTEXT 4": [ "rcfScheduleStatusReportInvocation", $._decode_implicit<SleScheduleStatusReportInvocation>(() => _decode_SleScheduleStatusReportInvocation) ],
    "CONTEXT 6": [ "rcfGetParameterInvocation", $._decode_implicit<RcfGetParameterInvocation>(() => _decode_RcfGetParameterInvocation) ],
    "CONTEXT 104": [ "rcfPeerAbortInvocation", $._decode_implicit<SlePeerAbort>(() => _decode_SlePeerAbort) ]
}); }
    return _cached_decoder_for_RcfUserToProviderPdu(el);
}

let _cached_encoder_for_RcfUserToProviderPdu: $.ASN1Encoder<RcfUserToProviderPdu> | null = null;

/**
 * @summary Encodes a(n) RcfUserToProviderPdu into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RcfUserToProviderPdu, encoded as an ASN.1 Element.
 */
export
function _encode_RcfUserToProviderPdu (value: RcfUserToProviderPdu, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RcfUserToProviderPdu) { _cached_encoder_for_RcfUserToProviderPdu = $._encode_choice<RcfUserToProviderPdu>({
    "rcfBindInvocation": $._encode_implicit(_TagClass.context, 100, () => _encode_SleBindInvocation, $.BER),
    "rcfBindReturn": $._encode_implicit(_TagClass.context, 101, () => _encode_SleBindReturn, $.BER),
    "rcfUnbindInvocation": $._encode_implicit(_TagClass.context, 102, () => _encode_SleUnbindInvocation, $.BER),
    "rcfUnbindReturn": $._encode_implicit(_TagClass.context, 103, () => _encode_SleUnbindReturn, $.BER),
    "rcfStartInvocation": $._encode_implicit(_TagClass.context, 0, () => _encode_RcfStartInvocation, $.BER),
    "rcfStopInvocation": $._encode_implicit(_TagClass.context, 2, () => _encode_SleStopInvocation, $.BER),
    "rcfScheduleStatusReportInvocation": $._encode_implicit(_TagClass.context, 4, () => _encode_SleScheduleStatusReportInvocation, $.BER),
    "rcfGetParameterInvocation": $._encode_implicit(_TagClass.context, 6, () => _encode_RcfGetParameterInvocation, $.BER),
    "rcfPeerAbortInvocation": $._encode_implicit(_TagClass.context, 104, () => _encode_SlePeerAbort, $.BER),
}, $.BER); }
    return _cached_encoder_for_RcfUserToProviderPdu(value, elGetter);
}


/* eslint-enable */
