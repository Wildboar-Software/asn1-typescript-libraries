/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { integerMatch } from "../SelectedAttributeTypes/integerMatch.oa.mjs";
// export { integer } from "../SelectedAttributeTypes/integer.oa.mjs";
// export { id_at_forbiddenContinentalRace } from "../OrganizationAndGroupSchema/id-at-forbiddenContinentalRace.va.mjs";


/**
 * @summary forbiddenContinentalRace
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * forbiddenContinentalRace ATTRIBUTE ::= {
 *     WITH SYNTAX                    Continent
 *     EQUALITY MATCHING RULE        integerMatch
 *     LDAP-SYNTAX                    integer.&id
 *     LDAP-NAME                    {"forbiddenContinentalRace"}
 *     LDAP-DESC                    "Race, as identified by continent, forbidden from membership"
 *     ID                            id-at-forbiddenContinentalRace
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const forbiddenContinentalRace: ATTRIBUTE = undefined;

/* eslint-enable */
