/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import { _enum_for_DialogueMode, structured /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_DialogueMode, _encode_DialogueMode } from "../TC-Notation-Extensions/DialogueMode.ta.mjs";
// export { DialogueMode, _enum_for_DialogueMode, DialogueMode_structured /* IMPORTED_LONG_ENUMERATION_ITEM */, structured /* IMPORTED_SHORT_ENUMERATION_ITEM */, DialogueMode_unstructured /* IMPORTED_LONG_ENUMERATION_ITEM */, unstructured /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_DialogueMode, _encode_DialogueMode } from "../TC-Notation-Extensions/DialogueMode.ta.mjs";
import { _enum_for_Termination, _decode_Termination, _encode_Termination } from "../TC-Notation-Extensions/Termination.ta.mjs";
// export { Termination, _enum_for_Termination, Termination_basic /* IMPORTED_LONG_ENUMERATION_ITEM */, basic /* IMPORTED_SHORT_ENUMERATION_ITEM */, Termination_prearranged /* IMPORTED_LONG_ENUMERATION_ITEM */, prearranged /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Termination, _encode_Termination } from "../TC-Notation-Extensions/Termination.ta.mjs";
import { capSsfToScfGeneric } from "../CAP-gsmSSF-gsmSCF-pkgs-contracts-acs/capSsfToScfGeneric.oa.mjs";
// export { capSsfToScfGeneric } from "../CAP-gsmSSF-gsmSCF-pkgs-contracts-acs/capSsfToScfGeneric.oa.mjs";
import { dialogue_abstract_syntax } from "../TC-Notation-Extensions/dialogue-abstract-syntax.oa.mjs";
// export { dialogue_abstract_syntax } from "../TC-Notation-Extensions/dialogue-abstract-syntax.oa.mjs";
import { gsmSSF_scfGenericAbstractSyntax } from "../CAP-gsmSSF-gsmSCF-pkgs-contracts-acs/gsmSSF-scfGenericAbstractSyntax.oa.mjs";
// export { gsmSSF_scfGenericAbstractSyntax } from "../CAP-gsmSSF-gsmSCF-pkgs-contracts-acs/gsmSSF-scfGenericAbstractSyntax.oa.mjs";
import { id_ac_CAP_gsmSSF_scfGenericAC } from "../CAP-object-identifiers/id-ac-CAP-gsmSSF-scfGenericAC.va.mjs";
// export { id_ac_CAP_gsmSSF_scfGenericAC } from "../CAP-object-identifiers/id-ac-CAP-gsmSSF-scfGenericAC.va.mjs";
import { type APPLICATION_CONTEXT } from "../TC-Notation-Extensions/APPLICATION-CONTEXT.oca.mjs";


/**
 * @summary capssf_scfGenericAC
 * @description
 * 
 * gsmSSF-to-gsmSCF generic CS application context. Contract
 * `capSsfToScfGeneric`; structured dialogue; abstract syntaxes
 * `dialogue-abstract-syntax` and `gsmSSF-scfGenericAbstractSyntax`. CAP V4
 * Rel-5 and Rel-6 share this AC name; the contract and abstract syntaxes are
 * Rel-6 definitions. If the proposed AC is acceptable, it must be reflected in
 * the first backwards message; the gsmSCF shall not return an alternate AC.
 * (3GPP TS 29.078 V19.0.0 clauses 6.1.2 and 4.2.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * capssf-scfGenericAC APPLICATION-CONTEXT ::= {
 *     CONTRACT            capSsfToScfGeneric
 *     DIALOGUE MODE        structured
 *     ABSTRACT SYNTAXES        {dialogue-abstract-syntax |
 *                 gsmSSF-scfGenericAbstractSyntax} 
 *     APPLICATION CONTEXT NAME    id-ac-CAP-gsmSSF-scfGenericAC}
 * ```
 * 
 * @constant
 * @type {APPLICATION_CONTEXT}
 * @implements {APPLICATION_CONTEXT}
 */
export
const capssf_scfGenericAC: APPLICATION_CONTEXT = {
    class: "APPLICATION-CONTEXT",
    decoderFor: {
    },
    encoderFor: {
    },
    "&associationContract": capSsfToScfGeneric /* OBJECT_FIELD_SETTING */,
    "&dialogueMode": structured /* OBJECT_FIELD_SETTING */,
    "&AbstractSyntaxes": [ dialogue_abstract_syntax, gsmSSF_scfGenericAbstractSyntax, ] /* OBJECT_FIELD_SETTING */,
    "&applicationContextName": id_ac_CAP_gsmSSF_scfGenericAC /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AdditionalASEs": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&componentGrouping": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dialogueAndComponentGrouping": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
