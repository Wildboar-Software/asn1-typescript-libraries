/* eslint-disable */
import { type INTEGER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications } from "../InformationFramework/AttributeUsage.ta.mjs";
import { id_at_zimbraAmavisSALogLevel } from "../LdapZimbra/id-at-zimbraAmavisSALogLevel.va.mjs";
import { integer } from "../SelectedAttributeTypes/integer.oa.mjs";
import { integerMatch } from "../SelectedAttributeTypes/integerMatch.oa.mjs";

/**
 * @summary zimbraAmavisSALogLevel
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * zimbraAmavisSALogLevel ATTRIBUTE ::= {
 *   WITH SYNTAX               INTEGER
 *   EQUALITY MATCHING RULE    integerMatch
 *   SINGLE VALUE              TRUE
 *   LDAP-SYNTAX               integer.&id
 *   LDAP-NAME                 {"zimbraAmavisSALogLevel"}
 *   LDAP-DESC                 "Loglevel for SpamAssassin when called via Amavis. Defaults to 0 (info). Can be 0 or 1 (info, all)"
 *   ID                        id-at-zimbraAmavisSALogLevel }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<INTEGER>}
 * @implements {ATTRIBUTE<INTEGER>}
 */
export
const zimbraAmavisSALogLevel: ATTRIBUTE<INTEGER> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeInteger,
    },
    encoderFor: {
        "&Type": $._encodeInteger,
    },
    "&equality-match": integerMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": integer["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["zimbraAmavisSALogLevel"],
    "&ldapDesc": "Loglevel for SpamAssassin when called via Amavis. Defaults to 0 (info). Can be 0 or 1 (info, all)" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_zimbraAmavisSALogLevel /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
