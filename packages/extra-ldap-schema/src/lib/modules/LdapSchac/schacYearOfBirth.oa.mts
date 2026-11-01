/* eslint-disable */
import {
    type NumericString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
import { numericStringMatch } from "../SelectedAttributeTypes/numericStringMatch.oa.mjs";
import { numericStringOrderingMatch } from "../SelectedAttributeTypes/numericStringOrderingMatch.oa.mjs";
import { numericStringSubstringsMatch } from "../SelectedAttributeTypes/numericStringSubstringsMatch.oa.mjs";
import { numericString } from "../SelectedAttributeTypes/numericString.oa.mjs";
import { id_at_schacYearOfBirth } from "../LdapSchac/id-at-schacYearOfBirth.va.mjs";


/**
 * @summary schacYearOfBirth
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * schacYearOfBirth ATTRIBUTE ::= {
 *   WITH SYNTAX               NumericString
 *   EQUALITY MATCHING RULE    numericStringMatch
 *   ORDERING MATCHING RULE    numericStringOrderingMatch
 *   SUBSTRINGS MATCHING RULE  numericStringSubstringsMatch
 *   SINGLE VALUE              TRUE
 *   LDAP-SYNTAX               numericString.&id
 *   LDAP-NAME                 {"schacYearOfBirth"}
 *   LDAP-DESC                 "Year of birth (format YYYY, only numeric chars)"
 *   ID                        id-at-schacYearOfBirth }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<NumericString>}
 * @implements {ATTRIBUTE<NumericString>}
 */
export
const schacYearOfBirth: ATTRIBUTE<NumericString> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeNumericString,
    },
    encoderFor: {
        "&Type": $._encodeNumericString,
    },
    "&equality-match": numericStringMatch /* OBJECT_FIELD_SETTING */,
    "&ordering-match": numericStringOrderingMatch /* OBJECT_FIELD_SETTING */,
    "&substrings-match": numericStringSubstringsMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": numericString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "schacYearOfBirth" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Year of birth (format YYYY, only numeric chars)" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_schacYearOfBirth /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

