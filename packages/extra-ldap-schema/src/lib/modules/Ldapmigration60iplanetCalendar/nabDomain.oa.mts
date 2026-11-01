/* eslint-disable */

import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";

import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_nabDomain } from "../Ldapmigration60iplanetCalendar/id-oc-nabDomain.va.mjs";

import { nabDomainNames } from "../Ldapmigration60iplanetCalendar/nabDomainNames.oa.mjs";
import { nabStatus } from "../Ldapmigration60iplanetCalendar/nabStatus.oa.mjs";
import { davAllowedServices } from "../Ldapmigration60iplanetCalendar/davAllowedServices.oa.mjs";
import { nabDomainAcl } from "../Ldapmigration60iplanetCalendar/nabDomainAcl.oa.mjs";
import { nabStore } from "../Ldapmigration60iplanetCalendar/nabStore.oa.mjs";
/**
 * @summary nabDomain
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * nabDomain OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { nabDomainNames
 *                               | nabStatus
 *                               | davAllowedServices
 *                               | nabDomainAcl
 *                               | nabStore }
 *   LDAP-NAME                 {"nabDomain"}
 *   LDAP-DESC                 "NAB Domain Object Class"
 *   ID                        id-oc-nabDomain }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const nabDomain: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ nabDomainNames, nabStatus, davAllowedServices, nabDomainAcl, nabStore, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "nabDomain" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "NAB Domain Object Class" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_nabDomain /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
