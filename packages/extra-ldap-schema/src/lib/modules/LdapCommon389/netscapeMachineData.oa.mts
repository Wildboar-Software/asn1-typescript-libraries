/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_netscapeMachineData } from "../LdapCommon389/id-oc-netscapeMachineData.va.mjs";


/**
 * @summary netscapeMachineData
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * netscapeMachineData OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   LDAP-NAME                 {"netscapeMachineData"}
 *   LDAP-DESC                 "Netscape defined objectclass"
 *   ID                        id-oc-netscapeMachineData }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const netscapeMachineData: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "netscapeMachineData" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Netscape defined objectclass" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_netscapeMachineData /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

