/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { gLUE2Entity } from "../LdapGlue501Entity/gLUE2Entity.oa.mjs";
// export { gLUE2Entity } from "../LdapGlue501Entity/gLUE2Entity.oa.mjs";
import { id_oc_gLUE2ToStorageService } from "../LdapGlue610ToStorageService/id-oc-gLUE2ToStorageService.va.mjs";
import { gLUE2ToStorageServiceID } from "../LdapGlue610ToStorageService/gLUE2ToStorageServiceID.oa.mjs";
import { gLUE2ToStorageServiceLocalPath } from "../LdapGlue610ToStorageService/gLUE2ToStorageServiceLocalPath.oa.mjs";
import { gLUE2ToStorageServiceRemotePath } from "../LdapGlue610ToStorageService/gLUE2ToStorageServiceRemotePath.oa.mjs";
import { gLUE2ToStorageServiceComputingServiceForeignKey } from "../LdapGlue610ToStorageService/gLUE2ToStorageServiceComputingServiceForeignKey.oa.mjs";
import { gLUE2ToStorageServiceStorageServiceForeignKey } from "../LdapGlue610ToStorageService/gLUE2ToStorageServiceStorageServiceForeignKey.oa.mjs";
// export { id_oc_gLUE2ToStorageService } from "../LdapGlue610ToStorageService/id-oc-gLUE2ToStorageService.va.mjs";


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
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ gLUE2Entity, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ gLUE2ToStorageServiceID, gLUE2ToStorageServiceLocalPath, gLUE2ToStorageServiceRemotePath, gLUE2ToStorageServiceComputingServiceForeignKey, gLUE2ToStorageServiceStorageServiceForeignKey, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "GLUE2ToStorageService" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Description of a POSIX access via a file system technology enabling the computing service to access the associated storage service" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_gLUE2ToStorageService /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
