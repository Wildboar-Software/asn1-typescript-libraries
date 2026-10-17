/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { OcfOrNotification, _decode_OcfOrNotification, _encode_OcfOrNotification } from "../CCSDS-SLE-TRANSFER-SERVICE-ROCF-OUTGOING-PDUS/OcfOrNotification.ta.mjs";


/**
 * @summary RocfTransferBuffer
 * @description
 * 
 * Transfer-buffer SLE-PDU. The provider appends ROCF-TRANSFER-DATA and
 * ROCF-SYNC-NOTIFY records and releases them as one PDU when the buffer fills,
 * the release timer set by latency-limit expires, an end-of-data notification
 * is inserted, or ROCF-STOP is accepted. Record order is insertion order. In
 * timely online mode, communications backpressure discards the whole PDU; the
 * provider then inserts one data-discarded notification and restarts the
 * release timer. In complete online and offline modes the buffer is held until
 * the communications service accepts it. The buffer is cleared when the
 * association aborts. Service management sets the capacity. Annex C requires
 * room for at least 200 ROCF-TRANSFER-DATA invocations.
 *
 * CCSDS 911.5-B-4, sections 2.6.4.6.2, 3.1.9, and table C-2.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RocfTransferBuffer       ::=    SEQUENCE OF OcfOrNotification
 * ```
 */
export
type RocfTransferBuffer = OcfOrNotification[]; // SequenceOfType

let _cached_decoder_for_RocfTransferBuffer: $.ASN1Decoder<RocfTransferBuffer> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RocfTransferBuffer
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RocfTransferBuffer (el: _Element): RocfTransferBuffer {
    if (!_cached_decoder_for_RocfTransferBuffer) { _cached_decoder_for_RocfTransferBuffer = $._decodeSequenceOf<OcfOrNotification>(() => _decode_OcfOrNotification); }
    return _cached_decoder_for_RocfTransferBuffer(el);
}

let _cached_encoder_for_RocfTransferBuffer: $.ASN1Encoder<RocfTransferBuffer> | null = null;

/**
 * @summary Encodes a(n) RocfTransferBuffer into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RocfTransferBuffer, encoded as an ASN.1 Element.
 */
export
function _encode_RocfTransferBuffer (value: RocfTransferBuffer, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RocfTransferBuffer) { _cached_encoder_for_RocfTransferBuffer = $._encodeSequenceOf<OcfOrNotification>(() => _encode_OcfOrNotification, $.BER); }
    return _cached_encoder_for_RocfTransferBuffer(value, elGetter);
}


/* eslint-enable */
