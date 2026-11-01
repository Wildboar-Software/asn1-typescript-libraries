/* eslint-disable */

import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";

import { gLUE2Entity } from "../LdapGlue501Entity/gLUE2Entity.oa.mjs";
import { id_oc_gLUE2Service } from "../LdapGlue506Service/id-oc-gLUE2Service.va.mjs";

import { gLUE2ServiceCapability } from "../LdapGlue506Service/gLUE2ServiceCapability.oa.mjs";
import { gLUE2ServiceStatusInfo } from "../LdapGlue506Service/gLUE2ServiceStatusInfo.oa.mjs";
import { gLUE2ServiceComplexity } from "../LdapGlue506Service/gLUE2ServiceComplexity.oa.mjs";
import { gLUE2ServiceServiceForeignKey } from "../LdapGlue506Service/gLUE2ServiceServiceForeignKey.oa.mjs";
import { gLUE2ServiceID } from "../LdapGlue506Service/gLUE2ServiceID.oa.mjs";
import { gLUE2ServiceType } from "../LdapGlue506Service/gLUE2ServiceType.oa.mjs";
import { gLUE2ServiceQualityLevel } from "../LdapGlue506Service/gLUE2ServiceQualityLevel.oa.mjs";
import { gLUE2ServiceAdminDomainForeignKey } from "../LdapGlue506Service/gLUE2ServiceAdminDomainForeignKey.oa.mjs";
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
const gLUE2Service: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ gLUE2Entity, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ gLUE2ServiceID, gLUE2ServiceType, gLUE2ServiceQualityLevel, gLUE2ServiceAdminDomainForeignKey, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ gLUE2ServiceCapability, gLUE2ServiceStatusInfo, gLUE2ServiceComplexity, gLUE2ServiceServiceForeignKey, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "GLUE2Service" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "An abstracted, logical view of actual software components that participate in the creation of an entity providing one or more functionalities useful in a Grid environment. A service exposes zero or more endpoints having well-defined interfaces, zero or more shares and zero or more managers and the related resources. The service is autonomous and denotes a weak aggregation among endpoints, the underlying managers and the related resources, and the defined shares. The service enables to identify the whole set of entities providing the functionality with a persistent name." /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_gLUE2Service /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
