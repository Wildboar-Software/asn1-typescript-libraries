/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_schacEntryMetadata } from "../LdapSchac/id-oc-schacEntryMetadata.va.mjs";
import { schacExpiryDate } from "../LdapSchac/schacExpiryDate.oa.mjs";

/**
 * @summary schacEntryMetadata
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * schacEntryMetadata OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { schacExpiryDate }
 *   LDAP-NAME                 {"schacEntryMetadata"}
 *   LDAP-DESC                 "Used to contain information about the entry itself, often its status, birth, and death"
 *   ID                        id-oc-schacEntryMetadata }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const schacEntryMetadata: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [schacExpiryDate] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["schacEntryMetadata"],
    "&ldapDesc": "Used to contain information about the entry itself, often its status, birth, and death" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_schacEntryMetadata /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
