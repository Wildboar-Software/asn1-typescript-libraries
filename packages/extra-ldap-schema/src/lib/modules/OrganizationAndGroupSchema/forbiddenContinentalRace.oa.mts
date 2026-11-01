/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
import { integerMatch } from "../SelectedAttributeTypes/integerMatch.oa.mjs";
import { integer } from "../SelectedAttributeTypes/integer.oa.mjs";
import { id_at_forbiddenContinentalRace } from "../OrganizationAndGroupSchema/id-at-forbiddenContinentalRace.va.mjs";

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
 * @type {ATTRIBUTE<Continent>}
 * @implements {ATTRIBUTE<Continent>}
 */
export
const forbiddenContinentalRace: ATTRIBUTE<Continent> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_Continent,
    },
    encoderFor: {
        "&Type": _encode_Continent,
    },
    "&equality-match": integerMatch /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": integer["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "forbiddenContinentalRace" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Race, as identified by continent, forbidden from membership" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_forbiddenContinentalRace /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
