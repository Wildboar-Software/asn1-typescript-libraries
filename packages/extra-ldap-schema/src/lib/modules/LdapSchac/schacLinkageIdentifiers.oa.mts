/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_schacLinkageIdentifiers } from "../LdapSchac/id-oc-schacLinkageIdentifiers.va.mjs";
import { schacPersonalUniqueCode } from "../LdapSchac/schacPersonalUniqueCode.oa.mjs";
import { schacPersonalUniqueID } from "../LdapSchac/schacPersonalUniqueID.oa.mjs";
// export { id_oc_schacLinkageIdentifiers } from "../LdapSchac/id-oc-schacLinkageIdentifiers.va.mjs";


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
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ schacPersonalUniqueCode, schacPersonalUniqueID, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "schacLinkageIdentifiers" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Used to link a directory entry with records in external data stores or other directory entries" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_schacLinkageIdentifiers /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
