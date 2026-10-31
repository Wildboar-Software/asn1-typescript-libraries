/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { BootParameterSyntax, _decode_BootParameterSyntax, _encode_BootParameterSyntax } from "../NIS/BootParameterSyntax.ta.mjs";
// export { bootParameterSyntax } from "../NIS/bootParameterSyntax.oa.mjs";
// export { id_nis_at } from "../NIS/id-nis-at.va.mjs";


/**
 * @summary bootParameter
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * bootParameter ATTRIBUTE ::= {
 *     WITH SYNTAX                 BootParameterSyntax
 *     LDAP-SYNTAX                 bootParameterSyntax.&id
 *     LDAP-NAME                     {"bootParameter"}
 *     LDAP-DESC                   "rpc.bootparamd parameter"
 *     ID { id-nis-at 23 }
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const bootParameter: ATTRIBUTE = undefined;

/* eslint-enable */
