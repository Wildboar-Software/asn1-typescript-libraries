/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { integerMatch } from "../SelectedAttributeTypes/integerMatch.oa.mjs";
// export { integer } from "../SelectedAttributeTypes/integer.oa.mjs";
// export { id_at_forbiddenRegionalRace } from "../OrganizationAndGroupSchema/id-at-forbiddenRegionalRace.va.mjs";


/**
 * @summary forbiddenRegionalRace
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * forbiddenRegionalRace ATTRIBUTE ::= {
 *     WITH SYNTAX                    UnitedNationsContinentalSubregion
 *     EQUALITY MATCHING RULE        integerMatch
 *     LDAP-SYNTAX                    integer.&id
 *     LDAP-NAME                    {"forbiddenRegionalRace"}
 *     LDAP-DESC                    "Race, as identified by UN continental subregion, forbidden from membership"
 *     ID                            id-at-forbiddenRegionalRace
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const forbiddenRegionalRace: ATTRIBUTE = undefined;

/* eslint-enable */
