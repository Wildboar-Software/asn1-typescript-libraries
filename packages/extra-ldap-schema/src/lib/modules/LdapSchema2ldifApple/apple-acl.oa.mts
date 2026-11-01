/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_apple_acl } from "../LdapSchema2ldifApple/id-oc-apple-acl.va.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { apple_acl_entry } from "../LdapSchema2ldifApple/apple-acl-entry.oa.mjs";


/**
 * @summary apple_acl
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * apple-acl OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { commonName
 *                               | apple-acl-entry }
 *   LDAP-NAME                 {"apple-acl"}
 *   ID                        id-oc-apple-acl }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const apple_acl: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ commonName, apple_acl_entry, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "apple-acl" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_apple_acl /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

