/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Reason, _decode_Reason, _encode_Reason } from "../CONFHI2Operations/Reason.ta.mjs";
// export { Reason, _decode_Reason, _encode_Reason } from "../CONFHI2Operations/Reason.ta.mjs";


/**
 * @summary ConfEventFailureReason
 * @description
 * 
 * Why the named conference action failed. The octet layout is not defined. Use
 * the alternative that matches the event. 3GPP TS 33.108, clause 11.5, table
 * 11.2.
 *
 * `failedConfStartReason`: unsuccessful start, required on that report (table
 * 11.13). `failedPartyJoinReason`: unsuccessful join, required (table 11.6).
 * `failedPartyLeaveReason`: unsuccessful leave or drop, required (table 11.8).
 * `failedBearerModifyReason`: unsuccessful bearer change, required (table
 * 11.10). `failedConfEndReason`: unsuccessful conference end, required (table
 * 11.11).
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ConfEventFailureReason  ::=  CHOICE
 * {
 *         failedConfStartReason        [1] Reason,
 * 
 *         failedPartyJoinReason        [2] Reason,
 * 
 *         failedPartyLeaveReason        [3] Reason,
 * 
 *         failedBearerModifyReason    [4] Reason,
 * 
 *         failedConfEndReason            [5] Reason,
 * 
 *     ...
 * }
 * ```
 */
export
type ConfEventFailureReason =
    { failedConfStartReason: Reason } /* CHOICE_ALT_ROOT */
    | { failedPartyJoinReason: Reason } /* CHOICE_ALT_ROOT */
    | { failedPartyLeaveReason: Reason } /* CHOICE_ALT_ROOT */
    | { failedBearerModifyReason: Reason } /* CHOICE_ALT_ROOT */
    | { failedConfEndReason: Reason } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_ConfEventFailureReason: $.ASN1Decoder<ConfEventFailureReason> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ConfEventFailureReason
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ConfEventFailureReason (el: _Element): ConfEventFailureReason {
    if (!_cached_decoder_for_ConfEventFailureReason) { _cached_decoder_for_ConfEventFailureReason = $._decode_extensible_choice<ConfEventFailureReason>({
    "CONTEXT 1": [ "failedConfStartReason", $._decode_implicit<Reason>(() => _decode_Reason) ],
    "CONTEXT 2": [ "failedPartyJoinReason", $._decode_implicit<Reason>(() => _decode_Reason) ],
    "CONTEXT 3": [ "failedPartyLeaveReason", $._decode_implicit<Reason>(() => _decode_Reason) ],
    "CONTEXT 4": [ "failedBearerModifyReason", $._decode_implicit<Reason>(() => _decode_Reason) ],
    "CONTEXT 5": [ "failedConfEndReason", $._decode_implicit<Reason>(() => _decode_Reason) ]
}); }
    return _cached_decoder_for_ConfEventFailureReason(el);
}

let _cached_encoder_for_ConfEventFailureReason: $.ASN1Encoder<ConfEventFailureReason> | null = null;

/**
 * @summary Encodes a(n) ConfEventFailureReason into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConfEventFailureReason, encoded as an ASN.1 Element.
 */
export
function _encode_ConfEventFailureReason (value: ConfEventFailureReason, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ConfEventFailureReason) { _cached_encoder_for_ConfEventFailureReason = $._encode_choice<ConfEventFailureReason>({
    "failedConfStartReason": $._encode_implicit(_TagClass.context, 1, () => _encode_Reason, $.BER),
    "failedPartyJoinReason": $._encode_implicit(_TagClass.context, 2, () => _encode_Reason, $.BER),
    "failedPartyLeaveReason": $._encode_implicit(_TagClass.context, 3, () => _encode_Reason, $.BER),
    "failedBearerModifyReason": $._encode_implicit(_TagClass.context, 4, () => _encode_Reason, $.BER),
    "failedConfEndReason": $._encode_implicit(_TagClass.context, 5, () => _encode_Reason, $.BER),
}, $.BER); }
    return _cached_encoder_for_ConfEventFailureReason(value, elGetter);
}


/* eslint-enable */
