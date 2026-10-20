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
import { Name, _decode_Name, _encode_Name } from "../InformationFramework/Name.ta.mjs";
// export { Name, _decode_Name, _encode_Name } from "../InformationFramework/Name.ta.mjs";
import { AttributeProblem, _decode_AttributeProblem } from "../DirectoryAbstractService/AttributeProblem.ta.mjs";
// export { AttributeProblem, AttributeProblem_noSuchAttributeOrValue /* IMPORTED_LONG_NAMED_INTEGER */, noSuchAttributeOrValue /* IMPORTED_SHORT_NAMED_INTEGER */, AttributeProblem_invalidAttributeSyntax /* IMPORTED_LONG_NAMED_INTEGER */, invalidAttributeSyntax /* IMPORTED_SHORT_NAMED_INTEGER */, AttributeProblem_undefinedAttributeType /* IMPORTED_LONG_NAMED_INTEGER */, undefinedAttributeType /* IMPORTED_SHORT_NAMED_INTEGER */, AttributeProblem_inappropriateMatching /* IMPORTED_LONG_NAMED_INTEGER */, inappropriateMatching /* IMPORTED_SHORT_NAMED_INTEGER */, AttributeProblem_constraintViolation /* IMPORTED_LONG_NAMED_INTEGER */, constraintViolation /* IMPORTED_SHORT_NAMED_INTEGER */, AttributeProblem_attributeOrValueAlreadyExists /* IMPORTED_LONG_NAMED_INTEGER */, attributeOrValueAlreadyExists /* IMPORTED_SHORT_NAMED_INTEGER */, AttributeProblem_contextViolation /* IMPORTED_LONG_NAMED_INTEGER */, contextViolation /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_AttributeProblem, _encode_AttributeProblem } from "../DirectoryAbstractService/AttributeProblem.ta.mjs";
import { AttributeType, _decode_AttributeType } from "../InformationFramework/AttributeType.ta.mjs";
// export { AttributeType, _decode_AttributeType, _encode_AttributeType } from "../InformationFramework/AttributeType.ta.mjs";
import { AttributeValue, _decode_AttributeValue } from "../InformationFramework/AttributeValue.ta.mjs";
// export { AttributeValue, _decode_AttributeValue, _encode_AttributeValue } from "../InformationFramework/AttributeValue.ta.mjs";
import { CommonResults } from "../DirectoryAbstractService/CommonResults.ta.mjs";
// export { CommonResults, _decode_CommonResults, _encode_CommonResults } from "../DirectoryAbstractService/CommonResults.ta.mjs";
import { id_errcode_attributeError } from "../DirectoryAccessProtocol/id-errcode-attributeError.va.mjs";
// export { id_errcode_attributeError } from "../DirectoryAccessProtocol/id-errcode-attributeError.va.mjs";
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";


/**
 * @summary attributeError
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * attributeError ERROR ::= {
 *   PARAMETER OPTIONALLY-PROTECTED
 *     {SET {object    [0]  Name,
 *           problems
 *             [1]  SET OF
 *                    SEQUENCE {problem  [0]  AttributeProblem,
 *                              type     [1]  AttributeType,
 *                              value    [2]  AttributeValue OPTIONAL},
 *           COMPONENTS OF CommonResults}}
 *   CODE                            id-errcode-attributeError
 * }
 * ```
 * 
 * @constant
 * @type {ERROR<OPTIONALLY_PROTECTED<{ object: OPTIONAL<Name>; problems: OPTIONAL<{ problem: OPTIONAL<AttributeProblem>; type_: OPTIONAL<AttributeType>; value: AttributeValue }[]>; _componentsOf: CommonResults }>>}
 * @implements {ERROR<OPTIONALLY_PROTECTED<{ object: OPTIONAL<Name>; problems: OPTIONAL<{ problem: OPTIONAL<AttributeProblem>; type_: OPTIONAL<AttributeType>; value: AttributeValue }[]>; _componentsOf: CommonResults }>>}
 */
export
const attributeError: ERROR<OPTIONALLY_PROTECTED<{ object: OPTIONAL<Name>; problems: OPTIONAL<{ problem: OPTIONAL<AttributeProblem>; type_: OPTIONAL<AttributeType>; value: AttributeValue }[]>; _componentsOf: CommonResults }>> = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": _get_decoder_for_OPTIONALLY_PROTECTED<{ object: OPTIONAL<Name>; problems: OPTIONAL<{ problem: OPTIONAL<AttributeProblem>; type_: OPTIONAL<AttributeType>; value: AttributeValue }[]>; _componentsOf: CommonResults }>(function (el: _Element): OPTIONALLY_PROTECTED {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let object!: Name;
    let problems!: { problem: OPTIONAL<AttributeProblem>; type_: OPTIONAL<AttributeType>; value: AttributeValue }[];
    let _componentsOf!: CommonResults;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "object": (_el: _Element): void => { object = $._decode_explicit<Name>(() => _decode_Name)(_el); },
        "problems": (_el: _Element): void => { problems = $._decode_explicit<{ problem: OPTIONAL<AttributeProblem>; type_: OPTIONAL<AttributeType>; value: AttributeValue }[]>(() => $._decodeSetOf<{ problem: OPTIONAL<AttributeProblem>; type_: OPTIONAL<AttributeType>; value: AttributeValue }>(() => function (el: _Element): problems {
    let problem!: AttributeProblem;
    let type_!: AttributeType;
    let value: OPTIONAL<AttributeValue>;
    const callbacks: $.DecodingMap = {
        "problem": (_el: _Element): void => { problem = $._decode_explicit<AttributeProblem>(() => _decode_AttributeProblem)(_el); },
        "type": (_el: _Element): void => { type_ = $._decode_explicit<AttributeType>(() => _decode_AttributeType)(_el); },
        "value": (_el: _Element): void => { value = $._decode_explicit<AttributeValue>(() => _decode_AttributeValue)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_problems,
        _extension_additions_list_spec_for_problems,
        _root_component_type_list_2_spec_for_problems,
        undefined,
    );
    return new problems(
        problem,
        type_,
        value
    );
}))(_el); },
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
        object,
        problems,
        _componentsOf
    );
}),
    },
    encoderFor: {
        "&ParameterType": _get_encoder_for_OPTIONALLY_PROTECTED<{ object: OPTIONAL<Name>; problems: OPTIONAL<{ problem: OPTIONAL<AttributeProblem>; type_: OPTIONAL<AttributeType>; value: AttributeValue }[]>; _componentsOf: CommonResults }>(function (value: OPTIONALLY_PROTECTED, elGetter: $.ASN1Encoder<OPTIONALLY_PROTECTED>): _Element {
    return $._encodeSet([
        /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_Name, $.BER)(value.object, $.BER),
        /* FIXME: problems COULD_NOT_COMPILE_TYPE_ENCODER */,
        /* FIXME: COULD_NOT_COMPILE_COMPONENTS_OF DefinedType */
    ], $.BER);
}),
    },
    "&errorCode": id_errcode_attributeError /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ErrorPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
