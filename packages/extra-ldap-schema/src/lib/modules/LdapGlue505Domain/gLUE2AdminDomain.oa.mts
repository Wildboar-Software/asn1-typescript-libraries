/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { gLUE2Domain } from "../LdapGlue505Domain/gLUE2Domain.oa.mjs";
import { id_oc_gLUE2AdminDomain } from "../LdapGlue505Domain/id-oc-gLUE2AdminDomain.va.mjs";
import { gLUE2AdminDomainAdminDomainForeignKey } from "./gLUE2AdminDomainAdminDomainForeignKey.oa.mjs";
import { gLUE2AdminDomainDistributed } from "./gLUE2AdminDomainDistributed.oa.mjs";
import { gLUE2AdminDomainOwner } from "./gLUE2AdminDomainOwner.oa.mjs";

/**
 * @summary gLUE2AdminDomain
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gLUE2AdminDomain OBJECT-CLASS ::= {
 *   SUBCLASS OF               { gLUE2Domain }
 *   MAY CONTAIN               { gLUE2AdminDomainDistributed
 *                               | gLUE2AdminDomainOwner
 *                               | gLUE2AdminDomainAdminDomainForeignKey }
 *   LDAP-NAME                 {"GLUE2AdminDomain"}
 *   LDAP-DESC                 "A collection of actors that can be assigned with administrative roles and privileges to services via policies. An AdminDomain manages services that can be geographically distributed, nevertheless a primary location should be identified."
 *   ID                        id-oc-gLUE2AdminDomain }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const gLUE2AdminDomain: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [gLUE2Domain] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [gLUE2AdminDomainDistributed, gLUE2AdminDomainOwner, gLUE2AdminDomainAdminDomainForeignKey] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["GLUE2AdminDomain"],
    "&ldapDesc": "A collection of actors that can be assigned with administrative roles and privileges to services via policies. An AdminDomain manages services that can be geographically distributed, nevertheless a primary location should be identified." /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_gLUE2AdminDomain /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
