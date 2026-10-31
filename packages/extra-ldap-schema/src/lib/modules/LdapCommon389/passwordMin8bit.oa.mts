/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { UnboundedDirectoryString, _decode_UnboundedDirectoryString, _encode_UnboundedDirectoryString } from "../SelectedAttributeTypes/UnboundedDirectoryString.ta.mjs";
// export { directoryString } from "../SelectedAttributeTypes/directoryString.oa.mjs";
// export { id_at_passwordMin8bit } from "../LdapCommon389/id-at-passwordMin8bit.va.mjs";


/**
 * @summary passwordMin8bit
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * passwordMin8bit ATTRIBUTE ::= {
 *   WITH SYNTAX               UnboundedDirectoryString
 *   SINGLE VALUE              TRUE
 *   LDAP-SYNTAX               directoryString.&id
 *   LDAP-NAME                 {"passwordMin8bit", "pwdMin8bit"}
 *   LDAP-DESC                 "Netscape defined password policy attribute type"
 *   ID                        id-at-passwordMin8bit }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const passwordMin8bit: ATTRIBUTE = undefined;

/* eslint-enable */
