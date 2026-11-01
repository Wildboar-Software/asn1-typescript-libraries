/* eslint-disable */

import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";

import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_courierDomainAlias } from "../LdapSchema2ldifCourier/id-oc-courierDomainAlias.va.mjs";

import { mailsource } from "../LdapSchema2ldifCourier/mailsource.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { virtualdomain } from "../LdapSchema2ldifCourier/virtualdomain.oa.mjs";
import { virtualdomainuser } from "../LdapSchema2ldifCourier/virtualdomainuser.oa.mjs";
/**
 * @summary courierDomainAlias
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * courierDomainAlias OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { virtualdomain
 *                               | virtualdomainuser }
 *   MAY CONTAIN               { mailsource
 *                               | description }
 *   LDAP-NAME                 {"CourierDomainAlias"}
 *   LDAP-DESC                 "Domain mail aliasing/forwarding entry"
 *   ID                        id-oc-courierDomainAlias }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const courierDomainAlias: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ virtualdomain, virtualdomainuser, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ mailsource, description, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "CourierDomainAlias" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Domain mail aliasing/forwarding entry" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_courierDomainAlias /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
