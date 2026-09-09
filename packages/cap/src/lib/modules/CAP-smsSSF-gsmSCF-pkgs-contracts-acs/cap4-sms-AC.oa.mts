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
import { cap4SMS } from "../CAP-smsSSF-gsmSCF-pkgs-contracts-acs/cap4SMS.oa.mjs";
// export { cap4SMS } from "../CAP-smsSSF-gsmSCF-pkgs-contracts-acs/cap4SMS.oa.mjs";
import { dialogue_abstract_syntax } from "../TC-Notation-Extensions/dialogue-abstract-syntax.oa.mjs";
// export { dialogue_abstract_syntax } from "../TC-Notation-Extensions/dialogue-abstract-syntax.oa.mjs";
import { sms_AbstractSyntax } from "../CAP-smsSSF-gsmSCF-pkgs-contracts-acs/sms-AbstractSyntax.oa.mjs";
// export { sms_AbstractSyntax } from "../CAP-smsSSF-gsmSCF-pkgs-contracts-acs/sms-AbstractSyntax.oa.mjs";
import { id_ac_cap4_sms_AC } from "../CAP-object-identifiers/id-ac-cap4-sms-AC.va.mjs";
// export { id_ac_cap4_sms_AC } from "../CAP-object-identifiers/id-ac-cap4-sms-AC.va.mjs";
import { type APPLICATION_CONTEXT } from "../TC-Notation-Extensions/APPLICATION-CONTEXT.oca.mjs";


/**
 * @summary cap4_sms_AC
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * cap4-sms-AC APPLICATION-CONTEXT ::= {
 *     CONTRACT            cap4SMS
 *     DIALOGUE MODE        structured
 *     ABSTRACT SYNTAXES        {dialogue-abstract-syntax |
 *                 sms-AbstractSyntax} 
 *     APPLICATION CONTEXT NAME    id-ac-cap4-sms-AC}
 * ```
 * 
 * @constant
 * @type {APPLICATION_CONTEXT}
 * @implements {APPLICATION_CONTEXT}
 */
export
const cap4_sms_AC: APPLICATION_CONTEXT = {
    class: "APPLICATION-CONTEXT",
    decoderFor: {
    },
    encoderFor: {
    },
    "&associationContract": cap4SMS /* OBJECT_FIELD_SETTING */,
    "&dialogueMode": structured /* OBJECT_FIELD_SETTING */,
    "&AbstractSyntaxes": [ dialogue_abstract_syntax, sms_AbstractSyntax, ] /* OBJECT_FIELD_SETTING */,
    "&applicationContextName": id_ac_cap4_sms_AC /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AdditionalASEs": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&componentGrouping": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dialogueAndComponentGrouping": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
