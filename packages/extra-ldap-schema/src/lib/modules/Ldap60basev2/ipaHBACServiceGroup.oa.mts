/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { groupOfNames } from "../SelectedObjectClasses/groupOfNames.oa.mjs";
import { id_oc_ipaHBACServiceGroup } from "../Ldap60basev2/id-oc-ipaHBACServiceGroup.va.mjs";

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
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ groupOfNames, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "ipaHBACServiceGroup" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "IPA HBAC service group object class" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_ipaHBACServiceGroup /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
