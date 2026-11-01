/* eslint-disable */

import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";

import { top } from "../InformationFramework/top.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { id_oc_automount } from "../LdapGosaCoreRfc2307bis/id-oc-automount.va.mjs";

import { automountKey } from "../RFC2307bis/automountKey.oa.mjs";
import { automountInformation } from "../LdapGosaCoreRfc2307bis/automountInformation.oa.mjs";
/**
 * @summary automount
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * automount OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { automountKey
 *                               | automountInformation }
 *   MAY CONTAIN               { description }
 *   LDAP-NAME                 {"automount"}
 *   LDAP-DESC                 "Automount information"
 *   ID                        id-oc-automount }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const automount: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ automountKey, automountInformation, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ description, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "automount" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Automount information" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_automount /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
