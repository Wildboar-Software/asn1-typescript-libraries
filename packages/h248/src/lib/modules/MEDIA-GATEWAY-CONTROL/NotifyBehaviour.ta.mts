/* eslint-disable */
import {
    NULL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { RegulatedEmbeddedDescriptor, _decode_RegulatedEmbeddedDescriptor, _encode_RegulatedEmbeddedDescriptor } from "../MEDIA-GATEWAY-CONTROL/RegulatedEmbeddedDescriptor.ta.mjs";


/**
 * @summary NotifyBehaviour
 * @description
 * 
 * Whether a recognized event produces a Notify (ITU-T Rec. H.248.1 (03/2013)
 * clause 7.1.9.6).
 *
 * `notifyImmediate` sends it at once; this is the default when the flag is
 * omitted. `neverNotify` does not send it. `notifyRegulated` lets the MG send
 * or suppress it according to MGC load, as detailed by the Notification
 * Behaviour package in clause E.15. If a regulated Notify is suppressed, the
 * second event and signals in `RegulatedEmbeddedDescriptor` are activated
 * instead of the ordinary embedded descriptors. If it is not suppressed, or if
 * the behaviour is immediate or never, the ordinary embedded descriptor is
 * used.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NotifyBehaviour  ::=  CHOICE
 *     {
 *         notifyImmediate            [0] NULL,
 *         notifyRegulated            [1] RegulatedEmbeddedDescriptor,
 *         neverNotify                [2] NULL,
 *         ...
 *     }
 * ```
 */
export
type NotifyBehaviour =
    { notifyImmediate: NULL } /* CHOICE_ALT_ROOT */
    | { notifyRegulated: RegulatedEmbeddedDescriptor } /* CHOICE_ALT_ROOT */
    | { neverNotify: NULL } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_NotifyBehaviour: $.ASN1Decoder<NotifyBehaviour> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NotifyBehaviour
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NotifyBehaviour (el: _Element): NotifyBehaviour {
    if (!_cached_decoder_for_NotifyBehaviour) { _cached_decoder_for_NotifyBehaviour = $._decode_extensible_choice<NotifyBehaviour>({
    "CONTEXT 0": [ "notifyImmediate", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 1": [ "notifyRegulated", $._decode_implicit<RegulatedEmbeddedDescriptor>(() => _decode_RegulatedEmbeddedDescriptor) ],
    "CONTEXT 2": [ "neverNotify", $._decode_implicit<NULL>(() => $._decodeNull) ]
}); }
    return _cached_decoder_for_NotifyBehaviour(el);
}

let _cached_encoder_for_NotifyBehaviour: $.ASN1Encoder<NotifyBehaviour> | null = null;

/**
 * @summary Encodes a(n) NotifyBehaviour into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NotifyBehaviour, encoded as an ASN.1 Element.
 */
export
function _encode_NotifyBehaviour (value: NotifyBehaviour, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NotifyBehaviour) { _cached_encoder_for_NotifyBehaviour = $._encode_choice<NotifyBehaviour>({
    "notifyImmediate": $._encode_implicit(_TagClass.context, 0, () => $._encodeNull, $.BER),
    "notifyRegulated": $._encode_implicit(_TagClass.context, 1, () => _encode_RegulatedEmbeddedDescriptor, $.BER),
    "neverNotify": $._encode_implicit(_TagClass.context, 2, () => $._encodeNull, $.BER),
}, $.BER); }
    return _cached_encoder_for_NotifyBehaviour(value, elGetter);
}


/* eslint-enable */
