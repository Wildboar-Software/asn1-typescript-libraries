/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { mepManagedBy } from "../LdapMepPlugin/mepManagedBy.oa.mjs";
import { id_oc_mepManagedEntry_2 } from "../LdapMepPlugin/id-oc-mepManagedEntry-2.va.mjs";


/**
 * @summary mepManagedEntry_2
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * mepManagedEntry-2 OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { mepManagedBy }
 *   LDAP-NAME                 {"mepManagedEntry"}
 *   LDAP-DESC                 "Managed Entries Managed Entry"
 *   ID                        id-oc-mepManagedEntry-2 }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const mepManagedEntry_2: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ mepManagedBy, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "mepManagedEntry" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Managed Entries Managed Entry" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_mepManagedEntry_2 /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

