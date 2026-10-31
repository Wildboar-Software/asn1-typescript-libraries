/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { gLUE2Domain } from "../LdapGlue505Domain/gLUE2Domain.oa.mjs";
import { id_oc_gLUE2UserDomain } from "../LdapGlue505Domain/id-oc-gLUE2UserDomain.va.mjs";
import { gLUE2UserDomainLevel } from "./gLUE2UserDomainLevel.oa.mjs";
import { gLUE2UserDomainMember } from "./gLUE2UserDomainMember.oa.mjs";
import { gLUE2UserDomainUserDomainForeignKey } from "./gLUE2UserDomainUserDomainForeignKey.oa.mjs";
import { gLUE2UserDomainUserManager } from "./gLUE2UserDomainUserManager.oa.mjs";

/**
 * @summary gLUE2UserDomain
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gLUE2UserDomain OBJECT-CLASS ::= {
 *   SUBCLASS OF               { gLUE2Domain }
 *   MAY CONTAIN               { gLUE2UserDomainLevel
 *                               | gLUE2UserDomainUserManager
 *                               | gLUE2UserDomainMember
 *                               | gLUE2UserDomainUserDomainForeignKey }
 *   LDAP-NAME                 {"GLUE2UserDomain"}
 *   LDAP-DESC                 "A collection of actors that can be assigned with user roles and privileges to services or shares via policies"
 *   ID                        id-oc-gLUE2UserDomain }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const gLUE2UserDomain: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [gLUE2Domain] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [gLUE2UserDomainLevel, gLUE2UserDomainUserManager, gLUE2UserDomainMember, gLUE2UserDomainUserDomainForeignKey] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["GLUE2UserDomain"],
    "&ldapDesc": "A collection of actors that can be assigned with user roles and privileges to services or shares via policies" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_gLUE2UserDomain /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
