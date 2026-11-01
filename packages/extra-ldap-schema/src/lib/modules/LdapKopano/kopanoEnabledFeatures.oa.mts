/* eslint-disable */
import {
    type PrintableString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
import { caseIgnoreMatch } from "../SelectedAttributeTypes/caseIgnoreMatch.oa.mjs";
// export { caseIgnoreMatch } from "../SelectedAttributeTypes/caseIgnoreMatch.oa.mjs";
import { printableString } from "../SelectedAttributeTypes/printableString.oa.mjs";
// export { printableString } from "../SelectedAttributeTypes/printableString.oa.mjs";
import { id_at_kopanoEnabledFeatures } from "../LdapKopano/id-at-kopanoEnabledFeatures.va.mjs";
// export { id_at_kopanoEnabledFeatures } from "../LdapKopano/id-at-kopanoEnabledFeatures.va.mjs";


/**
 * @summary kopanoEnabledFeatures
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * kopanoEnabledFeatures ATTRIBUTE ::= {
 *   WITH SYNTAX               PrintableString
 *   EQUALITY MATCHING RULE    caseIgnoreMatch
 *   LDAP-SYNTAX               printableString.&id
 *   LDAP-NAME                 {"kopanoEnabledFeatures"}
 *   LDAP-DESC                 "KOPANO: This user has these features explicitly enabled"
 *   ID                        id-at-kopanoEnabledFeatures }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<PrintableString>}
 * @implements {ATTRIBUTE<PrintableString>}
 */
export
const kopanoEnabledFeatures: ATTRIBUTE<PrintableString> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodePrintableString,
    },
    encoderFor: {
        "&Type": $._encodePrintableString,
    },
    "&equality-match": caseIgnoreMatch /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": printableString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "kopanoEnabledFeatures" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "KOPANO: This user has these features explicitly enabled" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_kopanoEnabledFeatures /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
