/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications } from "../InformationFramework/AttributeUsage.ta.mjs";
import { id_at_forbiddenCountryRace } from "../OrganizationAndGroupSchema/id-at-forbiddenCountryRace.va.mjs";
import {
    type CountryName,
    _decode_CountryName,
    _encode_CountryName,
} from "../SelectedAttributeTypes/CountryName.ta.mjs";
import { caseIgnoreMatch } from "../SelectedAttributeTypes/caseIgnoreMatch.oa.mjs";
import { countryString } from "../SelectedAttributeTypes/countryString.oa.mjs";

/**
 * @summary forbiddenCountryRace
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * forbiddenCountryRace ATTRIBUTE ::= {
 *     WITH SYNTAX                    CountryName
 *     EQUALITY MATCHING RULE        caseIgnoreMatch
 *     LDAP-SYNTAX                 countryString.&id
 *     LDAP-NAME                    {"forbiddenCountryRace"}
 *     LDAP-DESC                    "Race, as identified by country, forbidden from membership"
 *     ID                            id-at-forbiddenCountryRace
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<CountryName>}
 * @implements {ATTRIBUTE<CountryName>}
 */
export
const forbiddenCountryRace: ATTRIBUTE<CountryName> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_CountryName,
    },
    encoderFor: {
        "&Type": _encode_CountryName,
    },
    "&equality-match": caseIgnoreMatch /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": countryString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["forbiddenCountryRace"],
    "&ldapDesc": "Race, as identified by country, forbidden from membership" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_forbiddenCountryRace /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
