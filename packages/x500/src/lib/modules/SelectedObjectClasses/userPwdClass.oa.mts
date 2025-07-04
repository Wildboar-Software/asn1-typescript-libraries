/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import {
    auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/ObjectClassKind.ta.mjs";
import { userPwd } from "../PasswordPolicy/userPwd.oa.mjs";
import { id_oc_userPwdClass } from "../SelectedObjectClasses/id-oc-userPwdClass.va.mjs";
/**
 * @summary userPwdClass
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * userPwdClass  OBJECT-CLASS ::= {
 *   KIND          auxiliary
 *   MAY CONTAIN   { userPwd }
 *   ID            id-oc-userPwdClass }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const userPwdClass: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [userPwd] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_userPwdClass /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
