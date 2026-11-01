/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
import { integerMatch } from "../SelectedAttributeTypes/integerMatch.oa.mjs";
import { integer } from "../SelectedAttributeTypes/integer.oa.mjs";


/**
 * @summary sambaLockoutDuration
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * sambaLockoutDuration ATTRIBUTE ::= {
 *     WITH SYNTAX                 INTEGER
 *     EQUALITY MATCHING RULE      integerMatch
 *     SINGLE VALUE                TRUE
 *     USAGE                       userApplications
 *     LDAP-SYNTAX                 integer.&id
 *     LDAP-NAME                   {"sambaLockoutDuration"}
 *     LDAP-DESC                   "Lockout duration in minutes (default: 30, -1 => forever)"
 *     ID                          { 1 3 6 1 4 1 7165 2 1 63 }
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<INTEGER>}
 * @implements {ATTRIBUTE<INTEGER>}
 */
export
const sambaLockoutDuration: ATTRIBUTE<INTEGER> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeInteger,
    },
    encoderFor: {
        "&Type": $._encodeInteger,
    },
    "&equality-match": integerMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": integer["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "sambaLockoutDuration" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Lockout duration in minutes (default: 30, -1 => forever)" /* OBJECT_FIELD_SETTING */,
    "&id": _OID.fromParts([1, 3, 6, 1, 4, 1, 7165, 2, 1, 63,]) /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

