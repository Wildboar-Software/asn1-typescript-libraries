/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { ipaPermissionType } from "../Ldap60basev2/ipaPermissionType.oa.mjs";
import { id_oc_ipaPermission } from "../Ldap60basev2/id-oc-ipaPermission.va.mjs";


/**
 * @summary ipaPermission
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ipaPermission OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { ipaPermissionType }
 *   LDAP-NAME                 {"ipaPermission"}
 *   LDAP-DESC                 "IPA Permission objectclass"
 *   ID                        id-oc-ipaPermission }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const ipaPermission: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ ipaPermissionType, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "ipaPermission" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "IPA Permission objectclass" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_ipaPermission /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

