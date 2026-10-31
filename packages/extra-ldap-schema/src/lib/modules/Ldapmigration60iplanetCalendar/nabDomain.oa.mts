/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_nabDomain } from "../Ldapmigration60iplanetCalendar/id-oc-nabDomain.va.mjs";
import { davAllowedServices } from "./davAllowedServices.oa.mjs";
import { nabDomainAcl } from "./nabDomainAcl.oa.mjs";
import { nabDomainNames } from "./nabDomainNames.oa.mjs";
import { nabStatus } from "./nabStatus.oa.mjs";
import { nabStore } from "./nabStore.oa.mjs";

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
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [nabDomainNames, nabStatus, davAllowedServices, nabDomainAcl, nabStore] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["nabDomain"],
    "&ldapDesc": "NAB Domain Object Class" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_nabDomain /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
