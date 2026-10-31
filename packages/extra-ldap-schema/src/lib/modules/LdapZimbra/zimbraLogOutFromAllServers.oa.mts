/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { booleanMatch } from "../SelectedAttributeTypes/booleanMatch.oa.mjs";
// export { boolean_ } from "../SelectedAttributeTypes/boolean.oa.mjs";
// export { id_at_zimbraLogOutFromAllServers } from "../LdapZimbra/id-at-zimbraLogOutFromAllServers.va.mjs";


/**
 * @summary zimbraLogOutFromAllServers
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * zimbraLogOutFromAllServers ATTRIBUTE ::= {
 *   WITH SYNTAX               BOOLEAN
 *   EQUALITY MATCHING RULE    booleanMatch
 *   SINGLE VALUE              TRUE
 *   LDAP-SYNTAX               boolean.&id
 *   LDAP-NAME                 {"zimbraLogOutFromAllServers"}
 *   LDAP-DESC                 "Flag to control how authtokens are invalidated in multi-server environment. If set to TRUE: when this account logs out on a server, the server will notify other servers that this account's authtoken has been invalidated. If set to FALSE, an auth token may remain vallid on servers other than the account's home server after a user logs out for as long as an account object remains in Provisioning Cache. Set to TRUE for increased protection against Cookie Re-use attack. Default is FALSE to reduce network chatter."
 *   ID                        id-at-zimbraLogOutFromAllServers }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const zimbraLogOutFromAllServers: ATTRIBUTE = undefined;

/* eslint-enable */
