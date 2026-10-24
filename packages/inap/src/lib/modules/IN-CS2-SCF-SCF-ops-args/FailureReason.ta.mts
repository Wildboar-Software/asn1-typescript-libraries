/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { UnavailableNetworkResource, _decode_UnavailableNetworkResource, _encode_UnavailableNetworkResource } from "../IN-CS2-datatypes/UnavailableNetworkResource.ta.mjs";
// export { UnavailableNetworkResource, _enum_for_UnavailableNetworkResource, UnavailableNetworkResource_unavailableResources /* IMPORTED_LONG_ENUMERATION_ITEM */, unavailableResources /* IMPORTED_SHORT_ENUMERATION_ITEM */, UnavailableNetworkResource_componentFailure /* IMPORTED_LONG_ENUMERATION_ITEM */, componentFailure /* IMPORTED_SHORT_ENUMERATION_ITEM */, UnavailableNetworkResource_basicCallProcessingException /* IMPORTED_LONG_ENUMERATION_ITEM */, basicCallProcessingException /* IMPORTED_SHORT_ENUMERATION_ITEM */, UnavailableNetworkResource_resourceStatusFailure /* IMPORTED_LONG_ENUMERATION_ITEM */, resourceStatusFailure /* IMPORTED_SHORT_ENUMERATION_ITEM */, UnavailableNetworkResource_endUserFailure /* IMPORTED_LONG_ENUMERATION_ITEM */, endUserFailure /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_UnavailableNetworkResource, _encode_UnavailableNetworkResource } from "../IN-CS2-datatypes/UnavailableNetworkResource.ta.mjs";
import { ScfTaskRefusedParameter, _decode_ScfTaskRefusedParameter, _encode_ScfTaskRefusedParameter } from "../IN-CS2-SCF-SCF-ops-args/ScfTaskRefusedParameter.ta.mjs";
// export { ScfTaskRefusedParameter, _decode_ScfTaskRefusedParameter, _encode_ScfTaskRefusedParameter } from "../IN-CS2-SCF-SCF-ops-args/ScfTaskRefusedParameter.ta.mjs";
import { FailureReason_securityError, _decode_FailureReason_securityError, _encode_FailureReason_securityError } from "../IN-CS2-SCF-SCF-ops-args/FailureReason-securityError.ta.mjs";
// export { FailureReason_securityError, _decode_FailureReason_securityError, _encode_FailureReason_securityError } from "../IN-CS2-SCF-SCF-ops-args/FailureReason-securityError.ta.mjs";


/**
 * @summary FailureReason
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FailureReason  ::=  CHOICE {
 *   systemFailure   [0]  UnavailableNetworkResource,
 *   scfTaskRefused  [1]  ScfTaskRefusedParameter,
 *   securityError
 *     [2]  SET {problem   [0]  SecurityProblem,
 *               spkmInfo  [1]  SPKM-ERROR}
 * }
 * ```
 */
export
type FailureReason =
    { systemFailure: UnavailableNetworkResource } /* CHOICE_ALT_ROOT */
    | { scfTaskRefused: ScfTaskRefusedParameter } /* CHOICE_ALT_ROOT */
    | { securityError: FailureReason_securityError } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_FailureReason: $.ASN1Decoder<FailureReason> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FailureReason
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FailureReason (el: _Element): FailureReason {
    if (!_cached_decoder_for_FailureReason) { _cached_decoder_for_FailureReason = $._decode_inextensible_choice<FailureReason>({
    "CONTEXT 0": [ "systemFailure", $._decode_implicit<UnavailableNetworkResource>(() => _decode_UnavailableNetworkResource) ],
    "CONTEXT 1": [ "scfTaskRefused", $._decode_explicit<ScfTaskRefusedParameter>(() => _decode_ScfTaskRefusedParameter) ],
    "CONTEXT 2": [ "securityError", $._decode_implicit<FailureReason_securityError>(() => _decode_FailureReason_securityError) ]
}); }
    return _cached_decoder_for_FailureReason(el);
}

let _cached_encoder_for_FailureReason: $.ASN1Encoder<FailureReason> | null = null;

/**
 * @summary Encodes a(n) FailureReason into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FailureReason, encoded as an ASN.1 Element.
 */
export
function _encode_FailureReason (value: FailureReason, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FailureReason) { _cached_encoder_for_FailureReason = $._encode_choice<FailureReason>({
    "systemFailure": $._encode_implicit(_TagClass.context, 0, () => _encode_UnavailableNetworkResource, $.BER),
    "scfTaskRefused": $._encode_explicit(_TagClass.context, 1, () => _encode_ScfTaskRefusedParameter, $.BER),
    "securityError": $._encode_implicit(_TagClass.context, 2, () => _encode_FailureReason_securityError, $.BER),
}, $.BER); }
    return _cached_encoder_for_FailureReason(value, elGetter);
}


/* eslint-enable */
