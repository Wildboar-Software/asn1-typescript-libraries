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
import { ExecutionProblem, _decode_ExecutionProblem, _encode_ExecutionProblem } from "../IN-CS2-SCF-SDF-Operations/ExecutionProblem.ta.mjs";
// export { ExecutionProblem, ExecutionProblem_missingInputValues /* IMPORTED_LONG_NAMED_INTEGER */, missingInputValues /* IMPORTED_SHORT_NAMED_INTEGER */, ExecutionProblem_executionFailure /* IMPORTED_LONG_NAMED_INTEGER */, executionFailure /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_ExecutionProblem, _encode_ExecutionProblem } from "../IN-CS2-SCF-SDF-Operations/ExecutionProblem.ta.mjs";
import { CommonResults } from "../DirectoryAbstractService/CommonResults.ta.mjs";
// export { CommonResults, _decode_CommonResults, _encode_CommonResults } from "../DirectoryAbstractService/CommonResults.ta.mjs";
import { id_errcode_executionError } from "../IN-CS2-SCF-SDF-Operations/id-errcode-executionError.va.mjs";
// export { id_errcode_executionError } from "../IN-CS2-SCF-SDF-Operations/id-errcode-executionError.va.mjs";
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";


/**
 * @summary executionError
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * executionError ERROR ::= {
 *   PARAMETER OPTIONALLY-PROTECTED
 *     {SET {problem  [0]  ExecutionProblem,
 *           COMPONENTS OF CommonResults}}
 *   CODE                            id-errcode-executionError
 * }
 * ```
 * 
 * @constant
 * @type {ERROR<OPTIONALLY_PROTECTED<{ problem: OPTIONAL<ExecutionProblem>; _componentsOf: CommonResults }>>}
 * @implements {ERROR<OPTIONALLY_PROTECTED<{ problem: OPTIONAL<ExecutionProblem>; _componentsOf: CommonResults }>>}
 */
export
const executionError: ERROR<OPTIONALLY_PROTECTED<{ problem: OPTIONAL<ExecutionProblem>; _componentsOf: CommonResults }>> = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": _get_decoder_for_OPTIONALLY_PROTECTED<{ problem: OPTIONAL<ExecutionProblem>; _componentsOf: CommonResults }>(function (el: _Element): OPTIONALLY_PROTECTED {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let problem!: ExecutionProblem;
    let _componentsOf!: CommonResults;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "problem": (_el: _Element): void => { problem = $._decode_explicit<ExecutionProblem>(() => _decode_ExecutionProblem)(_el); },
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
        "&ParameterType": _get_encoder_for_OPTIONALLY_PROTECTED<{ problem: OPTIONAL<ExecutionProblem>; _componentsOf: CommonResults }>(function (value: OPTIONALLY_PROTECTED, elGetter: $.ASN1Encoder<OPTIONALLY_PROTECTED>): _Element {
    return $._encodeSet([
        /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_ExecutionProblem, $.BER)(value.problem, $.BER),
        /* FIXME: COULD_NOT_COMPILE_COMPONENTS_OF DefinedType */
    ], $.BER);
}),
    },
    "&errorCode": id_errcode_executionError /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ErrorPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
