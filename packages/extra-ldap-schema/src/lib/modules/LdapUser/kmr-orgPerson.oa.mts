/* eslint-disable */

import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";

import { inetOrgPerson } from "../InetOrgPerson/inetOrgPerson.oa.mjs";
import { id_oc_kmr_orgPerson } from "../LdapUser/id-oc-kmr-orgPerson.va.mjs";

import { languages } from "../LdapUser/languages.oa.mjs";
import { gender } from "../LdapUser/gender.oa.mjs";
import { orgCode } from "../LdapUser/orgCode.oa.mjs";
import { locationCode } from "../LdapUser/locationCode.oa.mjs";
import { preferredContactMethod } from "../LdapUser/preferredContactMethod.oa.mjs";
import { npi } from "../LdapUser/npi.oa.mjs";
import { providerTaxonomy } from "../LdapUser/providerTaxonomy.oa.mjs";
/**
 * @summary kmr_orgPerson
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * kmr-orgPerson OBJECT-CLASS ::= {
 *   SUBCLASS OF               { inetOrgPerson }
 *   MAY CONTAIN               { languages
 *                               | gender
 *                               | orgCode
 *                               | locationCode
 *                               | preferredContactMethod
 *                               | npi
 *                               | providerTaxonomy }
 *   LDAP-NAME                 {"kmr-orgPerson"}
 *   ID                        id-oc-kmr-orgPerson }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const kmr_orgPerson: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ inetOrgPerson, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ languages, gender, orgCode, locationCode, preferredContactMethod, npi, providerTaxonomy, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "kmr-orgPerson" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_kmr_orgPerson /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
