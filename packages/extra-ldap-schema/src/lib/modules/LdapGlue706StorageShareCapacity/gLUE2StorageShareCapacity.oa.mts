/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { gLUE2Entity } from "../LdapGlue501Entity/gLUE2Entity.oa.mjs";
// export { gLUE2Entity } from "../LdapGlue501Entity/gLUE2Entity.oa.mjs";
import { id_oc_gLUE2StorageShareCapacity } from "../LdapGlue706StorageShareCapacity/id-oc-gLUE2StorageShareCapacity.va.mjs";
import { gLUE2StorageShareCapacityID } from "../LdapGlue706StorageShareCapacity/gLUE2StorageShareCapacityID.oa.mjs";
import { gLUE2StorageShareCapacityType } from "../LdapGlue706StorageShareCapacity/gLUE2StorageShareCapacityType.oa.mjs";
import { gLUE2StorageShareCapacityStorageShareForeignKey } from "../LdapGlue706StorageShareCapacity/gLUE2StorageShareCapacityStorageShareForeignKey.oa.mjs";
import { gLUE2StorageShareCapacityTotalSize } from "../LdapGlue706StorageShareCapacity/gLUE2StorageShareCapacityTotalSize.oa.mjs";
import { gLUE2StorageShareCapacityFreeSize } from "../LdapGlue706StorageShareCapacity/gLUE2StorageShareCapacityFreeSize.oa.mjs";
import { gLUE2StorageShareCapacityUsedSize } from "../LdapGlue706StorageShareCapacity/gLUE2StorageShareCapacityUsedSize.oa.mjs";
import { gLUE2StorageShareCapacityReservedSize } from "../LdapGlue706StorageShareCapacity/gLUE2StorageShareCapacityReservedSize.oa.mjs";
// export { id_oc_gLUE2StorageShareCapacity } from "../LdapGlue706StorageShareCapacity/id-oc-gLUE2StorageShareCapacity.va.mjs";


/**
 * @summary gLUE2StorageShareCapacity
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gLUE2StorageShareCapacity OBJECT-CLASS ::= {
 *   SUBCLASS OF               { gLUE2Entity }
 *   MUST CONTAIN              { gLUE2StorageShareCapacityID
 *                               | gLUE2StorageShareCapacityType
 *                               | gLUE2StorageShareCapacityStorageShareForeignKey }
 *   MAY CONTAIN               { gLUE2StorageShareCapacityTotalSize
 *                               | gLUE2StorageShareCapacityFreeSize
 *                               | gLUE2StorageShareCapacityUsedSize
 *                               | gLUE2StorageShareCapacityReservedSize }
 *   LDAP-NAME                 {"GLUE2StorageShareCapacity"}
 *   LDAP-DESC                 "Description of the size and state of an homogeneous storage extent"
 *   ID                        id-oc-gLUE2StorageShareCapacity }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const gLUE2StorageShareCapacity: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ gLUE2Entity, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ gLUE2StorageShareCapacityID, gLUE2StorageShareCapacityType, gLUE2StorageShareCapacityStorageShareForeignKey, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ gLUE2StorageShareCapacityTotalSize, gLUE2StorageShareCapacityFreeSize, gLUE2StorageShareCapacityUsedSize, gLUE2StorageShareCapacityReservedSize, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "GLUE2StorageShareCapacity" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Description of the size and state of an homogeneous storage extent" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_gLUE2StorageShareCapacity /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
