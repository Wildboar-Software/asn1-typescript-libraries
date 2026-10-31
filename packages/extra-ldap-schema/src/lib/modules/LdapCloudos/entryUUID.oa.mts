/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { ia5String } from "../SelectedAttributeTypes/ia5String.oa.mjs";
// export { id_at_entryUUID } from "../LdapCloudos/id-at-entryUUID.va.mjs";


/**
 * @summary entryUUID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * entryUUID ATTRIBUTE ::= {
 *   WITH SYNTAX               IA5String(SIZE (1..40))
 *   LDAP-SYNTAX               ia5String.&id
 *   LDAP-NAME                 {"entryUUID"}
 *   LDAP-DESC                 "The UUID of the object in the CloudOs system."
 *   ID                        id-at-entryUUID }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const entryUUID: ATTRIBUTE = undefined;

/* eslint-enable */
