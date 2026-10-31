/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { generalizedTime } from "../SelectedAttributeTypes/generalizedTime.oa.mjs";
// export { id_at_passwordAllowChangeTime } from "../LdapCommon389/id-at-passwordAllowChangeTime.va.mjs";


/**
 * @summary passwordAllowChangeTime
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * passwordAllowChangeTime ATTRIBUTE ::= {
 *   WITH SYNTAX               GeneralizedTime
 *   SINGLE VALUE              TRUE
 *   USAGE                     directoryOperation
 *   LDAP-SYNTAX               generalizedTime.&id
 *   LDAP-NAME                 {"passwordAllowChangeTime"}
 *   LDAP-DESC                 "Netscape defined password policy attribute type"
 *   ID                        id-at-passwordAllowChangeTime }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const passwordAllowChangeTime: ATTRIBUTE = undefined;

/* eslint-enable */
