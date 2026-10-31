/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { domainName } from "../LdapExcisionMail/domainName.oa.mjs";
import { id_oc_mailDomain } from "../LdapExcisionMail/id-oc-mailDomain.va.mjs";
import { allowList } from "./allowList.oa.mjs";
import { blockList } from "./blockList.oa.mjs";
import { domainAdmin } from "./domainAdmin.oa.mjs";
import { domainDefaultQuota } from "./domainDefaultQuota.oa.mjs";
import { domainStatus } from "./domainStatus.oa.mjs";

/**
 * @summary mailDomain
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * mailDomain OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { domainName }
 *   MAY CONTAIN               { blockList
 *                               | allowList
 *                               | domainAdmin
 *                               | domainStatus
 *                               | domainDefaultQuota }
 *   LDAP-NAME                 {"mailDomain"}
 *   LDAP-DESC                 "Virtual mail domain"
 *   ID                        id-oc-mailDomain }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const mailDomain: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [domainName] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [blockList, allowList, domainAdmin, domainStatus, domainDefaultQuota] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["mailDomain"],
    "&ldapDesc": "Virtual mail domain" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_mailDomain /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
