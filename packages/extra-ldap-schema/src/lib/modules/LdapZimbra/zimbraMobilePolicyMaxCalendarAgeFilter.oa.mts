/* eslint-disable */
import { type INTEGER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications } from "../InformationFramework/AttributeUsage.ta.mjs";
import { id_at_zimbraMobilePolicyMaxCalendarAgeFilter } from "../LdapZimbra/id-at-zimbraMobilePolicyMaxCalendarAgeFilter.va.mjs";
import { integer } from "../SelectedAttributeTypes/integer.oa.mjs";
import { integerMatch } from "../SelectedAttributeTypes/integerMatch.oa.mjs";

/**
 * @summary zimbraMobilePolicyMaxCalendarAgeFilter
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * zimbraMobilePolicyMaxCalendarAgeFilter ATTRIBUTE ::= {
 *   WITH SYNTAX               INTEGER
 *   EQUALITY MATCHING RULE    integerMatch
 *   SINGLE VALUE              TRUE
 *   LDAP-SYNTAX               integer.&id
 *   LDAP-NAME                 {"zimbraMobilePolicyMaxCalendarAgeFilter"}
 *   LDAP-DESC                 "the maximum range of calendar days that can be synchronized to the device; 0 - PAST ALL 4 - Two Weeks 5 - One Month 6 - Three Months 7 - Six Months ignored if zimbraFeatureMobilePolicyEnabled=FALSE or zimbraMobilePolicyMaxCalendarAgeFilter value is set to -1, 1, 2 or, 3"
 *   ID                        id-at-zimbraMobilePolicyMaxCalendarAgeFilter }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<INTEGER>}
 * @implements {ATTRIBUTE<INTEGER>}
 */
export
const zimbraMobilePolicyMaxCalendarAgeFilter: ATTRIBUTE<INTEGER> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeInteger,
    },
    encoderFor: {
        "&Type": $._encodeInteger,
    },
    "&equality-match": integerMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": integer["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["zimbraMobilePolicyMaxCalendarAgeFilter"],
    "&ldapDesc": "the maximum range of calendar days that can be synchronized to the device; 0 - PAST ALL 4 - Two Weeks 5 - One Month 6 - Three Months 7 - Six Months ignored if zimbraFeatureMobilePolicyEnabled=FALSE or zimbraMobilePolicyMaxCalendarAgeFilter value is set to -1, 1, 2 or, 3" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_zimbraMobilePolicyMaxCalendarAgeFilter /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
