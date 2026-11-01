/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { gLUE2StorageManagerStorageServiceForeignKey } from "../LdapGlue707StorageManager/gLUE2StorageManagerStorageServiceForeignKey.oa.mjs";
import { id_oc_gLUE2StorageManager } from "../LdapGlue707StorageManager/id-oc-gLUE2StorageManager.va.mjs";


/**
 * @summary gLUE2StorageManager
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gLUE2StorageManager OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MAY CONTAIN               { gLUE2StorageManagerStorageServiceForeignKey }
 *   LDAP-NAME                 {"GLUE2StorageManager"}
 *   LDAP-DESC                 "The primary software component locally managing one or more storage resources. It can describe also aggregated information about the managed resources."
 *   ID                        id-oc-gLUE2StorageManager }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const gLUE2StorageManager: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ gLUE2StorageManagerStorageServiceForeignKey, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "GLUE2StorageManager" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "The primary software component locally managing one or more storage resources. It can describe also aggregated information about the managed resources." /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_gLUE2StorageManager /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

