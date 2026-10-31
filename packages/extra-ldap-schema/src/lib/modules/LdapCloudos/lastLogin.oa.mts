/* eslint-disable */
import { type IA5String } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications } from "../InformationFramework/AttributeUsage.ta.mjs";
import { id_at_lastLogin } from "../LdapCloudos/id-at-lastLogin.va.mjs";
import { ia5String } from "../SelectedAttributeTypes/ia5String.oa.mjs";

/**
 * @summary lastLogin
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * lastLogin ATTRIBUTE ::= {
 *   WITH SYNTAX               IA5String(SIZE (1..30))
 *   LDAP-SYNTAX               ia5String.&id
 *   LDAP-NAME                 {"lastLogin"}
 *   LDAP-DESC                 "Most recent login, formatted as YYYY-MM-DD HH:mm:ss"
 *   ID                        id-at-lastLogin }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<IA5String>}
 * @implements {ATTRIBUTE<IA5String>}
 */
export
const lastLogin: ATTRIBUTE<IA5String> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeIA5String,
    },
    encoderFor: {
        "&Type": $._encodeIA5String,
    },
    "&ldapSyntax": ia5String["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["lastLogin"],
    "&ldapDesc": "Most recent login, formatted as YYYY-MM-DD HH:mm:ss" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_lastLogin /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
