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
import { UpdateProblem, _decode_UpdateProblem, _encode_UpdateProblem } from "../DirectoryAbstractService/UpdateProblem.ta.mjs";
// export { UpdateProblem, UpdateProblem_namingViolation /* IMPORTED_LONG_NAMED_INTEGER */, namingViolation /* IMPORTED_SHORT_NAMED_INTEGER */, UpdateProblem_objectClassViolation /* IMPORTED_LONG_NAMED_INTEGER */, objectClassViolation /* IMPORTED_SHORT_NAMED_INTEGER */, UpdateProblem_notAllowedOnNonLeaf /* IMPORTED_LONG_NAMED_INTEGER */, notAllowedOnNonLeaf /* IMPORTED_SHORT_NAMED_INTEGER */, UpdateProblem_notAllowedOnRDN /* IMPORTED_LONG_NAMED_INTEGER */, notAllowedOnRDN /* IMPORTED_SHORT_NAMED_INTEGER */, UpdateProblem_entryAlreadyExists /* IMPORTED_LONG_NAMED_INTEGER */, entryAlreadyExists /* IMPORTED_SHORT_NAMED_INTEGER */, UpdateProblem_affectsMultipleDSAs /* IMPORTED_LONG_NAMED_INTEGER */, affectsMultipleDSAs /* IMPORTED_SHORT_NAMED_INTEGER */, UpdateProblem_objectClassModificationProhibited /* IMPORTED_LONG_NAMED_INTEGER */, objectClassModificationProhibited /* IMPORTED_SHORT_NAMED_INTEGER */, UpdateProblem_notAncestor /* IMPORTED_LONG_NAMED_INTEGER */, notAncestor /* IMPORTED_SHORT_NAMED_INTEGER */, UpdateProblem_parentNotAncestor /* IMPORTED_LONG_NAMED_INTEGER */, parentNotAncestor /* IMPORTED_SHORT_NAMED_INTEGER */, UpdateProblem_hierarchyRuleViolation /* IMPORTED_LONG_NAMED_INTEGER */, hierarchyRuleViolation /* IMPORTED_SHORT_NAMED_INTEGER */, UpdateProblem_familyRuleViolation /* IMPORTED_LONG_NAMED_INTEGER */, familyRuleViolation /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_UpdateProblem, _encode_UpdateProblem } from "../DirectoryAbstractService/UpdateProblem.ta.mjs";
import { AttributeType, _decode_AttributeType } from "../InformationFramework/AttributeType.ta.mjs";
// export { AttributeType, _decode_AttributeType, _encode_AttributeType } from "../InformationFramework/AttributeType.ta.mjs";
import { Attribute, _decode_Attribute } from "../InformationFramework/Attribute.ta.mjs";
// export { Attribute, _decode_Attribute, _encode_Attribute } from "../InformationFramework/Attribute.ta.mjs";
import { CommonResults } from "../DirectoryAbstractService/CommonResults.ta.mjs";
// export { CommonResults, _decode_CommonResults, _encode_CommonResults } from "../DirectoryAbstractService/CommonResults.ta.mjs";
import { id_errcode_updateError } from "../DirectoryAccessProtocol/id-errcode-updateError.va.mjs";
// export { id_errcode_updateError } from "../DirectoryAccessProtocol/id-errcode-updateError.va.mjs";
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";


/**
 * @summary updateError
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * updateError ERROR ::= {
 *   PARAMETER OPTIONALLY-PROTECTED
 *     {SET {problem        [0]  UpdateProblem,
 *           attributeInfo
 *             [1]  SET SIZE (1..MAX) OF
 *                    CHOICE {attributeType  AttributeType,
 *                            attribute      Attribute} OPTIONAL,
 *           COMPONENTS OF CommonResults}}
 *   CODE                            id-errcode-updateError
 * }
 * ```
 * 
 * @constant
 * @type {ERROR<OPTIONALLY_PROTECTED<{ problem: OPTIONAL<UpdateProblem>; attributeInfo: ({ attributeType: AttributeType } | { attribute: Attribute })[]; _componentsOf: CommonResults }>>}
 * @implements {ERROR<OPTIONALLY_PROTECTED<{ problem: OPTIONAL<UpdateProblem>; attributeInfo: ({ attributeType: AttributeType } | { attribute: Attribute })[]; _componentsOf: CommonResults }>>}
 */
export
const updateError: ERROR<OPTIONALLY_PROTECTED<{ problem: OPTIONAL<UpdateProblem>; attributeInfo: ({ attributeType: AttributeType } | { attribute: Attribute })[]; _componentsOf: CommonResults }>> = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": _get_decoder_for_OPTIONALLY_PROTECTED<{ problem: OPTIONAL<UpdateProblem>; attributeInfo: ({ attributeType: AttributeType } | { attribute: Attribute })[]; _componentsOf: CommonResults }>(function (el: _Element): OPTIONALLY_PROTECTED {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let problem!: UpdateProblem;
    let attributeInfo: OPTIONAL<({ attributeType: AttributeType } | { attribute: Attribute })[]>;
    let _componentsOf!: CommonResults;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "problem": (_el: _Element): void => { problem = $._decode_explicit<UpdateProblem>(() => _decode_UpdateProblem)(_el); },
        "attributeInfo": (_el: _Element): void => { attributeInfo = $._decode_explicit<({ attributeType: AttributeType } | { attribute: Attribute })[]>(() => $._decodeSetOf<({ attributeType: AttributeType } | { attribute: Attribute })>(() => $._decode_inextensible_choice<attributeInfo>({
    "UNIVERSAL 6": [ "attributeType", _decode_AttributeType ],
    "UNIVERSAL 16": [ "attribute", _decode_Attribute ]
})))(_el); },
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
        attributeInfo,
        _componentsOf
    );
}),
    },
    encoderFor: {
        "&ParameterType": _get_encoder_for_OPTIONALLY_PROTECTED<{ problem: OPTIONAL<UpdateProblem>; attributeInfo: ({ attributeType: AttributeType } | { attribute: Attribute })[]; _componentsOf: CommonResults }>(function (value: OPTIONALLY_PROTECTED, elGetter: $.ASN1Encoder<OPTIONALLY_PROTECTED>): _Element {
    return $._encodeSet([
        /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_UpdateProblem, $.BER)(value.problem, $.BER),
        /* FIXME: attributeInfo COULD_NOT_COMPILE_TYPE_ENCODER */,
        /* FIXME: COULD_NOT_COMPILE_COMPONENTS_OF DefinedType */
    ], $.BER);
}),
    },
    "&errorCode": id_errcode_updateError /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ErrorPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
