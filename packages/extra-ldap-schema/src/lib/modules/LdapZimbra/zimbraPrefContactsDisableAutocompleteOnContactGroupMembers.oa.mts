/* eslint-disable */
import {
    type BOOLEAN
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
import { booleanMatch } from "../SelectedAttributeTypes/booleanMatch.oa.mjs";
import { boolean_ } from "../SelectedAttributeTypes/boolean.oa.mjs";
import { id_at_zimbraPrefContactsDisableAutocompleteOnContactGroupMembers } from "../LdapZimbra/id-at-zimbraPrefContactsDisableAutocompleteOnContactGroupMembers.va.mjs";


/**
 * @summary zimbraPrefContactsDisableAutocompleteOnContactGroupMembers
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * zimbraPrefContactsDisableAutocompleteOnContactGroupMembers ATTRIBUTE ::= {
 *   WITH SYNTAX               BOOLEAN
 *   EQUALITY MATCHING RULE    booleanMatch
 *   SINGLE VALUE              TRUE
 *   LDAP-SYNTAX               boolean.&id
 *   LDAP-NAME                 {"zimbraPrefContactsDisableAutocompleteOnContactGroupMembers"}
 *   LDAP-DESC                 "Deprecated since: 8.0.0. Since 8.0.0, the contact group can contain member references, but member references are not searchable.. Orig desc: Disables autocomplete matching against the members email address."
 *   ID                        id-at-zimbraPrefContactsDisableAutocompleteOnContactGroupMembers }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<BOOLEAN>}
 * @implements {ATTRIBUTE<BOOLEAN>}
 */
export
const zimbraPrefContactsDisableAutocompleteOnContactGroupMembers: ATTRIBUTE<BOOLEAN> = {
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
    "&ldapName": [ "zimbraPrefContactsDisableAutocompleteOnContactGroupMembers" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Deprecated since: 8.0.0. Since 8.0.0, the contact group can contain member references, but member references are not searchable.. Orig desc: Disables autocomplete matching against the members email address." /* OBJECT_FIELD_SETTING */,
    "&id": id_at_zimbraPrefContactsDisableAutocompleteOnContactGroupMembers /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

