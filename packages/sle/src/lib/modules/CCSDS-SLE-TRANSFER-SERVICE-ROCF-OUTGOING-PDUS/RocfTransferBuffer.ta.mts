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
