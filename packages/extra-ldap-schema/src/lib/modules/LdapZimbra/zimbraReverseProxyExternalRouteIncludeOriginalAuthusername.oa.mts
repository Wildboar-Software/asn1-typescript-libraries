/* eslint-disable */
import { type BOOLEAN } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications } from "../InformationFramework/AttributeUsage.ta.mjs";
import { id_at_zimbraReverseProxyExternalRouteIncludeOriginalAuthusername } from "../LdapZimbra/id-at-zimbraReverseProxyExternalRouteIncludeOriginalAuthusername.va.mjs";
import { boolean_ } from "../SelectedAttributeTypes/boolean.oa.mjs";
import { booleanMatch } from "../SelectedAttributeTypes/booleanMatch.oa.mjs";

/**
 * @summary zimbraReverseProxyExternalRouteIncludeOriginalAuthusername
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * zimbraReverseProxyExternalRouteIncludeOriginalAuthusername ATTRIBUTE ::= {
 *   WITH SYNTAX               BOOLEAN
 *   EQUALITY MATCHING RULE    booleanMatch
 *   SINGLE VALUE              TRUE
 *   LDAP-SYNTAX               boolean.&id
 *   LDAP-NAME                 {"zimbraReverseProxyExternalRouteIncludeOriginalAuthusername"}
 *   LDAP-DESC                 "During migrations Nginx lookup handler rewrites non-qualified username to fully qualified breaking proxy to external legacy mail platform. When zimbraReverseProxyUseExternalRoute is set to TRUE and zimbraReverseProxyExternalRouteIncludeOriginalAuthusername is set to FALSE nginx lookup handler drops the domain name from the userAccount and returns just the username."
 *   ID                        id-at-zimbraReverseProxyExternalRouteIncludeOriginalAuthusername }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<BOOLEAN>}
 * @implements {ATTRIBUTE<BOOLEAN>}
 */
export
const zimbraReverseProxyExternalRouteIncludeOriginalAuthusername: ATTRIBUTE<BOOLEAN> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeBoolean,
    },
    encoderFor: {
        "&Type": $._encodeBoolean,
    },
    "&equality-match": booleanMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": boolean_["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["zimbraReverseProxyExternalRouteIncludeOriginalAuthusername"],
    "&ldapDesc": "During migrations Nginx lookup handler rewrites non-qualified username to fully qualified breaking proxy to external legacy mail platform. When zimbraReverseProxyUseExternalRoute is set to TRUE and zimbraReverseProxyExternalRouteIncludeOriginalAuthusername is set to FALSE nginx lookup handler drops the domain name from the userAccount and returns just the username." /* OBJECT_FIELD_SETTING */,
    "&id": id_at_zimbraReverseProxyExternalRouteIncludeOriginalAuthusername /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
