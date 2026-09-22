/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { NegTokenInit, _decode_NegTokenInit, _encode_NegTokenInit } from "../Spnego/NegTokenInit.ta.mjs";
// export { NegTokenInit, _decode_NegTokenInit, _encode_NegTokenInit } from "../Spnego/NegTokenInit.ta.mjs";
import { NegTokenTarg, _decode_NegTokenTarg, _encode_NegTokenTarg } from "../Spnego/NegTokenTarg.ta.mjs";
// export { NegTokenTarg, _decode_NegTokenTarg, _encode_NegTokenTarg } from "../Spnego/NegTokenTarg.ta.mjs";


/**
 * @summary NegotiationToken
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NegotiationToken  ::=  CHOICE {
 *                               negTokenInit  [0]  NegTokenInit,
 *                               negTokenTarg  [1]  NegTokenTarg }
 * ```
 */
export
type NegotiationToken =
    { negTokenInit: NegTokenInit } /* CHOICE_ALT_ROOT */
    | { negTokenTarg: NegTokenTarg } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_NegotiationToken: $.ASN1Decoder<NegotiationToken> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NegotiationToken
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NegotiationToken (el: _Element): NegotiationToken {
    if (!_cached_decoder_for_NegotiationToken) { _cached_decoder_for_NegotiationToken = $._decode_inextensible_choice<NegotiationToken>({
    "CONTEXT 0": [ "negTokenInit", $._decode_implicit<NegTokenInit>(() => _decode_NegTokenInit) ],
    "CONTEXT 1": [ "negTokenTarg", $._decode_implicit<NegTokenTarg>(() => _decode_NegTokenTarg) ]
}); }
    return _cached_decoder_for_NegotiationToken(el);
}

let _cached_encoder_for_NegotiationToken: $.ASN1Encoder<NegotiationToken> | null = null;

/**
 * @summary Encodes a(n) NegotiationToken into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NegotiationToken, encoded as an ASN.1 Element.
 */
export
function _encode_NegotiationToken (value: NegotiationToken, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NegotiationToken) { _cached_encoder_for_NegotiationToken = $._encode_choice<NegotiationToken>({
    "negTokenInit": $._encode_implicit(_TagClass.context, 0, () => _encode_NegTokenInit, $.BER),
    "negTokenTarg": $._encode_implicit(_TagClass.context, 1, () => _encode_NegTokenTarg, $.BER),
}, $.BER); }
    return _cached_encoder_for_NegotiationToken(value, elGetter);
}


/* eslint-enable */
