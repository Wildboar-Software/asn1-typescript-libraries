/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { gLUE2Share } from "../LdapGlue508Share/gLUE2Share.oa.mjs";
import { id_oc_gLUE2StorageShare } from "../LdapGlue705StorageShare/id-oc-gLUE2StorageShare.va.mjs";
import { gLUE2StorageShareServingState } from "../LdapGlue705StorageShare/gLUE2StorageShareServingState.oa.mjs";
import { gLUE2StorageShareSharingID } from "../LdapGlue705StorageShare/gLUE2StorageShareSharingID.oa.mjs";
import { gLUE2StorageShareAccessLatency } from "../LdapGlue705StorageShare/gLUE2StorageShareAccessLatency.oa.mjs";
import { gLUE2StorageSharePath } from "../LdapGlue705StorageShare/gLUE2StorageSharePath.oa.mjs";
import { gLUE2StorageShareAccessMode } from "../LdapGlue705StorageShare/gLUE2StorageShareAccessMode.oa.mjs";
import { gLUE2StorageShareRetentionPolicy } from "../LdapGlue705StorageShare/gLUE2StorageShareRetentionPolicy.oa.mjs";
import { gLUE2StorageShareExpirationMode } from "../LdapGlue705StorageShare/gLUE2StorageShareExpirationMode.oa.mjs";
import { gLUE2StorageShareDefaultLifeTime } from "../LdapGlue705StorageShare/gLUE2StorageShareDefaultLifeTime.oa.mjs";
import { gLUE2StorageShareMaximumLifeTime } from "../LdapGlue705StorageShare/gLUE2StorageShareMaximumLifeTime.oa.mjs";
import { gLUE2StorageShareTag } from "../LdapGlue705StorageShare/gLUE2StorageShareTag.oa.mjs";
import { gLUE2StorageShareStorageEndpointForeignKey } from "../LdapGlue705StorageShare/gLUE2StorageShareStorageEndpointForeignKey.oa.mjs";
import { gLUE2StorageShareDataStoreForeignKey } from "../LdapGlue705StorageShare/gLUE2StorageShareDataStoreForeignKey.oa.mjs";
import { gLUE2StorageShareStorageServiceForeignKey } from "../LdapGlue705StorageShare/gLUE2StorageShareStorageServiceForeignKey.oa.mjs";


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
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ gLUE2Share, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ gLUE2StorageShareServingState, gLUE2StorageShareSharingID, gLUE2StorageShareAccessLatency, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ gLUE2StorageSharePath, gLUE2StorageShareAccessMode, gLUE2StorageShareRetentionPolicy, gLUE2StorageShareExpirationMode, gLUE2StorageShareDefaultLifeTime, gLUE2StorageShareMaximumLifeTime, gLUE2StorageShareTag, gLUE2StorageShareStorageEndpointForeignKey, gLUE2StorageShareDataStoreForeignKey, gLUE2StorageShareStorageServiceForeignKey, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "GLUE2StorageShare" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "A utilization target for a set of storage resources defined by a set of configuration parameters and characterized by status information" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_gLUE2StorageShare /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

