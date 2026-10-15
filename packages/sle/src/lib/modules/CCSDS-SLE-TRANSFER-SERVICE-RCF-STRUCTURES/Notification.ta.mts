/* eslint-disable */
import {
    NULL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { LockStatusReport, _decode_LockStatusReport, _encode_LockStatusReport } from "../CCSDS-SLE-TRANSFER-SERVICE-RCF-STRUCTURES/LockStatusReport.ta.mjs";
import { RcfProductionStatus, _decode_RcfProductionStatus, _encode_RcfProductionStatus } from "../CCSDS-SLE-TRANSFER-SERVICE-RCF-STRUCTURES/RcfProductionStatus.ta.mjs";


/**
 * @summary Notification
 * @description
 *
 * Event reported by RCF-SYNC-NOTIFY. The provider inserts it into the transfer
 * buffer in time order with the frames.
 *
 * lossFrameSync: the frame synchronizer went from in lock to out of lock at
 * least once during the provider's lock-status observation period. Sent once
 * for that occurrence, with as little delay as the provider can achieve. The
 * provider documents the observation period. The next delivered frame
 * indicates the return to lock. Omitted in offline delivery. The event
 * concerns space-link frame synchronization.
 *
 * productionStatusChange: production status changed to running, halted, or
 * interrupted. The alternative carries the new status. Omitted in offline
 * delivery.
 *
 * excessiveDataBacklog: the provider discarded data. In timely online mode the
 * transfer buffer could not be passed because of communications congestion. In
 * complete online mode the online frame buffer overflowed and records were
 * discarded oldest first; service management sets how many. At most one such
 * notification is delivered between successful frame deliveries. Omitted in
 * offline delivery. No further value is carried.
 *
 * endOfData: the provider has nothing more to send. Sent in every delivery
 * mode. For an online instance the space link session has ended and no frames
 * remain, or every available frame between the start and stop times has been
 * delivered. For an offline instance a retrieved frame has an Earth Receive
 * Time later than stop-time, or the requested interval contains no frames.
 * Inserting this record releases the transfer buffer. No further value is
 * carried.
 *
 * CCSDS 911.2-B-4, sections 3.7 and 3.1.9.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Notification                  ::=  CHOICE
 * {   lossFrameSync                    [0] LockStatusReport
 * ,   productionStatusChange           [1] RcfProductionStatus
 * ,   excessiveDataBacklog             [2] NULL
 * ,   endOfData                        [3] NULL
 * }
 * ```
 */
export
type Notification =
    { lossFrameSync: LockStatusReport } /* CHOICE_ALT_ROOT */
    | { productionStatusChange: RcfProductionStatus } /* CHOICE_ALT_ROOT */
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
    "CONTEXT 1": [ "productionStatusChange", $._decode_implicit<RcfProductionStatus>(() => _decode_RcfProductionStatus) ],
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
    "productionStatusChange": $._encode_implicit(_TagClass.context, 1, () => _encode_RcfProductionStatus, $.BER),
    "excessiveDataBacklog": $._encode_implicit(_TagClass.context, 2, () => $._encodeNull, $.BER),
    "endOfData": $._encode_implicit(_TagClass.context, 3, () => $._encodeNull, $.BER),
}, $.BER); }
    return _cached_encoder_for_Notification(value, elGetter);
}


/* eslint-enable */
