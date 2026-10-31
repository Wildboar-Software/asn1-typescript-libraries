/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { gLUE2Entity } from "../LdapGlue501Entity/gLUE2Entity.oa.mjs";
// export { id_oc_gLUE2ToComputingService } from "../LdapGlue709ToComputingService/id-oc-gLUE2ToComputingService.va.mjs";


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
const gLUE2ToComputingService: OBJECT_CLASS = undefined;

/* eslint-enable */
