/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { oidC } from "../SelectedAttributeTypes/oidC.oa.mjs";
import { id_oc_oidCobj } from "../SelectedObjectClasses/id-oc-oidCobj.va.mjs";

/**
 * @summary oidCobj
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * oidCobj OBJECT-CLASS ::= {
 *   SUBCLASS OF   {top}
 *   MUST CONTAIN  {oidC}
 *   LDAP-NAME     {"oidCobj"}
 *   ID            id-oc-oidCobj }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const oidCobj: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [oidC] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["oidCobj"],
    "&id": id_oc_oidCobj /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
