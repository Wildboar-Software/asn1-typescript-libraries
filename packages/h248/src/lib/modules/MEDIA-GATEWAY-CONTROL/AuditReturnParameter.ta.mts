/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ErrorDescriptor, _decode_ErrorDescriptor, _encode_ErrorDescriptor } from "../MEDIA-GATEWAY-CONTROL/ErrorDescriptor.ta.mjs";
// export { ErrorDescriptor, _decode_ErrorDescriptor, _encode_ErrorDescriptor } from "../MEDIA-GATEWAY-CONTROL/ErrorDescriptor.ta.mjs";
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
import { ObservedEventsDescriptor, _decode_ObservedEventsDescriptor, _encode_ObservedEventsDescriptor } from "../MEDIA-GATEWAY-CONTROL/ObservedEventsDescriptor.ta.mjs";
// export { ObservedEventsDescriptor, _decode_ObservedEventsDescriptor, _encode_ObservedEventsDescriptor } from "../MEDIA-GATEWAY-CONTROL/ObservedEventsDescriptor.ta.mjs";
import { StatisticsDescriptor, _decode_StatisticsDescriptor, _encode_StatisticsDescriptor } from "../MEDIA-GATEWAY-CONTROL/StatisticsDescriptor.ta.mjs";
// export { StatisticsDescriptor, _decode_StatisticsDescriptor, _encode_StatisticsDescriptor } from "../MEDIA-GATEWAY-CONTROL/StatisticsDescriptor.ta.mjs";
import { PackagesDescriptor, _decode_PackagesDescriptor, _encode_PackagesDescriptor } from "../MEDIA-GATEWAY-CONTROL/PackagesDescriptor.ta.mjs";
// export { PackagesDescriptor, _decode_PackagesDescriptor, _encode_PackagesDescriptor } from "../MEDIA-GATEWAY-CONTROL/PackagesDescriptor.ta.mjs";
import { AuditDescriptor, _decode_AuditDescriptor, _encode_AuditDescriptor } from "../MEDIA-GATEWAY-CONTROL/AuditDescriptor.ta.mjs";
// export { AuditDescriptor, _decode_AuditDescriptor, _encode_AuditDescriptor } from "../MEDIA-GATEWAY-CONTROL/AuditDescriptor.ta.mjs";


/**
 * @summary AuditReturnParameter
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AuditReturnParameter  ::=  CHOICE
 *     {
 *         errorDescriptor                [0] ErrorDescriptor,
 *         mediaDescriptor                [1] MediaDescriptor,
 *         modemDescriptor                [2] ModemDescriptor,
 *         muxDescriptor                [3] MuxDescriptor,
 *         eventsDescriptor            [4] EventsDescriptor,
 *         eventBufferDescriptor        [5] EventBufferDescriptor,
 *         signalsDescriptor            [6] SignalsDescriptor,
 *         digitMapDescriptor            [7] DigitMapDescriptor,
 *         observedEventsDescriptor    [8] ObservedEventsDescriptor,
 *         statisticsDescriptor        [9] StatisticsDescriptor,
 *         packagesDescriptor            [10] PackagesDescriptor,
 *         emptyDescriptors            [11] AuditDescriptor,
 *         ...
 *     }
 * ```
 */
export
type AuditReturnParameter =
    { errorDescriptor: ErrorDescriptor } /* CHOICE_ALT_ROOT */
    | { mediaDescriptor: MediaDescriptor } /* CHOICE_ALT_ROOT */
    | { modemDescriptor: ModemDescriptor } /* CHOICE_ALT_ROOT */
    | { muxDescriptor: MuxDescriptor } /* CHOICE_ALT_ROOT */
    | { eventsDescriptor: EventsDescriptor } /* CHOICE_ALT_ROOT */
    | { eventBufferDescriptor: EventBufferDescriptor } /* CHOICE_ALT_ROOT */
    | { signalsDescriptor: SignalsDescriptor } /* CHOICE_ALT_ROOT */
    | { digitMapDescriptor: DigitMapDescriptor } /* CHOICE_ALT_ROOT */
    | { observedEventsDescriptor: ObservedEventsDescriptor } /* CHOICE_ALT_ROOT */
    | { statisticsDescriptor: StatisticsDescriptor } /* CHOICE_ALT_ROOT */
    | { packagesDescriptor: PackagesDescriptor } /* CHOICE_ALT_ROOT */
    | { emptyDescriptors: AuditDescriptor } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_AuditReturnParameter: $.ASN1Decoder<AuditReturnParameter> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AuditReturnParameter
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AuditReturnParameter (el: _Element): AuditReturnParameter {
    if (!_cached_decoder_for_AuditReturnParameter) { _cached_decoder_for_AuditReturnParameter = $._decode_extensible_choice<AuditReturnParameter>({
    "CONTEXT 0": [ "errorDescriptor", $._decode_implicit<ErrorDescriptor>(() => _decode_ErrorDescriptor) ],
    "CONTEXT 1": [ "mediaDescriptor", $._decode_implicit<MediaDescriptor>(() => _decode_MediaDescriptor) ],
    "CONTEXT 2": [ "modemDescriptor", $._decode_implicit<ModemDescriptor>(() => _decode_ModemDescriptor) ],
    "CONTEXT 3": [ "muxDescriptor", $._decode_implicit<MuxDescriptor>(() => _decode_MuxDescriptor) ],
    "CONTEXT 4": [ "eventsDescriptor", $._decode_implicit<EventsDescriptor>(() => _decode_EventsDescriptor) ],
    "CONTEXT 5": [ "eventBufferDescriptor", $._decode_implicit<EventBufferDescriptor>(() => _decode_EventBufferDescriptor) ],
    "CONTEXT 6": [ "signalsDescriptor", $._decode_implicit<SignalsDescriptor>(() => _decode_SignalsDescriptor) ],
    "CONTEXT 7": [ "digitMapDescriptor", $._decode_implicit<DigitMapDescriptor>(() => _decode_DigitMapDescriptor) ],
    "CONTEXT 8": [ "observedEventsDescriptor", $._decode_implicit<ObservedEventsDescriptor>(() => _decode_ObservedEventsDescriptor) ],
    "CONTEXT 9": [ "statisticsDescriptor", $._decode_implicit<StatisticsDescriptor>(() => _decode_StatisticsDescriptor) ],
    "CONTEXT 10": [ "packagesDescriptor", $._decode_implicit<PackagesDescriptor>(() => _decode_PackagesDescriptor) ],
    "CONTEXT 11": [ "emptyDescriptors", $._decode_implicit<AuditDescriptor>(() => _decode_AuditDescriptor) ]
}); }
    return _cached_decoder_for_AuditReturnParameter(el);
}

let _cached_encoder_for_AuditReturnParameter: $.ASN1Encoder<AuditReturnParameter> | null = null;

/**
 * @summary Encodes a(n) AuditReturnParameter into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AuditReturnParameter, encoded as an ASN.1 Element.
 */
export
function _encode_AuditReturnParameter (value: AuditReturnParameter, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AuditReturnParameter) { _cached_encoder_for_AuditReturnParameter = $._encode_choice<AuditReturnParameter>({
    "errorDescriptor": $._encode_implicit(_TagClass.context, 0, () => _encode_ErrorDescriptor, $.BER),
    "mediaDescriptor": $._encode_implicit(_TagClass.context, 1, () => _encode_MediaDescriptor, $.BER),
    "modemDescriptor": $._encode_implicit(_TagClass.context, 2, () => _encode_ModemDescriptor, $.BER),
    "muxDescriptor": $._encode_implicit(_TagClass.context, 3, () => _encode_MuxDescriptor, $.BER),
    "eventsDescriptor": $._encode_implicit(_TagClass.context, 4, () => _encode_EventsDescriptor, $.BER),
    "eventBufferDescriptor": $._encode_implicit(_TagClass.context, 5, () => _encode_EventBufferDescriptor, $.BER),
    "signalsDescriptor": $._encode_implicit(_TagClass.context, 6, () => _encode_SignalsDescriptor, $.BER),
    "digitMapDescriptor": $._encode_implicit(_TagClass.context, 7, () => _encode_DigitMapDescriptor, $.BER),
    "observedEventsDescriptor": $._encode_implicit(_TagClass.context, 8, () => _encode_ObservedEventsDescriptor, $.BER),
    "statisticsDescriptor": $._encode_implicit(_TagClass.context, 9, () => _encode_StatisticsDescriptor, $.BER),
    "packagesDescriptor": $._encode_implicit(_TagClass.context, 10, () => _encode_PackagesDescriptor, $.BER),
    "emptyDescriptors": $._encode_implicit(_TagClass.context, 11, () => _encode_AuditDescriptor, $.BER),
}, $.BER); }
    return _cached_encoder_for_AuditReturnParameter(value, elGetter);
}


/* eslint-enable */
