/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { DomainName, _decode_DomainName, _encode_DomainName } from "../SelectedAttributeTypes/DomainName.ta.mjs";
// export { dnsNameMatch } from "../SelectedAttributeTypes/dnsNameMatch.oa.mjs";
// export { dnsString } from "../SelectedAttributeTypes/dnsString.oa.mjs";
// export { id_at_dnsName } from "../SelectedAttributeTypes/id-at-dnsName.va.mjs";


/**
 * @summary dnsName
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * dnsName ATTRIBUTE ::= {
 *   WITH SYNTAX             DomainName
 *   EQUALITY MATCHING RULE  dnsNameMatch
 *   LDAP-SYNTAX             dnsString.&id
 *   LDAP-NAME               {"DNS name"}
 *   ID                      id-at-dnsName }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const dnsName: ATTRIBUTE = undefined;

/* eslint-enable */
