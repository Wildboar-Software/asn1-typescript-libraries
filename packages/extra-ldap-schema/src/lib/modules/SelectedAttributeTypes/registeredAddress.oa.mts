/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { postalAddress } from "../SelectedAttributeTypes/postalAddress.oa.mjs";
// export { PostalAddress, _decode_PostalAddress, _encode_PostalAddress } from "../SelectedAttributeTypes/PostalAddress.ta.mjs";
// export { postalAddr } from "../SelectedAttributeTypes/postalAddr.oa.mjs";
// export { id_at_registeredAddress } from "../SelectedAttributeTypes/id-at-registeredAddress.va.mjs";


/**
 * @summary registeredAddress
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * registeredAddress ATTRIBUTE ::= {
 *   SUBTYPE OF               postalAddress
 *   WITH SYNTAX              PostalAddress
 *   LDAP-SYNTAX              postalAddr.&id
 *   LDAP-NAME                {"registeredAddress"}
 *   ID                       id-at-registeredAddress }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const registeredAddress: ATTRIBUTE = undefined;

/* eslint-enable */
