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
import { SecurityProblem, _decode_SecurityProblem, _encode_SecurityProblem } from "../DirectoryAbstractService/SecurityProblem.ta.mjs";
// export { SecurityProblem, SecurityProblem_inappropriateAuthentication /* IMPORTED_LONG_NAMED_INTEGER */, inappropriateAuthentication /* IMPORTED_SHORT_NAMED_INTEGER */, SecurityProblem_invalidCredentials /* IMPORTED_LONG_NAMED_INTEGER */, invalidCredentials /* IMPORTED_SHORT_NAMED_INTEGER */, SecurityProblem_insufficientAccessRights /* IMPORTED_LONG_NAMED_INTEGER */, insufficientAccessRights /* IMPORTED_SHORT_NAMED_INTEGER */, SecurityProblem_invalidSignature /* IMPORTED_LONG_NAMED_INTEGER */, invalidSignature /* IMPORTED_SHORT_NAMED_INTEGER */, SecurityProblem_protectionRequired /* IMPORTED_LONG_NAMED_INTEGER */, protectionRequired /* IMPORTED_SHORT_NAMED_INTEGER */, SecurityProblem_noInformation /* IMPORTED_LONG_NAMED_INTEGER */, noInformation /* IMPORTED_SHORT_NAMED_INTEGER */, SecurityProblem_blockedCredentials /* IMPORTED_LONG_NAMED_INTEGER */, blockedCredentials /* IMPORTED_SHORT_NAMED_INTEGER */, SecurityProblem_invalidQOPMatch /* IMPORTED_LONG_NAMED_INTEGER */, invalidQOPMatch /* IMPORTED_SHORT_NAMED_INTEGER */, SecurityProblem_spkmError /* IMPORTED_LONG_NAMED_INTEGER */, spkmError /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_SecurityProblem, _encode_SecurityProblem } from "../DirectoryAbstractService/SecurityProblem.ta.mjs";
import { SPKM_ERROR, _decode_SPKM_ERROR, _encode_SPKM_ERROR } from "../SpkmGssTokens/SPKM-ERROR.ta.mjs";
// export { SPKM_ERROR, _decode_SPKM_ERROR, _encode_SPKM_ERROR } from "../SpkmGssTokens/SPKM-ERROR.ta.mjs";
import { CommonResults } from "../DirectoryAbstractService/CommonResults.ta.mjs";
// export { CommonResults, _decode_CommonResults, _encode_CommonResults } from "../DirectoryAbstractService/CommonResults.ta.mjs";
import { id_errcode_securityError } from "../DirectoryAccessProtocol/id-errcode-securityError.va.mjs";
// export { id_errcode_securityError } from "../DirectoryAccessProtocol/id-errcode-securityError.va.mjs";
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";


/**
 * @summary securityError
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * securityError ERROR ::= {
 *   PARAMETER OPTIONALLY-PROTECTED
 *     {SET {problem   [0]  SecurityProblem,
 *           spkmInfo  [1]  SPKM-ERROR,
 *           COMPONENTS OF CommonResults}}
 *   CODE                            id-errcode-securityError
 * }
 * ```
 * 
 * @constant
 * @type {ERROR<OPTIONALLY_PROTECTED<{ problem: OPTIONAL<SecurityProblem>; spkmInfo: OPTIONAL<SPKM_ERROR>; _componentsOf: CommonResults }>>}
 * @implements {ERROR<OPTIONALLY_PROTECTED<{ problem: OPTIONAL<SecurityProblem>; spkmInfo: OPTIONAL<SPKM_ERROR>; _componentsOf: CommonResults }>>}
 */
export
const securityError: ERROR<OPTIONALLY_PROTECTED<{ problem: OPTIONAL<SecurityProblem>; spkmInfo: OPTIONAL<SPKM_ERROR>; _componentsOf: CommonResults }>> = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": _get_decoder_for_OPTIONALLY_PROTECTED<{ problem: OPTIONAL<SecurityProblem>; spkmInfo: OPTIONAL<SPKM_ERROR>; _componentsOf: CommonResults }>(function (el: _Element): OPTIONALLY_PROTECTED {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let problem!: SecurityProblem;
    let spkmInfo!: SPKM_ERROR;
    let _componentsOf!: CommonResults;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "problem": (_el: _Element): void => { problem = $._decode_explicit<SecurityProblem>(() => _decode_SecurityProblem)(_el); },
        "spkmInfo": (_el: _Element): void => { spkmInfo = $._decode_explicit<SPKM_ERROR>(() => _decode_SPKM_ERROR)(_el); },
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
        spkmInfo,
        _componentsOf
    );
}),
    },
    encoderFor: {
        "&ParameterType": _get_encoder_for_OPTIONALLY_PROTECTED<{ problem: OPTIONAL<SecurityProblem>; spkmInfo: OPTIONAL<SPKM_ERROR>; _componentsOf: CommonResults }>(function (value: OPTIONALLY_PROTECTED, elGetter: $.ASN1Encoder<OPTIONALLY_PROTECTED>): _Element {
    return $._encodeSet([
        /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_SecurityProblem, $.BER)(value.problem, $.BER),
        /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_SPKM_ERROR, $.BER)(value.spkmInfo, $.BER),
        /* FIXME: COULD_NOT_COMPILE_COMPONENTS_OF DefinedType */
    ], $.BER);
}),
    },
    "&errorCode": id_errcode_securityError /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ErrorPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
