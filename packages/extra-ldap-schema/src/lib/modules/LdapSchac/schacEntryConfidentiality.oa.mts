/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_schacEntryConfidentiality } from "../LdapSchac/id-oc-schacEntryConfidentiality.va.mjs";
import { schacUserPrivateAttribute } from "../LdapSchac/schacUserPrivateAttribute.oa.mjs";

/**
 * @summary schacEntryConfidentiality
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * schacEntryConfidentiality OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { schacUserPrivateAttribute }
 *   LDAP-NAME                 {"schacEntryConfidentiality"}
 *   LDAP-DESC                 "Used to indicate whether an entry is visible publicly, visible only to affiliates of the institution, or not visible at all"
 *   ID                        id-oc-schacEntryConfidentiality }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const schacEntryConfidentiality: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [schacUserPrivateAttribute] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["schacEntryConfidentiality"],
    "&ldapDesc": "Used to indicate whether an entry is visible publicly, visible only to affiliates of the institution, or not visible at all" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_schacEntryConfidentiality /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
