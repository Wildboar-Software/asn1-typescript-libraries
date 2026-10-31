/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_soniaPermissions } from "../Ldapmigration97sonia/id-oc-soniaPermissions.va.mjs";
import { soniaPermissionAdmin } from "./soniaPermissionAdmin.oa.mjs";
import { soniaPermissionAssignmentFilter } from "./soniaPermissionAssignmentFilter.oa.mjs";
import { soniaPermissionMaxAssignments } from "./soniaPermissionMaxAssignments.oa.mjs";
import { soniaPermissionOwner } from "./soniaPermissionOwner.oa.mjs";
import { soniaPermissionRead } from "./soniaPermissionRead.oa.mjs";
import { soniaPermissionWrite } from "./soniaPermissionWrite.oa.mjs";

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
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [soniaPermissionRead, soniaPermissionWrite, soniaPermissionOwner, soniaPermissionAdmin, soniaPermissionMaxAssignments, soniaPermissionAssignmentFilter] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["soniaPermissions"],
    "&id": id_oc_soniaPermissions /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
