/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { id_oc_ipaHBACServiceGroup } from "../Ldap60basev2/id-oc-ipaHBACServiceGroup.va.mjs";
import { groupOfNames } from "../SelectedObjectClasses/groupOfNames.oa.mjs";

/**
 * @summary ipaHBACServiceGroup
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ipaHBACServiceGroup OBJECT-CLASS ::= {
 *   SUBCLASS OF               { groupOfNames }
 *   LDAP-NAME                 {"ipaHBACServiceGroup"}
 *   LDAP-DESC                 "IPA HBAC service group object class"
 *   ID                        id-oc-ipaHBACServiceGroup }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const ipaHBACServiceGroup: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [groupOfNames] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["ipaHBACServiceGroup"],
    "&ldapDesc": "IPA HBAC service group object class" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_ipaHBACServiceGroup /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
