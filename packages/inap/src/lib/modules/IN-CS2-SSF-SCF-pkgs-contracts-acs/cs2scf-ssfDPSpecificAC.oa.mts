/* eslint-disable */
import { structured /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../TC-Notation-Extensions/DialogueMode.ta.mjs";
// export { DialogueMode, _enum_for_DialogueMode, DialogueMode_structured /* IMPORTED_LONG_ENUMERATION_ITEM */, structured /* IMPORTED_SHORT_ENUMERATION_ITEM */, DialogueMode_unstructured /* IMPORTED_LONG_ENUMERATION_ITEM */, unstructured /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_DialogueMode, _encode_DialogueMode } from "../TC-Notation-Extensions/DialogueMode.ta.mjs";
// export { Termination, _enum_for_Termination, Termination_basic /* IMPORTED_LONG_ENUMERATION_ITEM */, basic /* IMPORTED_SHORT_ENUMERATION_ITEM */, Termination_prearranged /* IMPORTED_LONG_ENUMERATION_ITEM */, prearranged /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Termination, _encode_Termination } from "../TC-Notation-Extensions/Termination.ta.mjs";
import { inCs2ScfToSsfDpSpecific } from "../IN-CS2-SSF-SCF-pkgs-contracts-acs/inCs2ScfToSsfDpSpecific.oa.mjs";
// export { inCs2ScfToSsfDpSpecific } from "../IN-CS2-SSF-SCF-pkgs-contracts-acs/inCs2ScfToSsfDpSpecific.oa.mjs";
import { dialogue_abstract_syntax } from "../TC-Notation-Extensions/dialogue-abstract-syntax.oa.mjs";
// export { dialogue_abstract_syntax } from "../TC-Notation-Extensions/dialogue-abstract-syntax.oa.mjs";
import { scf_ssfDpSpecificAbstractSyntax } from "../IN-CS2-SSF-SCF-pkgs-contracts-acs/scf-ssfDpSpecificAbstractSyntax.oa.mjs";
// export { scf_ssfDpSpecificAbstractSyntax } from "../IN-CS2-SSF-SCF-pkgs-contracts-acs/scf-ssfDpSpecificAbstractSyntax.oa.mjs";
import { id_ac_cs2_scf_ssfDPSpecificAC } from "../IN-CS2-object-identifiers/id-ac-cs2-scf-ssfDPSpecificAC.va.mjs";
// export { id_ac_cs2_scf_ssfDPSpecificAC } from "../IN-CS2-object-identifiers/id-ac-cs2-scf-ssfDPSpecificAC.va.mjs";
import { type APPLICATION_CONTEXT } from "../TC-Notation-Extensions/APPLICATION-CONTEXT.oca.mjs";


/**
 * @summary cs2scf_ssfDPSpecificAC
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * cs2scf-ssfDPSpecificAC APPLICATION-CONTEXT ::= {
 *   CONTRACT                  inCs2ScfToSsfDpSpecific
 *   DIALOGUE MODE             structured
 *   ABSTRACT SYNTAXES
 *     {dialogue-abstract-syntax | scf-ssfDpSpecificAbstractSyntax}
 *   APPLICATION CONTEXT NAME  id-ac-cs2-scf-ssfDPSpecificAC
 * }
 * ```
 * 
 * @constant
 * @type {APPLICATION_CONTEXT}
 * @implements {APPLICATION_CONTEXT}
 */
export
const cs2scf_ssfDPSpecificAC: APPLICATION_CONTEXT = {
    class: "APPLICATION-CONTEXT",
    decoderFor: {
    },
    encoderFor: {
    },
    "&associationContract": inCs2ScfToSsfDpSpecific /* OBJECT_FIELD_SETTING */,
    "&dialogueMode": structured /* OBJECT_FIELD_SETTING */,
    "&AbstractSyntaxes": [ dialogue_abstract_syntax, scf_ssfDpSpecificAbstractSyntax, ] /* OBJECT_FIELD_SETTING */,
    "&applicationContextName": id_ac_cs2_scf_ssfDPSpecificAC /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AdditionalASEs": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&componentGrouping": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dialogueAndComponentGrouping": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
