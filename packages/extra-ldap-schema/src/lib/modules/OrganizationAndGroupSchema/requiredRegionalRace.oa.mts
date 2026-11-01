/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
import { integerMatch } from "../SelectedAttributeTypes/integerMatch.oa.mjs";
// export { integerMatch } from "../SelectedAttributeTypes/integerMatch.oa.mjs";
import { integer } from "../SelectedAttributeTypes/integer.oa.mjs";
// export { integer } from "../SelectedAttributeTypes/integer.oa.mjs";
import { id_at_requiredRegionalRace } from "../OrganizationAndGroupSchema/id-at-requiredRegionalRace.va.mjs";
// export { id_at_requiredRegionalRace } from "../OrganizationAndGroupSchema/id-at-requiredRegionalRace.va.mjs";


/**
 * @summary requiredRegionalRace
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * requiredRegionalRace ATTRIBUTE ::= {
 *     WITH SYNTAX                    UnitedNationsContinentalSubregion
 *     EQUALITY MATCHING RULE        integerMatch
 *     LDAP-SYNTAX                    integer.&id
 *     LDAP-NAME                    {"requiredRegionalRace"}
 *     LDAP-DESC                    "Race, as identified by UN continental subregion, required for membership"
 *     ID                            id-at-requiredRegionalRace
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<UnitedNationsContinentalSubregion>}
 * @implements {ATTRIBUTE<UnitedNationsContinentalSubregion>}
 */
export
const requiredRegionalRace: ATTRIBUTE<UnitedNationsContinentalSubregion> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_UnitedNationsContinentalSubregion,
    },
    encoderFor: {
        "&Type": _encode_UnitedNationsContinentalSubregion,
    },
    "&equality-match": integerMatch /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": integer["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "requiredRegionalRace" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Race, as identified by UN continental subregion, required for membership" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_requiredRegionalRace /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
