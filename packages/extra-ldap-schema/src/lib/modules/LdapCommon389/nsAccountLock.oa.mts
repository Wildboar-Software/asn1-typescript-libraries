/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { UnboundedDirectoryString, _decode_UnboundedDirectoryString, _encode_UnboundedDirectoryString } from "../SelectedAttributeTypes/UnboundedDirectoryString.ta.mjs";
// export { directoryString } from "../SelectedAttributeTypes/directoryString.oa.mjs";
// export { id_at_nsAccountLock } from "../LdapCommon389/id-at-nsAccountLock.va.mjs";


/**
 * @summary nsAccountLock
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * nsAccountLock ATTRIBUTE ::= {
 *   WITH SYNTAX               UnboundedDirectoryString
 *   USAGE                     directoryOperation
 *   LDAP-SYNTAX               directoryString.&id
 *   LDAP-NAME                 {"nsAccountLock"}
 *   LDAP-DESC                 "Operational attribute for Account Inactivation"
 *   ID                        id-at-nsAccountLock }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const nsAccountLock: ATTRIBUTE = undefined;

/* eslint-enable */
