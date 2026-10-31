/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { description } from "../SelectedAttributeTypes/description.oa.mjs";
// export { id_oc_gosaSnapshotObject } from "../LdapGosaCoreGosaSamba3/id-oc-gosaSnapshotObject.va.mjs";


/**
 * @summary gosaSnapshotObject
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gosaSnapshotObject OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { gosaSnapshotType
 *                               | gosaSnapshotTimestamp
 *                               | gosaSnapshotDN
 *                               | gosaSnapshotData }
 *   MAY CONTAIN               { description }
 *   LDAP-NAME                 {"gosaSnapshotObject"}
 *   LDAP-DESC                 "Container object for undo and snapshot data (v2.7)"
 *   ID                        id-oc-gosaSnapshotObject }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const gosaSnapshotObject: OBJECT_CLASS = undefined;

/* eslint-enable */
