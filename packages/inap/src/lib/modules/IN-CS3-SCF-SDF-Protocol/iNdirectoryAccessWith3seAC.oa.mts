/* eslint-disable */
import { structured /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../TC-Notation-Extensions/DialogueMode.ta.mjs";
// export { DialogueMode, _enum_for_DialogueMode, DialogueMode_structured /* IMPORTED_LONG_ENUMERATION_ITEM */, structured /* IMPORTED_SHORT_ENUMERATION_ITEM */, DialogueMode_unstructured /* IMPORTED_LONG_ENUMERATION_ITEM */, unstructured /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_DialogueMode, _encode_DialogueMode } from "../TC-Notation-Extensions/DialogueMode.ta.mjs";
import { basic /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../TC-Notation-Extensions/Termination.ta.mjs";
// export { Termination, _enum_for_Termination, Termination_basic /* IMPORTED_LONG_ENUMERATION_ITEM */, basic /* IMPORTED_SHORT_ENUMERATION_ITEM */, Termination_prearranged /* IMPORTED_LONG_ENUMERATION_ITEM */, prearranged /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Termination, _encode_Termination } from "../TC-Notation-Extensions/Termination.ta.mjs";
import { dapContract } from "../IN-CS3-SCF-SDF-Protocol/dapContract.oa.mjs";
// export { dapContract } from "../IN-CS3-SCF-SDF-Protocol/dapContract.oa.mjs";
import { dialogue_abstract_syntax } from "../TC-Notation-Extensions/dialogue-abstract-syntax.oa.mjs";
// export { dialogue_abstract_syntax } from "../TC-Notation-Extensions/dialogue-abstract-syntax.oa.mjs";
import { inDirectoryOperationsAbstractSyntax } from "../IN-CS3-SCF-SDF-Protocol/inDirectoryOperationsAbstractSyntax.oa.mjs";
// export { inDirectoryOperationsAbstractSyntax } from "../IN-CS3-SCF-SDF-Protocol/inDirectoryOperationsAbstractSyntax.oa.mjs";
import { inDirectoryBindingAbstractSyntax } from "../IN-CS3-SCF-SDF-Protocol/inDirectoryBindingAbstractSyntax.oa.mjs";
// export { inDirectoryBindingAbstractSyntax } from "../IN-CS3-SCF-SDF-Protocol/inDirectoryBindingAbstractSyntax.oa.mjs";
import { inSESEAbstractSyntax } from "../IN-CS3-SCF-SDF-Protocol/inSESEAbstractSyntax.oa.mjs";
// export { inSESEAbstractSyntax } from "../IN-CS3-SCF-SDF-Protocol/inSESEAbstractSyntax.oa.mjs";
import { id_ac_indirectoryAccessWith3seAC } from "../IN-CS3-object-identifiers/id-ac-indirectoryAccessWith3seAC.va.mjs";
// export { id_ac_indirectoryAccessWith3seAC } from "../IN-CS3-object-identifiers/id-ac-indirectoryAccessWith3seAC.va.mjs";
import { type APPLICATION_CONTEXT } from "../TC-Notation-Extensions/APPLICATION-CONTEXT.oca.mjs";


/**
 * @summary iNdirectoryAccessWith3seAC
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * iNdirectoryAccessWith3seAC APPLICATION-CONTEXT ::= {
 *   CONTRACT                  dapContract
 *   DIALOGUE MODE             structured
 *   TERMINATION               basic
 *   ADDITIONAL ASES           {id-se-threewayse}
 *   ABSTRACT SYNTAXES
 *     {dialogue-abstract-syntax | inDirectoryOperationsAbstractSyntax |
 *       inDirectoryBindingAbstractSyntax | inSESEAbstractSyntax}
 *   APPLICATION CONTEXT NAME  id-ac-indirectoryAccessWith3seAC
 * }
 * ```
 * 
 * @constant
 * @type {APPLICATION_CONTEXT}
 * @implements {APPLICATION_CONTEXT}
 */
export
const iNdirectoryAccessWith3seAC: APPLICATION_CONTEXT = {
    class: "APPLICATION-CONTEXT",
    decoderFor: {
    },
    encoderFor: {
    },
    "&associationContract": dapContract /* OBJECT_FIELD_SETTING */,
    "&dialogueMode": structured /* OBJECT_FIELD_SETTING */,
    "&termination": basic /* OBJECT_FIELD_SETTING */,
    "&AbstractSyntaxes": [ dialogue_abstract_syntax, inDirectoryOperationsAbstractSyntax, inDirectoryBindingAbstractSyntax, inSESEAbstractSyntax, ] /* OBJECT_FIELD_SETTING */,
    "&applicationContextName": id_ac_indirectoryAccessWith3seAC /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AdditionalASEs": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&componentGrouping": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dialogueAndComponentGrouping": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
