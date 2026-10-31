/* eslint-disable */
import { type BOOLEAN } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications } from "../InformationFramework/AttributeUsage.ta.mjs";
import { id_at_zimbraLogOutFromAllServers } from "../LdapZimbra/id-at-zimbraLogOutFromAllServers.va.mjs";
import { boolean_ } from "../SelectedAttributeTypes/boolean.oa.mjs";
import { booleanMatch } from "../SelectedAttributeTypes/booleanMatch.oa.mjs";

/**
 * @summary zimbraLogOutFromAllServers
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * zimbraLogOutFromAllServers ATTRIBUTE ::= {
 *   WITH SYNTAX               BOOLEAN
 *   EQUALITY MATCHING RULE    booleanMatch
 *   SINGLE VALUE              TRUE
 *   LDAP-SYNTAX               boolean.&id
 *   LDAP-NAME                 {"zimbraLogOutFromAllServers"}
 *   LDAP-DESC                 "Flag to control how authtokens are invalidated in multi-server environment. If set to TRUE: when this account logs out on a server, the server will notify other servers that this account's authtoken has been invalidated. If set to FALSE, an auth token may remain vallid on servers other than the account's home server after a user logs out for as long as an account object remains in Provisioning Cache. Set to TRUE for increased protection against Cookie Re-use attack. Default is FALSE to reduce network chatter."
 *   ID                        id-at-zimbraLogOutFromAllServers }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<BOOLEAN>}
 * @implements {ATTRIBUTE<BOOLEAN>}
 */
export
const zimbraLogOutFromAllServers: ATTRIBUTE<BOOLEAN> = {
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
    "&ldapName": ["zimbraLogOutFromAllServers"],
    "&ldapDesc": "Flag to control how authtokens are invalidated in multi-server environment. If set to TRUE: when this account logs out on a server, the server will notify other servers that this account's authtoken has been invalidated. If set to FALSE, an auth token may remain vallid on servers other than the account's home server after a user logs out for as long as an account object remains in Provisioning Cache. Set to TRUE for increased protection against Cookie Re-use attack. Default is FALSE to reduce network chatter." /* OBJECT_FIELD_SETTING */,
    "&id": id_at_zimbraLogOutFromAllServers /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
