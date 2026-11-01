/* eslint-disable */

import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";

import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_zimbraShareLocator } from "../LdapZimbra/id-oc-zimbraShareLocator.va.mjs";

import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { zimbraShareOwnerAccountId } from "../LdapZimbra/zimbraShareOwnerAccountId.oa.mjs";
/**
 * @summary zimbraShareLocator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * zimbraShareLocator OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { commonName
 *                               | zimbraShareOwnerAccountId }
 *   LDAP-NAME                 {"zimbraShareLocator"}
 *   LDAP-DESC                 "Share locator"
 *   ID                        id-oc-zimbraShareLocator }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const zimbraShareLocator: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ commonName, zimbraShareOwnerAccountId, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "zimbraShareLocator" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Share locator" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_zimbraShareLocator /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
