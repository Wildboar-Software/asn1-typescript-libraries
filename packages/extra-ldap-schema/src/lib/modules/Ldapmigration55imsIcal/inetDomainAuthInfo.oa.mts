/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_inetDomainAuthInfo } from "../Ldapmigration55imsIcal/id-oc-inetDomainAuthInfo.va.mjs";
import { domainUidSeparator } from "./domainUidSeparator.oa.mjs";
import { externalAuthPostUrlTemplate } from "./externalAuthPostUrlTemplate.oa.mjs";
import { externalAuthPreUrlTemplate } from "./externalAuthPreUrlTemplate.oa.mjs";
import { inetCanonicalDomainName } from "./inetCanonicalDomainName.oa.mjs";
import { inetDomainCertMap } from "./inetDomainCertMap.oa.mjs";
import { inetDomainSearchFilter } from "./inetDomainSearchFilter.oa.mjs";

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
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [inetDomainSearchFilter, inetDomainCertMap, domainUidSeparator, inetCanonicalDomainName, externalAuthPreUrlTemplate, externalAuthPostUrlTemplate] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["inetDomainAuthInfo"],
    "&ldapDesc": "auxiliary class for misc hosted domain attributes" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_inetDomainAuthInfo /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
