/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { integerMatch } from "../SelectedAttributeTypes/integerMatch.oa.mjs";
// export { integer } from "../SelectedAttributeTypes/integer.oa.mjs";
// export { id_at_zimbraReverseProxyUserLoginLimit } from "../LdapZimbra/id-at-zimbraReverseProxyUserLoginLimit.va.mjs";


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
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const zimbraReverseProxyUserLoginLimit: ATTRIBUTE = undefined;

/* eslint-enable */
