/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { integerMatch } from "../SelectedAttributeTypes/integerMatch.oa.mjs";
// export { integer } from "../SelectedAttributeTypes/integer.oa.mjs";
// export { id_at_zimbraPop3BindPort } from "../LdapZimbra/id-at-zimbraPop3BindPort.va.mjs";


/**
 * @summary zimbraPop3BindPort
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * zimbraPop3BindPort ATTRIBUTE ::= {
 *   WITH SYNTAX               INTEGER
 *   EQUALITY MATCHING RULE    integerMatch
 *   SINGLE VALUE              TRUE
 *   LDAP-SYNTAX               integer.&id
 *   LDAP-NAME                 {"zimbraPop3BindPort"}
 *   LDAP-DESC                 "port number on which POP3 server should listen"
 *   ID                        id-at-zimbraPop3BindPort }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const zimbraPop3BindPort: ATTRIBUTE = undefined;

/* eslint-enable */
