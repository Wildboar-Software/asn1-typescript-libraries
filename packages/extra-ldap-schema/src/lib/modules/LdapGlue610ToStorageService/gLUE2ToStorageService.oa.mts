/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { gLUE2Entity } from "../LdapGlue501Entity/gLUE2Entity.oa.mjs";
import { id_oc_gLUE2ToStorageService } from "../LdapGlue610ToStorageService/id-oc-gLUE2ToStorageService.va.mjs";
import { gLUE2ToStorageServiceComputingServiceForeignKey } from "./gLUE2ToStorageServiceComputingServiceForeignKey.oa.mjs";
import { gLUE2ToStorageServiceID } from "./gLUE2ToStorageServiceID.oa.mjs";
import { gLUE2ToStorageServiceLocalPath } from "./gLUE2ToStorageServiceLocalPath.oa.mjs";
import { gLUE2ToStorageServiceRemotePath } from "./gLUE2ToStorageServiceRemotePath.oa.mjs";
import { gLUE2ToStorageServiceStorageServiceForeignKey } from "./gLUE2ToStorageServiceStorageServiceForeignKey.oa.mjs";

/**
 * @summary gLUE2ToStorageService
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gLUE2ToStorageService OBJECT-CLASS ::= {
 *   SUBCLASS OF               { gLUE2Entity }
 *   MUST CONTAIN              { gLUE2ToStorageServiceID
 *                               | gLUE2ToStorageServiceLocalPath
 *                               | gLUE2ToStorageServiceRemotePath
 *                               | gLUE2ToStorageServiceComputingServiceForeignKey
 *                               | gLUE2ToStorageServiceStorageServiceForeignKey }
 *   LDAP-NAME                 {"GLUE2ToStorageService"}
 *   LDAP-DESC                 "Description of a POSIX access via a file system technology enabling the computing service to access the associated storage service"
 *   ID                        id-oc-gLUE2ToStorageService }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const gLUE2ToStorageService: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [gLUE2Entity] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [gLUE2ToStorageServiceID, gLUE2ToStorageServiceLocalPath, gLUE2ToStorageServiceRemotePath, gLUE2ToStorageServiceComputingServiceForeignKey, gLUE2ToStorageServiceStorageServiceForeignKey] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["GLUE2ToStorageService"],
    "&ldapDesc": "Description of a POSIX access via a file system technology enabling the computing service to access the associated storage service" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_gLUE2ToStorageService /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
