/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { id_oc_prerequisiteANDGrouping } from "../LdapIodine/id-oc-prerequisiteANDGrouping.va.mjs";
import { prerequisiteGrouping } from "../LdapIodine/prerequisiteGrouping.oa.mjs";

/**
 * @summary prerequisiteANDGrouping
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * prerequisiteANDGrouping OBJECT-CLASS ::= {
 *   SUBCLASS OF               { prerequisiteGrouping }
 *   LDAP-NAME                 {"prerequisiteANDGrouping"}
 *   ID                        id-oc-prerequisiteANDGrouping }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const prerequisiteANDGrouping: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [prerequisiteGrouping] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["prerequisiteANDGrouping"],
    "&id": id_oc_prerequisiteANDGrouping /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
