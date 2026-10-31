/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { base4kidsSchoolDistrict } from "../LdapBase4kids2/base4kidsSchoolDistrict.oa.mjs";
// export { id_at_base4kidsSchoolLocation } from "../LdapBase4kids2/id-at-base4kidsSchoolLocation.va.mjs";


/**
 * @summary base4kidsSchoolLocation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * base4kidsSchoolLocation ATTRIBUTE ::= {
 *   SUBTYPE OF                base4kidsSchoolDistrict
 *   LDAP-NAME                 {"base4kidsSchoolLocation"}
 *   LDAP-DESC                 "The name of the school location (Schulstandort)"
 *   ID                        id-at-base4kidsSchoolLocation }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const base4kidsSchoolLocation: ATTRIBUTE = undefined;

/* eslint-enable */
