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
import { ExecutionProblem, _decode_ExecutionProblem, _encode_ExecutionProblem } from "../IN-errortypes/ExecutionProblem.ta.mjs";
// export { ExecutionProblem, ExecutionProblem_missingInputValues /* IMPORTED_LONG_NAMED_INTEGER */, missingInputValues /* IMPORTED_SHORT_NAMED_INTEGER */, ExecutionProblem_executionFailure /* IMPORTED_LONG_NAMED_INTEGER */, executionFailure /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_ExecutionProblem, _encode_ExecutionProblem } from "../IN-errortypes/ExecutionProblem.ta.mjs";
import { CommonResults } from "../DirectoryAbstractService/CommonResults.ta.mjs";
// export { CommonResults, _decode_CommonResults, _encode_CommonResults } from "../DirectoryAbstractService/CommonResults.ta.mjs";
import { errcode_executionError } from "../IN-errorcodes/errcode-executionError.va.mjs";
// export { errcode_executionError } from "../IN-errorcodes/errcode-executionError.va.mjs";
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
 *     {SET {problem  [0] EXPLICIT ExecutionProblem,
 *           COMPONENTS OF CommonResults}}
 *   CODE                            errcode-executionError
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
        "&ParameterType": _get_decoder_for_OPTIONALLY_PROTECTED<{ problem: OPTIONAL<ExecutionProblem>; _componentsOf: CommonResults }>(function (el: _Element): any {
    // FIXME: COULD_NOT_COMPILE_TYPE_DECODER
    throw new Error("FIXME: COULD_NOT_COMPILE_TYPE_DECODER");
}),
    },
    encoderFor: {
        "&ParameterType": _get_encoder_for_OPTIONALLY_PROTECTED<{ problem: OPTIONAL<ExecutionProblem>; _componentsOf: CommonResults }>(function (value: any, elGetter: $.ASN1Encoder<any>): _Element {
    // FIXME: COULD_NOT_COMPILE_TYPE_ENCODER
    throw new Error("FIXME: COULD_NOT_COMPILE_TYPE_ENCODER");
}),
    },
    "&errorCode": errcode_executionError /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ErrorPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
