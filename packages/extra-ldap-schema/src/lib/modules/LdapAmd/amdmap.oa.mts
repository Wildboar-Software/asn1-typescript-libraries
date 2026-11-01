/* eslint-disable */

import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";

import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_amdmap } from "../LdapAmd/id-oc-amdmap.va.mjs";

import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { amdmapName } from "../LdapAmd/amdmapName.oa.mjs";
import { amdmapKey } from "../LdapAmd/amdmapKey.oa.mjs";
import { amdmapValue } from "../LdapAmd/amdmapValue.oa.mjs";
/**
 * @summary amdmap
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * amdmap OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { commonName
 *                               | amdmapName
 *                               | amdmapKey
 *                               | amdmapValue }
 *   LDAP-NAME                 {"amdmap"}
 *   LDAP-DESC                 "Defines an AMD map entry"
 *   ID                        id-oc-amdmap }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const amdmap: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ commonName, amdmapName, amdmapKey, amdmapValue, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "amdmap" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Defines an AMD map entry" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_amdmap /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
