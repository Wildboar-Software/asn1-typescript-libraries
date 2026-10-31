/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { integerMatch } from "../SelectedAttributeTypes/integerMatch.oa.mjs";
// export { integer } from "../SelectedAttributeTypes/integer.oa.mjs";
// export { id_at_zimbraMobilePolicyAllowSMIMEEncryptionAlgorithmNegotiation } from "../LdapZimbra/id-at-zimbraMobilePolicyAllowSMIMEEncryptionAlgorithmNegotiation.va.mjs";


/**
 * @summary zimbraMobilePolicyAllowSMIMEEncryptionAlgorithmNegotiation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * zimbraMobilePolicyAllowSMIMEEncryptionAlgorithmNegotiation ATTRIBUTE ::= {
 *   WITH SYNTAX               INTEGER
 *   EQUALITY MATCHING RULE    integerMatch
 *   SINGLE VALUE              TRUE
 *   LDAP-SYNTAX               integer.&id
 *   LDAP-NAME                 {"zimbraMobilePolicyAllowSMIMEEncryptionAlgorithmNegotiation"}
 *   LDAP-DESC                 "whether the messaging application on the device can negotiate the encryption algorithm if a recipient's certificate doesn't support the specified encryption algorithm; 0 - BlockNegotiation 1 - OnlyStrongAlgorithmNegotiation 2 - AllowAnyAlgorithmNegotiation ignored if zimbraFeatureMobilePolicyEnabled=FALSE or zimbraMobilePolicyAllowSMIMEEncryptionAlgorithmNegotiation value is set to -1"
 *   ID                        id-at-zimbraMobilePolicyAllowSMIMEEncryptionAlgorithmNegotiation }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const zimbraMobilePolicyAllowSMIMEEncryptionAlgorithmNegotiation: ATTRIBUTE = undefined;

/* eslint-enable */
