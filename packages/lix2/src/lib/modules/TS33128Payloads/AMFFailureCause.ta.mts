/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { FiveGMMCause, _decode_FiveGMMCause, _encode_FiveGMMCause } from "../TS33128Payloads/FiveGMMCause.ta.mjs";
// export { FiveGMMCause, _decode_FiveGMMCause, _encode_FiveGMMCause } from "../TS33128Payloads/FiveGMMCause.ta.mjs";
import { FiveGSMCause, _decode_FiveGSMCause, _encode_FiveGSMCause } from "../TS33128Payloads/FiveGSMCause.ta.mjs";
// export { FiveGSMCause, _decode_FiveGSMCause, _encode_FiveGSMCause } from "../TS33128Payloads/FiveGSMCause.ta.mjs";


/**
 * @summary AMFFailureCause
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AMFFailureCause  ::=  CHOICE
 * {
 *     fiveGMMCause        [1] FiveGMMCause,
 *     fiveGSMCause        [2] FiveGSMCause
 * }
 * ```
 */
export
type AMFFailureCause =
    { fiveGMMCause: FiveGMMCause } /* CHOICE_ALT_ROOT */
    | { fiveGSMCause: FiveGSMCause } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_AMFFailureCause: $.ASN1Decoder<AMFFailureCause> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AMFFailureCause
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AMFFailureCause (el: _Element): AMFFailureCause {
    if (!_cached_decoder_for_AMFFailureCause) { _cached_decoder_for_AMFFailureCause = $._decode_inextensible_choice<AMFFailureCause>({
    "CONTEXT 1": [ "fiveGMMCause", $._decode_implicit<FiveGMMCause>(() => _decode_FiveGMMCause) ],
    "CONTEXT 2": [ "fiveGSMCause", $._decode_implicit<FiveGSMCause>(() => _decode_FiveGSMCause) ]
}); }
    return _cached_decoder_for_AMFFailureCause(el);
}

let _cached_encoder_for_AMFFailureCause: $.ASN1Encoder<AMFFailureCause> | null = null;

/**
 * @summary Encodes a(n) AMFFailureCause into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AMFFailureCause, encoded as an ASN.1 Element.
 */
export
function _encode_AMFFailureCause (value: AMFFailureCause, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AMFFailureCause) { _cached_encoder_for_AMFFailureCause = $._encode_choice<AMFFailureCause>({
    "fiveGMMCause": $._encode_implicit(_TagClass.context, 1, () => _encode_FiveGMMCause, $.BER),
    "fiveGSMCause": $._encode_implicit(_TagClass.context, 2, () => _encode_FiveGSMCause, $.BER),
}, $.BER); }
    return _cached_encoder_for_AMFFailureCause(value, elGetter);
}


/* eslint-enable */
