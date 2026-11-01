/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
import { integerMatch } from "../SelectedAttributeTypes/integerMatch.oa.mjs";
import { integer } from "../SelectedAttributeTypes/integer.oa.mjs";
import { id_at_requiredContinentalRace } from "../OrganizationAndGroupSchema/id-at-requiredContinentalRace.va.mjs";

/**
 * @summary requiredContinentalRace
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * requiredContinentalRace ATTRIBUTE ::= {
 *     WITH SYNTAX                    Continent
 *     EQUALITY MATCHING RULE      integerMatch
 *     LDAP-SYNTAX                    integer.&id
 *     LDAP-NAME                    {"requiredContinentalRace"}
 *     LDAP-DESC                    "Race, as identified by continent, required for membership"
 *     ID                            id-at-requiredContinentalRace
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<Continent>}
 * @implements {ATTRIBUTE<Continent>}
 */
export
const requiredContinentalRace: ATTRIBUTE<Continent> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_Continent,
    },
    encoderFor: {
        "&Type": _encode_Continent,
    },
    "&equality-match": integerMatch /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": integer["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "requiredContinentalRace" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Race, as identified by continent, required for membership" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_requiredContinentalRace /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
