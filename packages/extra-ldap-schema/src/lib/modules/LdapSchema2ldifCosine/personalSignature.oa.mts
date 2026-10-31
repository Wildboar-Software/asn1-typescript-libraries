/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { fax } from "../SelectedAttributeTypes/fax.oa.mjs";
// export { id_at_personalSignature } from "../LdapSchema2ldifCosine/id-at-personalSignature.va.mjs";


/**
 * @summary personalSignature
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * personalSignature ATTRIBUTE ::= {
 *   WITH SYNTAX               OCTET STRING
 *   LDAP-SYNTAX               fax.&id
 *   LDAP-NAME                 {"personalSignature"}
 *   LDAP-DESC                 "RFC1274: Personal Signature (G3 fax)"
 *   ID                        id-at-personalSignature }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const personalSignature: ATTRIBUTE = undefined;

/* eslint-enable */
