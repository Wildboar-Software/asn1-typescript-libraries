/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Signal, _decode_Signal, _encode_Signal } from "../MEDIA-GATEWAY-CONTROL/Signal.ta.mjs";
// export { Signal, _decode_Signal, _encode_Signal } from "../MEDIA-GATEWAY-CONTROL/Signal.ta.mjs";
import { SeqSigList, _decode_SeqSigList, _encode_SeqSigList } from "../MEDIA-GATEWAY-CONTROL/SeqSigList.ta.mjs";
// export { SeqSigList, _decode_SeqSigList, _encode_SeqSigList } from "../MEDIA-GATEWAY-CONTROL/SeqSigList.ta.mjs";


/**
 * @summary SignalRequest
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SignalRequest  ::= CHOICE
 *     {
 *         signal                    [0] Signal,
 *         seqSigList                [1] SeqSigList,
 *         ...
 *     }
 * ```
 */
export
type SignalRequest =
    { signal: Signal } /* CHOICE_ALT_ROOT */
    | { seqSigList: SeqSigList } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_SignalRequest: $.ASN1Decoder<SignalRequest> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SignalRequest
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SignalRequest (el: _Element): SignalRequest {
    if (!_cached_decoder_for_SignalRequest) { _cached_decoder_for_SignalRequest = $._decode_extensible_choice<SignalRequest>({
    "CONTEXT 0": [ "signal", $._decode_implicit<Signal>(() => _decode_Signal) ],
    "CONTEXT 1": [ "seqSigList", $._decode_implicit<SeqSigList>(() => _decode_SeqSigList) ]
}); }
    return _cached_decoder_for_SignalRequest(el);
}

let _cached_encoder_for_SignalRequest: $.ASN1Encoder<SignalRequest> | null = null;

/**
 * @summary Encodes a(n) SignalRequest into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SignalRequest, encoded as an ASN.1 Element.
 */
export
function _encode_SignalRequest (value: SignalRequest, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SignalRequest) { _cached_encoder_for_SignalRequest = $._encode_choice<SignalRequest>({
    "signal": $._encode_implicit(_TagClass.context, 0, () => _encode_Signal, $.BER),
    "seqSigList": $._encode_implicit(_TagClass.context, 1, () => _encode_SeqSigList, $.BER),
}, $.BER); }
    return _cached_encoder_for_SignalRequest(value, elGetter);
}


/* eslint-enable */
