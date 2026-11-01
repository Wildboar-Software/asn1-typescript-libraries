/* eslint-disable */

import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";

import { top } from "../InformationFramework/top.oa.mjs";
import { objectClass } from "../InformationFramework/objectClass.oa.mjs";
import { id_oc_oxPassportConfiguration } from "../LdapOx/id-oc-oxPassportConfiguration.va.mjs";

import { organizationalUnitName } from "../SelectedAttributeTypes/organizationalUnitName.oa.mjs";
import { gluuPassportConfiguration } from "../LdapOx/gluuPassportConfiguration.oa.mjs";
import { gluuStatus } from "../LdapOx/gluuStatus.oa.mjs";
/**
 * @summary oxPassportConfiguration
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * oxPassportConfiguration OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { objectClass }
 *   MAY CONTAIN               { organizationalUnitName
 *                               | gluuPassportConfiguration
 *                               | gluuStatus }
 *   LDAP-NAME                 {"oxPassportConfiguration"}
 *   ID                        id-oc-oxPassportConfiguration }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const oxPassportConfiguration: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ objectClass, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ organizationalUnitName, gluuPassportConfiguration, gluuStatus, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "oxPassportConfiguration" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_oxPassportConfiguration /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
