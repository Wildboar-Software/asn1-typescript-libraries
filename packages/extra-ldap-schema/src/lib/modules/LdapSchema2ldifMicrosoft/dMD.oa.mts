/* eslint-disable */

import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";

import { top } from "../InformationFramework/top.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { id_oc_dMD } from "../LdapSchema2ldifMicrosoft/id-oc-dMD.va.mjs";

import { dmdName } from "../SelectedAttributeTypes/dmdName.oa.mjs";
import { schemaUpdate } from "../MSUser/schemaUpdate.oa.mjs";
import { prefixMap } from "../MSUser/prefixMap.oa.mjs";
import { schemaInfo } from "../MSUser/schemaInfo.oa.mjs";
/**
 * @summary dMD
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * dMD OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { commonName }
 *   MAY CONTAIN               { dmdName
 *                               | schemaUpdate
 *                               | prefixMap
 *                               | schemaInfo }
 *   LDAP-NAME                 {"dMD"}
 *   ID                        id-oc-dMD }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const dMD: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ commonName, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ dmdName, schemaUpdate, prefixMap, schemaInfo, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "dMD" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_dMD /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
