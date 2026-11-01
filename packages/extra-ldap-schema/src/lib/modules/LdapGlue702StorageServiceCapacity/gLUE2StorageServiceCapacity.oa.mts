/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { gLUE2Entity } from "../LdapGlue501Entity/gLUE2Entity.oa.mjs";
// export { gLUE2Entity } from "../LdapGlue501Entity/gLUE2Entity.oa.mjs";
import { id_oc_gLUE2StorageServiceCapacity } from "../LdapGlue702StorageServiceCapacity/id-oc-gLUE2StorageServiceCapacity.va.mjs";
import { gLUE2StorageServiceCapacityID } from "../LdapGlue702StorageServiceCapacity/gLUE2StorageServiceCapacityID.oa.mjs";
import { gLUE2StorageServiceCapacityType } from "../LdapGlue702StorageServiceCapacity/gLUE2StorageServiceCapacityType.oa.mjs";
import { gLUE2StorageServiceCapacityStorageServiceForeignKey } from "../LdapGlue702StorageServiceCapacity/gLUE2StorageServiceCapacityStorageServiceForeignKey.oa.mjs";
import { gLUE2StorageServiceCapacityTotalSize } from "../LdapGlue702StorageServiceCapacity/gLUE2StorageServiceCapacityTotalSize.oa.mjs";
import { gLUE2StorageServiceCapacityFreeSize } from "../LdapGlue702StorageServiceCapacity/gLUE2StorageServiceCapacityFreeSize.oa.mjs";
import { gLUE2StorageServiceCapacityUsedSize } from "../LdapGlue702StorageServiceCapacity/gLUE2StorageServiceCapacityUsedSize.oa.mjs";
import { gLUE2StorageServiceCapacityReservedSize } from "../LdapGlue702StorageServiceCapacity/gLUE2StorageServiceCapacityReservedSize.oa.mjs";
// export { id_oc_gLUE2StorageServiceCapacity } from "../LdapGlue702StorageServiceCapacity/id-oc-gLUE2StorageServiceCapacity.va.mjs";


/**
 * @summary gLUE2StorageServiceCapacity
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gLUE2StorageServiceCapacity OBJECT-CLASS ::= {
 *   SUBCLASS OF               { gLUE2Entity }
 *   MUST CONTAIN              { gLUE2StorageServiceCapacityID
 *                               | gLUE2StorageServiceCapacityType
 *                               | gLUE2StorageServiceCapacityStorageServiceForeignKey }
 *   MAY CONTAIN               { gLUE2StorageServiceCapacityTotalSize
 *                               | gLUE2StorageServiceCapacityFreeSize
 *                               | gLUE2StorageServiceCapacityUsedSize
 *                               | gLUE2StorageServiceCapacityReservedSize }
 *   LDAP-NAME                 {"GLUE2StorageServiceCapacity"}
 *   LDAP-DESC                 "Description of the size and state of an homogeneous storage extent"
 *   ID                        id-oc-gLUE2StorageServiceCapacity }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const gLUE2StorageServiceCapacity: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ gLUE2Entity, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ gLUE2StorageServiceCapacityID, gLUE2StorageServiceCapacityType, gLUE2StorageServiceCapacityStorageServiceForeignKey, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ gLUE2StorageServiceCapacityTotalSize, gLUE2StorageServiceCapacityFreeSize, gLUE2StorageServiceCapacityUsedSize, gLUE2StorageServiceCapacityReservedSize, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "GLUE2StorageServiceCapacity" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Description of the size and state of an homogeneous storage extent" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_gLUE2StorageServiceCapacity /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
