/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
import { integerMatch } from "../SelectedAttributeTypes/integerMatch.oa.mjs";
import { integer } from "../SelectedAttributeTypes/integer.oa.mjs";
import { id_at_zimbraMobilePolicyMaxEmailAgeFilter } from "../LdapZimbra/id-at-zimbraMobilePolicyMaxEmailAgeFilter.va.mjs";


/**
 * @summary zimbraMobilePolicyMaxEmailAgeFilter
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * zimbraMobilePolicyMaxEmailAgeFilter ATTRIBUTE ::= {
 *   WITH SYNTAX               INTEGER
 *   EQUALITY MATCHING RULE    integerMatch
 *   SINGLE VALUE              TRUE
 *   LDAP-SYNTAX               integer.&id
 *   LDAP-NAME                 {"zimbraMobilePolicyMaxEmailAgeFilter"}
 *   LDAP-DESC                 "the maximum number of days of e-mail items to synchronize to the device; 0 - PAST ALL 1 - One Day 2 - Three Days 3 - One Week 4 - Two Weeks 5 - One Month ignored if zimbraFeatureMobilePolicyEnabled=FALSE or zimbraMobilePolicyMaxEmailAgeFilter value is set to -1"
 *   ID                        id-at-zimbraMobilePolicyMaxEmailAgeFilter }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<INTEGER>}
 * @implements {ATTRIBUTE<INTEGER>}
 */
export
const zimbraMobilePolicyMaxEmailAgeFilter: ATTRIBUTE<INTEGER> = {
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
    "&ldapName": [ "zimbraMobilePolicyMaxEmailAgeFilter" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "the maximum number of days of e-mail items to synchronize to the device; 0 - PAST ALL 1 - One Day 2 - Three Days 3 - One Week 4 - Two Weeks 5 - One Month ignored if zimbraFeatureMobilePolicyEnabled=FALSE or zimbraMobilePolicyMaxEmailAgeFilter value is set to -1" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_zimbraMobilePolicyMaxEmailAgeFilter /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

