/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { fax } from "../SelectedAttributeTypes/fax.oa.mjs";
// export { id_at_photo } from "../LdapSchema2ldifCosine/id-at-photo.va.mjs";


/**
 * @summary photo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * photo ATTRIBUTE ::= {
 *   WITH SYNTAX               OCTET STRING (SIZE (1..25000))
 *   LDAP-SYNTAX               fax.&id
 *   LDAP-NAME                 {"photo"}
 *   LDAP-DESC                 "RFC1274: photo (G3 fax)"
 *   ID                        id-at-photo }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const photo: ATTRIBUTE = undefined;

/* eslint-enable */
