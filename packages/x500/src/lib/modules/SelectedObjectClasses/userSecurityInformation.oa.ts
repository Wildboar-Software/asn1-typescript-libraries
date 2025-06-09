/* eslint-disable */
import { supportedAlgorithms } from "../AuthenticationFramework/supportedAlgorithms.oa.js";
import { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.js";
import {
    auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/ObjectClassKind.ta.js";
import { top } from "../InformationFramework/top.oa.js";
import { id_oc_userSecurityInformation } from "../SelectedObjectClasses/id-oc-userSecurityInformation.va.js";
export { supportedAlgorithms } from "../AuthenticationFramework/supportedAlgorithms.oa.js";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.js";
export { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.js";
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
export { top } from "../InformationFramework/top.oa.js";
export { id_oc_userSecurityInformation } from "../SelectedObjectClasses/id-oc-userSecurityInformation.va.js";

/* START_OF_SYMBOL_DEFINITION userSecurityInformation */
/**
 * @summary userSecurityInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * userSecurityInformation OBJECT-CLASS ::= {
 *   SUBCLASS OF   {top}
 *   KIND          auxiliary
 *   MAY CONTAIN   {supportedAlgorithms}
 *   LDAP-NAME     {"userSecurityInformation"} -- RFC 4523
 *   LDAP-DESC     {"X.521 user security information"}
 *   ID            id-oc-userSecurityInformation }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const userSecurityInformation: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [supportedAlgorithms] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["userSecurityInformation"],
    "&ldapDesc": "X.521 user security information",
    "&id": id_oc_userSecurityInformation /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION userSecurityInformation */

/* eslint-enable */
