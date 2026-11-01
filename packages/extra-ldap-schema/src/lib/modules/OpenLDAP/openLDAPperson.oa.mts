/* eslint-disable */
import {
    ObjectIdentifier as _OID,
} from "@wildboar/asn1";

import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";

import { id_openldap_oc } from "../OpenLDAP/id-openldap-oc.va.mjs";

import { givenName } from "../SelectedAttributeTypes/givenName.oa.mjs";
import { labeledURI } from "../OpenLDAPCoreSchema/labeledURI.oa.mjs";
import { organizationName } from "../SelectedAttributeTypes/organizationName.oa.mjs";
import { uid } from "../SelectedAttributeTypes/uid.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { pilotPerson } from "../LdapSchema2ldifCosine/pilotPerson.oa.mjs";
import { inetOrgPerson } from "../InetOrgPerson/inetOrgPerson.oa.mjs";
/**
 * @summary openLDAPperson
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * openLDAPperson OBJECT-CLASS ::= {
 *     SUBCLASS OF     {pilotPerson | inetOrgPerson}
 *     KIND            structural
 *     MUST CONTAIN    {uid | commonName}
 *     MAY CONTAIN     {givenName | labeledURI | organizationName}
 *     LDAP-NAME        {"OpenLDAPperson"}
 *     LDAP-DESC       "OpenLDAP Person"
 *     ID                { id-openldap-oc 5 }
 * }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const openLDAPperson: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ pilotPerson, inetOrgPerson, ] /* OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ uid, commonName, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ givenName, labeledURI, organizationName, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "OpenLDAPperson" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "OpenLDAP Person" /* OBJECT_FIELD_SETTING */,
    "&id": _OID.fromParts([5,], id_openldap_oc) /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
