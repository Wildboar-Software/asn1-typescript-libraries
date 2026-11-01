/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
import { UnboundedDirectoryString, _decode_UnboundedDirectoryString, _encode_UnboundedDirectoryString } from "../SelectedAttributeTypes/UnboundedDirectoryString.ta.mjs";
import { caseExactIA5SubstringsMatch } from "../OpenLDAP/caseExactIA5SubstringsMatch.oa.mjs";
import { directoryString } from "../SelectedAttributeTypes/directoryString.oa.mjs";
import { id_at_vacationStart } from "../LdapIspenv/id-at-vacationStart.va.mjs";


/**
 * @summary vacationStart
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * vacationStart ATTRIBUTE ::= {
 *   WITH SYNTAX               UnboundedDirectoryString
 *   EQUALITY MATCHING RULE    caseExactIA5SubstringsMatch
 *   SINGLE VALUE              TRUE
 *   LDAP-SYNTAX               directoryString.&id
 *   LDAP-NAME                 {"vacationStart"}
 *   LDAP-DESC                 "Start of vacation"
 *   ID                        id-at-vacationStart }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<UnboundedDirectoryString>}
 * @implements {ATTRIBUTE<UnboundedDirectoryString>}
 */
export
const vacationStart: ATTRIBUTE<UnboundedDirectoryString> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_UnboundedDirectoryString,
    },
    encoderFor: {
        "&Type": _encode_UnboundedDirectoryString,
    },
    "&equality-match": caseExactIA5SubstringsMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": directoryString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "vacationStart" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Start of vacation" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_vacationStart /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

