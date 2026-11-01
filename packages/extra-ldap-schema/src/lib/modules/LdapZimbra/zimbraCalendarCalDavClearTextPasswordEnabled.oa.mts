/* eslint-disable */
import {
    type BOOLEAN
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
import { booleanMatch } from "../SelectedAttributeTypes/booleanMatch.oa.mjs";
import { boolean_ } from "../SelectedAttributeTypes/boolean.oa.mjs";
import { id_at_zimbraCalendarCalDavClearTextPasswordEnabled } from "../LdapZimbra/id-at-zimbraCalendarCalDavClearTextPasswordEnabled.va.mjs";

/**
 * @summary zimbraCalendarCalDavClearTextPasswordEnabled
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * zimbraCalendarCalDavClearTextPasswordEnabled ATTRIBUTE ::= {
 *   WITH SYNTAX               BOOLEAN
 *   EQUALITY MATCHING RULE    booleanMatch
 *   SINGLE VALUE              TRUE
 *   LDAP-SYNTAX               boolean.&id
 *   LDAP-NAME                 {"zimbraCalendarCalDavClearTextPasswordEnabled"}
 *   LDAP-DESC                 "Whether to allow password sent to non-secured port from CalDAV clients. If it set to TRUE the server will allow access from CalDAV client to zimbraMailPort. If it set to FALSE the server will return an error if a request is made from CalDAV client to zimbraMailPort."
 *   ID                        id-at-zimbraCalendarCalDavClearTextPasswordEnabled }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<BOOLEAN>}
 * @implements {ATTRIBUTE<BOOLEAN>}
 */
export
const zimbraCalendarCalDavClearTextPasswordEnabled: ATTRIBUTE<BOOLEAN> = {
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
    "&ldapName": [ "zimbraCalendarCalDavClearTextPasswordEnabled" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Whether to allow password sent to non-secured port from CalDAV clients. If it set to TRUE the server will allow access from CalDAV client to zimbraMailPort. If it set to FALSE the server will return an error if a request is made from CalDAV client to zimbraMailPort." /* OBJECT_FIELD_SETTING */,
    "&id": id_at_zimbraCalendarCalDavClearTextPasswordEnabled /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
