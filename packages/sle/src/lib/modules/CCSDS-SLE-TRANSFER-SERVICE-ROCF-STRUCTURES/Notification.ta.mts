/* eslint-disable */
import {
    NULL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { LockStatusReport, _decode_LockStatusReport, _encode_LockStatusReport } from "../CCSDS-SLE-TRANSFER-SERVICE-ROCF-STRUCTURES/LockStatusReport.ta.mjs";
// export { LockStatusReport, _decode_LockStatusReport, _encode_LockStatusReport } from "../CCSDS-SLE-TRANSFER-SERVICE-ROCF-STRUCTURES/LockStatusReport.ta.mjs";
import { RocfProductionStatus, _decode_RocfProductionStatus, _encode_RocfProductionStatus } from "../CCSDS-SLE-TRANSFER-SERVICE-ROCF-STRUCTURES/RocfProductionStatus.ta.mjs";
// export { RocfProductionStatus, RocfProductionStatus_running /* IMPORTED_LONG_NAMED_INTEGER */, running /* IMPORTED_SHORT_NAMED_INTEGER */, RocfProductionStatus_interrupted /* IMPORTED_LONG_NAMED_INTEGER */, interrupted /* IMPORTED_SHORT_NAMED_INTEGER */, RocfProductionStatus_halted /* IMPORTED_LONG_NAMED_INTEGER */, halted /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_RocfProductionStatus, _encode_RocfProductionStatus } from "../CCSDS-SLE-TRANSFER-SERVICE-ROCF-STRUCTURES/RocfProductionStatus.ta.mjs";


/**
 * @summary Notification
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Notification                   ::=    CHOICE
 * {  lossFrameSync           [0]   LockStatusReport
 * ,  productionStatusChange  [1]   RocfProductionStatus
 * ,  excessiveDataBacklog    [2]   NULL
 * ,  endOfData               [3]   NULL
 * }
 * ```
 */
export
type Notification =
    { lossFrameSync: LockStatusReport } /* CHOICE_ALT_ROOT */
    | { productionStatusChange: RocfProductionStatus } /* CHOICE_ALT_ROOT */
    | { excessiveDataBacklog: NULL } /* CHOICE_ALT_ROOT */
    | { endOfData: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_Notification: $.ASN1Decoder<Notification> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Notification
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Notification (el: _Element): Notification {
    if (!_cached_decoder_for_Notification) { _cached_decoder_for_Notification = $._decode_inextensible_choice<Notification>({
    "CONTEXT 0": [ "lossFrameSync", $._decode_implicit<LockStatusReport>(() => _decode_LockStatusReport) ],
    "CONTEXT 1": [ "productionStatusChange", $._decode_implicit<RocfProductionStatus>(() => _decode_RocfProductionStatus) ],
    "CONTEXT 2": [ "excessiveDataBacklog", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 3": [ "endOfData", $._decode_implicit<NULL>(() => $._decodeNull) ]
}); }
    return _cached_decoder_for_Notification(el);
}

let _cached_encoder_for_Notification: $.ASN1Encoder<Notification> | null = null;

/**
 * @summary Encodes a(n) Notification into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Notification, encoded as an ASN.1 Element.
 */
export
function _encode_Notification (value: Notification, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Notification) { _cached_encoder_for_Notification = $._encode_choice<Notification>({
    "lossFrameSync": $._encode_implicit(_TagClass.context, 0, () => _encode_LockStatusReport, $.BER),
    "productionStatusChange": $._encode_implicit(_TagClass.context, 1, () => _encode_RocfProductionStatus, $.BER),
    "excessiveDataBacklog": $._encode_implicit(_TagClass.context, 2, () => $._encodeNull, $.BER),
    "endOfData": $._encode_implicit(_TagClass.context, 3, () => $._encodeNull, $.BER),
}, $.BER); }
    return _cached_encoder_for_Notification(value, elGetter);
}


/* eslint-enable */
