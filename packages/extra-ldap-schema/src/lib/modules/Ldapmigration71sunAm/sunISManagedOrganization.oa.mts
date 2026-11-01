/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { sunOrganizationAlias } from "../Ldapmigration71sunAm/sunOrganizationAlias.oa.mjs";
// export { sunOrganizationAlias } from "../Ldapmigration71sunAm/sunOrganizationAlias.oa.mjs";
import { id_oc_sunISManagedOrganization } from "../Ldapmigration71sunAm/id-oc-sunISManagedOrganization.va.mjs";
// export { id_oc_sunISManagedOrganization } from "../Ldapmigration71sunAm/id-oc-sunISManagedOrganization.va.mjs";


/**
 * @summary sunISManagedOrganization
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * sunISManagedOrganization OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { sunOrganizationAlias }
 *   LDAP-NAME                 {"sunISManagedOrganization"}
 *   LDAP-DESC                 "Sun Java System objectclass to identify organizations"
 *   ID                        id-oc-sunISManagedOrganization }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const sunISManagedOrganization: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ sunOrganizationAlias, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "sunISManagedOrganization" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Sun Java System objectclass to identify organizations" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_sunISManagedOrganization /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
