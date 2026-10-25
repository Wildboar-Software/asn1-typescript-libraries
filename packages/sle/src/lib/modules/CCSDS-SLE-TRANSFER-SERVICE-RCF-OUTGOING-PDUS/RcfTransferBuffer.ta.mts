/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type FrameOrNotification, _decode_FrameOrNotification, _encode_FrameOrNotification } from "../CCSDS-SLE-TRANSFER-SERVICE-RCF-OUTGOING-PDUS/FrameOrNotification.ta.mjs";


/**
 * @summary RcfTransferBuffer
 * @description
 *
 * One release of the transfer buffer. The provider passes this SLE-PDU when
 * the buffer is full, the release timer expires, an end-of-data notification
 * has been inserted, or RCF-STOP has been accepted. Records stay in the order
 * they were inserted. The buffer is used in every delivery mode. In timely
 * online mode, if the communications service will not accept the PDU, the
 * provider discards it, clears the buffer, and inserts a data-discarded
 * notification. In complete online and offline modes the provider holds the
 * PDU until the communications service accepts it. An aborted association
 * clears the buffer. Its capacity is transfer-buffer-size; annex C requires
 * room for at least 200 RCF-TRANSFER-DATA invocations.
 *
 * CCSDS 911.2-B-4, sections 2.6.4.6, 3.1.9, and annex C.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RcfTransferBuffer               ::=  SEQUENCE OF FrameOrNotification
 * ```
 */
export
type RcfTransferBuffer = FrameOrNotification[]; // SequenceOfType

let _cached_decoder_for_RcfTransferBuffer: $.ASN1Decoder<RcfTransferBuffer> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RcfTransferBuffer
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RcfTransferBuffer (el: _Element): RcfTransferBuffer {
    if (!_cached_decoder_for_RcfTransferBuffer) { _cached_decoder_for_RcfTransferBuffer = $._decodeSequenceOf<FrameOrNotification>(() => _decode_FrameOrNotification); }
    return _cached_decoder_for_RcfTransferBuffer(el);
}

let _cached_encoder_for_RcfTransferBuffer: $.ASN1Encoder<RcfTransferBuffer> | null = null;

/**
 * @summary Encodes a(n) RcfTransferBuffer into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RcfTransferBuffer, encoded as an ASN.1 Element.
 */
export
function _encode_RcfTransferBuffer (value: RcfTransferBuffer, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RcfTransferBuffer) { _cached_encoder_for_RcfTransferBuffer = $._encodeSequenceOf<FrameOrNotification>(() => _encode_FrameOrNotification, $.BER); }
    return _cached_encoder_for_RcfTransferBuffer(value, elGetter);
}


/* eslint-enable */
