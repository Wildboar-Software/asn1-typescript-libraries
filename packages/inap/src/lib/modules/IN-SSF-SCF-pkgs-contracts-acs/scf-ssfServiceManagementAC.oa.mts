/* eslint-disable */
import { structured /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../TC-Notation-Extensions/DialogueMode.ta.mjs";
// export { DialogueMode, _enum_for_DialogueMode, DialogueMode_structured /* IMPORTED_LONG_ENUMERATION_ITEM */, structured /* IMPORTED_SHORT_ENUMERATION_ITEM */, DialogueMode_unstructured /* IMPORTED_LONG_ENUMERATION_ITEM */, unstructured /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_DialogueMode, _encode_DialogueMode } from "../TC-Notation-Extensions/DialogueMode.ta.mjs";
// export { Termination, _enum_for_Termination, Termination_basic /* IMPORTED_LONG_ENUMERATION_ITEM */, basic /* IMPORTED_SHORT_ENUMERATION_ITEM */, Termination_prearranged /* IMPORTED_LONG_ENUMERATION_ITEM */, prearranged /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Termination, _encode_Termination } from "../TC-Notation-Extensions/Termination.ta.mjs";
import { inScfToSsfServiceManagement } from "../IN-SSF-SCF-pkgs-contracts-acs/inScfToSsfServiceManagement.oa.mjs";
// export { inScfToSsfServiceManagement } from "../IN-SSF-SCF-pkgs-contracts-acs/inScfToSsfServiceManagement.oa.mjs";
import { dialogue_abstract_syntax } from "../TC-Notation-Extensions/dialogue-abstract-syntax.oa.mjs";
// export { dialogue_abstract_syntax } from "../TC-Notation-Extensions/dialogue-abstract-syntax.oa.mjs";
import { scf_ssfServiceManagementAbstractSyntax } from "../IN-SSF-SCF-pkgs-contracts-acs/scf-ssfServiceManagementAbstractSyntax.oa.mjs";
// export { scf_ssfServiceManagementAbstractSyntax } from "../IN-SSF-SCF-pkgs-contracts-acs/scf-ssfServiceManagementAbstractSyntax.oa.mjs";
import { id_ac_scf_ssfServiceManagementAC } from "../IN-object-identifiers/id-ac-scf-ssfServiceManagementAC.va.mjs";
// export { id_ac_scf_ssfServiceManagementAC } from "../IN-object-identifiers/id-ac-scf-ssfServiceManagementAC.va.mjs";
import { type APPLICATION_CONTEXT } from "../TC-Notation-Extensions/APPLICATION-CONTEXT.oca.mjs";


/**
 * @summary scf_ssfServiceManagementAC
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * scf-ssfServiceManagementAC APPLICATION-CONTEXT ::= {
 *   CONTRACT                  inScfToSsfServiceManagement
 *   DIALOGUE MODE             structured
 *   ABSTRACT SYNTAXES
 *     {dialogue-abstract-syntax | scf-ssfServiceManagementAbstractSyntax}
 *   APPLICATION CONTEXT NAME  id-ac-scf-ssfServiceManagementAC
 * }
 * ```
 * 
 * @constant
 * @type {APPLICATION_CONTEXT}
 * @implements {APPLICATION_CONTEXT}
 */
export
const scf_ssfServiceManagementAC: APPLICATION_CONTEXT = {
    class: "APPLICATION-CONTEXT",
    decoderFor: {
    },
    encoderFor: {
    },
    "&associationContract": inScfToSsfServiceManagement /* OBJECT_FIELD_SETTING */,
    "&dialogueMode": structured /* OBJECT_FIELD_SETTING */,
    "&AbstractSyntaxes": [ dialogue_abstract_syntax, scf_ssfServiceManagementAbstractSyntax, ] /* OBJECT_FIELD_SETTING */,
    "&applicationContextName": id_ac_scf_ssfServiceManagementAC /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AdditionalASEs": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&componentGrouping": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dialogueAndComponentGrouping": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
