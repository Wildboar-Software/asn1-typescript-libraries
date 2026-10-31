/* eslint-disable */
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { id_sc_pwdAdminSubentry } from "../InformationFramework/id-sc-pwdAdminSubentry.va.mjs";
import { pwdAttribute } from "../InformationFramework/pwdAttribute.oa.mjs";
import { type OBJECT_CLASS } from "./OBJECT-CLASS.oca.mjs";

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
export
const pwdAdminSubentry: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [pwdAttribute] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["pwdAdminSubentry"],
    "&id": id_sc_pwdAdminSubentry /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
