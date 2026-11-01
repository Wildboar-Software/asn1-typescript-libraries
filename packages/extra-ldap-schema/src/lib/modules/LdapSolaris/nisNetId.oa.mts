/* eslint-disable */

import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";

import { top } from "../InformationFramework/top.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { id_oc_nisNetId } from "../LdapSolaris/id-oc-nisNetId.va.mjs";

import { nisNetIdUser } from "../LdapSolaris/nisNetIdUser.oa.mjs";
import { nisNetIdGroup } from "../LdapSolaris/nisNetIdGroup.oa.mjs";
import { nisNetIdHost } from "../LdapSolaris/nisNetIdHost.oa.mjs";
/**
 * @summary nisNetId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * nisNetId OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { commonName }
 *   MAY CONTAIN               { nisNetIdUser
 *                               | nisNetIdGroup
 *                               | nisNetIdHost }
 *   LDAP-NAME                 {"nisNetId"}
 *   LDAP-DESC                 "nisNetId"
 *   ID                        id-oc-nisNetId }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const nisNetId: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ commonName, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ nisNetIdUser, nisNetIdGroup, nisNetIdHost, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "nisNetId" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "nisNetId" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_nisNetId /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
