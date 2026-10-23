/* eslint-disable */
import { structured /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../TC-Notation-Extensions/DialogueMode.ta.mjs";
// export { DialogueMode, _enum_for_DialogueMode, DialogueMode_structured /* IMPORTED_LONG_ENUMERATION_ITEM */, structured /* IMPORTED_SHORT_ENUMERATION_ITEM */, DialogueMode_unstructured /* IMPORTED_LONG_ENUMERATION_ITEM */, unstructured /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_DialogueMode, _encode_DialogueMode } from "../TC-Notation-Extensions/DialogueMode.ta.mjs";
import { basic /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../TC-Notation-Extensions/Termination.ta.mjs";
// export { Termination, _enum_for_Termination, Termination_basic /* IMPORTED_LONG_ENUMERATION_ITEM */, basic /* IMPORTED_SHORT_ENUMERATION_ITEM */, Termination_prearranged /* IMPORTED_LONG_ENUMERATION_ITEM */, prearranged /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Termination, _encode_Termination } from "../TC-Notation-Extensions/Termination.ta.mjs";
import { scfcusfGenericContract } from "../IN-SCF-CUSF-Protocol/scfcusfGenericContract.oa.mjs";
// export { scfcusfGenericContract } from "../IN-SCF-CUSF-Protocol/scfcusfGenericContract.oa.mjs";
import { dialogue_abstract_syntax } from "../TC-Notation-Extensions/dialogue-abstract-syntax.oa.mjs";
// export { dialogue_abstract_syntax } from "../TC-Notation-Extensions/dialogue-abstract-syntax.oa.mjs";
import { scfcusfGenericAS } from "../IN-SCF-CUSF-Protocol/scfcusfGenericAS.oa.mjs";
// export { scfcusfGenericAS } from "../IN-SCF-CUSF-Protocol/scfcusfGenericAS.oa.mjs";
import { id_acscfcusfGeneric } from "../IN-object-identifiers/id-acscfcusfGeneric.va.mjs";
// export { id_acscfcusfGeneric } from "../IN-object-identifiers/id-acscfcusfGeneric.va.mjs";
import { type APPLICATION_CONTEXT } from "../TC-Notation-Extensions/APPLICATION-CONTEXT.oca.mjs";


/**
 * @summary scfcusfGenericAC
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * scfcusfGenericAC APPLICATION-CONTEXT ::= {
 *   CONTRACT                  scfcusfGenericContract
 *   DIALOGUE MODE             structured
 *   TERMINATION               basic
 *   ABSTRACT SYNTAXES         {dialogue-abstract-syntax | scfcusfGenericAS}
 *   APPLICATION CONTEXT NAME  id-acscfcusfGeneric
 * }
 * ```
 * 
 * @constant
 * @type {APPLICATION_CONTEXT}
 * @implements {APPLICATION_CONTEXT}
 */
export
const scfcusfGenericAC: APPLICATION_CONTEXT = {
    class: "APPLICATION-CONTEXT",
    decoderFor: {
    },
    encoderFor: {
    },
    "&associationContract": scfcusfGenericContract /* OBJECT_FIELD_SETTING */,
    "&dialogueMode": structured /* OBJECT_FIELD_SETTING */,
    "&termination": basic /* OBJECT_FIELD_SETTING */,
    "&AbstractSyntaxes": [ dialogue_abstract_syntax, scfcusfGenericAS, ] /* OBJECT_FIELD_SETTING */,
    "&applicationContextName": id_acscfcusfGeneric /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AdditionalASEs": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&componentGrouping": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dialogueAndComponentGrouping": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
