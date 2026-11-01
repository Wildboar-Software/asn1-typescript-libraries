/* eslint-disable */
import {
    type BOOLEAN
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
import { booleanMatch } from "../SelectedAttributeTypes/booleanMatch.oa.mjs";
import { boolean_ } from "../SelectedAttributeTypes/boolean.oa.mjs";
import { id_at_zimbraReverseProxyUseExternalRoute } from "../LdapZimbra/id-at-zimbraReverseProxyUseExternalRoute.va.mjs";


/**
 * @summary zimbraReverseProxyUseExternalRoute
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * zimbraReverseProxyUseExternalRoute ATTRIBUTE ::= {
 *   WITH SYNTAX               BOOLEAN
 *   EQUALITY MATCHING RULE    booleanMatch
 *   SINGLE VALUE              TRUE
 *   LDAP-SYNTAX               boolean.&id
 *   LDAP-NAME                 {"zimbraReverseProxyUseExternalRoute"}
 *   LDAP-DESC                 "There is a deployment scenario for migrations where all of the customers users are pointed at the zimbra POP IMAP reverse proxy. We then want their connections proxied back to the legacy system for not-yet-non-migrated users. If this attribute is TRUE, reverse proxy lookup servlet should check to see if zimbraExternal* is set on the domain. If so it is used. If not, lookup proceeds as usual."
 *   ID                        id-at-zimbraReverseProxyUseExternalRoute }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<BOOLEAN>}
 * @implements {ATTRIBUTE<BOOLEAN>}
 */
export
const zimbraReverseProxyUseExternalRoute: ATTRIBUTE<BOOLEAN> = {
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
    "&ldapName": [ "zimbraReverseProxyUseExternalRoute" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "There is a deployment scenario for migrations where all of the customers users are pointed at the zimbra POP IMAP reverse proxy. We then want their connections proxied back to the legacy system for not-yet-non-migrated users. If this attribute is TRUE, reverse proxy lookup servlet should check to see if zimbraExternal* is set on the domain. If so it is used. If not, lookup proceeds as usual." /* OBJECT_FIELD_SETTING */,
    "&id": id_at_zimbraReverseProxyUseExternalRoute /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

