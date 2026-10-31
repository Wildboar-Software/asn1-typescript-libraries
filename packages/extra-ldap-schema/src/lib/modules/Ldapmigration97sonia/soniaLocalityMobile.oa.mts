/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { TelephoneNumber, _decode_TelephoneNumber, _encode_TelephoneNumber } from "../SelectedAttributeTypes/TelephoneNumber.ta.mjs";
// export { telephoneNr } from "../SelectedAttributeTypes/telephoneNr.oa.mjs";
// export { id_at_soniaLocalityMobile } from "../Ldapmigration97sonia/id-at-soniaLocalityMobile.va.mjs";


/**
 * @summary soniaLocalityMobile
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * soniaLocalityMobile ATTRIBUTE ::= {
 *   WITH SYNTAX               TelephoneNumber
 *   SINGLE VALUE              TRUE
 *   LDAP-SYNTAX               telephoneNr.&id
 *   LDAP-NAME                 {"soniaLocalityMobile"}
 *   LDAP-DESC                 "mobile phone number"
 *   ID                        id-at-soniaLocalityMobile }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const soniaLocalityMobile: ATTRIBUTE = undefined;

/* eslint-enable */
