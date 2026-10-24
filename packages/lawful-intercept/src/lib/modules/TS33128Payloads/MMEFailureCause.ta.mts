/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type EMMCause, _decode_EMMCause, _encode_EMMCause } from "../TS33128Payloads/EMMCause.ta.mjs";
// export { EMMCause, _decode_EMMCause, _encode_EMMCause } from "../TS33128Payloads/EMMCause.ta.mjs";
import { type ESMCause, _decode_ESMCause, _encode_ESMCause } from "../TS33128Payloads/ESMCause.ta.mjs";
// export { ESMCause, _decode_ESMCause, _encode_ESMCause } from "../TS33128Payloads/ESMCause.ta.mjs";


/**
 * @summary MMEFailureCause
 * @description
 * 
 * Provides the value of the ESM or EMM cause, see TS 24.301 [51] clauses
 * 9.9.3.9 and 9.9.4.4.
 *
 * 3GPP TS 33.128, clause 6.3.2.2.7.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMEFailureCause  ::=  CHOICE
 * {
 *     eMMCause [1] EMMCause,
 *     eSMCause [2] ESMCause
 * }
 * ```
 */
export
type MMEFailureCause =
    /**
     * @description
     *
     * Indicates the EMM cause value for network-initiated detach, see TS 24.301
     * [51] clause 9.9.3.9. (3GPP TS 33.128, clause 6.3.2.2.4.)
     */
    { eMMCause: EMMCause } /* CHOICE_ALT_ROOT */
    /**
     * @description
     *
     * Provides the value of the ESM cause, see TS 24.301 [50] clause 9.9.4.4.
     * (3GPP TS 33.128, clause 6.3.3.2.10.)
     */
    | { eSMCause: ESMCause } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_MMEFailureCause: $.ASN1Decoder<MMEFailureCause> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MMEFailureCause
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MMEFailureCause (el: _Element): MMEFailureCause {
    if (!_cached_decoder_for_MMEFailureCause) { _cached_decoder_for_MMEFailureCause = $._decode_extensible_choice<MMEFailureCause>({
    "CONTEXT 1": [ "eMMCause", $._decode_implicit<EMMCause>(() => _decode_EMMCause) ],
    "CONTEXT 2": [ "eSMCause", $._decode_implicit<ESMCause>(() => _decode_ESMCause) ]
}); }
    return _cached_decoder_for_MMEFailureCause(el);
}

let _cached_encoder_for_MMEFailureCause: $.ASN1Encoder<MMEFailureCause> | null = null;

/**
 * @summary Encodes a(n) MMEFailureCause into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MMEFailureCause, encoded as an ASN.1 Element.
 */
export
function _encode_MMEFailureCause (value: MMEFailureCause, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MMEFailureCause) { _cached_encoder_for_MMEFailureCause = $._encode_choice<MMEFailureCause>({
    "eMMCause": $._encode_implicit(_TagClass.context, 1, () => _encode_EMMCause, $.BER),
    "eSMCause": $._encode_implicit(_TagClass.context, 2, () => _encode_ESMCause, $.BER),
}, $.BER); }
    return _cached_encoder_for_MMEFailureCause(value, elGetter);
}


/* eslint-enable */
