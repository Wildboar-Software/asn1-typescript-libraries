/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { supportedAlgorithms } from "../AuthenticationFramework/supportedAlgorithms.oa.mjs";
// export { supportedAlgorithms } from "../AuthenticationFramework/supportedAlgorithms.oa.mjs";
import { id_oc_userSecurityInformation } from "../SelectedObjectClasses/id-oc-userSecurityInformation.va.mjs";
// export { id_oc_userSecurityInformation } from "../SelectedObjectClasses/id-oc-userSecurityInformation.va.mjs";


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
export
const userSecurityInformation: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ supportedAlgorithms, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "userSecurityInformation" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "X.521 user security information" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_userSecurityInformation /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
