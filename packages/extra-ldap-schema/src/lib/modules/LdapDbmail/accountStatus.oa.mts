/* eslint-disable */
import {
    type PrintableString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
import { caseIgnoreMatch } from "../SelectedAttributeTypes/caseIgnoreMatch.oa.mjs";
import { printableString } from "../SelectedAttributeTypes/printableString.oa.mjs";
import { id_at_accountStatus } from "../LdapDbmail/id-at-accountStatus.va.mjs";


/**
 * @summary accountStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * accountStatus ATTRIBUTE ::= {
 *   WITH SYNTAX               PrintableString
 *   EQUALITY MATCHING RULE    caseIgnoreMatch
 *   SINGLE VALUE              TRUE
 *   LDAP-SYNTAX               printableString.&id
 *   LDAP-NAME                 {"accountStatus"}
 *   LDAP-DESC                 "The status of a user account: active, disabled"
 *   ID                        id-at-accountStatus }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<PrintableString>}
 * @implements {ATTRIBUTE<PrintableString>}
 */
export
const accountStatus: ATTRIBUTE<PrintableString> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodePrintableString,
    },
    encoderFor: {
        "&Type": $._encodePrintableString,
    },
    "&equality-match": caseIgnoreMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": printableString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "accountStatus" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "The status of a user account: active, disabled" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_accountStatus /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

