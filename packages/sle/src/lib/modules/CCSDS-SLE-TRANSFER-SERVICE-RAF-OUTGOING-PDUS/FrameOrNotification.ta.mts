/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { RafTransferDataInvocation, _decode_RafTransferDataInvocation, _encode_RafTransferDataInvocation } from "../CCSDS-SLE-TRANSFER-SERVICE-RAF-OUTGOING-PDUS/RafTransferDataInvocation.ta.mjs";
import { RafSyncNotifyInvocation, _decode_RafSyncNotifyInvocation, _encode_RafSyncNotifyInvocation } from "../CCSDS-SLE-TRANSFER-SERVICE-RAF-OUTGOING-PDUS/RafSyncNotifyInvocation.ta.mjs";


/**
 * @summary FrameOrNotification
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FrameOrNotification             ::=  CHOICE
 * {   annotatedFrame                     [0] RafTransferDataInvocation
 * ,   syncNotification                   [1] RafSyncNotifyInvocation
 * }
 * ```
 */
export
type FrameOrNotification =
    { annotatedFrame: RafTransferDataInvocation } /* CHOICE_ALT_ROOT */
    | { syncNotification: RafSyncNotifyInvocation } /* CHOICE_ALT_ROOT */;

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
    "CONTEXT 0": [ "annotatedFrame", $._decode_implicit<RafTransferDataInvocation>(() => _decode_RafTransferDataInvocation) ],
    "CONTEXT 1": [ "syncNotification", $._decode_implicit<RafSyncNotifyInvocation>(() => _decode_RafSyncNotifyInvocation) ]
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
    "annotatedFrame": $._encode_implicit(_TagClass.context, 0, () => _encode_RafTransferDataInvocation, $.BER),
    "syncNotification": $._encode_implicit(_TagClass.context, 1, () => _encode_RafSyncNotifyInvocation, $.BER),
}, $.BER); }
    return _cached_encoder_for_FrameOrNotification(value, elGetter);
}


/* eslint-enable */
