/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { SupportedPublicKeyAlgorithms, _decode_SupportedPublicKeyAlgorithms, _encode_SupportedPublicKeyAlgorithms } from "../AuthenticationFramework/SupportedPublicKeyAlgorithms.ta.mjs";
// export { x509SupportedPublicKeyAlgos } from "../AuthenticationFramework/x509SupportedPublicKeyAlgos.oa.mjs";
// export { id_at_supportedPublicKeyAlgorithms } from "../AuthenticationFramework/id-at-supportedPublicKeyAlgorithms.va.mjs";


/**
 * @summary supportedPublicKeyAlgorithms
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * supportedPublicKeyAlgorithms ATTRIBUTE ::= {
 *   WITH SYNTAX            SupportedPublicKeyAlgorithms
 *   EQUALITY MATCHING RULE algorithmIdentifierMatch
 *   LDAP-SYNTAX            x509SupportedPublicKeyAlgos.&id
 *   LDAP-NAME              {"supportedPublicKeyAlgorithms"}
 *   LDAP-DESC              "X.509 supported publiv key algorithms"
 *   ID                     id-at-supportedPublicKeyAlgorithms }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const supportedPublicKeyAlgorithms: ATTRIBUTE = undefined;

/* eslint-enable */
