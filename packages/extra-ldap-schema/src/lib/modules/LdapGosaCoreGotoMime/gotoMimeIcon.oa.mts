/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { jpeg } from "../SelectedAttributeTypes/jpeg.oa.mjs";
// export { id_at_gotoMimeIcon } from "../LdapGosaCoreGotoMime/id-at-gotoMimeIcon.va.mjs";


/**
 * @summary gotoMimeIcon
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gotoMimeIcon ATTRIBUTE ::= {
 *   WITH SYNTAX               OCTET STRING
 *   SINGLE VALUE              TRUE
 *   LDAP-SYNTAX               jpeg.&id
 *   LDAP-NAME                 {"gotoMimeIcon"}
 *   LDAP-DESC                 "Specify the mime icon"
 *   ID                        id-at-gotoMimeIcon }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const gotoMimeIcon: ATTRIBUTE = undefined;

/* eslint-enable */
