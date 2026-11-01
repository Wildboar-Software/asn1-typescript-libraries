/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_soniaPermissions } from "../Ldapmigration97sonia/id-oc-soniaPermissions.va.mjs";
import { soniaPermissionRead } from "../Ldapmigration97sonia/soniaPermissionRead.oa.mjs";
import { soniaPermissionWrite } from "../Ldapmigration97sonia/soniaPermissionWrite.oa.mjs";
import { soniaPermissionOwner } from "../Ldapmigration97sonia/soniaPermissionOwner.oa.mjs";
import { soniaPermissionAdmin } from "../Ldapmigration97sonia/soniaPermissionAdmin.oa.mjs";
import { soniaPermissionMaxAssignments } from "../Ldapmigration97sonia/soniaPermissionMaxAssignments.oa.mjs";
import { soniaPermissionAssignmentFilter } from "../Ldapmigration97sonia/soniaPermissionAssignmentFilter.oa.mjs";
// export { id_oc_soniaPermissions } from "../Ldapmigration97sonia/id-oc-soniaPermissions.va.mjs";


/**
 * @summary soniaPermissions
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * soniaPermissions OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { soniaPermissionRead
 *                               | soniaPermissionWrite
 *                               | soniaPermissionOwner
 *                               | soniaPermissionAdmin
 *                               | soniaPermissionMaxAssignments
 *                               | soniaPermissionAssignmentFilter }
 *   LDAP-NAME                 {"soniaPermissions"}
 *   ID                        id-oc-soniaPermissions }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const soniaPermissions: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ soniaPermissionRead, soniaPermissionWrite, soniaPermissionOwner, soniaPermissionAdmin, soniaPermissionMaxAssignments, soniaPermissionAssignmentFilter, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "soniaPermissions" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_soniaPermissions /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
