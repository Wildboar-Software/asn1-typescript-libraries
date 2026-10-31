/* eslint-disable */
import { abstract } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { id_oc_top } from "../InformationFramework/id-oc-top.va.mjs";
import { objectClass } from "../InformationFramework/objectClass.oa.mjs";
import { type OBJECT_CLASS } from "./OBJECT-CLASS.oca.mjs";

/**
 * @summary top
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * top OBJECT-CLASS ::= {
 *   KIND          abstract
 *   MUST CONTAIN  {objectClass}
 *   LDAP-NAME     {"top"}
 *   ID            id-oc-top }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const top: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&kind": abstract /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [objectClass] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["top"],
    "&id": id_oc_top /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
