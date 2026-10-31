/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { integerMatch } from "../SelectedAttributeTypes/integerMatch.oa.mjs";
// export { integer } from "../SelectedAttributeTypes/integer.oa.mjs";
// export { id_at_zimbraAuthTokenNotificationInterval } from "../LdapZimbra/id-at-zimbraAuthTokenNotificationInterval.va.mjs";


/**
 * @summary zimbraAuthTokenNotificationInterval
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * zimbraAuthTokenNotificationInterval ATTRIBUTE ::= {
 *   WITH SYNTAX               INTEGER
 *   EQUALITY MATCHING RULE    integerMatch
 *   SINGLE VALUE              TRUE
 *   LDAP-SYNTAX               integer.&id
 *   LDAP-NAME                 {"zimbraAuthTokenNotificationInterval"}
 *   LDAP-DESC                 "This attribute is used to configure the interval with which servers will send a list of invalidated tokens to each other. When an account logs out of a server, the account's authtoken is added to a queue of invalidated tokens on the server. Each server will send it's queue of invalidated tokens to all other servers with frequency configurable by this attribute. See zimbraLogOutFromAllServers for more info on configuring authtoken invalidation on Accounts and Classes of Service. Set to higher value to reduce network chatter. Set to lower value to decrease the window during which a stolen cookie may be reused to access an account."
 *   ID                        id-at-zimbraAuthTokenNotificationInterval }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const zimbraAuthTokenNotificationInterval: ATTRIBUTE = undefined;

/* eslint-enable */
