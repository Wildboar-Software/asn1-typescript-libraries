/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { name } from "../SelectedAttributeTypes/name.oa.mjs";
// export { CountryName, _decode_CountryName, _encode_CountryName } from "../SelectedAttributeTypes/CountryName.ta.mjs";
// export { countryString } from "../SelectedAttributeTypes/countryString.oa.mjs";
// export { id_at_countryName } from "../SelectedAttributeTypes/id-at-countryName.va.mjs";


/**
 * @summary countryName
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * countryName ATTRIBUTE ::= {
 *   SUBTYPE OF               name
 *   WITH SYNTAX              CountryName
 *   SINGLE VALUE             TRUE
 *   LDAP-SYNTAX              countryString.&id
 *   LDAP-NAME                {"c"}
 *   ID                       id-at-countryName }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const countryName: ATTRIBUTE = undefined;

/* eslint-enable */
