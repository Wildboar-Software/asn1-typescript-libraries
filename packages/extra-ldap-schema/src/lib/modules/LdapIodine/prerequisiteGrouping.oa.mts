/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_prerequisiteGrouping } from "../LdapIodine/id-oc-prerequisiteGrouping.va.mjs";

/**
 * @summary prerequisiteGrouping
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * prerequisiteGrouping OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   LDAP-NAME                 {"prerequisiteGrouping"}
 *   ID                        id-oc-prerequisiteGrouping }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const prerequisiteGrouping: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["prerequisiteGrouping"],
    "&id": id_oc_prerequisiteGrouping /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
