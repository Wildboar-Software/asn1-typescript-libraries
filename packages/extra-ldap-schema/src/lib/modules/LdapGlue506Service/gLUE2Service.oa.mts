/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { gLUE2Entity } from "../LdapGlue501Entity/gLUE2Entity.oa.mjs";
// export { id_oc_gLUE2Service } from "../LdapGlue506Service/id-oc-gLUE2Service.va.mjs";


/**
 * @summary gLUE2Service
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gLUE2Service OBJECT-CLASS ::= {
 *   SUBCLASS OF               { gLUE2Entity }
 *   MUST CONTAIN              { gLUE2ServiceID
 *                               | gLUE2ServiceType
 *                               | gLUE2ServiceQualityLevel
 *                               | gLUE2ServiceAdminDomainForeignKey }
 *   MAY CONTAIN               { gLUE2ServiceCapability
 *                               | gLUE2ServiceStatusInfo
 *                               | gLUE2ServiceComplexity
 *                               | gLUE2ServiceServiceForeignKey }
 *   LDAP-NAME                 {"GLUE2Service"}
 *   LDAP-DESC                 "An abstracted, logical view of actual software components that participate in the creation of an entity providing one or more functionalities useful in a Grid environment. A service exposes zero or more endpoints having well-defined interfaces, zero or more shares and zero or more managers and the related resources. The service is autonomous and denotes a weak aggregation among endpoints, the underlying managers and the related resources, and the defined shares. The service enables to identify the whole set of entities providing the functionality with a persistent name."
 *   ID                        id-oc-gLUE2Service }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const gLUE2Service: OBJECT_CLASS = undefined;

/* eslint-enable */
