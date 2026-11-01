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
import { caseExactIA5SubstringsMatch } from "../OpenLDAP/caseExactIA5SubstringsMatch.oa.mjs";
import { ia5String } from "../SelectedAttributeTypes/ia5String.oa.mjs";
import { id_at_di } from "../LdapValias/id-at-di.va.mjs";


/**
 * @summary di
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * di ATTRIBUTE ::= {
 *   WITH SYNTAX               IA5String(SIZE (1..512))
 *   EQUALITY MATCHING RULE    caseExactIA5Match
 *   SUBSTRINGS MATCHING RULE  caseExactIA5SubstringsMatch
 *   LDAP-SYNTAX               ia5String.&id
 *   LDAP-NAME                 {"di", "deliveryInstruction"}
 *   LDAP-DESC                 "delivery instruction"
 *   ID                        id-at-di }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<IA5String>}
 * @implements {ATTRIBUTE<IA5String>}
 */
const _decode_di_Type = (el: _Element): IA5String => {
    const value = $._decodeIA5String(el);
    if (value.length < 1 || value.length > 512) {
        throw new ASN1SizeError("di violates SIZE constraint");
    }
    return value;
};

export
const di: ATTRIBUTE<IA5String> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_di_Type,
    },
    encoderFor: {
        "&Type": $._encodeIA5String,
    },
    "&equality-match": caseExactIA5Match /* OBJECT_FIELD_SETTING */,
    "&substrings-match": caseExactIA5SubstringsMatch /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": ia5String["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "di", "deliveryInstruction" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "delivery instruction" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_di /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

