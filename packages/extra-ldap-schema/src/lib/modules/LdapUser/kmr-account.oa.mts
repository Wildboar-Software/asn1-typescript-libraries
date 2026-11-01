/* eslint-disable */

import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";

import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_kmr_account } from "../LdapUser/id-oc-kmr-account.va.mjs";

import { uidNumber } from "../NIS/uidNumber.oa.mjs";
import { userPassword } from "../AuthenticationFramework/userPassword.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { uid } from "../SelectedAttributeTypes/uid.oa.mjs";
/**
 * @summary kmr_account
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * kmr-account OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { commonName
 *                               | uid }
 *   MAY CONTAIN               { uidNumber
 *                               | userPassword
 *                               | description }
 *   LDAP-NAME                 {"kmr-account"}
 *   ID                        id-oc-kmr-account }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const kmr_account: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ commonName, uid, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ uidNumber, userPassword, description, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "kmr-account" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_kmr_account /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
