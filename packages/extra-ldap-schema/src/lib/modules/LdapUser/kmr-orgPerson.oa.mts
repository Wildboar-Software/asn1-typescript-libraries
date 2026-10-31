/* eslint-disable */
import { inetOrgPerson } from "../InetOrgPerson/inetOrgPerson.oa.mjs";
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { id_oc_kmr_orgPerson } from "../LdapUser/id-oc-kmr-orgPerson.va.mjs";
import { gender } from "./gender.oa.mjs";
import { languages } from "./languages.oa.mjs";
import { locationCode } from "./locationCode.oa.mjs";
import { npi } from "./npi.oa.mjs";
import { orgCode } from "./orgCode.oa.mjs";
import { preferredContactMethod } from "./preferredContactMethod.oa.mjs";
import { providerTaxonomy } from "./providerTaxonomy.oa.mjs";

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
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [inetOrgPerson] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [languages, gender, orgCode, locationCode, preferredContactMethod, npi, providerTaxonomy] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["kmr-orgPerson"],
    "&id": id_oc_kmr_orgPerson /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
