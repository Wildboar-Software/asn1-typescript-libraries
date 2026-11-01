/* eslint-disable */

import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";

import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_inetDomainAuthInfo } from "../Ldapmigration55imsIcal/id-oc-inetDomainAuthInfo.va.mjs";

import { inetDomainSearchFilter } from "../Ldapmigration55imsIcal/inetDomainSearchFilter.oa.mjs";
import { inetDomainCertMap } from "../Ldapmigration55imsIcal/inetDomainCertMap.oa.mjs";
import { domainUidSeparator } from "../Ldapmigration55imsIcal/domainUidSeparator.oa.mjs";
import { inetCanonicalDomainName } from "../Ldapmigration55imsIcal/inetCanonicalDomainName.oa.mjs";
import { externalAuthPreUrlTemplate } from "../Ldapmigration55imsIcal/externalAuthPreUrlTemplate.oa.mjs";
import { externalAuthPostUrlTemplate } from "../Ldapmigration55imsIcal/externalAuthPostUrlTemplate.oa.mjs";
/**
 * @summary inetDomainAuthInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * inetDomainAuthInfo OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { inetDomainSearchFilter
 *                               | inetDomainCertMap
 *                               | domainUidSeparator
 *                               | inetCanonicalDomainName
 *                               | externalAuthPreUrlTemplate
 *                               | externalAuthPostUrlTemplate }
 *   LDAP-NAME                 {"inetDomainAuthInfo"}
 *   LDAP-DESC                 "auxiliary class for misc hosted domain attributes"
 *   ID                        id-oc-inetDomainAuthInfo }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const inetDomainAuthInfo: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ inetDomainSearchFilter, inetDomainCertMap, domainUidSeparator, inetCanonicalDomainName, externalAuthPreUrlTemplate, externalAuthPostUrlTemplate, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "inetDomainAuthInfo" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "auxiliary class for misc hosted domain attributes" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_inetDomainAuthInfo /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
