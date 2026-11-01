/* eslint-disable */

import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";

import { top } from "../InformationFramework/top.oa.mjs";
import { domainName } from "../LdapExcisionMail/domainName.oa.mjs";
import { id_oc_mailDomain } from "../LdapExcisionMail/id-oc-mailDomain.va.mjs";

import { blockList } from "../LdapExcisionMail/blockList.oa.mjs";
import { allowList } from "../LdapExcisionMail/allowList.oa.mjs";
import { domainAdmin } from "../LdapExcisionMail/domainAdmin.oa.mjs";
import { domainStatus } from "../LdapExcisionMail/domainStatus.oa.mjs";
import { domainDefaultQuota } from "../LdapExcisionMail/domainDefaultQuota.oa.mjs";
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
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ domainName, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ blockList, allowList, domainAdmin, domainStatus, domainDefaultQuota, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "mailDomain" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Virtual mail domain" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_mailDomain /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
