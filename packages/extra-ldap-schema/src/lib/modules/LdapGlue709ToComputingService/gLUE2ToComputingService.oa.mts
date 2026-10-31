/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { gLUE2Entity } from "../LdapGlue501Entity/gLUE2Entity.oa.mjs";
import { id_oc_gLUE2ToComputingService } from "../LdapGlue709ToComputingService/id-oc-gLUE2ToComputingService.va.mjs";
import { gLUE2ToComputingServiceBandwidth } from "./gLUE2ToComputingServiceBandwidth.oa.mjs";
import { gLUE2ToComputingServiceComputingServiceForeignKey } from "./gLUE2ToComputingServiceComputingServiceForeignKey.oa.mjs";
import { gLUE2ToComputingServiceID } from "./gLUE2ToComputingServiceID.oa.mjs";
import { gLUE2ToComputingServiceNetworkInfo } from "./gLUE2ToComputingServiceNetworkInfo.oa.mjs";
import { gLUE2ToComputingServiceStorageAccessProtocolForeignKey } from "./gLUE2ToComputingServiceStorageAccessProtocolForeignKey.oa.mjs";
import { gLUE2ToComputingServiceStorageServiceForeignKey } from "./gLUE2ToComputingServiceStorageServiceForeignKey.oa.mjs";

/**
 * @summary gLUE2ToComputingService
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gLUE2ToComputingService OBJECT-CLASS ::= {
 *   SUBCLASS OF               { gLUE2Entity }
 *   MUST CONTAIN              { gLUE2ToComputingServiceID
 *                               | gLUE2ToComputingServiceComputingServiceForeignKey
 *                               | gLUE2ToComputingServiceStorageServiceForeignKey }
 *   MAY CONTAIN               { gLUE2ToComputingServiceNetworkInfo
 *                               | gLUE2ToComputingServiceBandwidth
 *                               | gLUE2ToComputingServiceStorageAccessProtocolForeignKey }
 *   LDAP-NAME                 {"GLUE2ToComputingService"}
 *   LDAP-DESC                 "Description of the network link quality of a storage service to a computing service"
 *   ID                        id-oc-gLUE2ToComputingService }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const gLUE2ToComputingService: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [gLUE2Entity] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [gLUE2ToComputingServiceID, gLUE2ToComputingServiceComputingServiceForeignKey, gLUE2ToComputingServiceStorageServiceForeignKey] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [gLUE2ToComputingServiceNetworkInfo, gLUE2ToComputingServiceBandwidth, gLUE2ToComputingServiceStorageAccessProtocolForeignKey] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["GLUE2ToComputingService"],
    "&ldapDesc": "Description of the network link quality of a storage service to a computing service" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_gLUE2ToComputingService /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
