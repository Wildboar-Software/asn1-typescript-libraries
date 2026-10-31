/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_amdmap } from "../LdapAmd/id-oc-amdmap.va.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { amdmapKey } from "./amdmapKey.oa.mjs";
import { amdmapName } from "./amdmapName.oa.mjs";
import { amdmapValue } from "./amdmapValue.oa.mjs";

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
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [commonName, amdmapName, amdmapKey, amdmapValue] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["amdmap"],
    "&ldapDesc": "Defines an AMD map entry" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_amdmap /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
