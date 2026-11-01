/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { schacPersonalPosition } from "../LdapSchac/schacPersonalPosition.oa.mjs";
import { id_oc_schacEmployeeInfo } from "../LdapSchac/id-oc-schacEmployeeInfo.va.mjs";

/**
 * @summary schacEmployeeInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * schacEmployeeInfo OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { schacPersonalPosition }
 *   LDAP-NAME                 {"schacEmployeeInfo"}
 *   LDAP-DESC                 "Employee information includes attributes that have relevance to the employee role, such as position, office hours, and job title"
 *   ID                        id-oc-schacEmployeeInfo }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const schacEmployeeInfo: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ schacPersonalPosition, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "schacEmployeeInfo" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Employee information includes attributes that have relevance to the employee role, such as position, office hours, and job title" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_schacEmployeeInfo /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
