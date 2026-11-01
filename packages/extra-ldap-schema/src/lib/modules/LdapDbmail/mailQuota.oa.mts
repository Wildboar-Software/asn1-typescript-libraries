/* eslint-disable */
import {
    type PrintableString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
import { printableString } from "../SelectedAttributeTypes/printableString.oa.mjs";
import { id_at_mailQuota } from "../LdapDbmail/id-at-mailQuota.va.mjs";


/**
 * @summary mailQuota
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * mailQuota ATTRIBUTE ::= {
 *   WITH SYNTAX               PrintableString
 *   SINGLE VALUE              TRUE
 *   LDAP-SYNTAX               printableString.&id
 *   LDAP-NAME                 {"mailQuota"}
 *   LDAP-DESC                 "The amount of space the user can use until all further messages get bounced."
 *   ID                        id-at-mailQuota }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<PrintableString>}
 * @implements {ATTRIBUTE<PrintableString>}
 */
export
const mailQuota: ATTRIBUTE<PrintableString> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodePrintableString,
    },
    encoderFor: {
        "&Type": $._encodePrintableString,
    },
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": printableString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "mailQuota" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "The amount of space the user can use until all further messages get bounced." /* OBJECT_FIELD_SETTING */,
    "&id": id_at_mailQuota /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

