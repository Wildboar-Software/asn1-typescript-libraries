/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { caseIgnoreIA5Match } from "../SelectedAttributeTypes/caseIgnoreIA5Match.oa.mjs";
// export { ia5String } from "../SelectedAttributeTypes/ia5String.oa.mjs";
// export { id_at_zimbraReverseProxyUpstreamSendTimeout } from "../LdapZimbra/id-at-zimbraReverseProxyUpstreamSendTimeout.va.mjs";


/**
 * @summary zimbraReverseProxyUpstreamSendTimeout
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * zimbraReverseProxyUpstreamSendTimeout ATTRIBUTE ::= {
 *   WITH SYNTAX               IA5String(SIZE (1..32))
 *   EQUALITY MATCHING RULE    caseIgnoreIA5Match
 *   SINGLE VALUE              TRUE
 *   LDAP-SYNTAX               ia5String.&id
 *   LDAP-NAME                 {"zimbraReverseProxyUpstreamSendTimeout"}
 *   LDAP-DESC                 "The send timeout of transfering a request to the upstream server. If after this time the upstream server doesn't take new data, proxy will close the connection. . Must be in valid duration format: {digits}{time-unit}. digits: 0-9, time-unit: [hmsd]|ms. h - hours, m - minutes, s - seconds, d - days, ms - milliseconds. If time unit is not specified, the default is s(seconds)."
 *   ID                        id-at-zimbraReverseProxyUpstreamSendTimeout }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const zimbraReverseProxyUpstreamSendTimeout: ATTRIBUTE = undefined;

/* eslint-enable */
