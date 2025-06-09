/* eslint-disable */
import { id_oc_top } from "../InformationFramework/id-oc-top.va.js";
import { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.js";
import { objectClass } from "../InformationFramework/objectClass.oa.js";
import {
    abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/ObjectClassKind.ta.js";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.js";
export { id_oc_top } from "../InformationFramework/id-oc-top.va.js";
export { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.js";
export { objectClass } from "../InformationFramework/objectClass.oa.js";
export {
    abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    ObjectClassKind,
    ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */,
    ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */,
    ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */,
    structural /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_ObjectClassKind,
    _encode_ObjectClassKind,
    _enum_for_ObjectClassKind,
} from "../InformationFramework/ObjectClassKind.ta.js";

/* START_OF_SYMBOL_DEFINITION top */
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
export const top: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&kind": abstract /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [objectClass] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["top"],
    "&id": id_oc_top /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION top */

/* eslint-enable */
