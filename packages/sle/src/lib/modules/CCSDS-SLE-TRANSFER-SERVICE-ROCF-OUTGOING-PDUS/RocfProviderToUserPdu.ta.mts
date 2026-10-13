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
import { RocfStartReturn, _decode_RocfStartReturn, _encode_RocfStartReturn } from "../CCSDS-SLE-TRANSFER-SERVICE-ROCF-OUTGOING-PDUS/RocfStartReturn.ta.mjs";
import { SleAcknowledgement, _decode_SleAcknowledgement, _encode_SleAcknowledgement } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-PDUS/SleAcknowledgement.ta.mjs";
import { RocfTransferBuffer, _decode_RocfTransferBuffer, _encode_RocfTransferBuffer } from "../CCSDS-SLE-TRANSFER-SERVICE-ROCF-OUTGOING-PDUS/RocfTransferBuffer.ta.mjs";
import { SleScheduleStatusReportReturn, _decode_SleScheduleStatusReportReturn, _encode_SleScheduleStatusReportReturn } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-PDUS/SleScheduleStatusReportReturn.ta.mjs";
import { RocfStatusReportInvocation, _decode_RocfStatusReportInvocation, _encode_RocfStatusReportInvocation } from "../CCSDS-SLE-TRANSFER-SERVICE-ROCF-OUTGOING-PDUS/RocfStatusReportInvocation.ta.mjs";
import { RocfGetParameterReturn, _decode_RocfGetParameterReturn, _encode_RocfGetParameterReturn } from "../CCSDS-SLE-TRANSFER-SERVICE-ROCF-OUTGOING-PDUS/RocfGetParameterReturn.ta.mjs";
import { SlePeerAbort, _decode_SlePeerAbort, _encode_SlePeerAbort } from "../CCSDS-SLE-TRANSFER-SERVICE-BIND-TYPES/SlePeerAbort.ta.mjs";


/**
 * @summary RocfProviderToUserPdu
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RocfProviderToUserPdu                   ::=    CHOICE
 * {  rocfBindInvocation               [100] SleBindInvocation
 * ,  rocfBindReturn                   [101] SleBindReturn
 * ,  rocfUnbindInvocation             [102] SleUnbindInvocation
 * ,  rocfUnbindReturn                 [103] SleUnbindReturn
 * ,  rocfStartReturn                  [1]   RocfStartReturn
 * ,  rocfStopReturn                   [3]   SleAcknowledgement
 * ,  rocfTransferBuffer               [8]   RocfTransferBuffer
 * ,  rocfScheduleStatusReportReturn   [5]   SleScheduleStatusReportReturn
 * ,  rocfStatusReportInvocation       [9]   RocfStatusReportInvocation
 * ,  rocfGetParameterReturn           [7]   RocfGetParameterReturn
 * ,  rocfPeerAbortInvocation          [104] SlePeerAbort
 * }
 * ```
 */
export
type RocfProviderToUserPdu =
    { rocfBindInvocation: SleBindInvocation } /* CHOICE_ALT_ROOT */
    | { rocfBindReturn: SleBindReturn } /* CHOICE_ALT_ROOT */
    | { rocfUnbindInvocation: SleUnbindInvocation } /* CHOICE_ALT_ROOT */
    | { rocfUnbindReturn: SleUnbindReturn } /* CHOICE_ALT_ROOT */
    | { rocfStartReturn: RocfStartReturn } /* CHOICE_ALT_ROOT */
    | { rocfStopReturn: SleAcknowledgement } /* CHOICE_ALT_ROOT */
    | { rocfTransferBuffer: RocfTransferBuffer } /* CHOICE_ALT_ROOT */
    | { rocfScheduleStatusReportReturn: SleScheduleStatusReportReturn } /* CHOICE_ALT_ROOT */
    | { rocfStatusReportInvocation: RocfStatusReportInvocation } /* CHOICE_ALT_ROOT */
    | { rocfGetParameterReturn: RocfGetParameterReturn } /* CHOICE_ALT_ROOT */
    | { rocfPeerAbortInvocation: SlePeerAbort } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_RocfProviderToUserPdu: $.ASN1Decoder<RocfProviderToUserPdu> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RocfProviderToUserPdu
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RocfProviderToUserPdu (el: _Element): RocfProviderToUserPdu {
    if (!_cached_decoder_for_RocfProviderToUserPdu) { _cached_decoder_for_RocfProviderToUserPdu = $._decode_inextensible_choice<RocfProviderToUserPdu>({
    "CONTEXT 100": [ "rocfBindInvocation", $._decode_implicit<SleBindInvocation>(() => _decode_SleBindInvocation) ],
    "CONTEXT 101": [ "rocfBindReturn", $._decode_implicit<SleBindReturn>(() => _decode_SleBindReturn) ],
    "CONTEXT 102": [ "rocfUnbindInvocation", $._decode_implicit<SleUnbindInvocation>(() => _decode_SleUnbindInvocation) ],
    "CONTEXT 103": [ "rocfUnbindReturn", $._decode_implicit<SleUnbindReturn>(() => _decode_SleUnbindReturn) ],
    "CONTEXT 1": [ "rocfStartReturn", $._decode_implicit<RocfStartReturn>(() => _decode_RocfStartReturn) ],
    "CONTEXT 3": [ "rocfStopReturn", $._decode_implicit<SleAcknowledgement>(() => _decode_SleAcknowledgement) ],
    "CONTEXT 8": [ "rocfTransferBuffer", $._decode_implicit<RocfTransferBuffer>(() => _decode_RocfTransferBuffer) ],
    "CONTEXT 5": [ "rocfScheduleStatusReportReturn", $._decode_implicit<SleScheduleStatusReportReturn>(() => _decode_SleScheduleStatusReportReturn) ],
    "CONTEXT 9": [ "rocfStatusReportInvocation", $._decode_implicit<RocfStatusReportInvocation>(() => _decode_RocfStatusReportInvocation) ],
    "CONTEXT 7": [ "rocfGetParameterReturn", $._decode_implicit<RocfGetParameterReturn>(() => _decode_RocfGetParameterReturn) ],
    "CONTEXT 104": [ "rocfPeerAbortInvocation", $._decode_implicit<SlePeerAbort>(() => _decode_SlePeerAbort) ]
}); }
    return _cached_decoder_for_RocfProviderToUserPdu(el);
}

let _cached_encoder_for_RocfProviderToUserPdu: $.ASN1Encoder<RocfProviderToUserPdu> | null = null;

/**
 * @summary Encodes a(n) RocfProviderToUserPdu into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RocfProviderToUserPdu, encoded as an ASN.1 Element.
 */
export
function _encode_RocfProviderToUserPdu (value: RocfProviderToUserPdu, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RocfProviderToUserPdu) { _cached_encoder_for_RocfProviderToUserPdu = $._encode_choice<RocfProviderToUserPdu>({
    "rocfBindInvocation": $._encode_implicit(_TagClass.context, 100, () => _encode_SleBindInvocation, $.BER),
    "rocfBindReturn": $._encode_implicit(_TagClass.context, 101, () => _encode_SleBindReturn, $.BER),
    "rocfUnbindInvocation": $._encode_implicit(_TagClass.context, 102, () => _encode_SleUnbindInvocation, $.BER),
    "rocfUnbindReturn": $._encode_implicit(_TagClass.context, 103, () => _encode_SleUnbindReturn, $.BER),
    "rocfStartReturn": $._encode_implicit(_TagClass.context, 1, () => _encode_RocfStartReturn, $.BER),
    "rocfStopReturn": $._encode_implicit(_TagClass.context, 3, () => _encode_SleAcknowledgement, $.BER),
    "rocfTransferBuffer": $._encode_implicit(_TagClass.context, 8, () => _encode_RocfTransferBuffer, $.BER),
    "rocfScheduleStatusReportReturn": $._encode_implicit(_TagClass.context, 5, () => _encode_SleScheduleStatusReportReturn, $.BER),
    "rocfStatusReportInvocation": $._encode_implicit(_TagClass.context, 9, () => _encode_RocfStatusReportInvocation, $.BER),
    "rocfGetParameterReturn": $._encode_implicit(_TagClass.context, 7, () => _encode_RocfGetParameterReturn, $.BER),
    "rocfPeerAbortInvocation": $._encode_implicit(_TagClass.context, 104, () => _encode_SlePeerAbort, $.BER),
}, $.BER); }
    return _cached_encoder_for_RocfProviderToUserPdu(value, elGetter);
}


/* eslint-enable */
