/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { FrameOrNotification, _decode_FrameOrNotification, _encode_FrameOrNotification } from "../CCSDS-SLE-TRANSFER-SERVICE-RCF-OUTGOING-PDUS/FrameOrNotification.ta.mjs";


/**
 * @summary RcfTransferBuffer
 * @description
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
