/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ServiceProblem, _decode_ServiceProblem, _encode_ServiceProblem } from "../DirectoryAbstractService/ServiceProblem.ta.mjs";
// export { ServiceProblem, ServiceProblem_busy /* IMPORTED_LONG_NAMED_INTEGER */, busy /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceProblem_unavailable /* IMPORTED_LONG_NAMED_INTEGER */, unavailable /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceProblem_unwillingToPerform /* IMPORTED_LONG_NAMED_INTEGER */, unwillingToPerform /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceProblem_chainingRequired /* IMPORTED_LONG_NAMED_INTEGER */, chainingRequired /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceProblem_unableToProceed /* IMPORTED_LONG_NAMED_INTEGER */, unableToProceed /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceProblem_invalidReference /* IMPORTED_LONG_NAMED_INTEGER */, invalidReference /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceProblem_timeLimitExceeded /* IMPORTED_LONG_NAMED_INTEGER */, timeLimitExceeded /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceProblem_administrativeLimitExceeded /* IMPORTED_LONG_NAMED_INTEGER */, administrativeLimitExceeded /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceProblem_loopDetected /* IMPORTED_LONG_NAMED_INTEGER */, loopDetected /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceProblem_unavailableCriticalExtension /* IMPORTED_LONG_NAMED_INTEGER */, unavailableCriticalExtension /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceProblem_outOfScope /* IMPORTED_LONG_NAMED_INTEGER */, outOfScope /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceProblem_ditError /* IMPORTED_LONG_NAMED_INTEGER */, ditError /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceProblem_invalidQueryReference /* IMPORTED_LONG_NAMED_INTEGER */, invalidQueryReference /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceProblem_requestedServiceNotAvailable /* IMPORTED_LONG_NAMED_INTEGER */, requestedServiceNotAvailable /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceProblem_relaxationNotSupported /* IMPORTED_LONG_NAMED_INTEGER */, relaxationNotSupported /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceProblem_unavailableRelaxationLevel /* IMPORTED_LONG_NAMED_INTEGER */, unavailableRelaxationLevel /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceProblem_unsupportedMatchingUse /* IMPORTED_LONG_NAMED_INTEGER */, unsupportedMatchingUse /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceProblem_unmatchedKeyAttributes /* IMPORTED_LONG_NAMED_INTEGER */, unmatchedKeyAttributes /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceProblem_ambiguousKeyAttributes /* IMPORTED_LONG_NAMED_INTEGER */, ambiguousKeyAttributes /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_ServiceProblem, _encode_ServiceProblem } from "../DirectoryAbstractService/ServiceProblem.ta.mjs";
import { SecurityProblem, _decode_SecurityProblem, _encode_SecurityProblem } from "../DirectoryAbstractService/SecurityProblem.ta.mjs";
// export { SecurityProblem, SecurityProblem_inappropriateAuthentication /* IMPORTED_LONG_NAMED_INTEGER */, inappropriateAuthentication /* IMPORTED_SHORT_NAMED_INTEGER */, SecurityProblem_invalidCredentials /* IMPORTED_LONG_NAMED_INTEGER */, invalidCredentials /* IMPORTED_SHORT_NAMED_INTEGER */, SecurityProblem_insufficientAccessRights /* IMPORTED_LONG_NAMED_INTEGER */, insufficientAccessRights /* IMPORTED_SHORT_NAMED_INTEGER */, SecurityProblem_invalidSignature /* IMPORTED_LONG_NAMED_INTEGER */, invalidSignature /* IMPORTED_SHORT_NAMED_INTEGER */, SecurityProblem_protectionRequired /* IMPORTED_LONG_NAMED_INTEGER */, protectionRequired /* IMPORTED_SHORT_NAMED_INTEGER */, SecurityProblem_noInformation /* IMPORTED_LONG_NAMED_INTEGER */, noInformation /* IMPORTED_SHORT_NAMED_INTEGER */, SecurityProblem_blockedCredentials /* IMPORTED_LONG_NAMED_INTEGER */, blockedCredentials /* IMPORTED_SHORT_NAMED_INTEGER */, SecurityProblem_invalidQOPMatch /* IMPORTED_LONG_NAMED_INTEGER */, invalidQOPMatch /* IMPORTED_SHORT_NAMED_INTEGER */, SecurityProblem_spkmError /* IMPORTED_LONG_NAMED_INTEGER */, spkmError /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_SecurityProblem, _encode_SecurityProblem } from "../DirectoryAbstractService/SecurityProblem.ta.mjs";


/**
 * @summary tfcBindError_ParameterType_error
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tfcBindError-ParameterType-error ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type tfcBindError_ParameterType_error =
    { serviceError: ServiceProblem } /* CHOICE_ALT_ROOT */
    | { securityError: SecurityProblem } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_tfcBindError_ParameterType_error: $.ASN1Decoder<tfcBindError_ParameterType_error> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) tfcBindError_ParameterType_error
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_tfcBindError_ParameterType_error (el: _Element): tfcBindError_ParameterType_error {
    if (!_cached_decoder_for_tfcBindError_ParameterType_error) { _cached_decoder_for_tfcBindError_ParameterType_error = $._decode_inextensible_choice<tfcBindError_ParameterType_error>({
    "CONTEXT 1": [ "serviceError", $._decode_implicit<ServiceProblem>(() => _decode_ServiceProblem) ],
    "CONTEXT 2": [ "securityError", $._decode_implicit<SecurityProblem>(() => _decode_SecurityProblem) ]
}); }
    return _cached_decoder_for_tfcBindError_ParameterType_error(el);
}

let _cached_encoder_for_tfcBindError_ParameterType_error: $.ASN1Encoder<tfcBindError_ParameterType_error> | null = null;

/**
 * @summary Encodes a(n) tfcBindError_ParameterType_error into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The tfcBindError_ParameterType_error, encoded as an ASN.1 Element.
 */
export
function _encode_tfcBindError_ParameterType_error (value: tfcBindError_ParameterType_error, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_tfcBindError_ParameterType_error) { _cached_encoder_for_tfcBindError_ParameterType_error = $._encode_choice<tfcBindError_ParameterType_error>({
    "serviceError": $._encode_implicit(_TagClass.context, 1, () => _encode_ServiceProblem, $.BER),
    "securityError": $._encode_implicit(_TagClass.context, 2, () => _encode_SecurityProblem, $.BER),
}, $.BER); }
    return _cached_encoder_for_tfcBindError_ParameterType_error(value, elGetter);
}


/* eslint-enable */
