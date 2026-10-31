/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { gLUE2Entity } from "../LdapGlue501Entity/gLUE2Entity.oa.mjs";
import { id_oc_gLUE2StorageShareCapacity } from "../LdapGlue706StorageShareCapacity/id-oc-gLUE2StorageShareCapacity.va.mjs";
import { gLUE2StorageShareCapacityFreeSize } from "./gLUE2StorageShareCapacityFreeSize.oa.mjs";
import { gLUE2StorageShareCapacityID } from "./gLUE2StorageShareCapacityID.oa.mjs";
import { gLUE2StorageShareCapacityReservedSize } from "./gLUE2StorageShareCapacityReservedSize.oa.mjs";
import { gLUE2StorageShareCapacityStorageShareForeignKey } from "./gLUE2StorageShareCapacityStorageShareForeignKey.oa.mjs";
import { gLUE2StorageShareCapacityTotalSize } from "./gLUE2StorageShareCapacityTotalSize.oa.mjs";
import { gLUE2StorageShareCapacityType } from "./gLUE2StorageShareCapacityType.oa.mjs";
import { gLUE2StorageShareCapacityUsedSize } from "./gLUE2StorageShareCapacityUsedSize.oa.mjs";

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
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [gLUE2Entity] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [gLUE2StorageShareCapacityID, gLUE2StorageShareCapacityType, gLUE2StorageShareCapacityStorageShareForeignKey] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [gLUE2StorageShareCapacityTotalSize, gLUE2StorageShareCapacityFreeSize, gLUE2StorageShareCapacityUsedSize, gLUE2StorageShareCapacityReservedSize] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["GLUE2StorageShareCapacity"],
    "&ldapDesc": "Description of the size and state of an homogeneous storage extent" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_gLUE2StorageShareCapacity /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
