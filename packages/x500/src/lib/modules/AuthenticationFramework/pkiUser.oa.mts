/* eslint-disable */
import { id_oc_pkiUser } from "../AuthenticationFramework/id-oc-pkiUser.va.mjs";
import { userCertificate } from "../AuthenticationFramework/userCertificate.oa.mjs";
import { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import {
    auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
export { id_oc_pkiUser } from "../AuthenticationFramework/id-oc-pkiUser.va.mjs";
export { userCertificate } from "../AuthenticationFramework/userCertificate.oa.mjs";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
export { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
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
} from "../InformationFramework/ObjectClassKind.ta.mjs";
export { top } from "../InformationFramework/top.oa.mjs";

/* START_OF_SYMBOL_DEFINITION pkiUser */
/**
 * @summary pkiUser
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pkiUser OBJECT-CLASS ::= {
 *   SUBCLASS OF         {top}
 *   KIND                auxiliary
 *   MAY CONTAIN         {userCertificate}
 *   LDAP-NAME           {"pkiUser"}
 *   LDAP-DESC           "X.509 PKI User"
 *   ID                  id-oc-pkiUser }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const pkiUser: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [userCertificate] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["pkiUser"],
    "&ldapDesc": "X.509 PKI User" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_pkiUser /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION pkiUser */

/* eslint-enable */
