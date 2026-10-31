/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { NISNetgroupTripleSyntax, _decode_NISNetgroupTripleSyntax, _encode_NISNetgroupTripleSyntax } from "../NIS/NISNetgroupTripleSyntax.ta.mjs";
// export { nisNetgroupTripleSyntax } from "../NIS/nisNetgroupTripleSyntax.oa.mjs";
// export { id_nis_at } from "../NIS/id-nis-at.va.mjs";


/**
 * @summary nisNetgroupTriple
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * nisNetgroupTriple ATTRIBUTE ::= {
 *     WITH SYNTAX                 NISNetgroupTripleSyntax
 *     LDAP-SYNTAX                 nisNetgroupTripleSyntax.&id
 *     LDAP-NAME                     {"nisNetgroupTriple"}
 *     LDAP-DESC                   "Netgroup triple"
 *     ID { id-nis-at 14 }
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const nisNetgroupTriple: ATTRIBUTE = undefined;

/* eslint-enable */
