/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { gLUE2Share } from "../LdapGlue508Share/gLUE2Share.oa.mjs";
import { id_oc_gLUE2StorageShare } from "../LdapGlue705StorageShare/id-oc-gLUE2StorageShare.va.mjs";
import { gLUE2StorageShareAccessLatency } from "./gLUE2StorageShareAccessLatency.oa.mjs";
import { gLUE2StorageShareAccessMode } from "./gLUE2StorageShareAccessMode.oa.mjs";
import { gLUE2StorageShareDataStoreForeignKey } from "./gLUE2StorageShareDataStoreForeignKey.oa.mjs";
import { gLUE2StorageShareDefaultLifeTime } from "./gLUE2StorageShareDefaultLifeTime.oa.mjs";
import { gLUE2StorageShareExpirationMode } from "./gLUE2StorageShareExpirationMode.oa.mjs";
import { gLUE2StorageShareMaximumLifeTime } from "./gLUE2StorageShareMaximumLifeTime.oa.mjs";
import { gLUE2StorageSharePath } from "./gLUE2StorageSharePath.oa.mjs";
import { gLUE2StorageShareRetentionPolicy } from "./gLUE2StorageShareRetentionPolicy.oa.mjs";
import { gLUE2StorageShareServingState } from "./gLUE2StorageShareServingState.oa.mjs";
import { gLUE2StorageShareSharingID } from "./gLUE2StorageShareSharingID.oa.mjs";
import { gLUE2StorageShareStorageEndpointForeignKey } from "./gLUE2StorageShareStorageEndpointForeignKey.oa.mjs";
import { gLUE2StorageShareStorageServiceForeignKey } from "./gLUE2StorageShareStorageServiceForeignKey.oa.mjs";
import { gLUE2StorageShareTag } from "./gLUE2StorageShareTag.oa.mjs";

/**
 * @summary gLUE2StorageShare
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gLUE2StorageShare OBJECT-CLASS ::= {
 *   SUBCLASS OF               { gLUE2Share }
 *   MUST CONTAIN              { gLUE2StorageShareServingState
 *                               | gLUE2StorageShareSharingID
 *                               | gLUE2StorageShareAccessLatency }
 *   MAY CONTAIN               { gLUE2StorageSharePath
 *                               | gLUE2StorageShareAccessMode
 *                               | gLUE2StorageShareRetentionPolicy
 *                               | gLUE2StorageShareExpirationMode
 *                               | gLUE2StorageShareDefaultLifeTime
 *                               | gLUE2StorageShareMaximumLifeTime
 *                               | gLUE2StorageShareTag
 *                               | gLUE2StorageShareStorageEndpointForeignKey
 *                               | gLUE2StorageShareDataStoreForeignKey
 *                               | gLUE2StorageShareStorageServiceForeignKey }
 *   LDAP-NAME                 {"GLUE2StorageShare"}
 *   LDAP-DESC                 "A utilization target for a set of storage resources defined by a set of configuration parameters and characterized by status information"
 *   ID                        id-oc-gLUE2StorageShare }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const gLUE2StorageShare: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [gLUE2Share] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [gLUE2StorageShareServingState, gLUE2StorageShareSharingID, gLUE2StorageShareAccessLatency] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [gLUE2StorageSharePath, gLUE2StorageShareAccessMode, gLUE2StorageShareRetentionPolicy, gLUE2StorageShareExpirationMode, gLUE2StorageShareDefaultLifeTime, gLUE2StorageShareMaximumLifeTime, gLUE2StorageShareTag, gLUE2StorageShareStorageEndpointForeignKey, gLUE2StorageShareDataStoreForeignKey, gLUE2StorageShareStorageServiceForeignKey] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["GLUE2StorageShare"],
    "&ldapDesc": "A utilization target for a set of storage resources defined by a set of configuration parameters and characterized by status information" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_gLUE2StorageShare /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
