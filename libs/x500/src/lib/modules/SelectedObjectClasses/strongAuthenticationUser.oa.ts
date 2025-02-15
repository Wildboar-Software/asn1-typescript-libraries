/* eslint-disable */
import { userCertificate } from "../AuthenticationFramework/userCertificate.oa";
import { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca";
import {
    auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/ObjectClassKind.ta";
import { top } from "../InformationFramework/top.oa";
import { id_oc_strongAuthenticationUser } from "../SelectedObjectClasses/id-oc-strongAuthenticationUser.va";
export { userCertificate } from "../AuthenticationFramework/userCertificate.oa";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca";
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
} from "../InformationFramework/ObjectClassKind.ta";
export { top } from "../InformationFramework/top.oa";
export { id_oc_strongAuthenticationUser } from "../SelectedObjectClasses/id-oc-strongAuthenticationUser.va";

/* START_OF_SYMBOL_DEFINITION strongAuthenticationUser */
/**
 * @summary strongAuthenticationUser
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * strongAuthenticationUser OBJECT-CLASS ::= {
 *   SUBCLASS OF   {top}
 *   KIND          auxiliary
 *   MUST CONTAIN  {userCertificate}
 *   LDAP-NAME     {"strongAuthenticationUser"} -- RFC 4523
 *   LDAP-DESC     {"X.521 strong authentication user"}
 *   ID            id-oc-strongAuthenticationUser }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const strongAuthenticationUser: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [userCertificate] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["strongAuthenticationUser"],
    "&ldapDesc": "X.521 strong authentication user",
    "&id": id_oc_strongAuthenticationUser /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION strongAuthenticationUser */

/* eslint-enable */
