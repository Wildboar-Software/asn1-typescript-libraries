/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { RocfTransferDataInvocation, _decode_RocfTransferDataInvocation, _encode_RocfTransferDataInvocation } from "../CCSDS-SLE-TRANSFER-SERVICE-ROCF-OUTGOING-PDUS/RocfTransferDataInvocation.ta.mjs";
import { RocfSyncNotifyInvocation, _decode_RocfSyncNotifyInvocation, _encode_RocfSyncNotifyInvocation } from "../CCSDS-SLE-TRANSFER-SERVICE-ROCF-OUTGOING-PDUS/RocfSyncNotifyInvocation.ta.mjs";


/**
 * @summary OcfOrNotification
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OcfOrNotification        ::=    CHOICE
 * {  annotatedOcf      [0]   RocfTransferDataInvocation
 * ,  syncNotification  [1]   RocfSyncNotifyInvocation
 * }
 * ```
 */
export
type OcfOrNotification =
    { annotatedOcf: RocfTransferDataInvocation } /* CHOICE_ALT_ROOT */
    | { syncNotification: RocfSyncNotifyInvocation } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_OcfOrNotification: $.ASN1Decoder<OcfOrNotification> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) OcfOrNotification
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_OcfOrNotification (el: _Element): OcfOrNotification {
    if (!_cached_decoder_for_OcfOrNotification) { _cached_decoder_for_OcfOrNotification = $._decode_inextensible_choice<OcfOrNotification>({
    "CONTEXT 0": [ "annotatedOcf", $._decode_implicit<RocfTransferDataInvocation>(() => _decode_RocfTransferDataInvocation) ],
    "CONTEXT 1": [ "syncNotification", $._decode_implicit<RocfSyncNotifyInvocation>(() => _decode_RocfSyncNotifyInvocation) ]
}); }
    return _cached_decoder_for_OcfOrNotification(el);
}

let _cached_encoder_for_OcfOrNotification: $.ASN1Encoder<OcfOrNotification> | null = null;

/**
 * @summary Encodes a(n) OcfOrNotification into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OcfOrNotification, encoded as an ASN.1 Element.
 */
export
function _encode_OcfOrNotification (value: OcfOrNotification, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_OcfOrNotification) { _cached_encoder_for_OcfOrNotification = $._encode_choice<OcfOrNotification>({
    "annotatedOcf": $._encode_implicit(_TagClass.context, 0, () => _encode_RocfTransferDataInvocation, $.BER),
    "syncNotification": $._encode_implicit(_TagClass.context, 1, () => _encode_RocfSyncNotifyInvocation, $.BER),
}, $.BER); }
    return _cached_encoder_for_OcfOrNotification(value, elGetter);
}


/* eslint-enable */
