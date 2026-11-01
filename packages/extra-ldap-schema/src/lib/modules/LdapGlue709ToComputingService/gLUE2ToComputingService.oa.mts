/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { gLUE2Entity } from "../LdapGlue501Entity/gLUE2Entity.oa.mjs";
import { id_oc_gLUE2ToComputingService } from "../LdapGlue709ToComputingService/id-oc-gLUE2ToComputingService.va.mjs";
import { gLUE2ToComputingServiceID } from "../LdapGlue709ToComputingService/gLUE2ToComputingServiceID.oa.mjs";
import { gLUE2ToComputingServiceComputingServiceForeignKey } from "../LdapGlue709ToComputingService/gLUE2ToComputingServiceComputingServiceForeignKey.oa.mjs";
import { gLUE2ToComputingServiceStorageServiceForeignKey } from "../LdapGlue709ToComputingService/gLUE2ToComputingServiceStorageServiceForeignKey.oa.mjs";
import { gLUE2ToComputingServiceNetworkInfo } from "../LdapGlue709ToComputingService/gLUE2ToComputingServiceNetworkInfo.oa.mjs";
import { gLUE2ToComputingServiceBandwidth } from "../LdapGlue709ToComputingService/gLUE2ToComputingServiceBandwidth.oa.mjs";
import { gLUE2ToComputingServiceStorageAccessProtocolForeignKey } from "../LdapGlue709ToComputingService/gLUE2ToComputingServiceStorageAccessProtocolForeignKey.oa.mjs";


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
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ gLUE2Entity, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ gLUE2ToComputingServiceID, gLUE2ToComputingServiceComputingServiceForeignKey, gLUE2ToComputingServiceStorageServiceForeignKey, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ gLUE2ToComputingServiceNetworkInfo, gLUE2ToComputingServiceBandwidth, gLUE2ToComputingServiceStorageAccessProtocolForeignKey, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "GLUE2ToComputingService" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Description of the network link quality of a storage service to a computing service" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_gLUE2ToComputingService /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

