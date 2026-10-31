/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { gLUE2Service } from "../LdapGlue506Service/gLUE2Service.oa.mjs";
import { id_oc_gLUE2StorageService } from "../LdapGlue701StorageService/id-oc-gLUE2StorageService.va.mjs";

/**
 * @summary gLUE2StorageService
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gLUE2StorageService OBJECT-CLASS ::= {
 *   SUBCLASS OF               { gLUE2Service }
 *   LDAP-NAME                 {"GLUE2StorageService"}
 *   LDAP-DESC                 "Description of the size and state of an homogeneous storage extent"
 *   ID                        id-oc-gLUE2StorageService }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const gLUE2StorageService: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [gLUE2Service] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["GLUE2StorageService"],
    "&ldapDesc": "Description of the size and state of an homogeneous storage extent" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_gLUE2StorageService /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
