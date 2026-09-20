/* eslint-disable */
import {
    NULL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ProcedureCancellationReason, _decode_ProcedureCancellationReason, _encode_ProcedureCancellationReason } from "../MAP-DialogueInformation/ProcedureCancellationReason.ta.mjs";
import { ResourceUnavailableReason, _decode_ResourceUnavailableReason, _encode_ResourceUnavailableReason } from "../MAP-DialogueInformation/ResourceUnavailableReason.ta.mjs";


/**
 * @summary MAP_UserAbortChoice
 * @description
 *
 * User reason of MAP-U-ABORT (3GPP TS 29.002 V19.1.0 clause 7.3.4, table
 * 7.3/7): `userResourceLimitation` is resource limitation (congestion);
 * `resourceUnavailable` is unavailability other than congestion (diagnostic
 * `ResourceUnavailableReason`); `applicationProcedureCancellation` cancels the
 * procedure (diagnostic `ProcedureCancellationReason`); `userSpecificReason` is
 * procedure error (terminated for procedural reasons).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MAP-UserAbortChoice  ::=  CHOICE {
 *     userSpecificReason    [0] NULL,
 *     userResourceLimitation    [1] NULL,
 *     resourceUnavailable    [2] ResourceUnavailableReason,
 *     applicationProcedureCancellation    [3] ProcedureCancellationReason}
 * ```
 */
export
type MAP_UserAbortChoice =
    { userSpecificReason: NULL } /* CHOICE_ALT_ROOT */
    | { userResourceLimitation: NULL } /* CHOICE_ALT_ROOT */
    | { resourceUnavailable: ResourceUnavailableReason } /* CHOICE_ALT_ROOT */
    | { applicationProcedureCancellation: ProcedureCancellationReason } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_MAP_UserAbortChoice: $.ASN1Decoder<MAP_UserAbortChoice> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MAP_UserAbortChoice
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MAP_UserAbortChoice (el: _Element): MAP_UserAbortChoice {
    if (!_cached_decoder_for_MAP_UserAbortChoice) { _cached_decoder_for_MAP_UserAbortChoice = $._decode_inextensible_choice<MAP_UserAbortChoice>({
    "CONTEXT 0": [ "userSpecificReason", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 1": [ "userResourceLimitation", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 2": [ "resourceUnavailable", $._decode_implicit<ResourceUnavailableReason>(() => _decode_ResourceUnavailableReason) ],
    "CONTEXT 3": [ "applicationProcedureCancellation", $._decode_implicit<ProcedureCancellationReason>(() => _decode_ProcedureCancellationReason) ]
}); }
    return _cached_decoder_for_MAP_UserAbortChoice(el);
}

let _cached_encoder_for_MAP_UserAbortChoice: $.ASN1Encoder<MAP_UserAbortChoice> | null = null;

/**
 * @summary Encodes a(n) MAP_UserAbortChoice into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MAP_UserAbortChoice, encoded as an ASN.1 Element.
 */
export
function _encode_MAP_UserAbortChoice (value: MAP_UserAbortChoice, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MAP_UserAbortChoice) { _cached_encoder_for_MAP_UserAbortChoice = $._encode_choice<MAP_UserAbortChoice>({
    "userSpecificReason": $._encode_implicit(_TagClass.context, 0, () => $._encodeNull, $.BER),
    "userResourceLimitation": $._encode_implicit(_TagClass.context, 1, () => $._encodeNull, $.BER),
    "resourceUnavailable": $._encode_implicit(_TagClass.context, 2, () => _encode_ResourceUnavailableReason, $.BER),
    "applicationProcedureCancellation": $._encode_implicit(_TagClass.context, 3, () => _encode_ProcedureCancellationReason, $.BER),
}, $.BER); }
    return _cached_encoder_for_MAP_UserAbortChoice(value, elGetter);
}


/* eslint-enable */
