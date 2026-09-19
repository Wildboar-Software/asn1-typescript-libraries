/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ACRDetermineReq, _decode_ACRDetermineReq, _encode_ACRDetermineReq } from "../TS33128Payloads/ACRDetermineReq.ta.mjs";
// export { ACRDetermineReq, _decode_ACRDetermineReq, _encode_ACRDetermineReq } from "../TS33128Payloads/ACRDetermineReq.ta.mjs";
import { ACRInitiateReq, _decode_ACRInitiateReq, _encode_ACRInitiateReq } from "../TS33128Payloads/ACRInitiateReq.ta.mjs";
// export { ACRInitiateReq, _decode_ACRInitiateReq, _encode_ACRInitiateReq } from "../TS33128Payloads/ACRInitiateReq.ta.mjs";


/**
 * @summary EESACRDetOrInit
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EESACRDetOrInit  ::=  CHOICE
 * {
 *     aCRDetermineReq    [1] ACRDetermineReq,
 *     aCRInitiateReq     [2] ACRInitiateReq
 * }
 * ```
 */
export
type EESACRDetOrInit =
    { aCRDetermineReq: ACRDetermineReq } /* CHOICE_ALT_ROOT */
    | { aCRInitiateReq: ACRInitiateReq } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_EESACRDetOrInit: $.ASN1Decoder<EESACRDetOrInit> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EESACRDetOrInit
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EESACRDetOrInit (el: _Element): EESACRDetOrInit {
    if (!_cached_decoder_for_EESACRDetOrInit) { _cached_decoder_for_EESACRDetOrInit = $._decode_inextensible_choice<EESACRDetOrInit>({
    "CONTEXT 1": [ "aCRDetermineReq", $._decode_implicit<ACRDetermineReq>(() => _decode_ACRDetermineReq) ],
    "CONTEXT 2": [ "aCRInitiateReq", $._decode_implicit<ACRInitiateReq>(() => _decode_ACRInitiateReq) ]
}); }
    return _cached_decoder_for_EESACRDetOrInit(el);
}

let _cached_encoder_for_EESACRDetOrInit: $.ASN1Encoder<EESACRDetOrInit> | null = null;

/**
 * @summary Encodes a(n) EESACRDetOrInit into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EESACRDetOrInit, encoded as an ASN.1 Element.
 */
export
function _encode_EESACRDetOrInit (value: EESACRDetOrInit, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EESACRDetOrInit) { _cached_encoder_for_EESACRDetOrInit = $._encode_choice<EESACRDetOrInit>({
    "aCRDetermineReq": $._encode_implicit(_TagClass.context, 1, () => _encode_ACRDetermineReq, $.BER),
    "aCRInitiateReq": $._encode_implicit(_TagClass.context, 2, () => _encode_ACRInitiateReq, $.BER),
}, $.BER); }
    return _cached_encoder_for_EESACRDetOrInit(value, elGetter);
}


/* eslint-enable */
