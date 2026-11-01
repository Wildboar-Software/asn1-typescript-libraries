/* eslint-disable */
import {
    type IA5String,
    type ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
import { caseExactIA5Match } from "../SelectedAttributeTypes/caseExactIA5Match.oa.mjs";
import { caseExactSubstringsMatch } from "../SelectedAttributeTypes/caseExactSubstringsMatch.oa.mjs";
import { ia5String } from "../SelectedAttributeTypes/ia5String.oa.mjs";
import { id_at_amavisSaUserName } from "../LdapAmavisd/id-at-amavisSaUserName.va.mjs";


/**
 * @summary amavisSaUserName
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * amavisSaUserName ATTRIBUTE ::= {
 *   WITH SYNTAX               IA5String(SIZE (1..256))
 *   EQUALITY MATCHING RULE    caseExactIA5Match
 *   SUBSTRINGS MATCHING RULE  caseExactSubstringsMatch
 *   SINGLE VALUE              TRUE
 *   LDAP-SYNTAX               ia5String.&id
 *   LDAP-NAME                 {"amavisSaUserName"}
 *   LDAP-DESC                 "SpamAssassin username (for Bayes and AWL lookups)"
 *   ID                        id-at-amavisSaUserName }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<IA5String>}
 * @implements {ATTRIBUTE<IA5String>}
 */
const _decode_amavisSaUserName_Type = (el: _Element): IA5String => {
    const value = $._decodeIA5String(el);
    if (value.length < 1 || value.length > 256) {
        throw new ASN1SizeError("amavisSaUserName violates SIZE constraint");
    }
    return value;
};

export
const amavisSaUserName: ATTRIBUTE<IA5String> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_amavisSaUserName_Type,
    },
    encoderFor: {
        "&Type": $._encodeIA5String,
    },
    "&equality-match": caseExactIA5Match /* OBJECT_FIELD_SETTING */,
    "&substrings-match": caseExactSubstringsMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": ia5String["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "amavisSaUserName" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "SpamAssassin username (for Bayes and AWL lookups)" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_amavisSaUserName /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

