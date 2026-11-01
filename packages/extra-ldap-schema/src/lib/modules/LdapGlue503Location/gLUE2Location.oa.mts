/* eslint-disable */

import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";

import { gLUE2Entity } from "../LdapGlue501Entity/gLUE2Entity.oa.mjs";
import { gLUE2LocationID } from "../LdapGlue503Location/gLUE2LocationID.oa.mjs";
import { id_oc_gLUE2Location } from "../LdapGlue503Location/id-oc-gLUE2Location.va.mjs";

import { gLUE2LocationAddress } from "../LdapGlue503Location/gLUE2LocationAddress.oa.mjs";
import { gLUE2LocationPlace } from "../LdapGlue503Location/gLUE2LocationPlace.oa.mjs";
import { gLUE2LocationCountry } from "../LdapGlue503Location/gLUE2LocationCountry.oa.mjs";
import { gLUE2LocationPostCode } from "../LdapGlue503Location/gLUE2LocationPostCode.oa.mjs";
import { gLUE2LocationLatitude } from "../LdapGlue503Location/gLUE2LocationLatitude.oa.mjs";
import { gLUE2LocationLongitude } from "../LdapGlue503Location/gLUE2LocationLongitude.oa.mjs";
import { gLUE2LocationServiceForeignKey } from "../LdapGlue503Location/gLUE2LocationServiceForeignKey.oa.mjs";
import { gLUE2LocationDomainForeignKey } from "../LdapGlue503Location/gLUE2LocationDomainForeignKey.oa.mjs";
/**
 * @summary gLUE2Location
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gLUE2Location OBJECT-CLASS ::= {
 *   SUBCLASS OF               { gLUE2Entity }
 *   MUST CONTAIN              { gLUE2LocationID }
 *   MAY CONTAIN               { gLUE2LocationAddress
 *                               | gLUE2LocationPlace
 *                               | gLUE2LocationCountry
 *                               | gLUE2LocationPostCode
 *                               | gLUE2LocationLatitude
 *                               | gLUE2LocationLongitude
 *                               | gLUE2LocationServiceForeignKey
 *                               | gLUE2LocationDomainForeignKey }
 *   LDAP-NAME                 {"GLUE2Location"}
 *   LDAP-DESC                 "A geographical position"
 *   ID                        id-oc-gLUE2Location }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const gLUE2Location: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ gLUE2Entity, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ gLUE2LocationID, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ gLUE2LocationAddress, gLUE2LocationPlace, gLUE2LocationCountry, gLUE2LocationPostCode, gLUE2LocationLatitude, gLUE2LocationLongitude, gLUE2LocationServiceForeignKey, gLUE2LocationDomainForeignKey, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "GLUE2Location" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "A geographical position" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_gLUE2Location /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
