/* eslint-disable */
import {
    type IA5String,
    type ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
import { caseIgnoreIA5Match } from "../SelectedAttributeTypes/caseIgnoreIA5Match.oa.mjs";
import { ia5String } from "../SelectedAttributeTypes/ia5String.oa.mjs";
import { id_at_mailAlternateAddress } from "../LdapDbmail/id-at-mailAlternateAddress.va.mjs";


/**
 * @summary mailAlternateAddress
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * mailAlternateAddress ATTRIBUTE ::= {
 *   WITH SYNTAX               IA5String(SIZE (1..256))
 *   EQUALITY MATCHING RULE    caseIgnoreIA5Match
 *   LDAP-SYNTAX               ia5String.&id
 *   LDAP-NAME                 {"mailAlternateAddress"}
 *   LDAP-DESC                 "Secondary (alias) mailaddresses for the same user"
 *   ID                        id-at-mailAlternateAddress }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<IA5String>}
 * @implements {ATTRIBUTE<IA5String>}
 */
const _decode_mailAlternateAddress_Type = (el: _Element): IA5String => {
    const value = $._decodeIA5String(el);
    if (value.length < 1 || value.length > 256) {
        throw new ASN1SizeError("mailAlternateAddress violates SIZE constraint");
    }
    return value;
};

export
const mailAlternateAddress: ATTRIBUTE<IA5String> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_mailAlternateAddress_Type,
    },
    encoderFor: {
        "&Type": $._encodeIA5String,
    },
    "&equality-match": caseIgnoreIA5Match /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": ia5String["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "mailAlternateAddress" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Secondary (alias) mailaddresses for the same user" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_mailAlternateAddress /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

