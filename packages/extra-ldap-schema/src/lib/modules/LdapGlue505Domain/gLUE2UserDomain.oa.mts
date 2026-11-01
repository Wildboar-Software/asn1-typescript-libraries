/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { gLUE2Domain } from "../LdapGlue505Domain/gLUE2Domain.oa.mjs";
import { id_oc_gLUE2UserDomain } from "../LdapGlue505Domain/id-oc-gLUE2UserDomain.va.mjs";
import { gLUE2UserDomainLevel } from "../LdapGlue505Domain/gLUE2UserDomainLevel.oa.mjs";
import { gLUE2UserDomainUserManager } from "../LdapGlue505Domain/gLUE2UserDomainUserManager.oa.mjs";
import { gLUE2UserDomainMember } from "../LdapGlue505Domain/gLUE2UserDomainMember.oa.mjs";
import { gLUE2UserDomainUserDomainForeignKey } from "../LdapGlue505Domain/gLUE2UserDomainUserDomainForeignKey.oa.mjs";


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
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ gLUE2Domain, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ gLUE2UserDomainLevel, gLUE2UserDomainUserManager, gLUE2UserDomainMember, gLUE2UserDomainUserDomainForeignKey, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "GLUE2UserDomain" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "A collection of actors that can be assigned with user roles and privileges to services or shares via policies" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_gLUE2UserDomain /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

