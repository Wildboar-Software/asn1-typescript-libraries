/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { name } from "../SelectedAttributeTypes/name.oa.mjs";
// export { CountryCode3c, _decode_CountryCode3c, _encode_CountryCode3c } from "../SelectedAttributeTypes/CountryCode3c.ta.mjs";
// export { countryString3c } from "../SelectedAttributeTypes/countryString3c.oa.mjs";
// export { id_at_countryCode3c } from "../SelectedAttributeTypes/id-at-countryCode3c.va.mjs";


/**
 * @summary countryCode3c
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * countryCode3c ATTRIBUTE ::= {
 *   SUBTYPE OF               name
 *   WITH SYNTAX              CountryCode3c
 *   SINGLE VALUE             TRUE
 *   LDAP-SYNTAX              countryString3c.&id
 *   LDAP-NAME                {"c3"}
 *   ID                       id-at-countryCode3c }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const countryCode3c: ATTRIBUTE = undefined;

/* eslint-enable */
