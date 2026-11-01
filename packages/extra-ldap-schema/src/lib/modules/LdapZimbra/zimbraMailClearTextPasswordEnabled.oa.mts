/* eslint-disable */
import {
    type BOOLEAN
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
import { booleanMatch } from "../SelectedAttributeTypes/booleanMatch.oa.mjs";
import { boolean_ } from "../SelectedAttributeTypes/boolean.oa.mjs";
import { id_at_zimbraMailClearTextPasswordEnabled } from "../LdapZimbra/id-at-zimbraMailClearTextPasswordEnabled.va.mjs";

/**
 * @summary zimbraMailClearTextPasswordEnabled
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * zimbraMailClearTextPasswordEnabled ATTRIBUTE ::= {
 *   WITH SYNTAX               BOOLEAN
 *   EQUALITY MATCHING RULE    booleanMatch
 *   SINGLE VALUE              TRUE
 *   LDAP-SYNTAX               boolean.&id
 *   LDAP-NAME                 {"zimbraMailClearTextPasswordEnabled"}
 *   LDAP-DESC                 "Whether to allow password sent to non-secured port when zimbraMailMode is mixed. If it set to TRUE the server will allow login with clear text AuthRequests and change password with clear text ChangePasswordRequest. If it set to FALSE the server will return an error if an attempt is made to ChangePasswordRequest or AuthRequest."
 *   ID                        id-at-zimbraMailClearTextPasswordEnabled }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<BOOLEAN>}
 * @implements {ATTRIBUTE<BOOLEAN>}
 */
export
const zimbraMailClearTextPasswordEnabled: ATTRIBUTE<BOOLEAN> = {
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
    "&ldapName": [ "zimbraMailClearTextPasswordEnabled" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Whether to allow password sent to non-secured port when zimbraMailMode is mixed. If it set to TRUE the server will allow login with clear text AuthRequests and change password with clear text ChangePasswordRequest. If it set to FALSE the server will return an error if an attempt is made to ChangePasswordRequest or AuthRequest." /* OBJECT_FIELD_SETTING */,
    "&id": id_at_zimbraMailClearTextPasswordEnabled /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
