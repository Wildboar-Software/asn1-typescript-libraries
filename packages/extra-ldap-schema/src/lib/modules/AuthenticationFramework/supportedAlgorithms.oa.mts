/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { SupportedAlgorithm, _decode_SupportedAlgorithm, _encode_SupportedAlgorithm } from "../AuthenticationFramework/SupportedAlgorithm.ta.mjs";
// export { x509SupportedAlgorithm } from "../AuthenticationFramework/x509SupportedAlgorithm.oa.mjs";
// export { id_at_supportedAlgorithms } from "../AuthenticationFramework/id-at-supportedAlgorithms.va.mjs";


/**
 * @summary supportedAlgorithms
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * supportedAlgorithms ATTRIBUTE ::= {
 *   WITH SYNTAX              SupportedAlgorithm
 *   EQUALITY MATCHING RULE   algorithmIdentifierMatch
 *   LDAP-SYNTAX              x509SupportedAlgorithm.&id
 *   LDAP-NAME                {"supportedAlgorithms"}
 *   LDAP-DESC                "X.509 support algorithms"
 *   ID                       id-at-supportedAlgorithms }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const supportedAlgorithms: ATTRIBUTE = undefined;

/* eslint-enable */
