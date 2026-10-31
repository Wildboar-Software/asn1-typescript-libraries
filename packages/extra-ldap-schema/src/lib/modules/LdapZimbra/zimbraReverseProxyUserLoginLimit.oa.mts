/* eslint-disable */
import { type INTEGER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications } from "../InformationFramework/AttributeUsage.ta.mjs";
import { id_at_zimbraReverseProxyUserLoginLimit } from "../LdapZimbra/id-at-zimbraReverseProxyUserLoginLimit.va.mjs";
import { integer } from "../SelectedAttributeTypes/integer.oa.mjs";
import { integerMatch } from "../SelectedAttributeTypes/integerMatch.oa.mjs";

/**
 * @summary zimbraReverseProxyUserLoginLimit
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * zimbraReverseProxyUserLoginLimit ATTRIBUTE ::= {
 *   WITH SYNTAX               INTEGER
 *   EQUALITY MATCHING RULE    integerMatch
 *   SINGLE VALUE              TRUE
 *   LDAP-SYNTAX               integer.&id
 *   LDAP-NAME                 {"zimbraReverseProxyUserLoginLimit"}
 *   LDAP-DESC                 "Limit how many times a user can login via the proxy. Setting limit to 100 and time to 3600 means: allow maximum 100 logins per hour for any user. As with the ip counterparts, the user hit counter and timeout are cumulative for all protocols. Also, for a given users login, both counters are checked in succession, with the IP counter being checked first. A login may be rejected (throttled) because the IP is over-usage, or because the login name itself is over-usage. A value of 0 indicates that no throttling will take place for any user."
 *   ID                        id-at-zimbraReverseProxyUserLoginLimit }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<INTEGER>}
 * @implements {ATTRIBUTE<INTEGER>}
 */
export
const zimbraReverseProxyUserLoginLimit: ATTRIBUTE<INTEGER> = {
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
    "&ldapName": ["zimbraReverseProxyUserLoginLimit"],
    "&ldapDesc": "Limit how many times a user can login via the proxy. Setting limit to 100 and time to 3600 means: allow maximum 100 logins per hour for any user. As with the ip counterparts, the user hit counter and timeout are cumulative for all protocols. Also, for a given users login, both counters are checked in succession, with the IP counter being checked first. A login may be rejected (throttled) because the IP is over-usage, or because the login name itself is over-usage. A value of 0 indicates that no throttling will take place for any user." /* OBJECT_FIELD_SETTING */,
    "&id": id_at_zimbraReverseProxyUserLoginLimit /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
