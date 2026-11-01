/* eslint-disable */

import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";

import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_zimbraObjectEntry } from "../LdapZimbra/id-oc-zimbraObjectEntry.va.mjs";

import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { zimbraObjectHandlerClass } from "../LdapZimbra/zimbraObjectHandlerClass.oa.mjs";
import { zimbraObjectHandlerConfig } from "../LdapZimbra/zimbraObjectHandlerConfig.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { zimbraObjectIndexingEnabled } from "../LdapZimbra/zimbraObjectIndexingEnabled.oa.mjs";
import { zimbraObjectStoreMatched } from "../LdapZimbra/zimbraObjectStoreMatched.oa.mjs";
import { zimbraObjectType } from "../LdapZimbra/zimbraObjectType.oa.mjs";
/**
 * @summary zimbraObjectEntry
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * zimbraObjectEntry OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { commonName
 *                               | zimbraObjectIndexingEnabled
 *                               | zimbraObjectStoreMatched
 *                               | zimbraObjectType }
 *   MAY CONTAIN               { description
 *                               | zimbraObjectHandlerClass
 *                               | zimbraObjectHandlerConfig }
 *   LDAP-NAME                 {"zimbraObjectEntry"}
 *   LDAP-DESC                 "Object type info"
 *   ID                        id-oc-zimbraObjectEntry }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const zimbraObjectEntry: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ commonName, zimbraObjectIndexingEnabled, zimbraObjectStoreMatched, zimbraObjectType, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ description, zimbraObjectHandlerClass, zimbraObjectHandlerConfig, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "zimbraObjectEntry" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Object type info" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_zimbraObjectEntry /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
