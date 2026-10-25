/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { RcfTransferDataInvocation, _decode_RcfTransferDataInvocation, _encode_RcfTransferDataInvocation } from "../CCSDS-SLE-TRANSFER-SERVICE-RCF-OUTGOING-PDUS/RcfTransferDataInvocation.ta.mjs";
import { RcfSyncNotifyInvocation, _decode_RcfSyncNotifyInvocation, _encode_RcfSyncNotifyInvocation } from "../CCSDS-SLE-TRANSFER-SERVICE-RCF-OUTGOING-PDUS/RcfSyncNotifyInvocation.ta.mjs";


/**
 * @summary FrameOrNotification
 * @description
 *
 * One record in the transfer buffer. annotatedFrame is one good telemetry
 * frame from the selected Master Channel or Virtual Channel, with its
 * annotation. syncNotification is an event stored after the last frame
 * acquired before the event and before the first frame acquired after it.
 * Offline delivery carries end-of-data and omits the other synchronous
 * notifications.
 *
 * CCSDS 911.2-B-4, sections 2.4.1, 3.1.9, 3.6, and 3.7.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FrameOrNotification             ::=  CHOICE
 * {   annotatedFrame                     [0] RcfTransferDataInvocation
 * ,   syncNotification                   [1] RcfSyncNotifyInvocation
 * }
 * ```
 */
export
type FrameOrNotification =
    { annotatedFrame: RcfTransferDataInvocation } /* CHOICE_ALT_ROOT */
    | { syncNotification: RcfSyncNotifyInvocation } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_FrameOrNotification: $.ASN1Decoder<FrameOrNotification> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FrameOrNotification
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FrameOrNotification (el: _Element): FrameOrNotification {
    if (!_cached_decoder_for_FrameOrNotification) { _cached_decoder_for_FrameOrNotification = $._decode_inextensible_choice<FrameOrNotification>({
    "CONTEXT 0": [ "annotatedFrame", $._decode_implicit<RcfTransferDataInvocation>(() => _decode_RcfTransferDataInvocation) ],
    "CONTEXT 1": [ "syncNotification", $._decode_implicit<RcfSyncNotifyInvocation>(() => _decode_RcfSyncNotifyInvocation) ]
}); }
    return _cached_decoder_for_FrameOrNotification(el);
}

let _cached_encoder_for_FrameOrNotification: $.ASN1Encoder<FrameOrNotification> | null = null;

/**
 * @summary Encodes a(n) FrameOrNotification into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FrameOrNotification, encoded as an ASN.1 Element.
 */
export
function _encode_FrameOrNotification (value: FrameOrNotification, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FrameOrNotification) { _cached_encoder_for_FrameOrNotification = $._encode_choice<FrameOrNotification>({
    "annotatedFrame": $._encode_implicit(_TagClass.context, 0, () => _encode_RcfTransferDataInvocation, $.BER),
    "syncNotification": $._encode_implicit(_TagClass.context, 1, () => _encode_RcfSyncNotifyInvocation, $.BER),
}, $.BER); }
    return _cached_encoder_for_FrameOrNotification(value, elGetter);
}


/* eslint-enable */
