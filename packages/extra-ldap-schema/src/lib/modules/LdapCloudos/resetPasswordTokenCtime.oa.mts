/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { numericString } from "../SelectedAttributeTypes/numericString.oa.mjs";
// export { id_at_resetPasswordTokenCtime } from "../LdapCloudos/id-at-resetPasswordTokenCtime.va.mjs";


/**
 * @summary resetPasswordTokenCtime
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * resetPasswordTokenCtime ATTRIBUTE ::= {
 *   WITH SYNTAX               NumericString(SIZE (1..256))
 *   LDAP-SYNTAX               numericString.&id
 *   LDAP-NAME                 {"resetPasswordTokenCtime"}
 *   LDAP-DESC                 "When was the reset token set"
 *   ID                        id-at-resetPasswordTokenCtime }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const resetPasswordTokenCtime: ATTRIBUTE = undefined;

/* eslint-enable */
