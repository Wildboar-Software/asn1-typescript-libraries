/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { DNSResolverRotation, _enum_for_DNSResolverRotation, DNSResolverRotation_inOrder /* IMPORTED_LONG_ENUMERATION_ITEM */, inOrder /* IMPORTED_SHORT_ENUMERATION_ITEM */, DNSResolverRotation_roundRobin /* IMPORTED_LONG_ENUMERATION_ITEM */, roundRobin /* IMPORTED_SHORT_ENUMERATION_ITEM */, DNSResolverRotation_random /* IMPORTED_LONG_ENUMERATION_ITEM */, random /* IMPORTED_SHORT_ENUMERATION_ITEM */, DNSResolverRotation_meritocracy /* IMPORTED_LONG_ENUMERATION_ITEM */, meritocracy /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_DNSResolverRotation, _encode_DNSResolverRotation } from "../DNSFramework/DNSResolverRotation.ta.mjs";
// export { integer } from "../SelectedAttributeTypes/integer.oa.mjs";
// export { id_at_dnsResolverRotation } from "../DNSFramework/id-at-dnsResolverRotation.va.mjs";


/**
 * @summary dnsResolverRotation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * dnsResolverRotation ATTRIBUTE ::= {
 *     WITH SYNTAX                DNSResolverRotation
 *     EQUALITY MATCHING RULE  integerMatch
 *     LDAP-SYNTAX                integer.&id
 *     LDAP-NAME                {"dnsResolverRotation"}
 *     LDAP-DESC                "DNS Resolver Rotation Algorithm"
 *     ID                        id-at-dnsResolverRotation
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const dnsResolverRotation: ATTRIBUTE = undefined;

/* eslint-enable */
