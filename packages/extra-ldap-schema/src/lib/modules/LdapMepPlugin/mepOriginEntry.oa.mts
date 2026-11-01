/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { mepManagedEntry } from "../LdapMepPlugin/mepManagedEntry.oa.mjs";
import { id_oc_mepOriginEntry } from "../LdapMepPlugin/id-oc-mepOriginEntry.va.mjs";


/**
 * @summary mepOriginEntry
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * mepOriginEntry OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { mepManagedEntry }
 *   LDAP-NAME                 {"mepOriginEntry"}
 *   LDAP-DESC                 "Managed Entries Origin Entry"
 *   ID                        id-oc-mepOriginEntry }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const mepOriginEntry: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ mepManagedEntry, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "mepOriginEntry" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Managed Entries Origin Entry" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_mepOriginEntry /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

