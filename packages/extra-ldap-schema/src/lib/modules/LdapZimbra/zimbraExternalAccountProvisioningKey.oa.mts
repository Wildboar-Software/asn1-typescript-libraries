/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { octetStringMatch } from "../SelectedAttributeTypes/octetStringMatch.oa.mjs";
// export { octetString } from "../SelectedAttributeTypes/octetString.oa.mjs";
// export { id_at_zimbraExternalAccountProvisioningKey } from "../LdapZimbra/id-at-zimbraExternalAccountProvisioningKey.va.mjs";


/**
 * @summary zimbraExternalAccountProvisioningKey
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * zimbraExternalAccountProvisioningKey ATTRIBUTE ::= {
 *   WITH SYNTAX               OCTET STRING (SIZE (1..128))
 *   EQUALITY MATCHING RULE    octetStringMatch
 *   SINGLE VALUE              TRUE
 *   LDAP-SYNTAX               octetString.&id
 *   LDAP-NAME                 {"zimbraExternalAccountProvisioningKey"}
 *   LDAP-DESC                 "Auth token secret key used for encrypting data/auth token in share URL when created for external users."
 *   ID                        id-at-zimbraExternalAccountProvisioningKey }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const zimbraExternalAccountProvisioningKey: ATTRIBUTE = undefined;

/* eslint-enable */
