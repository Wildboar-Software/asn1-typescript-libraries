/* eslint-disable */

import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";

import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_mailListGroup } from "../LdapEionet/id-oc-mailListGroup.va.mjs";

import { permittedSender } from "../LdapEionet/permittedSender.oa.mjs";
import { permittedPerson } from "../LdapEionet/permittedPerson.oa.mjs";
/**
 * @summary mailListGroup
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * mailListGroup OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { permittedSender
 *                               | permittedPerson }
 *   LDAP-NAME                 {"mailListGroup"}
 *   LDAP-DESC                 "Identifies a mail list associated with a group."
 *   ID                        id-oc-mailListGroup }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const mailListGroup: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ permittedSender, permittedPerson, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "mailListGroup" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Identifies a mail list associated with a group." /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_mailListGroup /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
