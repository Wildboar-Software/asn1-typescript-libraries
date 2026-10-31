/* eslint-disable */
import { type INTEGER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications } from "../InformationFramework/AttributeUsage.ta.mjs";
import { id_at_zimbraInvalidLoginFilterMaxFailedLogin } from "../LdapZimbra/id-at-zimbraInvalidLoginFilterMaxFailedLogin.va.mjs";
import { integer } from "../SelectedAttributeTypes/integer.oa.mjs";
import { integerMatch } from "../SelectedAttributeTypes/integerMatch.oa.mjs";

/**
 * @summary zimbraInvalidLoginFilterMaxFailedLogin
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * zimbraInvalidLoginFilterMaxFailedLogin ATTRIBUTE ::= {
 *   WITH SYNTAX               INTEGER
 *   EQUALITY MATCHING RULE    integerMatch
 *   SINGLE VALUE              TRUE
 *   LDAP-SYNTAX               integer.&id
 *   LDAP-NAME                 {"zimbraInvalidLoginFilterMaxFailedLogin"}
 *   LDAP-DESC                 "This attribute is used for failed authentication requests.This is a DOSFilter style check for repeated failed logins from IP, if set to 0 no check happens, else failed login is recorded."
 *   ID                        id-at-zimbraInvalidLoginFilterMaxFailedLogin }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<INTEGER>}
 * @implements {ATTRIBUTE<INTEGER>}
 */
export
const zimbraInvalidLoginFilterMaxFailedLogin: ATTRIBUTE<INTEGER> = {
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
    "&ldapName": ["zimbraInvalidLoginFilterMaxFailedLogin"],
    "&ldapDesc": "This attribute is used for failed authentication requests.This is a DOSFilter style check for repeated failed logins from IP, if set to 0 no check happens, else failed login is recorded." /* OBJECT_FIELD_SETTING */,
    "&id": id_at_zimbraInvalidLoginFilterMaxFailedLogin /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
