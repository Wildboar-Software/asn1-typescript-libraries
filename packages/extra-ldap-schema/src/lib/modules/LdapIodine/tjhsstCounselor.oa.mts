/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { id_oc_tjhsstCounselor } from "../LdapIodine/id-oc-tjhsstCounselor.va.mjs";
import { tjhsstTeacher } from "../LdapIodine/tjhsstTeacher.oa.mjs";

/**
 * @summary tjhsstCounselor
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tjhsstCounselor OBJECT-CLASS ::= {
 *   SUBCLASS OF               { tjhsstTeacher }
 *   LDAP-NAME                 {"tjhsstCounselor"}
 *   ID                        id-oc-tjhsstCounselor }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const tjhsstCounselor: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [tjhsstTeacher] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["tjhsstCounselor"],
    "&id": id_oc_tjhsstCounselor /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
