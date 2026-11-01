/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_dfsConfiguration } from "../LdapSchema2ldifMicrosoft/id-oc-dfsConfiguration.va.mjs";


/**
 * @summary dfsConfiguration
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * dfsConfiguration OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   LDAP-NAME                 {"dfsConfiguration"}
 *   ID                        id-oc-dfsConfiguration }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const dfsConfiguration: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "dfsConfiguration" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_dfsConfiguration /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

