/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IndAudSignal, _decode_IndAudSignal, _encode_IndAudSignal } from "../MEDIA-GATEWAY-CONTROL/IndAudSignal.ta.mjs";
// export { IndAudSignal, _decode_IndAudSignal, _encode_IndAudSignal } from "../MEDIA-GATEWAY-CONTROL/IndAudSignal.ta.mjs";
import { IndAudSeqSigList, _decode_IndAudSeqSigList, _encode_IndAudSeqSigList } from "../MEDIA-GATEWAY-CONTROL/IndAudSeqSigList.ta.mjs";
// export { IndAudSeqSigList, _decode_IndAudSeqSigList, _encode_IndAudSeqSigList } from "../MEDIA-GATEWAY-CONTROL/IndAudSeqSigList.ta.mjs";


/**
 * @summary IndAudSignalsDescriptor
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IndAudSignalsDescriptor  ::= CHOICE
 *     {
 *         signal                        [0] IndAudSignal,
 *         seqSigList                    [1] IndAudSeqSigList,
 *         ...
 *     }
 * ```
 */
export
type IndAudSignalsDescriptor =
    { signal: IndAudSignal } /* CHOICE_ALT_ROOT */
    | { seqSigList: IndAudSeqSigList } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_IndAudSignalsDescriptor: $.ASN1Decoder<IndAudSignalsDescriptor> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IndAudSignalsDescriptor
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IndAudSignalsDescriptor (el: _Element): IndAudSignalsDescriptor {
    if (!_cached_decoder_for_IndAudSignalsDescriptor) { _cached_decoder_for_IndAudSignalsDescriptor = $._decode_extensible_choice<IndAudSignalsDescriptor>({
    "CONTEXT 0": [ "signal", $._decode_implicit<IndAudSignal>(() => _decode_IndAudSignal) ],
    "CONTEXT 1": [ "seqSigList", $._decode_implicit<IndAudSeqSigList>(() => _decode_IndAudSeqSigList) ]
}); }
    return _cached_decoder_for_IndAudSignalsDescriptor(el);
}

let _cached_encoder_for_IndAudSignalsDescriptor: $.ASN1Encoder<IndAudSignalsDescriptor> | null = null;

/**
 * @summary Encodes a(n) IndAudSignalsDescriptor into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IndAudSignalsDescriptor, encoded as an ASN.1 Element.
 */
export
function _encode_IndAudSignalsDescriptor (value: IndAudSignalsDescriptor, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IndAudSignalsDescriptor) { _cached_encoder_for_IndAudSignalsDescriptor = $._encode_choice<IndAudSignalsDescriptor>({
    "signal": $._encode_implicit(_TagClass.context, 0, () => _encode_IndAudSignal, $.BER),
    "seqSigList": $._encode_implicit(_TagClass.context, 1, () => _encode_IndAudSeqSigList, $.BER),
}, $.BER); }
    return _cached_encoder_for_IndAudSignalsDescriptor(value, elGetter);
}


/* eslint-enable */
