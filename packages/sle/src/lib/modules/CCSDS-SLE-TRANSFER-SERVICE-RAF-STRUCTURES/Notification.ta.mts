/* eslint-disable */
import {
    NULL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { LockStatusReport, _decode_LockStatusReport, _encode_LockStatusReport } from "../CCSDS-SLE-TRANSFER-SERVICE-RAF-STRUCTURES/LockStatusReport.ta.mjs";
import { RafProductionStatus, _decode_RafProductionStatus, _encode_RafProductionStatus } from "../CCSDS-SLE-TRANSFER-SERVICE-RAF-STRUCTURES/RafProductionStatus.ta.mjs";


/**
 * @summary Notification
 * @description
 * 
 * Event reported by RAF-SYNC-NOTIFY. The provider stores the record in time
 * order with the frames.
 * 
 * `lossFrameSync` means frame delivery has stopped because the frame
 * synchronizer cannot lock to the space-link stream. It is sent once if the
 * synchronizer went from in-lock to out-of-lock at least once during the
 * provider's lock-status observation period; the provider documents that period
 * and keeps the latency from the event short. The value is a
 * `LockStatusReport`. The next RAF-TRANSFER-DATA indicates the return to
 * lock. This event is sent during online delivery.
 * 
 * `productionStatusChange` reports that production status changed. The value is
 * the new status: `running`, `halted`, or `interrupted`. This event is sent
 * during online delivery.
 * 
 * `excessiveDataBacklog` means the provider discarded data, either because
 * timely online delivery could not release a transfer buffer or because the
 * complete-online frame buffer overflowed. Consecutive discards with no
 * successful frame delivery in between produce at most one notification.
 * This event is sent during online delivery. The alternative is NULL.
 * 
 * `endOfData` means the provider has nothing further to send. It is used in
 * every delivery mode: the space link session has ended and no frames remain,
 * or every available frame between the RAF-START start and stop times has been
 * delivered. The alternative is NULL.
 * 
 * CCSDS 911.1-B-5, sections 3.7.2.3, 3.7.2.4, and 3.1.9.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Notification                   ::=  CHOICE
 * {   lossFrameSync                     [0] LockStatusReport
 * ,   productionStatusChange            [1] RafProductionStatus
 * ,   excessiveDataBacklog              [2] NULL
 * ,   endOfData                         [3] NULL
 * }
 * ```
 */
export
type Notification =
    { lossFrameSync: LockStatusReport } /* CHOICE_ALT_ROOT */
    | { productionStatusChange: RafProductionStatus } /* CHOICE_ALT_ROOT */
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
    "CONTEXT 1": [ "productionStatusChange", $._decode_implicit<RafProductionStatus>(() => _decode_RafProductionStatus) ],
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
    "productionStatusChange": $._encode_implicit(_TagClass.context, 1, () => _encode_RafProductionStatus, $.BER),
    "excessiveDataBacklog": $._encode_implicit(_TagClass.context, 2, () => $._encodeNull, $.BER),
    "endOfData": $._encode_implicit(_TagClass.context, 3, () => $._encodeNull, $.BER),
}, $.BER); }
    return _cached_encoder_for_Notification(value, elGetter);
}


/* eslint-enable */
