/* eslint-disable */
import { structured /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../TC-Notation-Extensions/DialogueMode.ta.mjs";
// export { DialogueMode, _enum_for_DialogueMode, DialogueMode_structured /* IMPORTED_LONG_ENUMERATION_ITEM */, structured /* IMPORTED_SHORT_ENUMERATION_ITEM */, DialogueMode_unstructured /* IMPORTED_LONG_ENUMERATION_ITEM */, unstructured /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_DialogueMode, _encode_DialogueMode } from "../TC-Notation-Extensions/DialogueMode.ta.mjs";
import { basic /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../TC-Notation-Extensions/Termination.ta.mjs";
// export { Termination, _enum_for_Termination, Termination_basic /* IMPORTED_LONG_ENUMERATION_ITEM */, basic /* IMPORTED_SHORT_ENUMERATION_ITEM */, Termination_prearranged /* IMPORTED_LONG_ENUMERATION_ITEM */, prearranged /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Termination, _encode_Termination } from "../TC-Notation-Extensions/Termination.ta.mjs";
import { dsspContract } from "../IN-SCF-SCF-pkgs-contracts-acs/dsspContract.oa.mjs";
// export { dsspContract } from "../IN-SCF-SCF-pkgs-contracts-acs/dsspContract.oa.mjs";
import { dialogue_abstract_syntax } from "../TC-Notation-Extensions/dialogue-abstract-syntax.oa.mjs";
// export { dialogue_abstract_syntax } from "../TC-Notation-Extensions/dialogue-abstract-syntax.oa.mjs";
import { distributedSCFSystemAbstractSyntax } from "../IN-SCF-SCF-pkgs-contracts-acs/distributedSCFSystemAbstractSyntax.oa.mjs";
// export { distributedSCFSystemAbstractSyntax } from "../IN-SCF-SCF-pkgs-contracts-acs/distributedSCFSystemAbstractSyntax.oa.mjs";
import { scfBindingAbstractSyntax } from "../IN-SCF-SCF-pkgs-contracts-acs/scfBindingAbstractSyntax.oa.mjs";
// export { scfBindingAbstractSyntax } from "../IN-SCF-SCF-pkgs-contracts-acs/scfBindingAbstractSyntax.oa.mjs";
import { id_ac_distributedSCFSystemAC } from "../IN-object-identifiers/id-ac-distributedSCFSystemAC.va.mjs";
// export { id_ac_distributedSCFSystemAC } from "../IN-object-identifiers/id-ac-distributedSCFSystemAC.va.mjs";
import { type APPLICATION_CONTEXT } from "../TC-Notation-Extensions/APPLICATION-CONTEXT.oca.mjs";


/**
 * @summary distributedSCFSystemAC
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * distributedSCFSystemAC APPLICATION-CONTEXT ::= {
 *   CONTRACT                  dsspContract
 *   DIALOGUE MODE             structured
 *   TERMINATION               basic
 *   ABSTRACT SYNTAXES
 *     {dialogue-abstract-syntax | distributedSCFSystemAbstractSyntax |
 *       scfBindingAbstractSyntax}
 *   APPLICATION CONTEXT NAME  id-ac-distributedSCFSystemAC
 * }
 * ```
 * 
 * @constant
 * @type {APPLICATION_CONTEXT}
 * @implements {APPLICATION_CONTEXT}
 */
export
const distributedSCFSystemAC: APPLICATION_CONTEXT = {
    class: "APPLICATION-CONTEXT",
    decoderFor: {
    },
    encoderFor: {
    },
    "&associationContract": dsspContract /* OBJECT_FIELD_SETTING */,
    "&dialogueMode": structured /* OBJECT_FIELD_SETTING */,
    "&termination": basic /* OBJECT_FIELD_SETTING */,
    "&AbstractSyntaxes": [ dialogue_abstract_syntax, distributedSCFSystemAbstractSyntax, scfBindingAbstractSyntax, ] /* OBJECT_FIELD_SETTING */,
    "&applicationContextName": id_ac_distributedSCFSystemAC /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AdditionalASEs": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&componentGrouping": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dialogueAndComponentGrouping": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
