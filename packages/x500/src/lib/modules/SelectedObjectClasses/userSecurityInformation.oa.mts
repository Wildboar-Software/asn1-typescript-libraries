/* eslint-disable */
import { supportedAlgorithms } from "../AuthenticationFramework/supportedAlgorithms.oa.mjs";
import { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import {
    auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_userSecurityInformation } from "../SelectedObjectClasses/id-oc-userSecurityInformation.va.mjs";
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
