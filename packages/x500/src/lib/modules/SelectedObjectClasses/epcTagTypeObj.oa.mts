/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import {
    auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { uiiFormat } from "../SelectedAttributeTypes/uiiFormat.oa.mjs";
import { id_oc_epcTagTypeObj } from "../SelectedObjectClasses/id-oc-epcTagTypeObj.va.mjs";
/**
 * @summary epcTagTypeObj
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * epcTagTypeObj OBJECT-CLASS ::= {
 *   SUBCLASS OF  { top }
 *   KIND         auxiliary
 *   MAY CONTAIN  { uiiFormat }
 *   LDAP-NAME    {"epcTagTypeObj"}
 *   ID           id-oc-epcTagTypeObj }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const epcTagTypeObj: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [uiiFormat] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["epcTagTypeObj"],
    "&id": id_oc_epcTagTypeObj /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
