/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { prerequisiteGrouping } from "../LdapIodine/prerequisiteGrouping.oa.mjs";
import { id_oc_prerequisiteORGrouping } from "../LdapIodine/id-oc-prerequisiteORGrouping.va.mjs";

/**
 * @summary prerequisiteORGrouping
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * prerequisiteORGrouping OBJECT-CLASS ::= {
 *   SUBCLASS OF               { prerequisiteGrouping }
 *   LDAP-NAME                 {"prerequisiteORGrouping"}
 *   ID                        id-oc-prerequisiteORGrouping }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const prerequisiteORGrouping: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ prerequisiteGrouping, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "prerequisiteORGrouping" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_prerequisiteORGrouping /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
