/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ServiceProblem, ServiceProblem_busy /* IMPORTED_LONG_NAMED_INTEGER */, busy /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceProblem_unavailable /* IMPORTED_LONG_NAMED_INTEGER */, unavailable /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceProblem_unwillingToPerform /* IMPORTED_LONG_NAMED_INTEGER */, unwillingToPerform /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceProblem_chainingRequired /* IMPORTED_LONG_NAMED_INTEGER */, chainingRequired /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceProblem_unableToProceed /* IMPORTED_LONG_NAMED_INTEGER */, unableToProceed /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceProblem_invalidReference /* IMPORTED_LONG_NAMED_INTEGER */, invalidReference /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceProblem_timeLimitExceeded /* IMPORTED_LONG_NAMED_INTEGER */, timeLimitExceeded /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceProblem_administrativeLimitExceeded /* IMPORTED_LONG_NAMED_INTEGER */, administrativeLimitExceeded /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceProblem_loopDetected /* IMPORTED_LONG_NAMED_INTEGER */, loopDetected /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceProblem_unavailableCriticalExtension /* IMPORTED_LONG_NAMED_INTEGER */, unavailableCriticalExtension /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceProblem_outOfScope /* IMPORTED_LONG_NAMED_INTEGER */, outOfScope /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceProblem_ditError /* IMPORTED_LONG_NAMED_INTEGER */, ditError /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceProblem_invalidQueryReference /* IMPORTED_LONG_NAMED_INTEGER */, invalidQueryReference /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceProblem_requestedServiceNotAvailable /* IMPORTED_LONG_NAMED_INTEGER */, requestedServiceNotAvailable /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceProblem_unsupportedMatchingUse /* IMPORTED_LONG_NAMED_INTEGER */, unsupportedMatchingUse /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceProblem_ambiguousKeyAttributes /* IMPORTED_LONG_NAMED_INTEGER */, ambiguousKeyAttributes /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceProblem_saslBindInProgress /* IMPORTED_LONG_NAMED_INTEGER */, saslBindInProgress /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceProblem_notSupportedByLDAP /* IMPORTED_LONG_NAMED_INTEGER */, notSupportedByLDAP /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_ServiceProblem, _encode_ServiceProblem } from "../DirectoryAbstractService/ServiceProblem.ta.mjs";
// export { ServiceProblem, ServiceProblem_busy /* IMPORTED_LONG_NAMED_INTEGER */, busy /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceProblem_unavailable /* IMPORTED_LONG_NAMED_INTEGER */, unavailable /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceProblem_unwillingToPerform /* IMPORTED_LONG_NAMED_INTEGER */, unwillingToPerform /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceProblem_chainingRequired /* IMPORTED_LONG_NAMED_INTEGER */, chainingRequired /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceProblem_unableToProceed /* IMPORTED_LONG_NAMED_INTEGER */, unableToProceed /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceProblem_invalidReference /* IMPORTED_LONG_NAMED_INTEGER */, invalidReference /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceProblem_timeLimitExceeded /* IMPORTED_LONG_NAMED_INTEGER */, timeLimitExceeded /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceProblem_administrativeLimitExceeded /* IMPORTED_LONG_NAMED_INTEGER */, administrativeLimitExceeded /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceProblem_loopDetected /* IMPORTED_LONG_NAMED_INTEGER */, loopDetected /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceProblem_unavailableCriticalExtension /* IMPORTED_LONG_NAMED_INTEGER */, unavailableCriticalExtension /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceProblem_outOfScope /* IMPORTED_LONG_NAMED_INTEGER */, outOfScope /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceProblem_ditError /* IMPORTED_LONG_NAMED_INTEGER */, ditError /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceProblem_invalidQueryReference /* IMPORTED_LONG_NAMED_INTEGER */, invalidQueryReference /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceProblem_requestedServiceNotAvailable /* IMPORTED_LONG_NAMED_INTEGER */, requestedServiceNotAvailable /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceProblem_unsupportedMatchingUse /* IMPORTED_LONG_NAMED_INTEGER */, unsupportedMatchingUse /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceProblem_ambiguousKeyAttributes /* IMPORTED_LONG_NAMED_INTEGER */, ambiguousKeyAttributes /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceProblem_saslBindInProgress /* IMPORTED_LONG_NAMED_INTEGER */, saslBindInProgress /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceProblem_notSupportedByLDAP /* IMPORTED_LONG_NAMED_INTEGER */, notSupportedByLDAP /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_ServiceProblem, _encode_ServiceProblem } from "../DirectoryAbstractService/ServiceProblem.ta.mjs";
import { SecurityProblem, SecurityProblem_inappropriateAuthentication /* IMPORTED_LONG_NAMED_INTEGER */, inappropriateAuthentication /* IMPORTED_SHORT_NAMED_INTEGER */, SecurityProblem_invalidCredentials /* IMPORTED_LONG_NAMED_INTEGER */, invalidCredentials /* IMPORTED_SHORT_NAMED_INTEGER */, SecurityProblem_insufficientAccessRights /* IMPORTED_LONG_NAMED_INTEGER */, insufficientAccessRights /* IMPORTED_SHORT_NAMED_INTEGER */, SecurityProblem_invalidSignature /* IMPORTED_LONG_NAMED_INTEGER */, invalidSignature /* IMPORTED_SHORT_NAMED_INTEGER */, SecurityProblem_protectionRequired /* IMPORTED_LONG_NAMED_INTEGER */, protectionRequired /* IMPORTED_SHORT_NAMED_INTEGER */, SecurityProblem_noInformation /* IMPORTED_LONG_NAMED_INTEGER */, noInformation /* IMPORTED_SHORT_NAMED_INTEGER */, SecurityProblem_blockedCredentials /* IMPORTED_LONG_NAMED_INTEGER */, blockedCredentials /* IMPORTED_SHORT_NAMED_INTEGER */, SecurityProblem_spkmError /* IMPORTED_LONG_NAMED_INTEGER */, spkmError /* IMPORTED_SHORT_NAMED_INTEGER */, SecurityProblem_unsupportedAuthenticationMethod /* IMPORTED_LONG_NAMED_INTEGER */, unsupportedAuthenticationMethod /* IMPORTED_SHORT_NAMED_INTEGER */, SecurityProblem_passwordExpired /* IMPORTED_LONG_NAMED_INTEGER */, passwordExpired /* IMPORTED_SHORT_NAMED_INTEGER */, SecurityProblem_inappropriateAlgorithms /* IMPORTED_LONG_NAMED_INTEGER */, inappropriateAlgorithms /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_SecurityProblem, _encode_SecurityProblem } from "../DirectoryAbstractService/SecurityProblem.ta.mjs";
// export { SecurityProblem, SecurityProblem_inappropriateAuthentication /* IMPORTED_LONG_NAMED_INTEGER */, inappropriateAuthentication /* IMPORTED_SHORT_NAMED_INTEGER */, SecurityProblem_invalidCredentials /* IMPORTED_LONG_NAMED_INTEGER */, invalidCredentials /* IMPORTED_SHORT_NAMED_INTEGER */, SecurityProblem_insufficientAccessRights /* IMPORTED_LONG_NAMED_INTEGER */, insufficientAccessRights /* IMPORTED_SHORT_NAMED_INTEGER */, SecurityProblem_invalidSignature /* IMPORTED_LONG_NAMED_INTEGER */, invalidSignature /* IMPORTED_SHORT_NAMED_INTEGER */, SecurityProblem_protectionRequired /* IMPORTED_LONG_NAMED_INTEGER */, protectionRequired /* IMPORTED_SHORT_NAMED_INTEGER */, SecurityProblem_noInformation /* IMPORTED_LONG_NAMED_INTEGER */, noInformation /* IMPORTED_SHORT_NAMED_INTEGER */, SecurityProblem_blockedCredentials /* IMPORTED_LONG_NAMED_INTEGER */, blockedCredentials /* IMPORTED_SHORT_NAMED_INTEGER */, SecurityProblem_spkmError /* IMPORTED_LONG_NAMED_INTEGER */, spkmError /* IMPORTED_SHORT_NAMED_INTEGER */, SecurityProblem_unsupportedAuthenticationMethod /* IMPORTED_LONG_NAMED_INTEGER */, unsupportedAuthenticationMethod /* IMPORTED_SHORT_NAMED_INTEGER */, SecurityProblem_passwordExpired /* IMPORTED_LONG_NAMED_INTEGER */, passwordExpired /* IMPORTED_SHORT_NAMED_INTEGER */, SecurityProblem_inappropriateAlgorithms /* IMPORTED_LONG_NAMED_INTEGER */, inappropriateAlgorithms /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_SecurityProblem, _encode_SecurityProblem } from "../DirectoryAbstractService/SecurityProblem.ta.mjs";


/**
 * @summary DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1_error
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DirectoryBindError-OPTIONALLY-PROTECTED-Parameter1-error ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1_error =
    { serviceError: ServiceProblem } /* CHOICE_ALT_ROOT */
    | { securityError: SecurityProblem } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1_error: $.ASN1Decoder<DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1_error> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1_error
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1_error (el: _Element): DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1_error {
    if (!_cached_decoder_for_DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1_error) { _cached_decoder_for_DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1_error = $._decode_extensible_choice<DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1_error>({
    "CONTEXT 1": [ "serviceError", $._decode_implicit<ServiceProblem>(() => _decode_ServiceProblem) ],
    "CONTEXT 2": [ "securityError", $._decode_implicit<SecurityProblem>(() => _decode_SecurityProblem) ]
}); }
    return _cached_decoder_for_DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1_error(el);
}

let _cached_encoder_for_DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1_error: $.ASN1Encoder<DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1_error> | null = null;

/**
 * @summary Encodes a(n) DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1_error into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1_error, encoded as an ASN.1 Element.
 */
export
function _encode_DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1_error (value: DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1_error, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1_error) { _cached_encoder_for_DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1_error = $._encode_choice<DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1_error>({
    "serviceError": $._encode_implicit(_TagClass.context, 1, () => _encode_ServiceProblem, $.BER),
    "securityError": $._encode_implicit(_TagClass.context, 2, () => _encode_SecurityProblem, $.BER),
}, $.BER); }
    return _cached_encoder_for_DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1_error(value, elGetter);
}


/* eslint-enable */
