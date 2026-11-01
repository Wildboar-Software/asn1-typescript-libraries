/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { phpscheduleitAccountLogin } from "../LdapGosaCorePhpscheduleit/phpscheduleitAccountLogin.oa.mjs";
// export { phpscheduleitAccountLogin } from "../LdapGosaCorePhpscheduleit/phpscheduleitAccountLogin.oa.mjs";
import { id_oc_phpscheduleitAccount } from "../LdapGosaCorePhpscheduleit/id-oc-phpscheduleitAccount.va.mjs";
// export { id_oc_phpscheduleitAccount } from "../LdapGosaCorePhpscheduleit/id-oc-phpscheduleitAccount.va.mjs";


/**
 * @summary phpscheduleitAccount
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * phpscheduleitAccount OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { phpscheduleitAccountLogin }
 *   LDAP-NAME                 {"phpscheduleitAccount"}
 *   LDAP-DESC                 "PHPscheduleit Account"
 *   ID                        id-oc-phpscheduleitAccount }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const phpscheduleitAccount: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ phpscheduleitAccountLogin, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "phpscheduleitAccount" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "PHPscheduleit Account" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_phpscheduleitAccount /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
