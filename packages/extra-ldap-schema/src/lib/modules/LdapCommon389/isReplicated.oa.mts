/* eslint-disable */
import {
    type BOOLEAN
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
import { boolean_ } from "../SelectedAttributeTypes/boolean.oa.mjs";
import { id_at_isReplicated } from "../LdapCommon389/id-at-isReplicated.va.mjs";


/**
 * @summary isReplicated
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * isReplicated ATTRIBUTE ::= {
 *   WITH SYNTAX               BOOLEAN
 *   LDAP-SYNTAX               boolean.&id
 *   LDAP-NAME                 {"isReplicated"}
 *   LDAP-DESC                 "Changelog attribute type"
 *   ID                        id-at-isReplicated }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<BOOLEAN>}
 * @implements {ATTRIBUTE<BOOLEAN>}
 */
export
const isReplicated: ATTRIBUTE<BOOLEAN> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeBoolean,
    },
    encoderFor: {
        "&Type": $._encodeBoolean,
    },
    "&ldapSyntax": boolean_["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "isReplicated" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Changelog attribute type" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_isReplicated /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

