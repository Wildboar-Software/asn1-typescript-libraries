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
import { AbandonProblem, _decode_AbandonProblem, _encode_AbandonProblem } from "../DirectoryAbstractService/AbandonProblem.ta.mjs";
// export { AbandonProblem, AbandonProblem_noSuchOperation /* IMPORTED_LONG_NAMED_INTEGER */, noSuchOperation /* IMPORTED_SHORT_NAMED_INTEGER */, AbandonProblem_tooLate /* IMPORTED_LONG_NAMED_INTEGER */, tooLate /* IMPORTED_SHORT_NAMED_INTEGER */, AbandonProblem_cannotAbandon /* IMPORTED_LONG_NAMED_INTEGER */, cannotAbandon /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_AbandonProblem, _encode_AbandonProblem } from "../DirectoryAbstractService/AbandonProblem.ta.mjs";
import { InvokeId, _decode_InvokeId, _encode_InvokeId } from "../Remote-Operations-Generic-ROS-PDUs/InvokeId.ta.mjs";
// export { InvokeId, _decode_InvokeId, _encode_InvokeId } from "../Remote-Operations-Generic-ROS-PDUs/InvokeId.ta.mjs";
import { CommonResults } from "../DirectoryAbstractService/CommonResults.ta.mjs";
// export { CommonResults, _decode_CommonResults, _encode_CommonResults } from "../DirectoryAbstractService/CommonResults.ta.mjs";
import { id_errcode_abandonFailed } from "../DirectoryAccessProtocol/id-errcode-abandonFailed.va.mjs";
// export { id_errcode_abandonFailed } from "../DirectoryAccessProtocol/id-errcode-abandonFailed.va.mjs";
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";


/**
 * @summary abandonFailed
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * abandonFailed ERROR ::= {
 *   PARAMETER OPTIONALLY-PROTECTED
 *     {SET {problem    [0]  AbandonProblem,
 *           operation  [1]  InvokeId,
 *           COMPONENTS OF CommonResults}}
 *   CODE                            id-errcode-abandonFailed
 * }
 * ```
 * 
 * @constant
 * @type {ERROR<OPTIONALLY_PROTECTED<{ problem: OPTIONAL<AbandonProblem>; operation: OPTIONAL<InvokeId>; _componentsOf: CommonResults }>>}
 * @implements {ERROR<OPTIONALLY_PROTECTED<{ problem: OPTIONAL<AbandonProblem>; operation: OPTIONAL<InvokeId>; _componentsOf: CommonResults }>>}
 */
export
const abandonFailed: ERROR<OPTIONALLY_PROTECTED<{ problem: OPTIONAL<AbandonProblem>; operation: OPTIONAL<InvokeId>; _componentsOf: CommonResults }>> = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": _get_decoder_for_OPTIONALLY_PROTECTED<{ problem: OPTIONAL<AbandonProblem>; operation: OPTIONAL<InvokeId>; _componentsOf: CommonResults }>(function (el: _Element): OPTIONALLY_PROTECTED {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let problem!: AbandonProblem;
    let operation!: InvokeId;
    let _componentsOf!: CommonResults;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "problem": (_el: _Element): void => { problem = $._decode_explicit<AbandonProblem>(() => _decode_AbandonProblem)(_el); },
        "operation": (_el: _Element): void => { operation = $._decode_explicit<InvokeId>(() => _decode_InvokeId)(_el); },
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
        operation,
        _componentsOf
    );
}),
    },
    encoderFor: {
        "&ParameterType": _get_encoder_for_OPTIONALLY_PROTECTED<{ problem: OPTIONAL<AbandonProblem>; operation: OPTIONAL<InvokeId>; _componentsOf: CommonResults }>(function (value: OPTIONALLY_PROTECTED, elGetter: $.ASN1Encoder<OPTIONALLY_PROTECTED>): _Element {
    return $._encodeSet([
        /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_AbandonProblem, $.BER)(value.problem, $.BER),
        /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_InvokeId, $.BER)(value.operation, $.BER),
        /* FIXME: COULD_NOT_COMPILE_COMPONENTS_OF DefinedType */
    ], $.BER);
}),
    },
    "&errorCode": id_errcode_abandonFailed /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ErrorPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
