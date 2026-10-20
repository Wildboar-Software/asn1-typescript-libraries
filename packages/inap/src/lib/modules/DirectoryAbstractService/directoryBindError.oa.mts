/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { OPTIONALLY_PROTECTED, _get_decoder_for_OPTIONALLY_PROTECTED, _get_encoder_for_OPTIONALLY_PROTECTED } from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta.mjs";
// export { OPTIONALLY_PROTECTED, _get_decoder_for_OPTIONALLY_PROTECTED, _get_encoder_for_OPTIONALLY_PROTECTED } from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta.mjs";
import { Versions, _decode_Versions, _encode_Versions } from "../DirectoryAbstractService/Versions.ta.mjs";
// export { Versions, Versions_v1 /* IMPORTED_LONG_NAMED_BIT */, v1 /* IMPORTED_SHORT_NAMED_BIT */, Versions_v2 /* IMPORTED_LONG_NAMED_BIT */, v2 /* IMPORTED_SHORT_NAMED_BIT */, _decode_Versions, _encode_Versions } from "../DirectoryAbstractService/Versions.ta.mjs";
import { ServiceProblem, _decode_ServiceProblem } from "../DirectoryAbstractService/ServiceProblem.ta.mjs";
// export { ServiceProblem, ServiceProblem_busy /* IMPORTED_LONG_NAMED_INTEGER */, busy /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceProblem_unavailable /* IMPORTED_LONG_NAMED_INTEGER */, unavailable /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceProblem_unwillingToPerform /* IMPORTED_LONG_NAMED_INTEGER */, unwillingToPerform /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceProblem_chainingRequired /* IMPORTED_LONG_NAMED_INTEGER */, chainingRequired /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceProblem_unableToProceed /* IMPORTED_LONG_NAMED_INTEGER */, unableToProceed /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceProblem_invalidReference /* IMPORTED_LONG_NAMED_INTEGER */, invalidReference /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceProblem_timeLimitExceeded /* IMPORTED_LONG_NAMED_INTEGER */, timeLimitExceeded /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceProblem_administrativeLimitExceeded /* IMPORTED_LONG_NAMED_INTEGER */, administrativeLimitExceeded /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceProblem_loopDetected /* IMPORTED_LONG_NAMED_INTEGER */, loopDetected /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceProblem_unavailableCriticalExtension /* IMPORTED_LONG_NAMED_INTEGER */, unavailableCriticalExtension /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceProblem_outOfScope /* IMPORTED_LONG_NAMED_INTEGER */, outOfScope /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceProblem_ditError /* IMPORTED_LONG_NAMED_INTEGER */, ditError /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceProblem_invalidQueryReference /* IMPORTED_LONG_NAMED_INTEGER */, invalidQueryReference /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceProblem_requestedServiceNotAvailable /* IMPORTED_LONG_NAMED_INTEGER */, requestedServiceNotAvailable /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceProblem_relaxationNotSupported /* IMPORTED_LONG_NAMED_INTEGER */, relaxationNotSupported /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceProblem_unavailableRelaxationLevel /* IMPORTED_LONG_NAMED_INTEGER */, unavailableRelaxationLevel /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceProblem_unsupportedMatchingUse /* IMPORTED_LONG_NAMED_INTEGER */, unsupportedMatchingUse /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceProblem_unmatchedKeyAttributes /* IMPORTED_LONG_NAMED_INTEGER */, unmatchedKeyAttributes /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceProblem_ambiguousKeyAttributes /* IMPORTED_LONG_NAMED_INTEGER */, ambiguousKeyAttributes /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_ServiceProblem, _encode_ServiceProblem } from "../DirectoryAbstractService/ServiceProblem.ta.mjs";
import { SecurityProblem, _decode_SecurityProblem } from "../DirectoryAbstractService/SecurityProblem.ta.mjs";
// export { SecurityProblem, SecurityProblem_inappropriateAuthentication /* IMPORTED_LONG_NAMED_INTEGER */, inappropriateAuthentication /* IMPORTED_SHORT_NAMED_INTEGER */, SecurityProblem_invalidCredentials /* IMPORTED_LONG_NAMED_INTEGER */, invalidCredentials /* IMPORTED_SHORT_NAMED_INTEGER */, SecurityProblem_insufficientAccessRights /* IMPORTED_LONG_NAMED_INTEGER */, insufficientAccessRights /* IMPORTED_SHORT_NAMED_INTEGER */, SecurityProblem_invalidSignature /* IMPORTED_LONG_NAMED_INTEGER */, invalidSignature /* IMPORTED_SHORT_NAMED_INTEGER */, SecurityProblem_protectionRequired /* IMPORTED_LONG_NAMED_INTEGER */, protectionRequired /* IMPORTED_SHORT_NAMED_INTEGER */, SecurityProblem_noInformation /* IMPORTED_LONG_NAMED_INTEGER */, noInformation /* IMPORTED_SHORT_NAMED_INTEGER */, SecurityProblem_blockedCredentials /* IMPORTED_LONG_NAMED_INTEGER */, blockedCredentials /* IMPORTED_SHORT_NAMED_INTEGER */, SecurityProblem_invalidQOPMatch /* IMPORTED_LONG_NAMED_INTEGER */, invalidQOPMatch /* IMPORTED_SHORT_NAMED_INTEGER */, SecurityProblem_spkmError /* IMPORTED_LONG_NAMED_INTEGER */, spkmError /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_SecurityProblem, _encode_SecurityProblem } from "../DirectoryAbstractService/SecurityProblem.ta.mjs";
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";


/**
 * @summary directoryBindError
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * directoryBindError ERROR ::= {
 *   PARAMETER OPTIONALLY-PROTECTED
 *     {SET {versions  [0]  Versions DEFAULT {v1},
 *           error
 *             CHOICE {serviceError   [1]  ServiceProblem,
 *                     securityError  [2]  SecurityProblem}}}
 * }
 * ```
 * 
 * @constant
 * @type {ERROR<OPTIONALLY_PROTECTED<{ versions: Versions; error: OPTIONAL<({ serviceError: ServiceProblem } | { securityError: SecurityProblem })> }>>}
 * @implements {ERROR<OPTIONALLY_PROTECTED<{ versions: Versions; error: OPTIONAL<({ serviceError: ServiceProblem } | { securityError: SecurityProblem })> }>>}
 */
export
const directoryBindError: ERROR<OPTIONALLY_PROTECTED<{ versions: Versions; error: OPTIONAL<({ serviceError: ServiceProblem } | { securityError: SecurityProblem })> }>> = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": _get_decoder_for_OPTIONALLY_PROTECTED<{ versions: Versions; error: OPTIONAL<({ serviceError: ServiceProblem } | { securityError: SecurityProblem })> }>(function (el: _Element): OPTIONALLY_PROTECTED {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let versions: OPTIONAL<Versions> = OPTIONALLY_PROTECTED._default_value_for_versions;
    let error!: ({ serviceError: ServiceProblem } | { securityError: SecurityProblem });
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "versions": (_el: _Element): void => { versions = $._decode_explicit<Versions>(() => _decode_Versions)(_el); },
        "error": (_el: _Element): void => { error = $._decode_inextensible_choice<error>({
    "CONTEXT 1": [ "serviceError", $._decode_explicit<ServiceProblem>(() => _decode_ServiceProblem) ],
    "CONTEXT 2": [ "securityError", $._decode_explicit<SecurityProblem>(() => _decode_SecurityProblem) ]
})(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_OPTIONALLY_PROTECTED,
        _extension_additions_list_spec_for_OPTIONALLY_PROTECTED,
        _root_component_type_list_2_spec_for_OPTIONALLY_PROTECTED,
        undefined,
    );
    return new OPTIONALLY_PROTECTED( /* SET_CONSTRUCTOR_CALL */
        versions,
        error
    );
}),
    },
    encoderFor: {
        "&ParameterType": _get_encoder_for_OPTIONALLY_PROTECTED<{ versions: Versions; error: OPTIONAL<({ serviceError: ServiceProblem } | { securityError: SecurityProblem })> }>(function (value: OPTIONALLY_PROTECTED, elGetter: $.ASN1Encoder<OPTIONALLY_PROTECTED>): _Element {
    const _components: _Element[] = [];
    if (value.versions !== undefined && !$.deepEq(value.versions, OPTIONALLY_PROTECTED._default_value_for_versions)) {
        _components.push(/* IF_DEFAULT */ $._encode_explicit(_TagClass.context, 0, () => _encode_Versions, $.BER)(value.versions, $.BER));
    }
    /* FIXME: error COULD_NOT_COMPILE_TYPE_ENCODER */
    return $._encodeSet(_components, $.BER);
}),
    },
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ErrorPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
