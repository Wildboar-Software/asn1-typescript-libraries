/* eslint-disable */
import {
    NULL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { FspPacketLastProcessed_packetProcessed, _decode_FspPacketLastProcessed_packetProcessed, _encode_FspPacketLastProcessed_packetProcessed } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/FspPacketLastProcessed-packetProcessed.ta.mjs";


/**
 * @summary FspPacketLastProcessed
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FspPacketLastProcessed   ::=    CHOICE
 * {  noPacketProcessed [0]   NULL
 * ,  packetProcessed   [1]   SEQUENCE
 *    {  packetIdentification    PacketIdentification
 *    ,  processingStartTime     Time
 *    ,  packetStatus            FspPacketStatus
 *    }
 * }
 * ```
 */
export
type FspPacketLastProcessed =
    { noPacketProcessed: NULL } /* CHOICE_ALT_ROOT */
    | { packetProcessed: FspPacketLastProcessed_packetProcessed } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_FspPacketLastProcessed: $.ASN1Decoder<FspPacketLastProcessed> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FspPacketLastProcessed
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FspPacketLastProcessed (el: _Element): FspPacketLastProcessed {
    if (!_cached_decoder_for_FspPacketLastProcessed) { _cached_decoder_for_FspPacketLastProcessed = $._decode_inextensible_choice<FspPacketLastProcessed>({
    "CONTEXT 0": [ "noPacketProcessed", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 1": [ "packetProcessed", $._decode_implicit<FspPacketLastProcessed_packetProcessed>(() => _decode_FspPacketLastProcessed_packetProcessed) ]
}); }
    return _cached_decoder_for_FspPacketLastProcessed(el);
}

let _cached_encoder_for_FspPacketLastProcessed: $.ASN1Encoder<FspPacketLastProcessed> | null = null;

/**
 * @summary Encodes a(n) FspPacketLastProcessed into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FspPacketLastProcessed, encoded as an ASN.1 Element.
 */
export
function _encode_FspPacketLastProcessed (value: FspPacketLastProcessed, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FspPacketLastProcessed) { _cached_encoder_for_FspPacketLastProcessed = $._encode_choice<FspPacketLastProcessed>({
    "noPacketProcessed": $._encode_implicit(_TagClass.context, 0, () => $._encodeNull, $.BER),
    "packetProcessed": $._encode_implicit(_TagClass.context, 1, () => _encode_FspPacketLastProcessed_packetProcessed, $.BER),
}, $.BER); }
    return _cached_encoder_for_FspPacketLastProcessed(value, elGetter);
}


/* eslint-enable */
