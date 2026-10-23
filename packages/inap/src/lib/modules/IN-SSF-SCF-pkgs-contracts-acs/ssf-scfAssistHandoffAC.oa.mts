/* eslint-disable */
import { structured /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../TC-Notation-Extensions/DialogueMode.ta.mjs";
// export { DialogueMode, _enum_for_DialogueMode, DialogueMode_structured /* IMPORTED_LONG_ENUMERATION_ITEM */, structured /* IMPORTED_SHORT_ENUMERATION_ITEM */, DialogueMode_unstructured /* IMPORTED_LONG_ENUMERATION_ITEM */, unstructured /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_DialogueMode, _encode_DialogueMode } from "../TC-Notation-Extensions/DialogueMode.ta.mjs";
// export { Termination, _enum_for_Termination, Termination_basic /* IMPORTED_LONG_ENUMERATION_ITEM */, basic /* IMPORTED_SHORT_ENUMERATION_ITEM */, Termination_prearranged /* IMPORTED_LONG_ENUMERATION_ITEM */, prearranged /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Termination, _encode_Termination } from "../TC-Notation-Extensions/Termination.ta.mjs";
import { inAssistHandoffSsfToScf } from "../IN-SSF-SCF-pkgs-contracts-acs/inAssistHandoffSsfToScf.oa.mjs";
// export { inAssistHandoffSsfToScf } from "../IN-SSF-SCF-pkgs-contracts-acs/inAssistHandoffSsfToScf.oa.mjs";
import { dialogue_abstract_syntax } from "../TC-Notation-Extensions/dialogue-abstract-syntax.oa.mjs";
// export { dialogue_abstract_syntax } from "../TC-Notation-Extensions/dialogue-abstract-syntax.oa.mjs";
import { assistHandoff_ssf_scfAbstractSyntax } from "../IN-SSF-SCF-pkgs-contracts-acs/assistHandoff-ssf-scfAbstractSyntax.oa.mjs";
// export { assistHandoff_ssf_scfAbstractSyntax } from "../IN-SSF-SCF-pkgs-contracts-acs/assistHandoff-ssf-scfAbstractSyntax.oa.mjs";
import { id_ac_ssf_scfAssistHandoffAC } from "../IN-object-identifiers/id-ac-ssf-scfAssistHandoffAC.va.mjs";
// export { id_ac_ssf_scfAssistHandoffAC } from "../IN-object-identifiers/id-ac-ssf-scfAssistHandoffAC.va.mjs";
import { type APPLICATION_CONTEXT } from "../TC-Notation-Extensions/APPLICATION-CONTEXT.oca.mjs";


/**
 * @summary ssf_scfAssistHandoffAC
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ssf-scfAssistHandoffAC APPLICATION-CONTEXT ::= {
 *   CONTRACT                  inAssistHandoffSsfToScf
 *   DIALOGUE MODE             structured
 *   ABSTRACT SYNTAXES
 *     {dialogue-abstract-syntax | assistHandoff-ssf-scfAbstractSyntax}
 *   APPLICATION CONTEXT NAME  id-ac-ssf-scfAssistHandoffAC
 * }
 * ```
 * 
 * @constant
 * @type {APPLICATION_CONTEXT}
 * @implements {APPLICATION_CONTEXT}
 */
export
const ssf_scfAssistHandoffAC: APPLICATION_CONTEXT = {
    class: "APPLICATION-CONTEXT",
    decoderFor: {
    },
    encoderFor: {
    },
    "&associationContract": inAssistHandoffSsfToScf /* OBJECT_FIELD_SETTING */,
    "&dialogueMode": structured /* OBJECT_FIELD_SETTING */,
    "&AbstractSyntaxes": [ dialogue_abstract_syntax, assistHandoff_ssf_scfAbstractSyntax, ] /* OBJECT_FIELD_SETTING */,
    "&applicationContextName": id_ac_ssf_scfAssistHandoffAC /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AdditionalASEs": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&componentGrouping": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dialogueAndComponentGrouping": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
