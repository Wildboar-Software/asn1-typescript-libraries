/* eslint-disable */
import {
    type PrintableString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
import { caseExactMatch } from "../SelectedAttributeTypes/caseExactMatch.oa.mjs";
import { caseExactOrderingMatch } from "../SelectedAttributeTypes/caseExactOrderingMatch.oa.mjs";
import { caseExactSubstringsMatch } from "../SelectedAttributeTypes/caseExactSubstringsMatch.oa.mjs";
import { printableString } from "../SelectedAttributeTypes/printableString.oa.mjs";
import { id_at_base4kidsMattermostTeamId } from "../LdapBase4kids2/id-at-base4kidsMattermostTeamId.va.mjs";

/**
 * @summary base4kidsMattermostTeamId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * base4kidsMattermostTeamId ATTRIBUTE ::= {
 *   WITH SYNTAX               PrintableString
 *   EQUALITY MATCHING RULE    caseExactMatch
 *   ORDERING MATCHING RULE    caseExactOrderingMatch
 *   SUBSTRINGS MATCHING RULE  caseExactSubstringsMatch
 *   SINGLE VALUE              TRUE
 *   LDAP-SYNTAX               printableString.&id
 *   LDAP-NAME                 {"base4kidsMattermostTeamId"}
 *   LDAP-DESC                 "Mattermost team GUID"
 *   ID                        id-at-base4kidsMattermostTeamId }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<PrintableString>}
 * @implements {ATTRIBUTE<PrintableString>}
 */
export
const base4kidsMattermostTeamId: ATTRIBUTE<PrintableString> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodePrintableString,
    },
    encoderFor: {
        "&Type": $._encodePrintableString,
    },
    "&equality-match": caseExactMatch /* OBJECT_FIELD_SETTING */,
    "&ordering-match": caseExactOrderingMatch /* OBJECT_FIELD_SETTING */,
    "&substrings-match": caseExactSubstringsMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": printableString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "base4kidsMattermostTeamId" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Mattermost team GUID" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_base4kidsMattermostTeamId /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
