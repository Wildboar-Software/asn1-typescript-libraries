/* eslint-disable */

import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";

import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_genericAccount } from "../LdapIspenv/id-oc-genericAccount.va.mjs";

import { uid } from "../SelectedAttributeTypes/uid.oa.mjs";
import { userPassword } from "../AuthenticationFramework/userPassword.oa.mjs";
/**
 * @summary genericAccount
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * genericAccount OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { uid
 *                               | userPassword }
 *   LDAP-NAME                 {"genericAccount"}
 *   LDAP-DESC                 "The most abstract form of an account"
 *   ID                        id-oc-genericAccount }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const genericAccount: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ uid, userPassword, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "genericAccount" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "The most abstract form of an account" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_genericAccount /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
