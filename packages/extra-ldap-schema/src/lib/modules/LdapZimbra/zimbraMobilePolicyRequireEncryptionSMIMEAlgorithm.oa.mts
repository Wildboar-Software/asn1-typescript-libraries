/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { integerMatch } from "../SelectedAttributeTypes/integerMatch.oa.mjs";
// export { integer } from "../SelectedAttributeTypes/integer.oa.mjs";
// export { id_at_zimbraMobilePolicyRequireEncryptionSMIMEAlgorithm } from "../LdapZimbra/id-at-zimbraMobilePolicyRequireEncryptionSMIMEAlgorithm.va.mjs";


/**
 * @summary zimbraMobilePolicyRequireEncryptionSMIMEAlgorithm
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * zimbraMobilePolicyRequireEncryptionSMIMEAlgorithm ATTRIBUTE ::= {
 *   WITH SYNTAX               INTEGER
 *   EQUALITY MATCHING RULE    integerMatch
 *   SINGLE VALUE              TRUE
 *   LDAP-SYNTAX               integer.&id
 *   LDAP-NAME                 {"zimbraMobilePolicyRequireEncryptionSMIMEAlgorithm"}
 *   LDAP-DESC                 "what required algorithm must be used when encrypting a message; ignored if zimbraFeatureMobilePolicyEnabled=FALSE or zimbraMobilePolicyRequireEncryptionSMIMEAlgorithm value is set to -1"
 *   ID                        id-at-zimbraMobilePolicyRequireEncryptionSMIMEAlgorithm }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const zimbraMobilePolicyRequireEncryptionSMIMEAlgorithm: ATTRIBUTE = undefined;

/* eslint-enable */
