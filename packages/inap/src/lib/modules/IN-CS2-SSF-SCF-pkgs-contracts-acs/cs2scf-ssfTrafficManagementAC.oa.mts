/* eslint-disable */
import { structured /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../TC-Notation-Extensions/DialogueMode.ta.mjs";
// export { DialogueMode, _enum_for_DialogueMode, DialogueMode_structured /* IMPORTED_LONG_ENUMERATION_ITEM */, structured /* IMPORTED_SHORT_ENUMERATION_ITEM */, DialogueMode_unstructured /* IMPORTED_LONG_ENUMERATION_ITEM */, unstructured /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_DialogueMode, _encode_DialogueMode } from "../TC-Notation-Extensions/DialogueMode.ta.mjs";
// export { Termination, _enum_for_Termination, Termination_basic /* IMPORTED_LONG_ENUMERATION_ITEM */, basic /* IMPORTED_SHORT_ENUMERATION_ITEM */, Termination_prearranged /* IMPORTED_LONG_ENUMERATION_ITEM */, prearranged /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Termination, _encode_Termination } from "../TC-Notation-Extensions/Termination.ta.mjs";
import { inCs2ScfToSsfTrafficManagement } from "../IN-CS2-SSF-SCF-pkgs-contracts-acs/inCs2ScfToSsfTrafficManagement.oa.mjs";
// export { inCs2ScfToSsfTrafficManagement } from "../IN-CS2-SSF-SCF-pkgs-contracts-acs/inCs2ScfToSsfTrafficManagement.oa.mjs";
import { dialogue_abstract_syntax } from "../TC-Notation-Extensions/dialogue-abstract-syntax.oa.mjs";
// export { dialogue_abstract_syntax } from "../TC-Notation-Extensions/dialogue-abstract-syntax.oa.mjs";
import { scf_ssfTrafficManagementAbstractSyntax } from "../IN-CS2-SSF-SCF-pkgs-contracts-acs/scf-ssfTrafficManagementAbstractSyntax.oa.mjs";
// export { scf_ssfTrafficManagementAbstractSyntax } from "../IN-CS2-SSF-SCF-pkgs-contracts-acs/scf-ssfTrafficManagementAbstractSyntax.oa.mjs";
import { id_ac_cs2_scf_ssfTrafficManagementAC } from "../IN-CS2-object-identifiers/id-ac-cs2-scf-ssfTrafficManagementAC.va.mjs";
// export { id_ac_cs2_scf_ssfTrafficManagementAC } from "../IN-CS2-object-identifiers/id-ac-cs2-scf-ssfTrafficManagementAC.va.mjs";
import { type APPLICATION_CONTEXT } from "../TC-Notation-Extensions/APPLICATION-CONTEXT.oca.mjs";


/**
 * @summary cs2scf_ssfTrafficManagementAC
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * cs2scf-ssfTrafficManagementAC APPLICATION-CONTEXT ::= {
 *   CONTRACT                  inCs2ScfToSsfTrafficManagement
 *   DIALOGUE MODE             structured
 *   ABSTRACT SYNTAXES
 *     {dialogue-abstract-syntax | scf-ssfTrafficManagementAbstractSyntax}
 *   APPLICATION CONTEXT NAME  id-ac-cs2-scf-ssfTrafficManagementAC
 * }
 * ```
 * 
 * @constant
 * @type {APPLICATION_CONTEXT}
 * @implements {APPLICATION_CONTEXT}
 */
export
const cs2scf_ssfTrafficManagementAC: APPLICATION_CONTEXT = {
    class: "APPLICATION-CONTEXT",
    decoderFor: {
    },
    encoderFor: {
    },
    "&associationContract": inCs2ScfToSsfTrafficManagement /* OBJECT_FIELD_SETTING */,
    "&dialogueMode": structured /* OBJECT_FIELD_SETTING */,
    "&AbstractSyntaxes": [ dialogue_abstract_syntax, scf_ssfTrafficManagementAbstractSyntax, ] /* OBJECT_FIELD_SETTING */,
    "&applicationContextName": id_ac_cs2_scf_ssfTrafficManagementAC /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AdditionalASEs": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&componentGrouping": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dialogueAndComponentGrouping": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
