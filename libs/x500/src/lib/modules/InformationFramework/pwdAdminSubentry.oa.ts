/* eslint-disable */
import { id_sc_pwdAdminSubentry } from "../InformationFramework/id-sc-pwdAdminSubentry.va";
import { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca";
import {
    auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/ObjectClassKind.ta";
import { pwdAttribute } from "../InformationFramework/pwdAttribute.oa";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { id_sc_pwdAdminSubentry } from "../InformationFramework/id-sc-pwdAdminSubentry.va";
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
export { pwdAttribute } from "../InformationFramework/pwdAttribute.oa";

/* START_OF_SYMBOL_DEFINITION pwdAdminSubentry */
/**
 * @summary pwdAdminSubentry
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pwdAdminSubentry OBJECT-CLASS ::= {
 *   KIND           auxiliary
 *   MUST CONTAIN   { pwdAttribute }
 *   LDAP-NAME      {"pwdAdminSubentry"}
 *   ID             id-sc-pwdAdminSubentry }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const pwdAdminSubentry: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [pwdAttribute] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["pwdAdminSubentry"],
    "&id": id_sc_pwdAdminSubentry /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION pwdAdminSubentry */

/* eslint-enable */
