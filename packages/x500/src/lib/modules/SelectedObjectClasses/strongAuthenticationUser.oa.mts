/* eslint-disable */
import { userCertificate } from "../AuthenticationFramework/userCertificate.oa.mjs";
import { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import {
    auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_strongAuthenticationUser } from "../SelectedObjectClasses/id-oc-strongAuthenticationUser.va.mjs";
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

/* eslint-enable */
