/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
import { integerMatch } from "../SelectedAttributeTypes/integerMatch.oa.mjs";
import { integer } from "../SelectedAttributeTypes/integer.oa.mjs";
import { id_at_zimbraReverseProxyIPLoginLimitTime } from "../LdapZimbra/id-at-zimbraReverseProxyIPLoginLimitTime.va.mjs";

/**
 * @summary zimbraReverseProxyIPLoginLimitTime
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * zimbraReverseProxyIPLoginLimitTime ATTRIBUTE ::= {
 *   WITH SYNTAX               INTEGER
 *   EQUALITY MATCHING RULE    integerMatch
 *   SINGLE VALUE              TRUE
 *   LDAP-SYNTAX               integer.&id
 *   LDAP-NAME                 {"zimbraReverseProxyIPLoginLimitTime"}
 *   LDAP-DESC                 "Sets the time-to-live for the hit counter for IP based login throttling. If time is set to 3600 and limit is set to 1000, then it means that NGINX should not allow more than 1000 users to log in via the proxy from the same IP, within the time interval of an hour. The semantics for such a configuration would then be: allow maximum 1000 users per hour from any given IP address."
 *   ID                        id-at-zimbraReverseProxyIPLoginLimitTime }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<INTEGER>}
 * @implements {ATTRIBUTE<INTEGER>}
 */
export
const zimbraReverseProxyIPLoginLimitTime: ATTRIBUTE<INTEGER> = {
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
    "&ldapName": [ "zimbraReverseProxyIPLoginLimitTime" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Sets the time-to-live for the hit counter for IP based login throttling. If time is set to 3600 and limit is set to 1000, then it means that NGINX should not allow more than 1000 users to log in via the proxy from the same IP, within the time interval of an hour. The semantics for such a configuration would then be: allow maximum 1000 users per hour from any given IP address." /* OBJECT_FIELD_SETTING */,
    "&id": id_at_zimbraReverseProxyIPLoginLimitTime /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
