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
import { ia5String } from "../SelectedAttributeTypes/ia5String.oa.mjs";
import { id_at_clearPassword } from "../LdapSchema2ldifCourier/id-at-clearPassword.va.mjs";


/**
 * @summary clearPassword
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * clearPassword ATTRIBUTE ::= {
 *   WITH SYNTAX               IA5String(SIZE (1..128))
 *   EQUALITY MATCHING RULE    caseExactIA5Match
 *   LDAP-SYNTAX               ia5String.&id
 *   LDAP-NAME                 {"clearPassword"}
 *   LDAP-DESC                 "A separate text that stores the mail account password in clear text"
 *   ID                        id-at-clearPassword }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<IA5String>}
 * @implements {ATTRIBUTE<IA5String>}
 */
const _decode_clearPassword_Type = (el: _Element): IA5String => {
    const value = $._decodeIA5String(el);
    if (value.length < 1 || value.length > 128) {
        throw new ASN1SizeError("clearPassword violates SIZE constraint");
    }
    return value;
};

export
const clearPassword: ATTRIBUTE<IA5String> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_clearPassword_Type,
    },
    encoderFor: {
        "&Type": $._encodeIA5String,
    },
    "&equality-match": caseExactIA5Match /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": ia5String["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "clearPassword" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "A separate text that stores the mail account password in clear text" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_clearPassword /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

