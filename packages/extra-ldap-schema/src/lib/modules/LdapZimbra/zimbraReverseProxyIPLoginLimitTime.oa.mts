/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { integerMatch } from "../SelectedAttributeTypes/integerMatch.oa.mjs";
// export { integer } from "../SelectedAttributeTypes/integer.oa.mjs";
// export { id_at_zimbraReverseProxyIPLoginLimitTime } from "../LdapZimbra/id-at-zimbraReverseProxyIPLoginLimitTime.va.mjs";


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
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const zimbraReverseProxyIPLoginLimitTime: ATTRIBUTE = undefined;

/* eslint-enable */
