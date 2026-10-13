/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SleBindInvocation, _decode_SleBindInvocation, _encode_SleBindInvocation } from "../CCSDS-SLE-TRANSFER-SERVICE-BIND-TYPES/SleBindInvocation.ta.mjs";
// export { SleBindInvocation, _decode_SleBindInvocation, _encode_SleBindInvocation } from "../CCSDS-SLE-TRANSFER-SERVICE-BIND-TYPES/SleBindInvocation.ta.mjs";
import { SleBindReturn, _decode_SleBindReturn, _encode_SleBindReturn } from "../CCSDS-SLE-TRANSFER-SERVICE-BIND-TYPES/SleBindReturn.ta.mjs";
// export { SleBindReturn, _decode_SleBindReturn, _encode_SleBindReturn } from "../CCSDS-SLE-TRANSFER-SERVICE-BIND-TYPES/SleBindReturn.ta.mjs";
import { SleUnbindInvocation, _decode_SleUnbindInvocation, _encode_SleUnbindInvocation } from "../CCSDS-SLE-TRANSFER-SERVICE-BIND-TYPES/SleUnbindInvocation.ta.mjs";
// export { SleUnbindInvocation, _decode_SleUnbindInvocation, _encode_SleUnbindInvocation } from "../CCSDS-SLE-TRANSFER-SERVICE-BIND-TYPES/SleUnbindInvocation.ta.mjs";
import { SleUnbindReturn, _decode_SleUnbindReturn, _encode_SleUnbindReturn } from "../CCSDS-SLE-TRANSFER-SERVICE-BIND-TYPES/SleUnbindReturn.ta.mjs";
// export { SleUnbindReturn, _decode_SleUnbindReturn, _encode_SleUnbindReturn } from "../CCSDS-SLE-TRANSFER-SERVICE-BIND-TYPES/SleUnbindReturn.ta.mjs";
import { RafStartInvocation, _decode_RafStartInvocation, _encode_RafStartInvocation } from "../CCSDS-SLE-TRANSFER-SERVICE-RAF-INCOMING-PDUS/RafStartInvocation.ta.mjs";
// export { RafStartInvocation, _decode_RafStartInvocation, _encode_RafStartInvocation } from "../CCSDS-SLE-TRANSFER-SERVICE-RAF-INCOMING-PDUS/RafStartInvocation.ta.mjs";
import { SleStopInvocation, _decode_SleStopInvocation, _encode_SleStopInvocation } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-PDUS/SleStopInvocation.ta.mjs";
// export { SleStopInvocation, _decode_SleStopInvocation, _encode_SleStopInvocation } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-PDUS/SleStopInvocation.ta.mjs";
import { SleScheduleStatusReportInvocation, _decode_SleScheduleStatusReportInvocation, _encode_SleScheduleStatusReportInvocation } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-PDUS/SleScheduleStatusReportInvocation.ta.mjs";
// export { SleScheduleStatusReportInvocation, _decode_SleScheduleStatusReportInvocation, _encode_SleScheduleStatusReportInvocation } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-PDUS/SleScheduleStatusReportInvocation.ta.mjs";
import { RafGetParameterInvocation, _decode_RafGetParameterInvocation, _encode_RafGetParameterInvocation } from "../CCSDS-SLE-TRANSFER-SERVICE-RAF-INCOMING-PDUS/RafGetParameterInvocation.ta.mjs";
// export { RafGetParameterInvocation, _decode_RafGetParameterInvocation, _encode_RafGetParameterInvocation } from "../CCSDS-SLE-TRANSFER-SERVICE-RAF-INCOMING-PDUS/RafGetParameterInvocation.ta.mjs";
import { SlePeerAbort, _decode_SlePeerAbort, _encode_SlePeerAbort } from "../CCSDS-SLE-TRANSFER-SERVICE-BIND-TYPES/SlePeerAbort.ta.mjs";
// export { SlePeerAbort, _decode_SlePeerAbort, _encode_SlePeerAbort } from "../CCSDS-SLE-TRANSFER-SERVICE-BIND-TYPES/SlePeerAbort.ta.mjs";


/**
 * @summary RafUsertoProviderPdu
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RafUsertoProviderPdu             ::=  CHOICE
 * { rafBindInvocation                 [100] SleBindInvocation
 * , rafBindReturn                     [101] SleBindReturn
 * , rafUnbindInvocation               [102] SleUnbindInvocation
 * , rafUnbindReturn                   [103] SleUnbindReturn
 * , rafStartInvocation                [0]   RafStartInvocation
 * , rafStopInvocation                 [2]   SleStopInvocation
 * , rafScheduleStatusReportInvocation [4]
 *                                  SleScheduleStatusReportInvocation
 * , rafGetParameterInvocation         [6]   RafGetParameterInvocation
 * , rafPeerAbortInvocation            [104] SlePeerAbort
 * }
 * ```
 */
export
type RafUsertoProviderPdu =
    { rafBindInvocation: SleBindInvocation } /* CHOICE_ALT_ROOT */
    | { rafBindReturn: SleBindReturn } /* CHOICE_ALT_ROOT */
    | { rafUnbindInvocation: SleUnbindInvocation } /* CHOICE_ALT_ROOT */
    | { rafUnbindReturn: SleUnbindReturn } /* CHOICE_ALT_ROOT */
    | { rafStartInvocation: RafStartInvocation } /* CHOICE_ALT_ROOT */
    | { rafStopInvocation: SleStopInvocation } /* CHOICE_ALT_ROOT */
    | { rafScheduleStatusReportInvocation: SleScheduleStatusReportInvocation } /* CHOICE_ALT_ROOT */
    | { rafGetParameterInvocation: RafGetParameterInvocation } /* CHOICE_ALT_ROOT */
    | { rafPeerAbortInvocation: SlePeerAbort } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_RafUsertoProviderPdu: $.ASN1Decoder<RafUsertoProviderPdu> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RafUsertoProviderPdu
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RafUsertoProviderPdu (el: _Element): RafUsertoProviderPdu {
    if (!_cached_decoder_for_RafUsertoProviderPdu) { _cached_decoder_for_RafUsertoProviderPdu = $._decode_inextensible_choice<RafUsertoProviderPdu>({
    "CONTEXT 100": [ "rafBindInvocation", $._decode_implicit<SleBindInvocation>(() => _decode_SleBindInvocation) ],
    "CONTEXT 101": [ "rafBindReturn", $._decode_implicit<SleBindReturn>(() => _decode_SleBindReturn) ],
    "CONTEXT 102": [ "rafUnbindInvocation", $._decode_implicit<SleUnbindInvocation>(() => _decode_SleUnbindInvocation) ],
    "CONTEXT 103": [ "rafUnbindReturn", $._decode_implicit<SleUnbindReturn>(() => _decode_SleUnbindReturn) ],
    "CONTEXT 0": [ "rafStartInvocation", $._decode_implicit<RafStartInvocation>(() => _decode_RafStartInvocation) ],
    "CONTEXT 2": [ "rafStopInvocation", $._decode_implicit<SleStopInvocation>(() => _decode_SleStopInvocation) ],
    "CONTEXT 4": [ "rafScheduleStatusReportInvocation", $._decode_implicit<SleScheduleStatusReportInvocation>(() => _decode_SleScheduleStatusReportInvocation) ],
    "CONTEXT 6": [ "rafGetParameterInvocation", $._decode_implicit<RafGetParameterInvocation>(() => _decode_RafGetParameterInvocation) ],
    "CONTEXT 104": [ "rafPeerAbortInvocation", $._decode_implicit<SlePeerAbort>(() => _decode_SlePeerAbort) ]
}); }
    return _cached_decoder_for_RafUsertoProviderPdu(el);
}

let _cached_encoder_for_RafUsertoProviderPdu: $.ASN1Encoder<RafUsertoProviderPdu> | null = null;

/**
 * @summary Encodes a(n) RafUsertoProviderPdu into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RafUsertoProviderPdu, encoded as an ASN.1 Element.
 */
export
function _encode_RafUsertoProviderPdu (value: RafUsertoProviderPdu, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RafUsertoProviderPdu) { _cached_encoder_for_RafUsertoProviderPdu = $._encode_choice<RafUsertoProviderPdu>({
    "rafBindInvocation": $._encode_implicit(_TagClass.context, 100, () => _encode_SleBindInvocation, $.BER),
    "rafBindReturn": $._encode_implicit(_TagClass.context, 101, () => _encode_SleBindReturn, $.BER),
    "rafUnbindInvocation": $._encode_implicit(_TagClass.context, 102, () => _encode_SleUnbindInvocation, $.BER),
    "rafUnbindReturn": $._encode_implicit(_TagClass.context, 103, () => _encode_SleUnbindReturn, $.BER),
    "rafStartInvocation": $._encode_implicit(_TagClass.context, 0, () => _encode_RafStartInvocation, $.BER),
    "rafStopInvocation": $._encode_implicit(_TagClass.context, 2, () => _encode_SleStopInvocation, $.BER),
    "rafScheduleStatusReportInvocation": $._encode_implicit(_TagClass.context, 4, () => _encode_SleScheduleStatusReportInvocation, $.BER),
    "rafGetParameterInvocation": $._encode_implicit(_TagClass.context, 6, () => _encode_RafGetParameterInvocation, $.BER),
    "rafPeerAbortInvocation": $._encode_implicit(_TagClass.context, 104, () => _encode_SlePeerAbort, $.BER),
}, $.BER); }
    return _cached_encoder_for_RafUsertoProviderPdu(value, elGetter);
}


/* eslint-enable */
