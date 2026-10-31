/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_dMD } from "../LdapSchema2ldifMicrosoft/id-oc-dMD.va.mjs";
import { prefixMap } from "../MSUser/prefixMap.oa.mjs";
import { schemaInfo } from "../MSUser/schemaInfo.oa.mjs";
import { schemaUpdate } from "../MSUser/schemaUpdate.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { dmdName } from "./dmdName.oa.mjs";

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
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [commonName] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [dmdName, schemaUpdate, prefixMap, schemaInfo] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["dMD"],
    "&id": id_oc_dMD /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
