/* eslint-disable */

import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";

import { ipaAssociation } from "../Ldap60basev2/ipaAssociation.oa.mjs";
import { id_oc_ipaNISNetgroup } from "../Ldap60basev2/id-oc-ipaNISNetgroup.va.mjs";

import { externalHost } from "../Ldap60basev2/externalHost.oa.mjs";
import { nisDomainName } from "../Ldap60basev2/nisDomainName.oa.mjs";
import { member } from "../SelectedAttributeTypes/member.oa.mjs";
import { memberOf } from "../MSUser/memberOf.oa.mjs";
/**
 * @summary ipaNISNetgroup
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ipaNISNetgroup OBJECT-CLASS ::= {
 *   SUBCLASS OF               { ipaAssociation }
 *   MAY CONTAIN               { externalHost
 *                               | nisDomainName
 *                               | member
 *                               | memberOf }
 *   LDAP-NAME                 {"ipaNISNetgroup"}
 *   LDAP-DESC                 "IPA version of NIS netgroup"
 *   ID                        id-oc-ipaNISNetgroup }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const ipaNISNetgroup: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ ipaAssociation, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ externalHost, nisDomainName, member, memberOf, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "ipaNISNetgroup" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "IPA version of NIS netgroup" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_ipaNISNetgroup /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
