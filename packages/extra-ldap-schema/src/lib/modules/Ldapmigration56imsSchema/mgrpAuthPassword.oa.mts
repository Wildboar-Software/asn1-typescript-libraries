/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { ia5String } from "../SelectedAttributeTypes/ia5String.oa.mjs";
// export { id_at_mgrpAuthPassword } from "../Ldapmigration56imsSchema/id-at-mgrpAuthPassword.va.mjs";


/**
 * @summary mgrpAuthPassword
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * mgrpAuthPassword ATTRIBUTE ::= {
 *   WITH SYNTAX               IA5String
 *   SINGLE VALUE              TRUE
 *   LDAP-SYNTAX               ia5String.&id
 *   LDAP-NAME                 {"mgrpAuthPassword"}
 *   LDAP-DESC                 "Sun ONE Messaging Server defined attribute"
 *   ID                        id-at-mgrpAuthPassword }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const mgrpAuthPassword: ATTRIBUTE = undefined;

/* eslint-enable */
