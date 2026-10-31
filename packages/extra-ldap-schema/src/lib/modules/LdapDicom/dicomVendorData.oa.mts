/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { id_at_dicomVendorData } from "../LdapDicom/id-at-dicomVendorData.va.mjs";


/**
 * @summary dicomVendorData
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * dicomVendorData ATTRIBUTE ::= {
 *   WITH SYNTAX               OCTET STRING
 *   LDAP-SYNTAX               { 1 3 6 1 4 1 1466 115 121 1 5 }
 *   LDAP-NAME                 {"dicomVendorData"}
 *   LDAP-DESC                 "Arbitrary vendor-specific configuration information (binary data)"
 *   ID                        id-at-dicomVendorData }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const dicomVendorData: ATTRIBUTE = undefined;

/* eslint-enable */
