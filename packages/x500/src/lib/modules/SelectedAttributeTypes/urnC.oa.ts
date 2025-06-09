/* eslint-disable */
import { PrintableString } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.js";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta.js";
import { caseExactMatch } from "../SelectedAttributeTypes/caseExactMatch.oa.js";
import { id_at_urnC } from "../SelectedAttributeTypes/id-at-urnC.va.js";
import { printableString } from "../SelectedAttributeTypes/printableString.oa.js";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.js";
export {
    AttributeUsage,
    AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */,
    AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */,
    AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */,
    AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */,
    directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_AttributeUsage,
    _encode_AttributeUsage,
    _enum_for_AttributeUsage,
} from "../InformationFramework/AttributeUsage.ta.js";
export { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.js";
export { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca.js";
export { caseExactMatch } from "../SelectedAttributeTypes/caseExactMatch.oa.js";
export { id_at_urnC } from "../SelectedAttributeTypes/id-at-urnC.va.js";
export { printableString } from "../SelectedAttributeTypes/printableString.oa.js";

/* START_OF_SYMBOL_DEFINITION urnC */
/**
 * @summary urnC
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * urnC ATTRIBUTE ::= {
 *   WITH SYNTAX              PrintableString
 *   EQUALITY MATCHING RULE   caseExactMatch
 *   SINGLE VALUE             TRUE
 *   LDAP-SYNTAX              printableString.&id
 *   LDAP-NAME                {"urnC"}
 *   ID                       id-at-urnC }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<PrintableString>}
 * @implements {ATTRIBUTE<PrintableString>}
 */
export const urnC: ATTRIBUTE<PrintableString> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodePrintableString,
    },
    encoderFor: {
        "&Type": $._encodePrintableString,
    },
    "&equality-match": caseExactMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": printableString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["urnC"],
    "&id": id_at_urnC /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION urnC */

/* eslint-enable */
