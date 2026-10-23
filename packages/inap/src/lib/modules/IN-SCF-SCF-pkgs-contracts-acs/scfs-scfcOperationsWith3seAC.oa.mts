/* eslint-disable */
import { structured /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../TC-Notation-Extensions/DialogueMode.ta.mjs";
// export { DialogueMode, _enum_for_DialogueMode, DialogueMode_structured /* IMPORTED_LONG_ENUMERATION_ITEM */, structured /* IMPORTED_SHORT_ENUMERATION_ITEM */, DialogueMode_unstructured /* IMPORTED_LONG_ENUMERATION_ITEM */, unstructured /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_DialogueMode, _encode_DialogueMode } from "../TC-Notation-Extensions/DialogueMode.ta.mjs";
import { basic /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../TC-Notation-Extensions/Termination.ta.mjs";
// export { Termination, _enum_for_Termination, Termination_basic /* IMPORTED_LONG_ENUMERATION_ITEM */, basic /* IMPORTED_SHORT_ENUMERATION_ITEM */, Termination_prearranged /* IMPORTED_LONG_ENUMERATION_ITEM */, prearranged /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Termination, _encode_Termination } from "../TC-Notation-Extensions/Termination.ta.mjs";
import { scfs_scfcContract } from "../IN-SCF-SCF-pkgs-contracts-acs/scfs-scfcContract.oa.mjs";
// export { scfs_scfcContract } from "../IN-SCF-SCF-pkgs-contracts-acs/scfs-scfcContract.oa.mjs";
import { dialogue_abstract_syntax } from "../TC-Notation-Extensions/dialogue-abstract-syntax.oa.mjs";
// export { dialogue_abstract_syntax } from "../TC-Notation-Extensions/dialogue-abstract-syntax.oa.mjs";
import { scfBindingAbstractSyntax } from "../IN-SCF-SCF-pkgs-contracts-acs/scfBindingAbstractSyntax.oa.mjs";
// export { scfBindingAbstractSyntax } from "../IN-SCF-SCF-pkgs-contracts-acs/scfBindingAbstractSyntax.oa.mjs";
import { scfs_scfcOperationsAbstractSyntax } from "../IN-SCF-SCF-pkgs-contracts-acs/scfs-scfcOperationsAbstractSyntax.oa.mjs";
// export { scfs_scfcOperationsAbstractSyntax } from "../IN-SCF-SCF-pkgs-contracts-acs/scfs-scfcOperationsAbstractSyntax.oa.mjs";
import { inSESEAbstractSyntax } from "../IN-SCF-SDF-Protocol/inSESEAbstractSyntax.oa.mjs";
// export { inSESEAbstractSyntax } from "../IN-SCF-SDF-Protocol/inSESEAbstractSyntax.oa.mjs";
import { id_ac_scfs_scfcOperationsWith3seAC } from "../IN-object-identifiers/id-ac-scfs-scfcOperationsWith3seAC.va.mjs";
// export { id_ac_scfs_scfcOperationsWith3seAC } from "../IN-object-identifiers/id-ac-scfs-scfcOperationsWith3seAC.va.mjs";
import { type APPLICATION_CONTEXT } from "../TC-Notation-Extensions/APPLICATION-CONTEXT.oca.mjs";


/**
 * @summary scfs_scfcOperationsWith3seAC
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * scfs-scfcOperationsWith3seAC APPLICATION-CONTEXT ::= {
 *   CONTRACT                  scfs-scfcContract
 *   DIALOGUE MODE             structured
 *   TERMINATION               basic
 *   ADDITIONAL ASES           {id-se-threewayse}
 *   ABSTRACT SYNTAXES
 *     {dialogue-abstract-syntax | scfBindingAbstractSyntax |
 *       scfs-scfcOperationsAbstractSyntax | inSESEAbstractSyntax}
 *   APPLICATION CONTEXT NAME  id-ac-scfs-scfcOperationsWith3seAC
 * }
 * ```
 * 
 * @constant
 * @type {APPLICATION_CONTEXT}
 * @implements {APPLICATION_CONTEXT}
 */
export
const scfs_scfcOperationsWith3seAC: APPLICATION_CONTEXT = {
    class: "APPLICATION-CONTEXT",
    decoderFor: {
    },
    encoderFor: {
    },
    "&associationContract": scfs_scfcContract /* OBJECT_FIELD_SETTING */,
    "&dialogueMode": structured /* OBJECT_FIELD_SETTING */,
    "&termination": basic /* OBJECT_FIELD_SETTING */,
    "&AbstractSyntaxes": [ dialogue_abstract_syntax, scfBindingAbstractSyntax, scfs_scfcOperationsAbstractSyntax, inSESEAbstractSyntax, ] /* OBJECT_FIELD_SETTING */,
    "&applicationContextName": id_ac_scfs_scfcOperationsWith3seAC /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AdditionalASEs": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&componentGrouping": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dialogueAndComponentGrouping": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
