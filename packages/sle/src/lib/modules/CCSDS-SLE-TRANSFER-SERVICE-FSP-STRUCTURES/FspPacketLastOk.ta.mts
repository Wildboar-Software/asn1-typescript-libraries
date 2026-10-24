/* eslint-disable */
import {
    NULL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { FspPacketLastOk_packetOk, _decode_FspPacketLastOk_packetOk, _encode_FspPacketLastOk_packetOk } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/FspPacketLastOk-packetOk.ta.mjs";


/**
 * @summary FspPacketLastOk
 * @description
 * 
 * The Space Packet of this service instance that most recently completed
 * processing successfully, or an indication that none has. Present on every
 * FSP-ASYNC-NOTIFY and every FSP-STATUS-REPORT. The value survives release or
 * abort of the association.
 * 
 * CCSDS 912.3-B-3, sections 3.7.2.12, 3.7.2.13, 3.9.2.6, and 3.9.2.7.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FspPacketLastOk          ::=    CHOICE
 * {  noPacketOk        [0]   NULL
 * ,  packetOk          [1]   SEQUENCE
 *    {  packetIdentification    PacketIdentification
 *    ,  processingStopTime      Time
 *    }
 * }
 * ```
 */
export
type FspPacketLastOk =
    { noPacketOk: NULL } /* CHOICE_ALT_ROOT */
    | { packetOk: FspPacketLastOk_packetOk } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_FspPacketLastOk: $.ASN1Decoder<FspPacketLastOk> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FspPacketLastOk
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FspPacketLastOk (el: _Element): FspPacketLastOk {
    if (!_cached_decoder_for_FspPacketLastOk) { _cached_decoder_for_FspPacketLastOk = $._decode_inextensible_choice<FspPacketLastOk>({
    "CONTEXT 0": [ "noPacketOk", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 1": [ "packetOk", $._decode_implicit<FspPacketLastOk_packetOk>(() => _decode_FspPacketLastOk_packetOk) ]
}); }
    return _cached_decoder_for_FspPacketLastOk(el);
}

let _cached_encoder_for_FspPacketLastOk: $.ASN1Encoder<FspPacketLastOk> | null = null;

/**
 * @summary Encodes a(n) FspPacketLastOk into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FspPacketLastOk, encoded as an ASN.1 Element.
 */
export
function _encode_FspPacketLastOk (value: FspPacketLastOk, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FspPacketLastOk) { _cached_encoder_for_FspPacketLastOk = $._encode_choice<FspPacketLastOk>({
    "noPacketOk": $._encode_implicit(_TagClass.context, 0, () => $._encodeNull, $.BER),
    "packetOk": $._encode_implicit(_TagClass.context, 1, () => _encode_FspPacketLastOk_packetOk, $.BER),
}, $.BER); }
    return _cached_encoder_for_FspPacketLastOk(value, elGetter);
}


/* eslint-enable */
