/* eslint-disable */
import {
    NULL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { RegulatedEmbeddedDescriptor, _decode_RegulatedEmbeddedDescriptor, _encode_RegulatedEmbeddedDescriptor } from "../MEDIA-GATEWAY-CONTROL/RegulatedEmbeddedDescriptor.ta.mjs";
// export { RegulatedEmbeddedDescriptor, _decode_RegulatedEmbeddedDescriptor, _encode_RegulatedEmbeddedDescriptor } from "../MEDIA-GATEWAY-CONTROL/RegulatedEmbeddedDescriptor.ta.mjs";


/**
 * @summary NotifyBehaviour
 * @description
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
