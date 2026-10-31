/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_rubySyncSynchable } from "../LdapRubysync/id-oc-rubySyncSynchable.va.mjs";
import { rubySyncAssociation } from "../LdapRubysync/rubySyncAssociation.oa.mjs";

/**
 * @summary rubySyncSynchable
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * rubySyncSynchable OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { rubySyncAssociation }
 *   LDAP-NAME                 {"rubySyncSynchable"}
 *   LDAP-DESC                 "Object can preserve links to other objects via rubySync"
 *   ID                        id-oc-rubySyncSynchable }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const rubySyncSynchable: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [rubySyncAssociation] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["rubySyncSynchable"],
    "&ldapDesc": "Object can preserve links to other objects via rubySync" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_rubySyncSynchable /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
