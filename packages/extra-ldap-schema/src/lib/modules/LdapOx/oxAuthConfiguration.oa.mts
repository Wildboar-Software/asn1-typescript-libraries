/* eslint-disable */

import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";

import { top } from "../InformationFramework/top.oa.mjs";
import { objectClass } from "../InformationFramework/objectClass.oa.mjs";
import { id_oc_oxAuthConfiguration } from "../LdapOx/id-oc-oxAuthConfiguration.va.mjs";

import { organizationalUnitName } from "../SelectedAttributeTypes/organizationalUnitName.oa.mjs";
import { oxAuthConfDynamic } from "../LdapOx/oxAuthConfDynamic.oa.mjs";
import { oxAuthConfErrors } from "../LdapOx/oxAuthConfErrors.oa.mjs";
import { oxAuthConfStatic } from "../LdapOx/oxAuthConfStatic.oa.mjs";
import { oxAuthConfWebKeys } from "../LdapOx/oxAuthConfWebKeys.oa.mjs";
import { oxRevision } from "../LdapOx/oxRevision.oa.mjs";
import { oxWebKeysSettings } from "../LdapOx/oxWebKeysSettings.oa.mjs";
/**
 * @summary oxAuthConfiguration
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * oxAuthConfiguration OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { objectClass }
 *   MAY CONTAIN               { organizationalUnitName
 *                               | oxAuthConfDynamic
 *                               | oxAuthConfErrors
 *                               | oxAuthConfStatic
 *                               | oxAuthConfWebKeys
 *                               | oxRevision
 *                               | oxWebKeysSettings }
 *   LDAP-NAME                 {"oxAuthConfiguration"}
 *   ID                        id-oc-oxAuthConfiguration }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const oxAuthConfiguration: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ objectClass, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ organizationalUnitName, oxAuthConfDynamic, oxAuthConfErrors, oxAuthConfStatic, oxAuthConfWebKeys, oxRevision, oxWebKeysSettings, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "oxAuthConfiguration" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_oxAuthConfiguration /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
