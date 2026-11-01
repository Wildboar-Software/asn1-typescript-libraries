/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_nsManagedOrgUnit } from "../Ldapmigration50nsDelegatedAdmin/id-oc-nsManagedOrgUnit.va.mjs";
import { owner } from "../SelectedAttributeTypes/owner.oa.mjs";
import { nsdaModifiableBy } from "../Ldapmigration50nsDelegatedAdmin/nsdaModifiableBy.oa.mjs";
// export { id_oc_nsManagedOrgUnit } from "../Ldapmigration50nsDelegatedAdmin/id-oc-nsManagedOrgUnit.va.mjs";


/**
 * @summary nsManagedOrgUnit
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * nsManagedOrgUnit OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { owner
 *                               | nsdaModifiableBy }
 *   LDAP-NAME                 {"nsManagedOrgUnit"}
 *   LDAP-DESC                 "Delegated Admin marker for managed organizationunit"
 *   ID                        id-oc-nsManagedOrgUnit }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const nsManagedOrgUnit: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ owner, nsdaModifiableBy, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "nsManagedOrgUnit" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Delegated Admin marker for managed organizationunit" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_nsManagedOrgUnit /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
