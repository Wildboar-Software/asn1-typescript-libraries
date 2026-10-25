/* eslint-disable */
import {
    type NULL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { LockStatusReport, _decode_LockStatusReport, _encode_LockStatusReport } from "../CCSDS-SLE-TRANSFER-SERVICE-ROCF-STRUCTURES/LockStatusReport.ta.mjs";
import { type RocfProductionStatus, _decode_RocfProductionStatus, _encode_RocfProductionStatus } from "../CCSDS-SLE-TRANSFER-SERVICE-ROCF-STRUCTURES/RocfProductionStatus.ta.mjs";


/**
 * @summary Notification
 * @description
 * 
 * Event reported by ROCF-SYNC-NOTIFY, in time order with the OCFs.
 *
 * lossFrameSync: frame synchronization left in-lock at least once during the
 * provider's lock-status observation period. The provider documents that
 * period and keeps the delay from the event to the notification short. The
 * return to in-lock is indicated by the next ROCF-TRANSFER-DATA. Offline
 * delivery omits this notification. The event concerns frame sync on the space
 * link and can occur when the selected Master Channel or Virtual Channel
 * itself lost no frames. The value is a LockStatusReport.
 *
 * productionStatusChange: production status changed. The value is the new
 * status, running, halted, or interrupted. Offline delivery omits this
 * notification.
 *
 * excessiveDataBacklog: the provider discarded OCFs, either because timely
 * online delivery could not release the transfer buffer or because the
 * complete-online OCF buffer overflowed. Repeated discards with no successful
 * OCF delivery between them produce at most one notification. Offline delivery
 * omits this notification. There is no notification value.
 *
 * endOfData: the provider has no further data. Sent in every delivery mode.
 * For an online instance this includes the end of the space link session after
 * the last OCF, and in every mode it includes delivery of every OCF between
 * the START start and stop times. An offline interval that contains no OCFs
 * yields only this notification.
 *
 * CCSDS 911.5-B-4, sections 3.7.2.3, 3.7.2.4, 3.1.9.1.9, 3.1.9.2.15, and
 * 3.1.9.3.10.
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
