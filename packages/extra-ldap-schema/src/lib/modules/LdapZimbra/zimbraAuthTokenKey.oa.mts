/* eslint-disable */
import {
    type OCTET_STRING,
    type ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
import { octetStringMatch } from "../SelectedAttributeTypes/octetStringMatch.oa.mjs";
import { octetString } from "../SelectedAttributeTypes/octetString.oa.mjs";
import { id_at_zimbraAuthTokenKey } from "../LdapZimbra/id-at-zimbraAuthTokenKey.va.mjs";


/**
 * @summary zimbraAuthTokenKey
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * zimbraAuthTokenKey ATTRIBUTE ::= {
 *   WITH SYNTAX               OCTET STRING (SIZE (1..128))
 *   EQUALITY MATCHING RULE    octetStringMatch
 *   LDAP-SYNTAX               octetString.&id
 *   LDAP-NAME                 {"zimbraAuthTokenKey"}
 *   LDAP-DESC                 "auth token secret key"
 *   ID                        id-at-zimbraAuthTokenKey }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<OCTET_STRING>}
 * @implements {ATTRIBUTE<OCTET_STRING>}
 */
const _decode_zimbraAuthTokenKey_Type = (el: _Element): OCTET_STRING => {
    const value = $._decodeOctetString(el);
    if (value.length < 1 || value.length > 128) {
        throw new ASN1SizeError("zimbraAuthTokenKey violates SIZE constraint");
    }
    return value;
};

export
const zimbraAuthTokenKey: ATTRIBUTE<OCTET_STRING> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_zimbraAuthTokenKey_Type,
    },
    encoderFor: {
        "&Type": $._encodeOctetString,
    },
    "&equality-match": octetStringMatch /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": octetString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "zimbraAuthTokenKey" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "auth token secret key" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_zimbraAuthTokenKey /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

