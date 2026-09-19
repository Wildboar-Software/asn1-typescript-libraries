/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { MediaDescriptor, _decode_MediaDescriptor, _encode_MediaDescriptor } from "../MEDIA-GATEWAY-CONTROL/MediaDescriptor.ta.mjs";
// export { MediaDescriptor, _decode_MediaDescriptor, _encode_MediaDescriptor } from "../MEDIA-GATEWAY-CONTROL/MediaDescriptor.ta.mjs";
import { ModemDescriptor, _decode_ModemDescriptor, _encode_ModemDescriptor } from "../MEDIA-GATEWAY-CONTROL/ModemDescriptor.ta.mjs";
// export { ModemDescriptor, _decode_ModemDescriptor, _encode_ModemDescriptor } from "../MEDIA-GATEWAY-CONTROL/ModemDescriptor.ta.mjs";
import { MuxDescriptor, _decode_MuxDescriptor, _encode_MuxDescriptor } from "../MEDIA-GATEWAY-CONTROL/MuxDescriptor.ta.mjs";
// export { MuxDescriptor, _decode_MuxDescriptor, _encode_MuxDescriptor } from "../MEDIA-GATEWAY-CONTROL/MuxDescriptor.ta.mjs";
import { EventsDescriptor, _decode_EventsDescriptor, _encode_EventsDescriptor } from "../MEDIA-GATEWAY-CONTROL/EventsDescriptor.ta.mjs";
// export { EventsDescriptor, _decode_EventsDescriptor, _encode_EventsDescriptor } from "../MEDIA-GATEWAY-CONTROL/EventsDescriptor.ta.mjs";
import { EventBufferDescriptor, _decode_EventBufferDescriptor, _encode_EventBufferDescriptor } from "../MEDIA-GATEWAY-CONTROL/EventBufferDescriptor.ta.mjs";
// export { EventBufferDescriptor, _decode_EventBufferDescriptor, _encode_EventBufferDescriptor } from "../MEDIA-GATEWAY-CONTROL/EventBufferDescriptor.ta.mjs";
import { SignalsDescriptor, _decode_SignalsDescriptor, _encode_SignalsDescriptor } from "../MEDIA-GATEWAY-CONTROL/SignalsDescriptor.ta.mjs";
// export { SignalsDescriptor, _decode_SignalsDescriptor, _encode_SignalsDescriptor } from "../MEDIA-GATEWAY-CONTROL/SignalsDescriptor.ta.mjs";
import { DigitMapDescriptor, _decode_DigitMapDescriptor, _encode_DigitMapDescriptor } from "../MEDIA-GATEWAY-CONTROL/DigitMapDescriptor.ta.mjs";
// export { DigitMapDescriptor, _decode_DigitMapDescriptor, _encode_DigitMapDescriptor } from "../MEDIA-GATEWAY-CONTROL/DigitMapDescriptor.ta.mjs";
import { AuditDescriptor, _decode_AuditDescriptor, _encode_AuditDescriptor } from "../MEDIA-GATEWAY-CONTROL/AuditDescriptor.ta.mjs";
// export { AuditDescriptor, _decode_AuditDescriptor, _encode_AuditDescriptor } from "../MEDIA-GATEWAY-CONTROL/AuditDescriptor.ta.mjs";
import { StatisticsDescriptor, _decode_StatisticsDescriptor, _encode_StatisticsDescriptor } from "../MEDIA-GATEWAY-CONTROL/StatisticsDescriptor.ta.mjs";
// export { StatisticsDescriptor, _decode_StatisticsDescriptor, _encode_StatisticsDescriptor } from "../MEDIA-GATEWAY-CONTROL/StatisticsDescriptor.ta.mjs";


/**
 * @summary AmmDescriptor
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AmmDescriptor  ::=  CHOICE
 *     {
 *         mediaDescriptor                [0] MediaDescriptor,
 *         modemDescriptor                [1] ModemDescriptor,
 *         muxDescriptor                [2] MuxDescriptor,
 *         eventsDescriptor            [3] EventsDescriptor,
 *         eventBufferDescriptor        [4] EventBufferDescriptor,
 *         signalsDescriptor            [5] SignalsDescriptor,
 *         digitMapDescriptor            [6] DigitMapDescriptor,
 *         auditDescriptor                [7] AuditDescriptor,
 *         ...,
 *         statisticsDescriptor        [8] StatisticsDescriptor
 *     }
 * ```
 */
export
type AmmDescriptor =
    { mediaDescriptor: MediaDescriptor } /* CHOICE_ALT_ROOT */
    | { modemDescriptor: ModemDescriptor } /* CHOICE_ALT_ROOT */
    | { muxDescriptor: MuxDescriptor } /* CHOICE_ALT_ROOT */
    | { eventsDescriptor: EventsDescriptor } /* CHOICE_ALT_ROOT */
    | { eventBufferDescriptor: EventBufferDescriptor } /* CHOICE_ALT_ROOT */
    | { signalsDescriptor: SignalsDescriptor } /* CHOICE_ALT_ROOT */
    | { digitMapDescriptor: DigitMapDescriptor } /* CHOICE_ALT_ROOT */
    | { auditDescriptor: AuditDescriptor } /* CHOICE_ALT_ROOT */
    | { statisticsDescriptor: StatisticsDescriptor } /* CHOICE_ALT_EXT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_AmmDescriptor: $.ASN1Decoder<AmmDescriptor> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AmmDescriptor
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AmmDescriptor (el: _Element): AmmDescriptor {
    if (!_cached_decoder_for_AmmDescriptor) { _cached_decoder_for_AmmDescriptor = $._decode_extensible_choice<AmmDescriptor>({
    "CONTEXT 0": [ "mediaDescriptor", $._decode_implicit<MediaDescriptor>(() => _decode_MediaDescriptor) ],
    "CONTEXT 1": [ "modemDescriptor", $._decode_implicit<ModemDescriptor>(() => _decode_ModemDescriptor) ],
    "CONTEXT 2": [ "muxDescriptor", $._decode_implicit<MuxDescriptor>(() => _decode_MuxDescriptor) ],
    "CONTEXT 3": [ "eventsDescriptor", $._decode_implicit<EventsDescriptor>(() => _decode_EventsDescriptor) ],
    "CONTEXT 4": [ "eventBufferDescriptor", $._decode_implicit<EventBufferDescriptor>(() => _decode_EventBufferDescriptor) ],
    "CONTEXT 5": [ "signalsDescriptor", $._decode_implicit<SignalsDescriptor>(() => _decode_SignalsDescriptor) ],
    "CONTEXT 6": [ "digitMapDescriptor", $._decode_implicit<DigitMapDescriptor>(() => _decode_DigitMapDescriptor) ],
    "CONTEXT 7": [ "auditDescriptor", $._decode_implicit<AuditDescriptor>(() => _decode_AuditDescriptor) ],
    "CONTEXT 8": [ "statisticsDescriptor", $._decode_implicit<StatisticsDescriptor>(() => _decode_StatisticsDescriptor) ]
}); }
    return _cached_decoder_for_AmmDescriptor(el);
}

let _cached_encoder_for_AmmDescriptor: $.ASN1Encoder<AmmDescriptor> | null = null;

/**
 * @summary Encodes a(n) AmmDescriptor into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AmmDescriptor, encoded as an ASN.1 Element.
 */
export
function _encode_AmmDescriptor (value: AmmDescriptor, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AmmDescriptor) { _cached_encoder_for_AmmDescriptor = $._encode_choice<AmmDescriptor>({
    "mediaDescriptor": $._encode_implicit(_TagClass.context, 0, () => _encode_MediaDescriptor, $.BER),
    "modemDescriptor": $._encode_implicit(_TagClass.context, 1, () => _encode_ModemDescriptor, $.BER),
    "muxDescriptor": $._encode_implicit(_TagClass.context, 2, () => _encode_MuxDescriptor, $.BER),
    "eventsDescriptor": $._encode_implicit(_TagClass.context, 3, () => _encode_EventsDescriptor, $.BER),
    "eventBufferDescriptor": $._encode_implicit(_TagClass.context, 4, () => _encode_EventBufferDescriptor, $.BER),
    "signalsDescriptor": $._encode_implicit(_TagClass.context, 5, () => _encode_SignalsDescriptor, $.BER),
    "digitMapDescriptor": $._encode_implicit(_TagClass.context, 6, () => _encode_DigitMapDescriptor, $.BER),
    "auditDescriptor": $._encode_implicit(_TagClass.context, 7, () => _encode_AuditDescriptor, $.BER),
    "statisticsDescriptor": $._encode_implicit(_TagClass.context, 8, () => _encode_StatisticsDescriptor, $.BER),
}, $.BER); }
    return _cached_encoder_for_AmmDescriptor(value, elGetter);
}


/* eslint-enable */
