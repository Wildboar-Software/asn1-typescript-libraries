/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_schacLinkageIdentifiers } from "../LdapSchac/id-oc-schacLinkageIdentifiers.va.mjs";
import { schacPersonalUniqueCode } from "./schacPersonalUniqueCode.oa.mjs";
import { schacPersonalUniqueID } from "./schacPersonalUniqueID.oa.mjs";

/**
 * @summary schacLinkageIdentifiers
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * schacLinkageIdentifiers OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { schacPersonalUniqueCode
 *                               | schacPersonalUniqueID }
 *   LDAP-NAME                 {"schacLinkageIdentifiers"}
 *   LDAP-DESC                 "Used to link a directory entry with records in external data stores or other directory entries"
 *   ID                        id-oc-schacLinkageIdentifiers }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const schacLinkageIdentifiers: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [schacPersonalUniqueCode, schacPersonalUniqueID] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["schacLinkageIdentifiers"],
    "&ldapDesc": "Used to link a directory entry with records in external data stores or other directory entries" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_schacLinkageIdentifiers /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
