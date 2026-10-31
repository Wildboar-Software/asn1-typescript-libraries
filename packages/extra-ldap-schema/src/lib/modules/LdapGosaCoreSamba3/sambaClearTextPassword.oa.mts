/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { octetStringMatch } from "../SelectedAttributeTypes/octetStringMatch.oa.mjs";
// export { octetString } from "../SelectedAttributeTypes/octetString.oa.mjs";
// export { id_at_sambaClearTextPassword } from "../LdapGosaCoreSamba3/id-at-sambaClearTextPassword.va.mjs";


/**
 * @summary sambaClearTextPassword
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * sambaClearTextPassword ATTRIBUTE ::= {
 *   WITH SYNTAX               OCTET STRING
 *   EQUALITY MATCHING RULE    octetStringMatch
 *   LDAP-SYNTAX               octetString.&id
 *   LDAP-NAME                 {"sambaClearTextPassword"}
 *   LDAP-DESC                 "Clear text password (used for trusted domain passwords)"
 *   ID                        id-at-sambaClearTextPassword }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const sambaClearTextPassword: ATTRIBUTE = undefined;

/* eslint-enable */
