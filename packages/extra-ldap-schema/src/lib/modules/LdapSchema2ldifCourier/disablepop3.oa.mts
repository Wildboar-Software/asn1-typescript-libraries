/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { caseExactIA5Match } from "../SelectedAttributeTypes/caseExactIA5Match.oa.mjs";
// export { ia5String } from "../SelectedAttributeTypes/ia5String.oa.mjs";
// export { id_at_disablepop3 } from "../LdapSchema2ldifCourier/id-at-disablepop3.va.mjs";


/**
 * @summary disablepop3
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * disablepop3 ATTRIBUTE ::= {
 *   WITH SYNTAX               IA5String
 *   EQUALITY MATCHING RULE    caseExactIA5Match
 *   LDAP-SYNTAX               ia5String.&id
 *   LDAP-NAME                 {"disablepop3"}
 *   LDAP-DESC                 "Set this attribute to 1 to disable POP3 access"
 *   ID                        id-at-disablepop3 }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const disablepop3: ATTRIBUTE = undefined;

/* eslint-enable */
