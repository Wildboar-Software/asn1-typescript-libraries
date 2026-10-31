/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_schacGroupMembership } from "../LdapSchac/id-oc-schacGroupMembership.va.mjs";
import { schacProjectMembership } from "./schacProjectMembership.oa.mjs";
import { schacProjectSpecificRole } from "./schacProjectSpecificRole.oa.mjs";

/**
 * @summary schacGroupMembership
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * schacGroupMembership OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { schacProjectMembership
 *                               | schacProjectSpecificRole }
 *   LDAP-NAME                 {"schacGroupMembership"}
 *   LDAP-DESC                 "Groups used to provide/restrict authorization to entries and attributes"
 *   ID                        id-oc-schacGroupMembership }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const schacGroupMembership: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [schacProjectMembership, schacProjectSpecificRole] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["schacGroupMembership"],
    "&ldapDesc": "Groups used to provide/restrict authorization to entries and attributes" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_schacGroupMembership /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
