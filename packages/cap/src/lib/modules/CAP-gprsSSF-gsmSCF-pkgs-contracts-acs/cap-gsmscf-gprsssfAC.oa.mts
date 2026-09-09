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
import { capGsmScfToGprsSsf } from "../CAP-gprsSSF-gsmSCF-pkgs-contracts-acs/capGsmScfToGprsSsf.oa.mjs";
// export { capGsmScfToGprsSsf } from "../CAP-gprsSSF-gsmSCF-pkgs-contracts-acs/capGsmScfToGprsSsf.oa.mjs";
import { dialogue_abstract_syntax } from "../TC-Notation-Extensions/dialogue-abstract-syntax.oa.mjs";
// export { dialogue_abstract_syntax } from "../TC-Notation-Extensions/dialogue-abstract-syntax.oa.mjs";
import { gsmSCF_gprsSSFAbstractSyntax } from "../CAP-gprsSSF-gsmSCF-pkgs-contracts-acs/gsmSCF-gprsSSFAbstractSyntax.oa.mjs";
// export { gsmSCF_gprsSSFAbstractSyntax } from "../CAP-gprsSSF-gsmSCF-pkgs-contracts-acs/gsmSCF-gprsSSFAbstractSyntax.oa.mjs";
import { id_ac_CAP_gsmSCF_gprsSSF_AC } from "../CAP-object-identifiers/id-ac-CAP-gsmSCF-gprsSSF-AC.va.mjs";
// export { id_ac_CAP_gsmSCF_gprsSSF_AC } from "../CAP-object-identifiers/id-ac-CAP-gsmSCF-gprsSSF-AC.va.mjs";
import { type APPLICATION_CONTEXT } from "../TC-Notation-Extensions/APPLICATION-CONTEXT.oca.mjs";


/**
 * @summary cap_gsmscf_gprsssfAC
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * cap-gsmscf-gprsssfAC APPLICATION-CONTEXT ::= {
 *     CONTRACT            capGsmScfToGprsSsf
 *     DIALOGUE MODE        structured
 *     ABSTRACT SYNTAXES        {dialogue-abstract-syntax |
 *                 gsmSCF-gprsSSFAbstractSyntax}
 *     APPLICATION CONTEXT NAME    id-ac-CAP-gsmSCF-gprsSSF-AC}
 * ```
 * 
 * @constant
 * @type {APPLICATION_CONTEXT}
 * @implements {APPLICATION_CONTEXT}
 */
export
const cap_gsmscf_gprsssfAC: APPLICATION_CONTEXT = {
    class: "APPLICATION-CONTEXT",
    decoderFor: {
    },
    encoderFor: {
    },
    "&associationContract": capGsmScfToGprsSsf /* OBJECT_FIELD_SETTING */,
    "&dialogueMode": structured /* OBJECT_FIELD_SETTING */,
    "&AbstractSyntaxes": [ dialogue_abstract_syntax, gsmSCF_gprsSSFAbstractSyntax, ] /* OBJECT_FIELD_SETTING */,
    "&applicationContextName": id_ac_CAP_gsmSCF_gprsSSF_AC /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AdditionalASEs": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&componentGrouping": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dialogueAndComponentGrouping": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
