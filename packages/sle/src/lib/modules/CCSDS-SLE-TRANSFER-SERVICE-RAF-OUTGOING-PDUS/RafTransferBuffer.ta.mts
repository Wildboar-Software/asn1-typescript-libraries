/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { FrameOrNotification, _decode_FrameOrNotification, _encode_FrameOrNotification } from "../CCSDS-SLE-TRANSFER-SERVICE-RAF-OUTGOING-PDUS/FrameOrNotification.ta.mjs";


/**
 * @summary RafTransferBuffer
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RafTransferBuffer               ::=  SEQUENCE OF FrameOrNotification
 * ```
 */
export
type RafTransferBuffer = FrameOrNotification[]; // SequenceOfType

let _cached_decoder_for_RafTransferBuffer: $.ASN1Decoder<RafTransferBuffer> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RafTransferBuffer
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RafTransferBuffer (el: _Element): RafTransferBuffer {
    if (!_cached_decoder_for_RafTransferBuffer) { _cached_decoder_for_RafTransferBuffer = $._decodeSequenceOf<FrameOrNotification>(() => _decode_FrameOrNotification); }
    return _cached_decoder_for_RafTransferBuffer(el);
}

let _cached_encoder_for_RafTransferBuffer: $.ASN1Encoder<RafTransferBuffer> | null = null;

/**
 * @summary Encodes a(n) RafTransferBuffer into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RafTransferBuffer, encoded as an ASN.1 Element.
 */
export
function _encode_RafTransferBuffer (value: RafTransferBuffer, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RafTransferBuffer) { _cached_encoder_for_RafTransferBuffer = $._encodeSequenceOf<FrameOrNotification>(() => _encode_FrameOrNotification, $.BER); }
    return _cached_encoder_for_RafTransferBuffer(value, elGetter);
}


/* eslint-enable */
