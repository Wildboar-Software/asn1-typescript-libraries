/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { id_oc_ipaNISNetgroup } from "../Ldap60basev2/id-oc-ipaNISNetgroup.va.mjs";
import { ipaAssociation } from "../Ldap60basev2/ipaAssociation.oa.mjs";
import { memberOf } from "../MSUser/memberOf.oa.mjs";
import { member } from "../SelectedAttributeTypes/member.oa.mjs";
import { externalHost } from "./externalHost.oa.mjs";
import { nisDomainName } from "./nisDomainName.oa.mjs";

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
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [ipaAssociation] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [externalHost, nisDomainName, member, memberOf] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["ipaNISNetgroup"],
    "&ldapDesc": "IPA version of NIS netgroup" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_ipaNISNetgroup /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
