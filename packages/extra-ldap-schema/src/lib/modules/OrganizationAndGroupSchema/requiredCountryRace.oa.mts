/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { CountryName, _decode_CountryName, _encode_CountryName } from "../SelectedAttributeTypes/CountryName.ta.mjs";
// export { caseIgnoreMatch } from "../SelectedAttributeTypes/caseIgnoreMatch.oa.mjs";
// export { countryString } from "../SelectedAttributeTypes/countryString.oa.mjs";
// export { id_at_requiredCountryRace } from "../OrganizationAndGroupSchema/id-at-requiredCountryRace.va.mjs";


/**
 * @summary requiredCountryRace
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * requiredCountryRace ATTRIBUTE ::= {
 *     WITH SYNTAX                    CountryName
 *     EQUALITY MATCHING RULE        caseIgnoreMatch
 *     LDAP-SYNTAX                 countryString.&id
 *     LDAP-NAME                    {"requiredCountryRace"}
 *     LDAP-DESC                    "Race, as identified by country, required for membership"
 *     ID                            id-at-requiredCountryRace
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const requiredCountryRace: ATTRIBUTE = undefined;

/* eslint-enable */
