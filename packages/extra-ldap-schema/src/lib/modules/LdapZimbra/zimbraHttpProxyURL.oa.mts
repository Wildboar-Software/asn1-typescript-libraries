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
import { caseIgnoreSubstringsMatch } from "../SelectedAttributeTypes/caseIgnoreSubstringsMatch.oa.mjs";
import { ia5String } from "../SelectedAttributeTypes/ia5String.oa.mjs";
import { id_at_zimbraHttpProxyURL } from "../LdapZimbra/id-at-zimbraHttpProxyURL.va.mjs";


/**
 * @summary zimbraHttpProxyURL
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * zimbraHttpProxyURL ATTRIBUTE ::= {
 *   WITH SYNTAX               IA5String(SIZE (1..512))
 *   EQUALITY MATCHING RULE    caseIgnoreIA5Match
 *   SUBSTRINGS MATCHING RULE  caseIgnoreSubstringsMatch
 *   LDAP-SYNTAX               ia5String.&id
 *   LDAP-NAME                 {"zimbraHttpProxyURL"}
 *   LDAP-DESC                 "external socks proxy URL to connect to when making outgoing connections (eg.Zimlet proxy, RSS/ATOM feeds, etc)"
 *   ID                        id-at-zimbraHttpProxyURL }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<IA5String>}
 * @implements {ATTRIBUTE<IA5String>}
 */
const _decode_zimbraHttpProxyURL_Type = (el: _Element): IA5String => {
    const value = $._decodeIA5String(el);
    if (value.length < 1 || value.length > 512) {
        throw new ASN1SizeError("zimbraHttpProxyURL violates SIZE constraint");
    }
    return value;
};

export
const zimbraHttpProxyURL: ATTRIBUTE<IA5String> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_zimbraHttpProxyURL_Type,
    },
    encoderFor: {
        "&Type": $._encodeIA5String,
    },
    "&equality-match": caseIgnoreIA5Match /* OBJECT_FIELD_SETTING */,
    "&substrings-match": caseIgnoreSubstringsMatch /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": ia5String["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "zimbraHttpProxyURL" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "external socks proxy URL to connect to when making outgoing connections (eg.Zimlet proxy, RSS/ATOM feeds, etc)" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_zimbraHttpProxyURL /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

