/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { name } from "../SelectedAttributeTypes/name.oa.mjs";
// export { CountryCode3n, _decode_CountryCode3n, _encode_CountryCode3n } from "../SelectedAttributeTypes/CountryCode3n.ta.mjs";
// export { countryString3n } from "../SelectedAttributeTypes/countryString3n.oa.mjs";
// export { id_at_countryCode3n } from "../SelectedAttributeTypes/id-at-countryCode3n.va.mjs";


/**
 * @summary countryCode3n
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * countryCode3n ATTRIBUTE ::= {
 *   SUBTYPE OF               name
 *   WITH SYNTAX              CountryCode3n
 *   SINGLE VALUE             TRUE
 *   LDAP-SYNTAX              countryString3n.&id
 *   LDAP-NAME                {"n3"}
 *   ID                       id-at-countryCode3n }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const countryCode3n: ATTRIBUTE = undefined;

/* eslint-enable */
