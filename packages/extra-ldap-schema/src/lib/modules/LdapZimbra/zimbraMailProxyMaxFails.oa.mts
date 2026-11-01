/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
import { integerMatch } from "../SelectedAttributeTypes/integerMatch.oa.mjs";
import { integer } from "../SelectedAttributeTypes/integer.oa.mjs";
import { id_at_zimbraMailProxyMaxFails } from "../LdapZimbra/id-at-zimbraMailProxyMaxFails.va.mjs";


/**
 * @summary zimbraMailProxyMaxFails
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * zimbraMailProxyMaxFails ATTRIBUTE ::= {
 *   WITH SYNTAX               INTEGER
 *   EQUALITY MATCHING RULE    integerMatch
 *   SINGLE VALUE              TRUE
 *   LDAP-SYNTAX               integer.&id
 *   LDAP-NAME                 {"zimbraMailProxyMaxFails"}
 *   LDAP-DESC                 "The max number of unsuccessful attempts to connect to the current server (as an upstream). If this number is reached, proxy will refuse to connect to the current server, wait for zimbraMailProxyReconnectTimeout and then try to reconnect. Default value is 1. Setting this to 0 means turning this check off."
 *   ID                        id-at-zimbraMailProxyMaxFails }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<INTEGER>}
 * @implements {ATTRIBUTE<INTEGER>}
 */
export
const zimbraMailProxyMaxFails: ATTRIBUTE<INTEGER> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeInteger,
    },
    encoderFor: {
        "&Type": $._encodeInteger,
    },
    "&equality-match": integerMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": integer["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "zimbraMailProxyMaxFails" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "The max number of unsuccessful attempts to connect to the current server (as an upstream). If this number is reached, proxy will refuse to connect to the current server, wait for zimbraMailProxyReconnectTimeout and then try to reconnect. Default value is 1. Setting this to 0 means turning this check off." /* OBJECT_FIELD_SETTING */,
    "&id": id_at_zimbraMailProxyMaxFails /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

