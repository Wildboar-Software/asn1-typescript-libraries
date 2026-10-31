/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { url } from "../SelectedAttributeTypes/url.oa.mjs";
// export { directoryString } from "../SelectedAttributeTypes/directoryString.oa.mjs";
// export { id_at_ldapUrl } from "../SelectedAttributeTypes/id-at-ldapUrl.va.mjs";


/**
 * @summary ldapUrl
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ldapUrl ATTRIBUTE ::= {
 *   SUBTYPE OF               url
 *   LDAP-SYNTAX              directoryString.&id
 *   LDAP-NAME                {"ldapUrl"}
 *   ID                       id-at-ldapUrl }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const ldapUrl: ATTRIBUTE = undefined;

/* eslint-enable */
