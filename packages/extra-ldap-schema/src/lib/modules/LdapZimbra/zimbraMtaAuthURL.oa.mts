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
import { id_at_zimbraMtaAuthURL } from "../LdapZimbra/id-at-zimbraMtaAuthURL.va.mjs";


/**
 * @summary zimbraMtaAuthURL
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * zimbraMtaAuthURL ATTRIBUTE ::= {
 *   WITH SYNTAX               IA5String(SIZE (1..256))
 *   EQUALITY MATCHING RULE    caseIgnoreIA5Match
 *   SUBSTRINGS MATCHING RULE  caseIgnoreSubstringsMatch
 *   LDAP-SYNTAX               ia5String.&id
 *   LDAP-NAME                 {"zimbraMtaAuthURL"}
 *   LDAP-DESC                 "Deprecated since: 8.6. Formally deprecated in 8.6 but has been unused since at least 7.0. MTA now uses all servers which have zimbraMtaAuthTarget set to TRUE. Orig desc: URL at which this MTA (via zimbra saslauthd) should authenticate. Set by setting zimbraMtaAuthHost."
 *   ID                        id-at-zimbraMtaAuthURL }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<IA5String>}
 * @implements {ATTRIBUTE<IA5String>}
 */
const _decode_zimbraMtaAuthURL_Type = (el: _Element): IA5String => {
    const value = $._decodeIA5String(el);
    if (value.length < 1 || value.length > 256) {
        throw new ASN1SizeError("zimbraMtaAuthURL violates SIZE constraint");
    }
    return value;
};

export
const zimbraMtaAuthURL: ATTRIBUTE<IA5String> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_zimbraMtaAuthURL_Type,
    },
    encoderFor: {
        "&Type": $._encodeIA5String,
    },
    "&equality-match": caseIgnoreIA5Match /* OBJECT_FIELD_SETTING */,
    "&substrings-match": caseIgnoreSubstringsMatch /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": ia5String["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "zimbraMtaAuthURL" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Deprecated since: 8.6. Formally deprecated in 8.6 but has been unused since at least 7.0. MTA now uses all servers which have zimbraMtaAuthTarget set to TRUE. Orig desc: URL at which this MTA (via zimbra saslauthd) should authenticate. Set by setting zimbraMtaAuthHost." /* OBJECT_FIELD_SETTING */,
    "&id": id_at_zimbraMtaAuthURL /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

