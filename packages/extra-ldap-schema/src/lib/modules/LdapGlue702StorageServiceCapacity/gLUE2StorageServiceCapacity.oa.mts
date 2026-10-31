/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { gLUE2Entity } from "../LdapGlue501Entity/gLUE2Entity.oa.mjs";
import { id_oc_gLUE2StorageServiceCapacity } from "../LdapGlue702StorageServiceCapacity/id-oc-gLUE2StorageServiceCapacity.va.mjs";
import { gLUE2StorageServiceCapacityFreeSize } from "./gLUE2StorageServiceCapacityFreeSize.oa.mjs";
import { gLUE2StorageServiceCapacityID } from "./gLUE2StorageServiceCapacityID.oa.mjs";
import { gLUE2StorageServiceCapacityReservedSize } from "./gLUE2StorageServiceCapacityReservedSize.oa.mjs";
import { gLUE2StorageServiceCapacityStorageServiceForeignKey } from "./gLUE2StorageServiceCapacityStorageServiceForeignKey.oa.mjs";
import { gLUE2StorageServiceCapacityTotalSize } from "./gLUE2StorageServiceCapacityTotalSize.oa.mjs";
import { gLUE2StorageServiceCapacityType } from "./gLUE2StorageServiceCapacityType.oa.mjs";
import { gLUE2StorageServiceCapacityUsedSize } from "./gLUE2StorageServiceCapacityUsedSize.oa.mjs";

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
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [gLUE2Entity] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [gLUE2StorageServiceCapacityID, gLUE2StorageServiceCapacityType, gLUE2StorageServiceCapacityStorageServiceForeignKey] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [gLUE2StorageServiceCapacityTotalSize, gLUE2StorageServiceCapacityFreeSize, gLUE2StorageServiceCapacityUsedSize, gLUE2StorageServiceCapacityReservedSize] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["GLUE2StorageServiceCapacity"],
    "&ldapDesc": "Description of the size and state of an homogeneous storage extent" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_gLUE2StorageServiceCapacity /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
