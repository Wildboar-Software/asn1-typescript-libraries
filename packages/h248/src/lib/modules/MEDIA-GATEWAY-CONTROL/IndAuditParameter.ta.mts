/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IndAudMediaDescriptor, _decode_IndAudMediaDescriptor, _encode_IndAudMediaDescriptor } from "../MEDIA-GATEWAY-CONTROL/IndAudMediaDescriptor.ta.mjs";
// export { IndAudMediaDescriptor, _decode_IndAudMediaDescriptor, _encode_IndAudMediaDescriptor } from "../MEDIA-GATEWAY-CONTROL/IndAudMediaDescriptor.ta.mjs";
import { IndAudEventsDescriptor, _decode_IndAudEventsDescriptor, _encode_IndAudEventsDescriptor } from "../MEDIA-GATEWAY-CONTROL/IndAudEventsDescriptor.ta.mjs";
// export { IndAudEventsDescriptor, _decode_IndAudEventsDescriptor, _encode_IndAudEventsDescriptor } from "../MEDIA-GATEWAY-CONTROL/IndAudEventsDescriptor.ta.mjs";
import { IndAudEventBufferDescriptor, _decode_IndAudEventBufferDescriptor, _encode_IndAudEventBufferDescriptor } from "../MEDIA-GATEWAY-CONTROL/IndAudEventBufferDescriptor.ta.mjs";
// export { IndAudEventBufferDescriptor, _decode_IndAudEventBufferDescriptor, _encode_IndAudEventBufferDescriptor } from "../MEDIA-GATEWAY-CONTROL/IndAudEventBufferDescriptor.ta.mjs";
import { IndAudSignalsDescriptor, _decode_IndAudSignalsDescriptor, _encode_IndAudSignalsDescriptor } from "../MEDIA-GATEWAY-CONTROL/IndAudSignalsDescriptor.ta.mjs";
// export { IndAudSignalsDescriptor, _decode_IndAudSignalsDescriptor, _encode_IndAudSignalsDescriptor } from "../MEDIA-GATEWAY-CONTROL/IndAudSignalsDescriptor.ta.mjs";
import { IndAudDigitMapDescriptor, _decode_IndAudDigitMapDescriptor, _encode_IndAudDigitMapDescriptor } from "../MEDIA-GATEWAY-CONTROL/IndAudDigitMapDescriptor.ta.mjs";
// export { IndAudDigitMapDescriptor, _decode_IndAudDigitMapDescriptor, _encode_IndAudDigitMapDescriptor } from "../MEDIA-GATEWAY-CONTROL/IndAudDigitMapDescriptor.ta.mjs";
import { IndAudStatisticsDescriptor, _decode_IndAudStatisticsDescriptor, _encode_IndAudStatisticsDescriptor } from "../MEDIA-GATEWAY-CONTROL/IndAudStatisticsDescriptor.ta.mjs";
// export { IndAudStatisticsDescriptor, _decode_IndAudStatisticsDescriptor, _encode_IndAudStatisticsDescriptor } from "../MEDIA-GATEWAY-CONTROL/IndAudStatisticsDescriptor.ta.mjs";
import { IndAudPackagesDescriptor, _decode_IndAudPackagesDescriptor, _encode_IndAudPackagesDescriptor } from "../MEDIA-GATEWAY-CONTROL/IndAudPackagesDescriptor.ta.mjs";
// export { IndAudPackagesDescriptor, _decode_IndAudPackagesDescriptor, _encode_IndAudPackagesDescriptor } from "../MEDIA-GATEWAY-CONTROL/IndAudPackagesDescriptor.ta.mjs";


/**
 * @summary IndAuditParameter
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IndAuditParameter  ::=  CHOICE
 *     {
 *         indaudmediaDescriptor        [0] IndAudMediaDescriptor,
 *         indaudeventsDescriptor        [1] IndAudEventsDescriptor,
 *         indaudeventBufferDescriptor [2] IndAudEventBufferDescriptor,
 *         indaudsignalsDescriptor        [3] IndAudSignalsDescriptor,
 *         indauddigitMapDescriptor    [4] IndAudDigitMapDescriptor,
 *         indaudstatisticsDescriptor  [5] IndAudStatisticsDescriptor,
 *         indaudpackagesDescriptor    [6] IndAudPackagesDescriptor,
 *         ...
 *     }
 * ```
 */
export
type IndAuditParameter =
    { indaudmediaDescriptor: IndAudMediaDescriptor } /* CHOICE_ALT_ROOT */
    | { indaudeventsDescriptor: IndAudEventsDescriptor } /* CHOICE_ALT_ROOT */
    | { indaudeventBufferDescriptor: IndAudEventBufferDescriptor } /* CHOICE_ALT_ROOT */
    | { indaudsignalsDescriptor: IndAudSignalsDescriptor } /* CHOICE_ALT_ROOT */
    | { indauddigitMapDescriptor: IndAudDigitMapDescriptor } /* CHOICE_ALT_ROOT */
    | { indaudstatisticsDescriptor: IndAudStatisticsDescriptor } /* CHOICE_ALT_ROOT */
    | { indaudpackagesDescriptor: IndAudPackagesDescriptor } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_IndAuditParameter: $.ASN1Decoder<IndAuditParameter> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IndAuditParameter
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IndAuditParameter (el: _Element): IndAuditParameter {
    if (!_cached_decoder_for_IndAuditParameter) { _cached_decoder_for_IndAuditParameter = $._decode_extensible_choice<IndAuditParameter>({
    "CONTEXT 0": [ "indaudmediaDescriptor", $._decode_implicit<IndAudMediaDescriptor>(() => _decode_IndAudMediaDescriptor) ],
    "CONTEXT 1": [ "indaudeventsDescriptor", $._decode_implicit<IndAudEventsDescriptor>(() => _decode_IndAudEventsDescriptor) ],
    "CONTEXT 2": [ "indaudeventBufferDescriptor", $._decode_implicit<IndAudEventBufferDescriptor>(() => _decode_IndAudEventBufferDescriptor) ],
    "CONTEXT 3": [ "indaudsignalsDescriptor", $._decode_explicit<IndAudSignalsDescriptor>(() => _decode_IndAudSignalsDescriptor) ],
    "CONTEXT 4": [ "indauddigitMapDescriptor", $._decode_implicit<IndAudDigitMapDescriptor>(() => _decode_IndAudDigitMapDescriptor) ],
    "CONTEXT 5": [ "indaudstatisticsDescriptor", $._decode_implicit<IndAudStatisticsDescriptor>(() => _decode_IndAudStatisticsDescriptor) ],
    "CONTEXT 6": [ "indaudpackagesDescriptor", $._decode_implicit<IndAudPackagesDescriptor>(() => _decode_IndAudPackagesDescriptor) ]
}); }
    return _cached_decoder_for_IndAuditParameter(el);
}

let _cached_encoder_for_IndAuditParameter: $.ASN1Encoder<IndAuditParameter> | null = null;

/**
 * @summary Encodes a(n) IndAuditParameter into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IndAuditParameter, encoded as an ASN.1 Element.
 */
export
function _encode_IndAuditParameter (value: IndAuditParameter, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IndAuditParameter) { _cached_encoder_for_IndAuditParameter = $._encode_choice<IndAuditParameter>({
    "indaudmediaDescriptor": $._encode_implicit(_TagClass.context, 0, () => _encode_IndAudMediaDescriptor, $.BER),
    "indaudeventsDescriptor": $._encode_implicit(_TagClass.context, 1, () => _encode_IndAudEventsDescriptor, $.BER),
    "indaudeventBufferDescriptor": $._encode_implicit(_TagClass.context, 2, () => _encode_IndAudEventBufferDescriptor, $.BER),
    "indaudsignalsDescriptor": $._encode_explicit(_TagClass.context, 3, () => _encode_IndAudSignalsDescriptor, $.BER),
    "indauddigitMapDescriptor": $._encode_implicit(_TagClass.context, 4, () => _encode_IndAudDigitMapDescriptor, $.BER),
    "indaudstatisticsDescriptor": $._encode_implicit(_TagClass.context, 5, () => _encode_IndAudStatisticsDescriptor, $.BER),
    "indaudpackagesDescriptor": $._encode_implicit(_TagClass.context, 6, () => _encode_IndAudPackagesDescriptor, $.BER),
}, $.BER); }
    return _cached_encoder_for_IndAuditParameter(value, elGetter);
}


/* eslint-enable */
