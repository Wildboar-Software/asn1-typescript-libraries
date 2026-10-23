/* eslint-disable */
import { structured /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../TC-Notation-Extensions/DialogueMode.ta.mjs";
// export { DialogueMode, _enum_for_DialogueMode, DialogueMode_structured /* IMPORTED_LONG_ENUMERATION_ITEM */, structured /* IMPORTED_SHORT_ENUMERATION_ITEM */, DialogueMode_unstructured /* IMPORTED_LONG_ENUMERATION_ITEM */, unstructured /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_DialogueMode, _encode_DialogueMode } from "../TC-Notation-Extensions/DialogueMode.ta.mjs";
import { basic /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../TC-Notation-Extensions/Termination.ta.mjs";
// export { Termination, _enum_for_Termination, Termination_basic /* IMPORTED_LONG_ENUMERATION_ITEM */, basic /* IMPORTED_SHORT_ENUMERATION_ITEM */, Termination_prearranged /* IMPORTED_LONG_ENUMERATION_ITEM */, prearranged /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Termination, _encode_Termination } from "../TC-Notation-Extensions/Termination.ta.mjs";
import { dapExecuteContract } from "../IN-CS3-SCF-SDF-Protocol/dapExecuteContract.oa.mjs";
// export { dapExecuteContract } from "../IN-CS3-SCF-SDF-Protocol/dapExecuteContract.oa.mjs";
import { dialogue_abstract_syntax } from "../TC-Notation-Extensions/dialogue-abstract-syntax.oa.mjs";
// export { dialogue_abstract_syntax } from "../TC-Notation-Extensions/dialogue-abstract-syntax.oa.mjs";
import { inExtendedDirectoryOperationsAbstractSyntax } from "../IN-CS3-SCF-SDF-Protocol/inExtendedDirectoryOperationsAbstractSyntax.oa.mjs";
// export { inExtendedDirectoryOperationsAbstractSyntax } from "../IN-CS3-SCF-SDF-Protocol/inExtendedDirectoryOperationsAbstractSyntax.oa.mjs";
import { inDirectoryBindingAbstractSyntax } from "../IN-CS3-SCF-SDF-Protocol/inDirectoryBindingAbstractSyntax.oa.mjs";
// export { inDirectoryBindingAbstractSyntax } from "../IN-CS3-SCF-SDF-Protocol/inDirectoryBindingAbstractSyntax.oa.mjs";
import { id_ac_inExtendedDirectoryAccessAC } from "../IN-CS3-object-identifiers/id-ac-inExtendedDirectoryAccessAC.va.mjs";
// export { id_ac_inExtendedDirectoryAccessAC } from "../IN-CS3-object-identifiers/id-ac-inExtendedDirectoryAccessAC.va.mjs";
import { type APPLICATION_CONTEXT } from "../TC-Notation-Extensions/APPLICATION-CONTEXT.oca.mjs";


/**
 * @summary inExtendedDirectoryAccessAC
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * inExtendedDirectoryAccessAC APPLICATION-CONTEXT ::= {
 *   CONTRACT                  dapExecuteContract
 *   DIALOGUE MODE             structured
 *   TERMINATION               basic
 *   ABSTRACT SYNTAXES
 *     {dialogue-abstract-syntax | inExtendedDirectoryOperationsAbstractSyntax |
 *       inDirectoryBindingAbstractSyntax}
 *   APPLICATION CONTEXT NAME  id-ac-inExtendedDirectoryAccessAC
 * }
 * ```
 * 
 * @constant
 * @type {APPLICATION_CONTEXT}
 * @implements {APPLICATION_CONTEXT}
 */
export
const inExtendedDirectoryAccessAC: APPLICATION_CONTEXT = {
    class: "APPLICATION-CONTEXT",
    decoderFor: {
    },
    encoderFor: {
    },
    "&associationContract": dapExecuteContract /* OBJECT_FIELD_SETTING */,
    "&dialogueMode": structured /* OBJECT_FIELD_SETTING */,
    "&termination": basic /* OBJECT_FIELD_SETTING */,
    "&AbstractSyntaxes": [ dialogue_abstract_syntax, inExtendedDirectoryOperationsAbstractSyntax, inDirectoryBindingAbstractSyntax, ] /* OBJECT_FIELD_SETTING */,
    "&applicationContextName": id_ac_inExtendedDirectoryAccessAC /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AdditionalASEs": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&componentGrouping": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dialogueAndComponentGrouping": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
