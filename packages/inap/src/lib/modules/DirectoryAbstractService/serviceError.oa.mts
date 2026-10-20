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
import { ServiceProblem, _decode_ServiceProblem, _encode_ServiceProblem } from "../DirectoryAbstractService/ServiceProblem.ta.mjs";
// export { ServiceProblem, ServiceProblem_busy /* IMPORTED_LONG_NAMED_INTEGER */, busy /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceProblem_unavailable /* IMPORTED_LONG_NAMED_INTEGER */, unavailable /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceProblem_unwillingToPerform /* IMPORTED_LONG_NAMED_INTEGER */, unwillingToPerform /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceProblem_chainingRequired /* IMPORTED_LONG_NAMED_INTEGER */, chainingRequired /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceProblem_unableToProceed /* IMPORTED_LONG_NAMED_INTEGER */, unableToProceed /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceProblem_invalidReference /* IMPORTED_LONG_NAMED_INTEGER */, invalidReference /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceProblem_timeLimitExceeded /* IMPORTED_LONG_NAMED_INTEGER */, timeLimitExceeded /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceProblem_administrativeLimitExceeded /* IMPORTED_LONG_NAMED_INTEGER */, administrativeLimitExceeded /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceProblem_loopDetected /* IMPORTED_LONG_NAMED_INTEGER */, loopDetected /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceProblem_unavailableCriticalExtension /* IMPORTED_LONG_NAMED_INTEGER */, unavailableCriticalExtension /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceProblem_outOfScope /* IMPORTED_LONG_NAMED_INTEGER */, outOfScope /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceProblem_ditError /* IMPORTED_LONG_NAMED_INTEGER */, ditError /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceProblem_invalidQueryReference /* IMPORTED_LONG_NAMED_INTEGER */, invalidQueryReference /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceProblem_requestedServiceNotAvailable /* IMPORTED_LONG_NAMED_INTEGER */, requestedServiceNotAvailable /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceProblem_relaxationNotSupported /* IMPORTED_LONG_NAMED_INTEGER */, relaxationNotSupported /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceProblem_unavailableRelaxationLevel /* IMPORTED_LONG_NAMED_INTEGER */, unavailableRelaxationLevel /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceProblem_unsupportedMatchingUse /* IMPORTED_LONG_NAMED_INTEGER */, unsupportedMatchingUse /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceProblem_unmatchedKeyAttributes /* IMPORTED_LONG_NAMED_INTEGER */, unmatchedKeyAttributes /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceProblem_ambiguousKeyAttributes /* IMPORTED_LONG_NAMED_INTEGER */, ambiguousKeyAttributes /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_ServiceProblem, _encode_ServiceProblem } from "../DirectoryAbstractService/ServiceProblem.ta.mjs";
import { CommonResults } from "../DirectoryAbstractService/CommonResults.ta.mjs";
// export { CommonResults, _decode_CommonResults, _encode_CommonResults } from "../DirectoryAbstractService/CommonResults.ta.mjs";
import { id_errcode_serviceError } from "../DirectoryAccessProtocol/id-errcode-serviceError.va.mjs";
// export { id_errcode_serviceError } from "../DirectoryAccessProtocol/id-errcode-serviceError.va.mjs";
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";


/**
 * @summary serviceError
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * serviceError ERROR ::= {
 *   PARAMETER OPTIONALLY-PROTECTED
 *     {SET {problem  [0]  ServiceProblem,
 *           COMPONENTS OF CommonResults}}
 *   CODE                            id-errcode-serviceError
 * }
 * ```
 * 
 * @constant
 * @type {ERROR<OPTIONALLY_PROTECTED<{ problem: OPTIONAL<ServiceProblem>; _componentsOf: CommonResults }>>}
 * @implements {ERROR<OPTIONALLY_PROTECTED<{ problem: OPTIONAL<ServiceProblem>; _componentsOf: CommonResults }>>}
 */
export
const serviceError: ERROR<OPTIONALLY_PROTECTED<{ problem: OPTIONAL<ServiceProblem>; _componentsOf: CommonResults }>> = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": _get_decoder_for_OPTIONALLY_PROTECTED<{ problem: OPTIONAL<ServiceProblem>; _componentsOf: CommonResults }>(function (el: _Element): OPTIONALLY_PROTECTED {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let problem!: ServiceProblem;
    let _componentsOf!: CommonResults;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "problem": (_el: _Element): void => { problem = $._decode_explicit<ServiceProblem>(() => _decode_ServiceProblem)(_el); },
        /* COULD_NOT_GENERATE_CALLBACK_FOR_COMPONENTS_OF */
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_OPTIONALLY_PROTECTED,
        _extension_additions_list_spec_for_OPTIONALLY_PROTECTED,
        _root_component_type_list_2_spec_for_OPTIONALLY_PROTECTED,
        undefined,
    );
    return new OPTIONALLY_PROTECTED( /* SET_CONSTRUCTOR_CALL */
        problem,
        _componentsOf
    );
}),
    },
    encoderFor: {
        "&ParameterType": _get_encoder_for_OPTIONALLY_PROTECTED<{ problem: OPTIONAL<ServiceProblem>; _componentsOf: CommonResults }>(function (value: OPTIONALLY_PROTECTED, elGetter: $.ASN1Encoder<OPTIONALLY_PROTECTED>): _Element {
    return $._encodeSet([
        /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_ServiceProblem, $.BER)(value.problem, $.BER),
        /* FIXME: COULD_NOT_COMPILE_COMPONENTS_OF DefinedType */
    ], $.BER);
}),
    },
    "&errorCode": id_errcode_serviceError /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ErrorPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
